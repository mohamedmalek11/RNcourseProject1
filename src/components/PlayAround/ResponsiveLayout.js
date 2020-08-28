import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export function Input(props) {
    return (
        <TextInput style={{
            height: 40,
            fontSize: 18,
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 7,
            padding: 5,
            marginBottom: 20,
        }} placeholder={props.placeholder} ></TextInput>
    );

};
export function SignUpScreen(props) {
    const [realWidth, SetWidth] = React.useState(width);

    //make View Change When Rotate:
    useEffect(() => {
        Dimensions.addEventListener('change', ({ window }) => {
            SetWidth(window.width);
        });
        return () => {
            Dimensions.removeEventListener('change');
        };

    }, [])
    //


    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 50,

        }}>
            <View style={realWidth > 500 ? { paddingHorizontal: 100, } : null}>
                <Input placeholder={'Email'} />

                <View style={realWidth > 500 ? { flexDirection: 'row' } : null}>

                    <View style={realWidth > 500 ? { flex: 1, marginEnd: 5, } : null}>
                        <Input placeholder={'Password'} />
                    </View>

                    <View style={realWidth > 500 ? { flex: 1, marginStart: 5, } : null}>
                        <Input placeholder={'Confirm'} />
                    </View>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ alignContent: 'center', fontSize: 20, fontWeight: '400', }}>Sign Up</Text>
                </View>

            </View>
        </View>
    );
}