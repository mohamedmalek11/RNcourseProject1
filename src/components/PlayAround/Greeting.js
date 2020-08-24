import React from 'react';
import {Text} from 'react-native';

export class Greeting extends React.Component {
    render(){
        const {name} = this.props;


        return <Text>hello, {name ? name: 'my friend'}</Text>;
    }
}