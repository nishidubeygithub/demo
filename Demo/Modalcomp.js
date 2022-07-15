import React, {Component} from 'react';
import {View, Text,StyleSheet, TextInput, SafeAreaView, Button, TouchableOpacity, Modal, ScrollView} from 'react-native';

class Modalcomp extends React.Component {
    
render () {
    const {fullname, email, password, createpassword, houseflatno, street, area, city,state, phoneno} = this.props
    return(
     <View style={styles.container}>
            <Text title={title} style={styles.text}></Text>
            <Text>Email:{email}</Text>
            <Text>Password:{password}</Text>
            <Text>CreatePassword:{createpassword}</Text>
            <Text>Houseflatno:{houseflatno}</Text>
            <Text>Street:{street}</Text>
            <Text>Area:{area}</Text>
            <Text>City:{city}</Text>
            <Text>State:{state}</Text>
            <Text>PhoneNo:{phoneno}</Text>
         </View>
    )
}
}
const styles = StyleSheet.create ({
    container:{
        backgroundColor:'white',
         padding:5,
         margin:10,
         borderWidth:1
        },
        text:{
         fontSize:15,
         marginTop:2,
         marginLeft:1,
         padding:4,
         width:200
         },
})
export default Modalcomp;