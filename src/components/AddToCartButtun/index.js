import React from 'react';
import { View, Text } from 'react-native';
import { AppButton } from '../appButton';
import styles from './styles';


export function AddToCartButtun(props) {

    const [quantity, setQuantity] = React.useState(0);

    const incramentQuantetyHandler = () => {
        setQuantity(quantity + 1);
    };

    const deramentQuantetyHandler = () => {
        setQuantity(quantity - 1);
    };

    const renderInitialButtun = () => {
        return (
        <AppButton onPress={incramentQuantetyHandler}
            title="ADD TO CART"
            wrapperStyle={styles} />
        )
    };

    const renderIncreaseDecreaceButtun = () => {
        return (
            <View style={[styles.increaseDecreaseContainer, styles.buttun]}>
                <Text onPress={deramentQuantetyHandler} style = {styles.plusMinus}>-</Text>
                <Text>{quantity}</Text>
                <Text onPress={incramentQuantetyHandler} style = {styles.plusMinus}>+</Text>
            </View>
        );

    };

    return (
        <View style={styles.wrapper}>
            {
                quantity === 0
                    ? renderInitialButtun()
                    : renderIncreaseDecreaceButtun()
            }

        </View>
    ); 
}