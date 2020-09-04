import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function IonIcon (props){
const {name, ...rest} = props

    return(
        <Icon name = {Platform.select({android: 'md-', ios: 'ios-'}) + name} {...rest} />
    );
}