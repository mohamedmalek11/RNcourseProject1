import React from 'react';
import { View } from 'react-native';

export function Box(props) {
    return (
        <View style={{
            width: 50,
            height: 50,
            backgroundColor: props.color,
            borderWidth: 1,
            borderColor: props.color,
            borderRadius: 10,
        }} />
    );
};

export function Layout1(props) {
    return (
        <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            marginStart: 40,
            marginEnd: 40,

        }}>
            <Box color={'red'} />
            <Box color={'blue'} />
            <Box color={'green'} />
            <Box color={'yellow'} />
            <Box color={'orange'} />

        </View>

    )

};

export function Layout2(props) {
    return (
        <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 200,
            marginBottom: 200,

        }}>
            <Box color={'red'} />
            <Box color={'blue'} />
            <Box color={'green'} />
            <Box color={'yellow'} />
            <Box color={'orange'} />

        </View>

    )

};

export function Layout3(props) {
    return (
        <View style={{flex: 1,}}>

            <View style = {{
                justifyContent: 'space-around',
                alignItems: "center",
                flex: 2,
                flexDirection: "row",
                marginEnd: 50,
                marginStart: 50,
                marginTop : 300,
            }}>
                <Box color={'red'} />
                <Box color={'blue'} />
            </View>

            <View style = {{
                justifyContent: 'space-around',
                alignItems: "center",
                flex: 1,
                flexDirection: "row",
                marginEnd: 50,
                marginStart: 50,

                
            }}>
                <Box color={'green'} />
                <Box color={'yellow'} />
            </View>

            <View style = {{
                justifyContent: 'space-around',
                flex: 2,
                flexDirection: "row",
                alignItems: "center",
                marginBottom : 300,
            }}>
                <Box color={'orange'} />
            </View>

        </View>

    )

};