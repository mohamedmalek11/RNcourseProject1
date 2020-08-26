import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './CounterStyle'
import Styles from './CounterStyle';


const appendZero = val => {
    if (val == 0 ) {
        return '000' ;
    } else if (val >= 0 && val <= 9) {
        return '00' + val;
    } else if (val >= 9 && val < 100) {
        return '0' + val;
    } else {
        return val;
    }
    return val;
} 

export function CounterCounter(props) {

    //Defult Value
    const [RealCounter, SetCounter] = React.useState(0);

    const IncreaceButton = () => {
        SetCounter(RealCounter + 1)
    };
    const ResetButton = () => {
        SetCounter(RealCounter === 0)
    };
    return (

        <View style={styles.mainWrapper} >

            <View style={Styles.resetButtonWrapper}>
                <Text  onPress={ResetButton} style = {Styles.resetButton} >Reset</Text>
            </View>

            <View style = {Styles.CounterStyleWrapper}>
                <Text style = {Styles.CounterTextStyle}>{appendZero(RealCounter)}</Text>
            </View>

            <View style = {Styles.increaceButtonWrapper}>
                <Text  onPress={IncreaceButton} style = {Styles.increaceButton}>Count</Text>
            </View>


        </View>
    )

};

