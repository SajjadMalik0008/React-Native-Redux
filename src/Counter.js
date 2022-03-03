/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {StyleSheet,Text,View,Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from './store/action';

 const Counter = (props)  => {
    const data = useSelector(state => state.counter)
    const dispatch = useDispatch();
   return (
     <View style={{marginTop:50}}>
       <Button title='Add count' onPress={() => dispatch(addition())} />
       <Text>{data}</Text>
       <Button title='Subtract count' onPress={() => dispatch(subtraction())} />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   Container: {
     flex: 1,
     justifyContent:'center',
     alignContent:'center',
   },
 });
 
 export default Counter;
 