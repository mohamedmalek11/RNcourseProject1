import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, Dimensions } from 'react-native';
import { rem } from '../../utils/Constants';
import {ScaledSheet} from 'react-native-size-matters';

const Styles = ScaledSheet.create({
    InputStyle : {
        height: '35@s',
        fontSize: '20@s',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 7,
        padding: 5,
        marginBottom: 20,
    },
    TextInput: { alignContent: 'center',
     fontSize: '20@s',
      fontWeight: '500',
     }  
});


const { width } = Dimensions.get('window')

export function Input(props) {
    return (
        <TextInput style={Styles.InputStyle} placeholder={props.placeholder} ></TextInput>
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
            <View style={realWidth > 500 ? { paddingHorizontal: 75, } : null}>
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
                    <Text style={Styles.TextInput}>Sign Up</Text>
                </View>

            </View>
        </View>
    );
}