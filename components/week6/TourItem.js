import React from "react";
import { Image, Text, View } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginRight : 10}}>
            <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{
                uri: props.item.uri }} />
            <View style={{
                backgroundColor: 'black', width: 250, height: 50, opacity: 0.5, padding: 10,
                marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
            }}>
                <Text style={{ fontSize: 20, color: 'white' }} >{props.item.title}</Text>
            </View>
        </View>
    );
}