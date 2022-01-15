import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    page:{
        direction:'ltr',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        direction:'ltr',
        borderWidth: 3,
        borderColor: "black",
        width: '99%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    continer: {
        direction:'ltr',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems:'flex-start',
        // alignContent:'flex-start',
        width: '95%',
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
        marginBottom:'2%'
    },
    text: {
        direction:'ltr',
        fontSize: 16,
        textAlign:'left',
        alignSelf:'flex-start',
        paddingLeft:'5%',
        paddingRight:'5%'
    },
    header: {
        direction:'ltr',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginBottom: '3%'
    },
    headerText: {
        direction:'ltr',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button:{
        direction:'ltr',
        marginTop:'5%',
        alignSelf: 'center',
        width: '50%',
        backgroundColor: '#CCE5FF',
        borderRadius: 30,
        padding:'6%',
    }
});

export default function ListNotes(props) {
    const [list, setList] = useState([{ title: 'do wh1', detial: 'react hw for tomorrow' },{title: 'buy milk', detial: 'need to buy milke' }])

    if(props.route.params!=undefined&&props.route.params.Note.title!=''&&props.route.params.Note.detial!=''){
        setList([...list,props.route.params.Note])
        props.route.params=undefined;
    }


    const deleteNote = (id) => {
        let tempList=list.filter(x=>x.id!==id)
        setList(tempList);
    }
    const notes = list.map((n,i) => {
        n.id=i;
        return (<View style={styles.continer} key={i}>
            <TouchableOpacity style={styles.text} onPress={()=>deleteNote(i)}><Text>X</Text></TouchableOpacity>
            <Text style={styles.text}>{n.title}</Text>
            <Text style={styles.text}>{n.detial}</Text>
        </View>)
    }
    )

    return (<View style={styles.page}>
        <View style={styles.border}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Note title</Text>
            <Text style={styles.headerText}>Note detail</Text>
        </View>
        {notes}
    </View>
    <TouchableOpacity
    onPress={()=>{props.navigation.navigate('AddNote')}}
    style={styles.button}><Text style={{alignSelf:'center'}}>Add Note</Text></TouchableOpacity>
    </View>
    )
}
