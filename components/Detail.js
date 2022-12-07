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
const avatar = require("../assets/person.png");
const Detail = (props) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.avatardiv}>
          <Image source={avatar} style={styles.avatar} />
        </View>
      </View>
      <View style={styles.detail}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.phone}>{props.phone}</Text>
      </View>
    </>
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
    flexDirection: "column",
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 60,
  },
  phone: {
    fontSize: 40,
    color: "green",
  },

  avatar: {
    height: 300,
    width: 300,

    borderRadius: 20,
  },
  avatardiv: {
    marginRight: 20,
  },
});

export default Detail;
