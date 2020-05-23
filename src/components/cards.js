import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MaterialInitials from "react-native-material-initials/native";

class Card extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.left}>
            <MaterialInitials
              style={{ alignSelf: "center" }}
              backgroundColor={"#1f6dff"}
              color={"white"}
              size={100}
              text={"John Doe"}
              single={false}
            />
          </View>
          <View style={styles.right}>
            <Text style={styles.card_title}> NO SE VE</Text>
            <Text>Correo xd</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 150,
    backgroundColor: "#e6efff",
    marginVertical: 15,
    alignSelf: "center",
    borderRadius: 25,
  },
  left: {
    width: "35%",
    height: "100%",
    justifyContent: "center",
  },
  right: {
    width: "65%",
    height: "100%",
    justifyContent: "center",
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Card;
