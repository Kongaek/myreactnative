import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native';


export default function Section8() {
    return (
        <View style={{ flexDirection:'row', justifyContent:'space-between',margin:20}}>
            <View>
                <Text style={{fontSize:15}}>Price</Text>
                <Text style={{color:'orange',fontSize:20}}>$399.99</Text>
                <Text style={{}}>AVG/Night</Text>
            </View>
            <View style={{justifyContent:'center'}}>
                <Button title="Book Now" color="tomato" />
            </View>

        </View>
    );
}
