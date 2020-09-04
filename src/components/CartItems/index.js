import React from 'react';
import {View,Image,Text} from 'react-native';
import {Card} from '../Card';
import {AddToCartButtun} from '../AddToCartButtun';
import {Price} from '../Price';
import styles from './style';

export function CartItems (props) {
    const {cartItem} = props

    return(
        <Card style = {styles.container}>
            <Image source = {{uri: cartItem.product.imageUrl}} style = {styles.image} />
            <View style = {styles.CartContent}>
                <Text style = {styles.title}>{cartItem.product.title}</Text>
                <Price price ={cartItem.product.price} discount = {cartItem.product.discount} />
                <AddToCartButtun />
            </View>
        </Card>
    );
};