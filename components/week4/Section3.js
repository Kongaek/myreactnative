import React from 'react';
import { View, Text, Image } from 'react-native';



export default function Section3() {
    return (
        <View style={{}}>
            <View style={{flexDirection:'row',padding:10}}>
                <View style={{borderRadius:50, backgroundColor:'orange',padding:15}}>
                    <Text style={{color:'white'}}>9.5</Text>
                </View>
                <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:20,}}>Excellent</Text>
                    <Text>See 801 reviews</Text>
                </View>
            </View>

        </View>
    );
}
