import React,{useState} from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    input: {
        height: 26,
        fontSize: 20,
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#555',
        width: '100%',
    },
    text: {
        fontSize: 25,
        textAlign: 'left',
        color: 'black',
    },
    continer: {
        paddingTop:30,
        width: '85%',
        display: 'flex',
        alignItems: 'center',
        flexDirection:'row',
        }
});

export default function Input(props) {
const{text,getText}=props

    return (
        <View style={styles.continer}>
            <Text style={styles.text}>{text}:</Text>
            <TextInput style={styles.input}
            onChangeText={getText} />
        </View>
    )
}
