import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Header, Input } from "native-base";
import Comment from "../components/Comment";
import MaterialInitials from "react-native-material-initials/native";

class Forum extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#f4f6f6"} />
        <Header style={styles.header}>
          <View style={styles.left}>
            <TouchableOpacity style={{ width: "100%", height: "100%", top:2 }}>
              <Image
                style={{ height: "55%", width: 30, alignSelf: "center" }}
                source={require("../assets/icons/back.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.middle}>
            <Text style={styles.header_title}>Comentarios</Text>
          </View>
          <View style={styles.right}>{/* <Image/> */}</View>
        </Header>
        <View style={styles.photoContainer}>
          <MaterialInitials
            style={styles.picture}
            backgroundColor={"#7aa9ff"} //aqui tienes que pasarle el color de fondo de la pantalla de inicio
            color={"black"} //aqui tienes que pasarle el color del texto de la pantalla de inicio
            size={100}
            text={"Luis Gonzalez"} //aqui tienes que pasarle el nombre de la pantalla de inicio
            single={false}
          />
          <Text style={styles.name}>
            Luis Gonzalez
            {/* aqui tienes que pasarle el nombre de la pantalla de inicio */}
          </Text>
        </View>
        <View style={styles.newComment}>
          <View style={styles.cardHeader}>
            <Text style={styles.commentTitle}>Nuevo comentario:</Text>
          </View>
          <View style={styles.cardInput}>
            <Input style={styles.Input} placeholder={"Comente aqui..."} />
            <TouchableOpacity style={styles.send}>
              <Text style={styles.sendButton}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subCard}>
          <Text style={styles.h2}> Comentario reciente:</Text>
          <Comment
            name={"Tony Zhu"} //tony siempre va a ser el que comenta xddd
            Size={50}
            backgroundcolor={"#dfd89b"}
            Color={"white"}
            Subtitle={"Debe estar mas pendiente de sus tareas"} //pasale el comentario que generas con el input de arriba
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  subCard: {
    backgroundColor: "#d5e1f1",
    marginTop: 10,
  },
  send: {
    width: "22%",
    height: "60%",
    backgroundColor: "#7aa9ff",
    borderRadius: 10,
    justifyContent:"center"
  },
  sendButton: {
    color: "black",
    textAlign: "center",
    fontWeight: "600",
  },
  newComment: {
    height: 150,
    width: "90%",
    backgroundColor: "#bed0ea",
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "column",
    borderRadius: 35,
    marginBottom: 10,
  },
  cardHeader: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    marginTop: 5,
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  cardInput: {
    width: "85%",
    height: "75%",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
  },
  Input: {
    backgroundColor: "#d5e1f1",
    height: "60%",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    color: "grey",
    marginRight: 10,
  },
  commentTitle: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "500",
  },
  latestComment: {
    height: 200,
    width: "90%",
    backgroundColor: "black",
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    borderRadius: 35,
  },
  container: {
    width: "100%",
    backgroundColor: "#f4f6f6",
    height: "100%",
  },
  header: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#f4f6f6",
    borderBottomWidth: 0,
    marginBottom:10
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    height: "100%",
  },
  left: {
    width: "20%",
    height: "100%",
    alignSelf: "center",
  },
  ButtonView: {
    width: "90%",
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
  },
  middle: {
    width: "60%",
    height: "100%",
    justifyContent: "center",
  },
  right: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "white",
  },
  photoContainer: {
    width: "100%",
    height: 240,
  },
  picture: {
    alignSelf: "center",
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  backIcon: {
    backgroundColor: "transparent",
    height: 200,
    width: 10,
    zIndex: 1,
  },
  name: {
    fontSize: 25,
    fontWeight: "500",
    alignSelf: "center",
    marginTop: 10,
  },
});

export default Forum;
