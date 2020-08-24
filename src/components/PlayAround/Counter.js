import React from 'react';
import {View,Text, Button} from 'react-native';

export class Counter extends React.Component {
    state = {
        Counter: 1
    };
    incrementHandler = () =>{
        this.setState(prevState => ({Counter: prevState.Counter + 1}));
    };
    decrementHandler = () =>{
        this.setState(prevState => ({Counter: prevState.Counter - 1}));
    };


    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Button title='Increment' onPress={this.incrementHandler}></Button>
                <Text>{this.state.Counter}</Text>
                <Button title='Decrement' onPress={this.decrementHandler}></Button>
            </View>
        );

    }
}