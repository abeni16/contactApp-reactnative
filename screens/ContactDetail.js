import * as React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { deleteDoc, db, doc } from "../firebase";
import Detail from "../components/Detail";
import { async } from "@firebase/util";

function ContactDetail({ navigation }) {
  const deleteContact = async () => {
    try {
      await deleteDoc(doc(db, "contact", navigation.getParam("id")));
      navigation.goBack();
      console.log("it worked ");
    } catch (error) {
      console.log("not working ", error);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Detail
          name={navigation.getParam("name")}
          id={navigation.getParam("id")}
          phone={navigation.getParam("phone")}
        />
        <Button title="Delete Contact" onPress={deleteContact} />
      </View>
    </SafeAreaView>
  );
}

export default ContactDetail;
