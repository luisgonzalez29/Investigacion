import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import Card from '../components/cards'
import { Header, Image } from "native-base";

class Home extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header style={styles.header}>
          <View style={styles.left}>
            {/* <Image/> */}
            </View>
          <View style={styles.middle}>
            <Text style={styles.header_title}>Listado de Usuarios</Text>
            </View>
          <View style={styles.right}>
          {/* <Image/> */}
          </View>
        </Header>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.body}>
          <Card>
            
          </Card>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:"#f4f6f6"
  },
  header:{
    width:"100%",
    alignSelf:"center",
    backgroundColor:"#f4f6f6",
    borderBottomWidth:0
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf:"center",
    height:"100%"
  },
  left:{
    width:"20%",
    height:"100%",
    justifyContent:"center"
  },
  middle:{
    width:"60%",
    height:"100%",
    justifyContent:"center"
  },
  right:{
    width:"20%",
    height:"100%",
    justifyContent:"center"
  },
  body:{
    backgroundColor:"white"
  }
});

export default Home;
