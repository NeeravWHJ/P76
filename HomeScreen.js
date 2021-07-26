import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform, StatusBar,ImageBackground,Image } from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
  return (
<View style={styles.container}>
      <SafeAreaView style = {styles.droidSafeArea}/>
      <ImageBackground source = {require("../assets/space.gif")} style = {styles.bgImg}>
        <View style = {styles.titlebar}>
          <Text style = {styles.titleText}>Stellar App</Text>
        </View>
    
        <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("SpaceCrafts")}>
            <Text  style = {styles.routetext}>Space Crafts</Text>
            <Text style = {styles.knowmore}>{"Know More --->"}</Text>
            <Text style = {styles.bgDigit}>1</Text>
            <Image source ={require("../assets/space_crafts.png")} style = {styles.iconImage}/>
        </TouchableOpacity>

        <TouchableOpacity  style = {styles.routeCard}  onPress = {()=>this.props.navigation.navigate("StarMap")}>
           <Text style = {styles.routetext}>Star Map</Text>
           <Text style = {styles.knowmore}>{"Know More --->"}</Text>
           <Text style = {styles.bgDigit}>2</Text>
           <Image source ={require("../assets/star_map.png")} style = {styles.iconImage}/>
        </TouchableOpacity>

        <TouchableOpacity  style = {styles.routeCard}  onPress = {()=>this.props.navigation.navigate("DailyPic")}>
            <Text style = {styles.routetext}>Daily Pictures</Text>
            <Text style = {styles.knowmore}>{"Know More --->"}</Text>
            <Text style = {styles.bgDigit}>3</Text>
            <Image source ={require("../assets/daily_pictures.png")} style = {styles.iconImage}/>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleText:{
    marginTop:45,  
  },

  droidSafeArea :{
    marginTop:Platform.OS === "android"?StatusBar.currentHeight:0,
  },

  titlebar:{
    flex:0.15,
    justifyContent:"center",
    alignItems:"center"
  },

  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:"white",
    borderWidth:2,
  },

  routetext :{
    fontSize:25,
    fontWeight:'bold',
    color:"black",
  },

  bgImg:{
    flex:1,
    resizeMode:"cover"
  },

  knowMore: { 
    paddingLeft: 30,
     color: "red", 
     fontSize: 15
     },

   bgDigit: {
      position: "absolute",
      color: "rgba(183, 183, 183, 0.5)",
      fontSize: 150,
      right: 20,
      bottom: -15, 
      zIndex: -1
     },

     iconImage: {
       position: "absolute",
       height: 200,
       width: 200, 
       resizeMode: "contain", 
       right: 20, 
       top: -80 
      }
});
