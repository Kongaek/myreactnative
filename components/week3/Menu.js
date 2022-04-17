import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import MyIcon from './MyIcon';


export default function Menu() {
    return (
        <View style={{ borderWidth : 1 , borderColor : 'gray' , borderRadius : 10 , margin : 10 , padding : 10}}>
            {/* View1 */}
            <View>
                <TextInput placeholder="What are you looking for?" />
            </View>
            {/* View2 */}
            <View style={{ flexDirection : 'row' , justifyContent : 'space-around' , marginVertical : 10}}>
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
            </View>
            {/* View3 */}
            <View style={{ flexDirection : 'row' , justifyContent : 'space-around' }}>
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
            </View>
        </View>
    );
}