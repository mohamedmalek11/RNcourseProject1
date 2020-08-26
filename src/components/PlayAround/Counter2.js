import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './CounterStyle'
import Styles from './CounterStyle';


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
                <Button title='Reset' onPress={ResetButton}  ></Button>
            </View>

            <View style = {Styles.CounterStyleWrapper}>
                <Text>{RealCounter}</Text>
            </View>

            <View style = {Styles.increaceButtonWrapper}>
                <Button title='Count' onPress={IncreaceButton}></Button>
            </View>


        </View>
    )

};

