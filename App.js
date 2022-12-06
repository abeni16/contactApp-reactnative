import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Alert,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import Contact from "./components/Contact";
import { db, collection, addDoc, getDocs } from "./firebase";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, isLoading] = useState(false);
  const [show, setShow] = useState(false);
  const addingContact = async () => {
    try {
      isLoading(true);
      const docRef = await addDoc(collection(db, "contact"), {
        name: name || null,
        phone: phone || null,
      });
      Alert.alert("Success", "Succesfully added", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      setShow(false);
      console.log("Document written with ID: ", docRef.id);
      isLoading(false);
      setName("");
      setPhone("");
      getContacts();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getContacts = async () => {
    const querySnapshot = await getDocs(collection(db, "contact"));
    setContacts(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {contacts.length > 0 ? (
        <FlatList
          ListHeaderComponent={<Text style={styles.headertext}>Contact</Text>}
          ListHeaderComponentStyle={styles.header}
          data={contacts}
          renderItem={({ item }) => (
            <Contact
              id={item.id}
              name={item.name}
              phone={item.phone}
              getContacts={getContacts}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View>
          <Text style={styles.headertext}> {contacts.length}</Text>

          <ActivityIndicator size={60} />
        </View>
      )}

      {!show && <Button title="Add Contact" onPress={() => setShow(!show)} />}

      {show && (
        <View style={[styles.inputContainer, styles.shadowProp]}>
          <TextInput
            textContentType="givenName"
            style={styles.input}
            placeholder="contact name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            keyboardType="number-pad"
            textContentType="givenName"
            style={styles.input}
            placeholder="phone number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <Button disabled={loading} onPress={addingContact} title="Add" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    color: "yellow",
  },
  headertext: {
    fontSize: 30,
  },
  input: {
    backgroundColor: "#ffeeef",
    fontSize: 20,
    margin: 5,
    padding: 20,
  },
  inputContainer: {
    padding: 13,
  },
  shadowProp: {
    shadowColor: "#333",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default App;
