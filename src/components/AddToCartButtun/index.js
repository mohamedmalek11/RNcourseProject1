import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../appButton';
import styles from './styles';


export class AddToCartButtun extends React.Component {
    state = {
        Quantity: 0,
    }
    
    incramentQuantetyHandler = () => {
        this.setState(pervState => ({Quantity: pervState.Quantity + 1}))
    };

    deramentQuantetyHandler = () => {
        this.setState(pervState => ({Quantity: pervState.Quantity - 1}))
    };
    
    
    renderInitialButtun = () => {
        return <AppButton onPress = {this.incramentQuantetyHandler} title="ADD TO CART" wrapperStyle={styles.buttun}/>
    };

    renderIncreaseDecreaceButtun = () => {
        return (
            <View style = {[styles.increaseDecreaseContainer, styles.buttun]}>
                <Text onPress={this.deramentQuantetyHandler}>-</Text>
                <Text>{this.state.Quantity}</Text>
                <Text onPress={this.incramentQuantetyHandler}>+</Text>
            </View>
        )
    };


    render() {
        return (
        <View style = {styles.wrapper}>
        {
           this.state.Quantity === 0
         ? this.renderInitialButtun()
         : this.renderIncreaseDecreaceButtun()
        }
        </View>);
    }
}