import React, {Component} from 'react';
import {View, Text,StyleSheet, TextInput, SafeAreaView, Button, TouchableOpacity, Modal, ScrollView} from 'react-native';
import TextInputComponent from '../Demo/TextInputComponent';
class Login extends React.Component {

constructor() {
  super();
this.state = { 
     email: "",
     emailError: "",
     password: "",
     passwordError: "",
     fullname:"",
     Typeemail:"Nishi@gmail.com",
     Typepassword:"1234",
     fullnameError:"",
     createpassword:"",
     confirmpassword:"",
     houseflatnumber:"",
     street:"",
     area:"",
     city:"",
     state:"",
     phoneno:"",
      // name:"ni",
    visible: false,
 }
};
fullnameValidator = () => {
  if (this.state.fullname == "") 
   {
     this.setState({fullnameError:" name cannot be empty"})
  }
  else
  {
    this.setState({fullnameError:""})
  }
}
emailValidator = () => {
  if (this.state.email == "") 
   {
     this.setState({emailError:" Email cannot be empty"})
  }
  else
  {
    this.setState({emailError:""})
  }
}
passwordValidator = () => {
  if (this.state.password == "") 
  {
    this.setState({passwordError:" password must be 5 char long"})
  }
  else
  {
    this.setState({passwordError:""})}
};
validator =()=> {
  if (this.state.email== this.state.Typeemail && this.state.password == this.state.Typepassword)
  {
    this.setState({visible: true});
}else{
  alert('login unsuccessfull')
}
};
render(){
   return (
   <SafeAreaView>
   <View style ={styles.container}>
  <ScrollView>
    <Text style ={styles.text}>Full Name</Text>
        <View style ={styles.email}>
        <TextInputComponent placeholder ="FullName"
         onBlur={() => this.fullnameValidator()}
        //  value={this.state.name}
         onChangeText={(text)=> this.setState({fullname: text})}
          style={styles.placeholder}/>
          </View>
   <Text style={styles.emailerror}>{this.state.fullnameError}</Text>
   <Text style={styles.text}>Email</Text>
    <View style={styles.email}>
          <TextInputComponent placeholder= "Email" 
            style={styles.placeholder}
             onBlur={() => this.emailValidator()}
             autoCapitalize="words"
            onChangeText={(text) => this.setState({email: text})}/>
</View>
    <Text style={styles.emailerror}>{this.state.emailError}</Text> 
      <Text style={styles.text}>Create Password</Text>
         <View style={[styles.email, {flexDirection: 'row'}]}>
         <TextInputComponent placeholder= "Create Password" 
             style={styles.placeholder}
             onChangeText={(text)=> this.setState({createpassword: text})}/>
     </View>
        <Text style={styles.text}>Confirm Password</Text>
         <View style={styles.email}>
           <TextInputComponent placeholder= "Confirm Password" style={styles.placeholder}
            onBlur={() => this.passwordValidator()}
            autoCapitalize="words"
            onChangeText={(text) => {this.setState({password:text})}}
            secureTextEntry={true}/>
             </View>
    <Text style={styles.emailerror}>{this.state.passwordError}</Text>
    <View>
     <Text style={styles.text}>Address</Text>
        <Text style={styles.text}>. House/Flat Number</Text>
            <View style={styles.email}>
           <TextInputComponent placeholder ="1070" 
              style={styles.placeholder}
              onChangeText={(text)=> this.setState({houseflatnumber: text})}/>
              </View>
            <Text style={styles.text}>. Street</Text>
            <View style={styles.email}>
           <TextInputComponent placeholder ="Street" 
              style={styles.placeholder}
              onChangeText={(text)=> this.setState({street: text})} />
              </View>
           <Text style={styles.text}>. Area/Locality (optional)</Text>
            <View style={styles.email}>
           <TextInputComponent placeholder ="Area/Locality (optional)" 
             style={styles.placeholder}
             onChangeText={(text)=> this.setState({area: text})} />
            </View>
           <Text style={styles.text}>. City</Text> 
            <View style={styles.email}>
            <TextInputComponent placeholder ="City" 
              style={styles.placeholder}
              onChangeText={(text)=> this.setState({city: text})}/>
            </View>
            <Text style={styles.text}>. State</Text> 
            <View style={styles.email}>
            <TextInputComponent placeholder ="State" 
              style={styles.placeholder}
              onChangeText={(text)=> this.setState({state: text})}/>
            </View>
            </View>
      <Text style={styles.text}>User's mobile phone</Text>
        <View style={styles.email}>
          <TextInputComponent placeholder= "User's mobile phone" 
            keyboardType="numeric"
            onChangeText={(text)=> this.setState({phoneno: text})}
            style={styles.placeholder}/>
    </View>
 <Modal animationType ={"slide"}
    transparent = {true}
    visible = {this.state.visible}
    onRequestClose = {() => ('closed')}>
<View style={styles.container}>
            <Text style ={styles.text}>FullName:{this.state.fullname}</Text>
            <Text style ={styles.text}>Email:{this.state.email}</Text>
            <Text style ={styles.text}>Password:{this.state.createpassword}</Text>
            <Text style ={styles.text}>ConfirmPassword:{this.state.confirmpassword}</Text>
            <Text style ={styles.text}>House/FlatNumber:{this.state.houseflatnumber}</Text>
            <Text style ={styles.text}>Street:{this.state.street}</Text>
            <Text style ={styles.text}>Area:{this.state.area}</Text>
            <Text style ={styles.text}>City:{this.state.city}</Text>
            <Text style ={styles.text}>State:{this.state.state}</Text>
            <Text style ={styles.text}>PhoneNo:{this.state.phoneno}</Text>
  <Button title='Hide Modal' onPress={() => {this.setState({visible:false})}}/>
            </View>
         </Modal>
       <View style={styles.button}>
       <Button title = 'Submit' color='white'
         onPress={this.validator}/>
         </View>
         </ScrollView>
       </View>
       </SafeAreaView>
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
    emailerror:{
      color:'red',
    },
    button:{
    backgroundColor:'blue',
    margin:10
  }
  })   
export default Login; 

