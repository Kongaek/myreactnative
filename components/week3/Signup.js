import React from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native';

export default function Signup() {
    return (
        <View style={{ paddingTop : 50  }}>
            <TextInput placeholder="Input ID" />   
            <TextInput placeholder="Input email" />    
            <TextInput placeholder="Input address" />    
            <Button title= "Signup" color="tomato" />
        </View>    
    );
}
