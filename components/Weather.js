import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
const Weather = (props) => {
    const { data } = props;
    const img = {uri: " http://openweathermap.org/img/wn/" + `${data.cod !== 404 ? data.weather[0].icon : null}` + '.png'}

    return (
        <View style={styles.weatherContainer}>
            <Text style={styles.place}>{data.name}, {data.sys.country}  </Text>

            <View style={styles.dateTimeContainer}>
                <Text style={styles.time}>{new Date().toLocaleTimeString()} </Text>
                <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
            </View>
           <View>
               
           </View>
            <Text style={styles.temperature}>{Math.floor(data.main.temp)} &#176;C</Text>
            <Text style={styles.Desc}>{data.weather[0].main}</Text>
            <Image style={{ width: 70, height: 70 }} source={img} />
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    weatherContainer: {
        padding: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    place: {
        color: '#eee',
        fontSize: 25,
    },
    dateTimeContainer:{
       flexDirection:'row',
       marginTop:5,
    } ,
    time: {
        color: '#eee',
        fontSize:20,
    },
    date: {
        color: '#eee',
        marginLeft:10,
        fontSize:20,
    },
    temperature: {
        color: '#eee',
        fontSize:35,
    },
    Desc: {
        color: '#eee'
    },
})
