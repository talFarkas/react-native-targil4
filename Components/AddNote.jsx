import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Input from './Input';



const styles = StyleSheet.create({
    continer: {
        writingDirection:'ltr',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        padding:'5%'
    },
    text: {
        fontSize: 50,
        alignSelf: 'center'

    },
    button: {
        alignSelf: 'center',
        width: '30%',
        backgroundColor: '#CCE5FF',
        borderRadius: 30,
        marginTop: '10%',
        padding:'6%'
    }
});

export default function AddNote({navigation}) {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    return (
        <View style={styles.continer}>
            <Text style={styles.text}>Add Note</Text>
            <Input
                text={"Title   "}
                getText={setTitle}
            />
            <Input
                text={"Detail"}
                getText={setDetail}
            />
        
            <TouchableOpacity onPress={()=>{navigation.navigate('ListNotes',{Note:{title: title, detial: detail}})}} style={styles.button}>
                <Text  style={{fontSize:30,textAlign:'center'}}>+</Text>
            </TouchableOpacity>

        </View>
    )
}
