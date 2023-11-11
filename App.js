import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput  } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/*MUSTAFA ÖZVARDAR YBS */

export default function App() {
  
  return (
    <View style={styles.container}>

     
<View style={styles.footer1}>
        <FontAwesome name='user' style={styles.user} />
        
          <View >
            <FontAwesome name='bars' style={styles.bar1} />
          </View>
      

          <View>
            <Text style={styles.baslik1}>sahibinden.com</Text>
          </View>
              
      </View>
        

      <View style={styles.footer2}>
        
        <FontAwesome name='microphone' style={styles.mic} />
        

          <View >
            <FontAwesome name='search' style={styles.ara} />
          </View>
      

          <View>
            <Text style={styles.baslik5}>Kelime veya ilan no ile ara</Text>
          </View>

          
              
      </View>

        <View style={styles.footer3}>
            <View style={styles.altfooter1}>
            <MaterialIcons name='navigate-next' style={styles.alticon} />
            
              <View >
                <FontAwesome name='home' style={styles.altev} />
              </View>
          

              <View>
                <Text style={styles.altbaslik}>Emlak</Text>
              </View>
                  
          </View>



          <View style={styles.altfooter2}>
            <MaterialIcons name='navigate-next' style={styles.alticon} />
            
              <View >
                <MaterialCommunityIcons name='steering' style={styles.altev} />
              </View>
          

              <View>
                <Text style={styles.altbaslik}>Vasıta</Text>
              </View>
                  
          </View>



          <View style={styles.altfooter2}>
            <MaterialIcons name='navigate-next' style={styles.alticon} />
            
              <View >
                <FontAwesome name='book' style={styles.altev} />
              </View>
          

              <View>
                <Text style={styles.altbaslik}>Özel Ders Verenler</Text>
              </View>
                  
          </View>


          <View style={styles.altfooter2}>
            <MaterialIcons name='navigate-next' style={styles.alticon} />
            
              <View >
                <AntDesign name='tool' style={styles.altev} />
              </View>
          

              <View>
                <Text style={styles.altbaslik}>Yedek Parça</Text>
              </View>
                  
          </View>



          <View style={styles.altfooter2}>
            <MaterialIcons name='navigate-next' style={styles.alticon} />
            
            <View >
                <MaterialCommunityIcons name='baby-carriage' style={styles.altev} />
              </View>
          

              <View>
                <Text style={styles.altbaslik}>Yardımcı Arayanlar</Text>
              </View>
                  
          </View>

          <View style={styles.altfooter2}>
            <MaterialIcons name='navigate-next' style={styles.alticon} />
            
            <View >
                <MaterialCommunityIcons name='cat' style={styles.altev} />
              </View>
          

              <View>
                <Text style={styles.altbaslik}>Hayvanlar Alemi</Text>
              </View>
                  
          </View>

          

          
          




          
              
        </View>



        

      
     
       
       
          <View style={styles.addWrapper} >
            <Text style={styles.addText}>+</Text>
          </View>
          
      
    </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#D0D0D0',
  },

  footer1: {
    marginTop:30,
    paddingTop:50,
    backgroundColor:'#4682b4',
    height:80
  },

  altfooter2:{
    paddingTop:50,
    backgroundColor:'white',
    height:83,
  },

  alticon:{
    color:'gray',
    fontSize:35,
    left:370,
    width:50,
    height:50,
    bottom:30, 
  },

  altbaslik:{
    color:'black',
    fontSize:20,
    marginLeft:80,
    bottom:110,
    width:185,
    height:40,
    
  },

  altev:{
    fontSize:35,
    color:'black',
    marginLeft:20,
    bottom:80,
  },


  altfooter1:{
    
    paddingTop:50,
    backgroundColor:'white',
    height:80
  },

  footer2: {
    paddingTop:50,
    height:70,
    color:'black',
    fontSize:15,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'black',
    width:'%100',
  
  },

  footer3: {
    marginTop:30,
    backgroundColor:'gray',
    height:500,
  },

  sectionTitle: {
    fontSize:27,
    fontWeight:'bold',
   
  },

  addWrapper:{
    width:60,
    height:60,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    left:330,
    bottom:100,
    backgroundColor:'#4682b4',
    
   
  },

  addText:{
    fontSize:35,
    justifyContent:'center',
    alignItems:'center',
    color:'white',
  },

  bar1:{
    fontSize:35,
    color:'white',
    marginLeft:20,
    bottom:80,
  },

  ara:{
    fontSize:15,
    color:'gray',
    marginLeft:20,
    bottom:75,
    left:10,
  },

  baslik1:{
    color:'white',
    fontSize:25,
    marginLeft:80,
    bottom:110,
    width:185,
    height:40,
    
  },

  
  baslik5:{
    color:'gray',
    fontSize:15,
    marginLeft:80,
    bottom:95,
    width:185,
    height:40,
   
  },



  user:{
    color:'white',
    fontSize:25,
    left:350,
    width:50,
    height:50,
    bottom:25, 
  },

  mic:{
    color:'gray',
    fontSize:20,
    left:350,
    width:50,
    height:50,
    bottom:30, 
  },

  kutu:{
    color:'red',
    fontSize:15,
    marginLeft:20,
    bottom:110,
    width:350,
    height:70,
    backgroundColor:'black',
    borderWidth:1,
    borderColor:'red',
  }

});
