import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../appButton';
import styles from './styles';


export function AddToCartButtun() {


    state = {
        Quantity: 0,
    }
    
    const incramentQuantetyHandler = () => {
        this.setState(pervState => ({Quantity: pervState.Quantity + 1}))
    };

    const deramentQuantetyHandler = () => {
        this.setState(pervState => ({Quantity: pervState.Quantity - 1}))
    };
    
    
    const renderInitialButtun = () => {
        return <AppButton onPress = {this.incramentQuantetyHandler} title="ADD TO CART" wrapperStyle={styles.buttun}/>
    };

    const renderIncreaseDecreaceButtun = () => {
        return (
            <View style = {[styles.increaseDecreaseContainer, styles.buttun]}>
                <Text onPress={this.deramentQuantetyHandler}>-</Text>
                <Text>{this.state.Quantity}</Text>
                <Text onPress={this.incramentQuantetyHandler}>+</Text>
            </View>
        )
    };


        
        <View style = {styles.wrapper}>
        {
           this.state.Quantity === 0
         ? renderInitialButtun()
         : renderIncreaseDecreaceButtun()
        }
        </View>
    
}