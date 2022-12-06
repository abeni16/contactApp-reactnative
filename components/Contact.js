import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { db, deleteDoc } from "../firebase";
const avatar = require("../assets/favicon.png");
const Contact = (props) => {
  const deleteContact = async () => {
    try {
      await deleteDoc(doc(db, "contact", props.id));
      props.getContacts();
      console.log(props.id);
    } catch (error) {
      console.log(first);
    }
  };
  return (
    <View style={styles.item}>
      <View style={styles.avatardiv}>
        <Image source={avatar} style={styles.avatar} />
      </View>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.phone}>{props.phone}</Text>
      </View>
      <View>
        <Pressable onPress={deleteContact}>
          <Image source={avatar} on style={styles.avatar} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f2f2ff",
    padding: 25,
    display: "flex",
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 25,
  },
  phone: {
    fontSize: 12,
  },
  header: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    color: "yellow",
  },
  avatar: {
    height: 30,
    width: 30,

    borderRadius: 20,
  },
  avatardiv: {
    marginRight: 20,
  },
});

export default Contact;
