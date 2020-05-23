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
import { Header,} from "native-base";
import Form from "../components/Form";
import MaterialInitials from "react-native-material-initials/native";

class Profile extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#f4f6f6"} />
        <Header style={styles.header}>
          <View style={styles.left}>
            <TouchableOpacity>
              {/* <Image
                style={styles.backIcon}
                source={require("../assets/icons/back.png")}
              /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.middle}>
            <Text style={styles.header_title}>Perfil de Usuario</Text>
          </View>
          <View style={styles.right}>{/* <Image/> */}</View>
        </Header>
        <View style={styles.photoContainer}>
          <MaterialInitials
            style={styles.picture}
            backgroundColor={"grey"} //aqui tienes que pasarle el color de fondo de la pantalla de inicio
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
        <Form
          //este se explica solo, creo xd
          name={"Luis Alejandro Gonzalez Rudas"}
          Email={"luis.gonzalez2999@gmail.com"}
          location={"Veranillo Sector 18"}
          Street={"Calle 19, Casa A2"}
          Phone={"+507 6921-6122"}
          WebSite={"..."}
        />
        <View style={styles.ButtonView}>
          <TouchableOpacity>
          <View style={styles.Button}>
            <Text style={styles.ButtonText}>Ver Comentarios</Text>
          </View>
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f4f6f6",
  },
  header: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#f4f6f6",
    borderBottomWidth: 0,
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
  ButtonView:{
    width:"90%",
    height:40,
    alignSelf:"center",
    justifyContent:"center",
  },
  Button:{
    width:"100%",
    height:"100%",
    borderRadius:50,
    backgroundColor:"black",
    alignSelf:"center",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    marginTop:10
  },
  ButtonText:{
    justifyContent:"center",
    color:"white",
    textAlign:"center",
    textAlignVertical:"center",
    fontSize:18,
    fontWeight:"600"
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
    marginBottom: 10,
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

export default Profile;
