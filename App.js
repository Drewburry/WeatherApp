import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View, ImageBackground, TouchableOpacity, Text, Touchable, Button, Alert } from 'react-native'
import Date from './components/Date'
import Weather from './components/Weather'
import * as Location from 'expo-location';


const bgImage = require('./Images/bgImg3.jpg')

const App = () => {

  const [weather, setWeather] = useState([]);
  const [count, setCount] = useState('')
  const [city, setCity] = useState('')
  const APIkey = "ENTER YOUR KEY HERE";

useEffect(()=>{
  run()
},[])

const run =() =>{
  (async() => {
    let { status } =  Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      handleFetchApi('-25.7479','28.2293')
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    handleFetchApi(location.coords.latitude, location.coords.longitude)
  })();
}
  async function handleFetchApi(latitude, longitude,) {
    if(latitude && longitude){
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
          setWeather({
            data: data
          })
        })
    }         
  }

  async function handleFetchApi2(e) {
    e.preventDefault();
    if(city == ""){
     
    }else{
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${count}&appid=${APIkey}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
          setWeather({
            data: data
          })
        })
      }
      setCity(null)
      setCount(null)
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.bgImage} >
        <View style={styles.weatherContainer}> 
          {weather.data !== undefined ?
          <View> 
            <Weather data ={weather.data}/>  
            <Date data ={weather.data} />
          </View>
        :null
        }
        </View>
        <View style={styles.form}>
        <View >
          <TextInput style={styles.input} placeholder='Country' onChangeText={(e) => setCount(e)} />
          <TextInput style={styles.input2} placeholder='City' onChangeText={(e) => setCity(e)} />
        </View>
        <TouchableOpacity onPress={(e) =>handleFetchApi2(e)}>
          <Text style={styles.btn}>Searching</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form:{
    position:'absolute',
    top:'75%',
    alignItems:'center'
  },
  bgImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  input: {
    width:300,
    height:40,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor:'#fff',
    color:'#000',
    opacity:0.6,
    textAlign:'center',
    fontSize:18,
    borderColor:'#18181bcc',
  },
  input2: {
    borderColor:'#18181bcc',
    fontSize:18,
    height:40,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor:'#fff',
    color:'#000',
    opacity:0.6,
    textAlign:'center'
  },
  btn: {
    borderRadius: 5,
    backgroundColor:'blue',
    width:100,
    height:40,
    color:'#eee',
    textAlign:'center',
    paddingTop:9
  },
  weatherContainer:{
    position:'absolute',
    top:'5%',
     textAlign:'center',
     width:300,
     backgroundColor: '#18181bcc',
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center'
  },
  
})



