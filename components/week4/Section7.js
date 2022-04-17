import React from 'react';
import { View, Text, Image } from 'react-native';



export default function Section7() {
    return (
        <View style={{}}>
            <View style={{paddingLeft:15,}}>
                <Text>Room Type</Text>
            </View>
            <View style={{ flexDirection: 'row',padding:15 }}>
                <View>
                    <Image style={{ flex: 1, width: 75, height: 100, borderRadius: 10 }} source={require('../../assets/week3/room-8.jpg')} />
                </View>
                <View style={{flexDirection:'column',paddingLeft:15,justifyContent:'flex-start',alignItems:'flex-start'}}>
                    <Text style={{fontSize:20}}>Standard Twin Room</Text>
                    <Text style={{color:'orange', marginTop:30}}>$399.99</Text>
                    <Text style={{color:'blue'}}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}
