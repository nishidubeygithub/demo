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
     createpasswordError:"",
     confirmpassword:"",
     houseflatno:"",
     houseflatnoError:"",
     street:"",
     streetError:"",
     area:"",
     areaError:"",
     city:"",
     cityError:"",
     state:"",
     stateError:"",
     phoneno:"",
     phonenoError:"",
     mail:"",
     name:"",
     newpassword:"",
     finalpassword:"",
     house:"",
     stret:"",
     locality:"",
     jbp:"",
     mp:"",
     mobile:"",
    visible: false,
 }
};
ClearData = () => {
  this.setState({visible:false})
  this.setState({name:""})
  this.setState({mail:""})
  this.setState({newpassword:""})
  this.setState({finalpassword:""})
  this.setState({house:""})
  this.setState({stret:""})
  this.setState({locality:""})
  this.setState({jbp:""})
  this.setState({mp:""})
  this.setState({mobile:""})
}
fullnameValidator = () => {
  if (this.state.fullname == "") 
   {this.setState({fullnameError:" name cannot be empty"})
  }
  else
  {this.setState({fullnameError:""})
  }
}
emailValidator = () => {
  if (this.state.email == "") 
   {this.setState({emailError:" Email cannot be empty"})
  }
  else
  {this.setState({emailError:""})
  }
}
createpasswordValidator = () => {
  if (this.state.createpassword == "") 
  {this.setState({createpasswordError:" password must be 5 char long"})
  }
  else
  {this.setState({createpasswordError:""})}
};
passwordValidator = () => {
  if (this.state.password == "") 
  {this.setState({passwordError:" password must be 5 char long"})
  }
  else
  {
    this.setState({passwordError:""})}
};
houseflatnoValidator = () => {
  if (this.state.houseflatno == "") 
  {this.setState({houseflatnoError:" area not found"})
  }
  else
  {this.setState({houseflatnoError:""})}
};
streetValidator = () => {
  if (this.state.houseflatno == "") 
  {this.setState({streetError:" street not found"})
  }
  else
  {this.setState({streetError:""})}
};
areaValidator = () => {
  if (this.state.houseflatno == "") 
  {this.setState({areaError:" locality not found"})
  }
  else
  {this.setState({areaError:""})}
};
cityValidator = () => {
  if (this.state.houseflatno == "") 
  {this.setState({cityError:" city not found"})
  }
  else
  {
    this.setState({cityError:""})}
};
stateValidator = () => {
  if (this.state.houseflatno == "") 
  {this.setState({stateError:" city not found"})
  }
  else
  {this.setState({stateError:""})}
};
phonenoValidator = () => {
  if (this.state.password == "") 
  {this.setState({phonenoError:" phoneno must be 10 char long"})
  }
  else
  {this.setState({phonenoError:""})}
};
validator =()=> {
  if (this.state.email== this.state.Typeemail  
    && this.state.password == this.state.Typepassword )
{this.setState({visible: true});
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
         value={this.state.name}
         onChangeText={(text)=> {this.setState({fullname: text})
                                this.setState({name: text})}}
          style={styles.placeholder}/>
          </View>
   <Text style={styles.emailerror}>{this.state.fullnameError}</Text>
   <Text style={styles.text}>Email</Text>
    <View style={styles.email}>
          <TextInputComponent placeholder= "Email" 
            style={styles.placeholder}
            value={this.state.mail}
             onBlur={() => this.emailValidator()}
             autoCapitalize="words"
            onChangeText={(text) => {this.setState({email: text})
            this.setState({mail:text})}}/>
</View>
    <Text style={styles.emailerror}>{this.state.emailError}</Text> 
      <Text style={styles.text}>Create Password</Text>
         <View style={styles.email}>
         <TextInputComponent placeholder= "Create Password" 
             style={styles.placeholder}
             value={this.state.newpassword}
            autoCapitalize="words"
            onBlur={() => this.createpasswordValidator()}
             onChangeText={(text)=> {this.setState({createpassword: text})
                                      this.setState({newpassword:text})}}/>
     </View>
     <Text style={styles.emailerror}>{this.state.createpasswordError}</Text>
        <Text style={styles.text}>Confirm Password</Text>
         <View style={styles.email}>
           <TextInputComponent placeholder= "Confirm Password" style={styles.placeholder}
            onBlur={() => this.passwordValidator()}
            autoCapitalize="words"
            value={this.state.finalpassword}
            onChangeText={(text) => {this.setState({password:text})
                                    this.setState({finalpassword:text})}}
            secureTextEntry={true}/>
             </View>
    <Text style={styles.emailerror}>{this.state.passwordError}</Text>
    <View>
     <Text style={styles.text}>Address</Text>
        <Text style={styles.text}>. House/Flat Number</Text>
            <View style={styles.email}>
           <TextInputComponent placeholder ="1070" 
           onBlur={() => this.houseflatnoValidator()}
           value={this.state.house}
              style={styles.placeholder}
              onChangeText={(text)=> {this.setState({houseflatno: text})
                                     this.setState({house: text})}}/>
              </View>
              <Text style={styles.emailerror}>{this.state.houseflatnoError}</Text>
            <Text style={styles.text}>. Street</Text>
            <View style={styles.email}>
           <TextInputComponent placeholder ="Street" 
              style={styles.placeholder}
              value={this.state.stret}
              onBlur={() => this.streetValidator()}
              onChangeText={(text)=> {this.setState({street: text})
                                      this.setState({stret: text})} } />
              </View>
              <Text style={styles.emailerror}>{this.state.streetError}</Text>
           <Text style={styles.text}>. Area/Locality (optional)</Text>
            <View style={styles.email}>
           <TextInputComponent placeholder ="Area/Locality (optional)" 
             style={styles.placeholder}
             value={this.state.locality}
             onBlur={() => this.areaValidator()}
             onChangeText={(text)=> {this.setState({area: text})
                                    this.setState({locality: text})}} />
            </View>
            <Text style={styles.emailerror}>{this.state.areaError}</Text>
           <Text style={styles.text}>. City</Text> 
            <View style={styles.email}>
            <TextInputComponent placeholder ="City" 
              style={styles.placeholder}
              onBlur={() => this.cityValidator()}
              value={this.state.jbp}
              onChangeText={(text)=> {this.setState({city: text})
                                     this.setState({jbp: text}) }}/>
            </View>
            <Text style={styles.emailerror}>{this.state.cityError}</Text>
            <Text style={styles.text}>. State</Text> 
            <View style={styles.email}>
            <TextInputComponent placeholder ="State" 
              style={styles.placeholder}
              value={this.state.mp}
              onBlur={() => this.stateValidator()}
              onChangeText={(text)=> {this.setState({state: text})
                                      this.setState({mp: text})}}/>
            </View>
            <Text style={styles.emailerror}>{this.state.stateError}</Text>
            </View>
      <Text style={styles.text}>User's mobile phone</Text>
        <View style={styles.email}>
          <TextInputComponent placeholder= "User's mobile phone" 
            keyboardType="numeric"
            onBlur={() => this.phonenoValidator()}
            value={this.state.mobile}
            onChangeText={(text)=> {this.setState({phoneno: text})
            this.setState({mobile: text})}}
            style={styles.placeholder}/>
    </View>
    <Text style={styles.emailerror}>{this.state.phonenoError}</Text>
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
  <Button title='Hide Modal' onPress={this.ClearData}/>
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
    padding:2,
    margin:5,
    borderWidth:1
   },
   text:{
    fontSize:15,
    marginLeft:10,
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

