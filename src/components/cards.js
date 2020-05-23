import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

class Card extends React.PureComponent {
  render() {
    return (
        <TouchableOpacity>
        <View style={{width:"90%", height:150,backgroundColor:"#e6efff", marginVertical:15, alignSelf:"center", borderRadius:25}}>
        </View>
        </TouchableOpacity>        
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

export default Card;



