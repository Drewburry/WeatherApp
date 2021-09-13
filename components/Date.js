import React, { useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WeatherInfo = ({title, value, unit }) => {
    return (
        <View style={{flexDirection:'row'}}>
                <Text style={{color:'#fff', fontSize:18, marginBottom:10,}}>{title}</Text>
                <Text style={{marginLeft:45, color:'#fff', fontSize:18}}>{value} {unit}</Text>
        </View>
    )
}


const Date = (props) => {   
   var {data} = props;
   
    return (
        <View style={styles.mainContainer}>
            <View >
                <View style={styles.weatherInfo}>
                    <WeatherInfo title='Humidity' value={data.main.humidity} unit='%' />
                    <WeatherInfo title='Pressure' value={data.main.pressure} unit='kPA' />
                    <WeatherInfo title='sunrise' value={data.sys.sunrise} unit='AM' />
                    <WeatherInfo title='sunset' value={data.sys.sunset} unit='PM' />
                   
                </View>
            </View>
        </View>
    )
}

export default Date

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    time: {
        fontSize: 45,
        color: '#eee'
    },
    date: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'#eee',
    },
    weatherInfo: {

        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        backgroundColor: '#18181bcc',
        height: 150,
        padding: 10,
    },
    place: {
        fontSize:20,
        color:'#eee',
        marginTop:25,
        marginRight:25,
    },
})
