import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section2() {
    return (

        <View style={{ flex: 1, marginTop: -50,margin:15,padding:15, backgroundColor:'gray' , borderRadius: 10, alignItems:'center' }}>
            <Text style={{ fontSize : 30}}>Hilton San Francisco</Text>
            <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star-half" size={20} color="orange" />
            </View>
            <Text style={{textAlign:'center'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>

        </View>
    );
}
