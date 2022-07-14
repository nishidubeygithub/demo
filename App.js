// import React, {Component} from 'react';
// import {View, 
//   Text, 
//   StyleSheet, 
//   TextInput, 
//   SafeAreaView, 
//   Button, 
//   Image, 
//   TouchableOpacity, 
//   Modal, ScrollView} from 'react-native';

// class App extends React.Component {

// constructor() {
//   super();

//   this.state = { 
  
//     hidePassword: "true ",
//      email: "",
//      emailError: "",
//      password: "",
//      passwordError: "",
//      fullname:"",
//      Typeemail:"Nishi@gmail.com",
//      Typepassword:"1234",
//      fullnameError:"",
//       createpassword:"",
//       confirmpassword:"",
//       houseflatnumber:"",
//       street:"",
//       area:"",
//       city:"",
//       state:"",
//       phoneno:"",
//       visible: false
    
//     }
// };

// secureTextEntry = () => {
//   this.state.secureTextEntry ? this.setState({secureTextEntry:false})
//   : this.setState({secureTextEntry:true});
// }
// fullnameValidator = () => {
//   if (this.state.fullname == "") 
//    {
//      this.setState({fullnameError:" name cannot be empty"})
//   }
//   else
//   {
//     this.setState({fullnameError:""})
//   }
// }


// emailValidator = () => {
//   if (this.state.email == "") 
//    {
//      this.setState({emailError:" Email cannot be empty"})
//   }
//   else
//   {
//     this.setState({emailError:""})
//   }
// }


// passwordValidator = () => {
//   if (this.state.password == "") 
//   {
//     this.setState({passwordError:" password must be 5 char long"})
//   }
//   else
//   {
//     this.setState({passwordError:""})}
// };

// // CompleteValidator = () => {
// //   if(this.state.email== "" && this.state.password == ""){
// // alert ('Incorrect email id and password')
// //   }
// //   else{
// //     alert('Login Successfully')
// //   }
// // }
// validator =()=> {
//   if (this.state.email== this.state.Typeemail && this.state.password == this.state.Typepassword)
//   // if (this.state.email=="" && this.state.password=="")
//   {
//     this.setState({visible: true});
// }else{
//   alert('login unsuccessfull')
// }
// };
// setPasswordVisibility = () => {
//   this.setState({ hidePassword: !this.state.hidePassword })
// };

// render(){
//    return (
//   <View style ={styles.container}>
//   <ScrollView>
//       <Text style ={styles.full}>Full Name</Text>
//       <View style ={[styles.FullName, {flexDirection:'row'}]}>
//       {/* <Image source ={require('./Assets/user.png')} style={styles.name}/> */}
//         <TextInput placeholder ="FullName" 
//         onBlur={() => this.fullnameValidator()}
//         onChangeText={(text)=> this.setState({fullname: text})}
//          style={styles.placeholder}/>
//          </View>
//   <Text style={styles.emailerror}>{this.state.fullnameError}</Text>
    
//     <Text style={styles.text}>Email</Text>
//         <View style={[styles.email, {flexDirection: 'row'}]}>
//          <Image source={require('./Assets/email-icon.jpeg')} style={styles.emailimage}/>
//             <TextInput placeholder= "Email" 
            
//             onBlur={() => this.emailValidator()}
//             autoCapitalize="words"
//            onChangeText={(text) => this.setState({email: text})}/>

//     </View>
//     <Text style={styles.emailerror}>{this.state.emailError}</Text> 
//      <Text style={styles.text}>Create Password</Text>
//         <View style={[styles.email, {flexDirection: 'row'}]}>
//         <TextInput placeholder= "Create Password" 
//             style={styles.placeholder}
//             onChangeText={(text)=> this.setState({createpassword: text})}/>
//     </View>
   
    
    
//         <Text style={styles.text}>Confirm Password</Text>
//         <View style={[styles.email, {flexDirection: 'row'}]}>
//           <Image source ={require('./Assets/key.png')} style={styles.key}/>
//             <TextInput placeholder= "Confirm Password" style={styles.placeholder}
//             onBlur={() => this.passwordValidator()}
//             autoCapitalize="words"
//             onChangeText={(text) => {this.setState({password:text})}}
//             secureTextEntry={this.state.hidePassword}></TextInput>
//              <TouchableOpacity onPress={this.setPasswordVisibility}>
//         <Image source={(this.state.hidePassword)  ? require('./Assets/eye.png') : require('./Assets/eye-hidden.webp')} style={styles.eye}/>
//         </TouchableOpacity>
            
//     </View>
//     <Text style={styles.emailerror}>{this.state.passwordError}</Text>
//     <View>
//      <Text style={styles.text}>Address</Text>
//         <View style={{flexDirection: 'row'}}>
//         </View>
         
//               <Text style={styles.text}>. House/Flat Number</Text>
//             <View style={[styles.address, {flexDirection:"column"}]}>
//            <TextInput placeholder ="1070" style={styles.placeholderadd}
//               onChangeText={(text)=> this.setState({houseflatnumber: text})}/>
//               </View>
            
            
           
//               <Text style={styles.text}>. Street</Text>
//             <View style={[styles.address, {flexDirection:"column"}]}>
           
//               <TextInput placeholder ="Street" style={styles.placeholderadd}
//               onChangeText={(text)=> this.setState({street: text})} />
//               </View>
           
        
            
//             <Text style={styles.text}>. Area/Locality (optional)</Text>
//             <View style={[styles.address, {flexDirection:"column"}]}>
           
//               <TextInput placeholder ="Area/Locality (optional)" style={styles.placeholderadd}
//              onChangeText={(text)=> this.setState({area: text})} />
//             </View>
         
         
        
//             <Text style={styles.text}>. City</Text> 
//             <View style={[styles.address, {flexDirection:"column"}]}>
            
//               <TextInput placeholder ="City" style={styles.placeholderadd}
//               onChangeText={(text)=> this.setState({city: text})}/>
//             </View>
            
          
         
//             <Text style={styles.text}>. State</Text> 
//             <View style={[styles.address, {flexDirection:"column"}]}>
          
//               <TextInput placeholder ="State" style={styles.placeholderadd}
//               onChangeText={(text)=> this.setState({state: text})}/>
//             </View>
            
          
//     </View>
    

//     <Text style={styles.text}>User's mobile phone</Text>
//         <View style={[styles.email, {flexDirection: 'row'}]}>
          
//             <TextInput placeholder= "User's mobile phone" 
//              keyboardType="numeric"
//              onChangeText={(text)=> this.setState({phoneno: text})}
//             style={styles.placeholder}/>
//     </View>
//  <Modal animationType ={"slide"}
//     transparent = {true}
//     visible = {this.state.visible}
//     onRequestClose = {() => ('closed')}>

// <View style={styles.container}>
       
//             <Text style ={styles.add}>FullName:{this.state.fullname}</Text>
//             <Text style ={styles.add}>Email:{this.state.email}</Text>
//             <Text style ={styles.add}>Password:{this.state.createpassword}</Text>
//             <Text style ={styles.add}>ConfirmPassword:{this.state.confirmpassword}</Text>
//             <Text style ={styles.add}>House/FlatNumber:{this.state.houseflatnumber}</Text>
//             <Text style ={styles.add}>Street:{this.state.street}</Text>
//             <Text style ={styles.add}>Area:{this.state.area}</Text>
//             <Text style ={styles.add}>City:{this.state.city}</Text>
//             <Text style ={styles.add}>State:{this.state.state}</Text>
//             <Text style ={styles.add}>PhoneNo:{this.state.phoneno}</Text>

//               <Button title='Hide Modal' onPress={() => {this.setState({visible:false})}}/>
            
//           </View>
         
         
//        </Modal>
//        <View style={styles.button}>
//        <Button title = 'Submit' color='white'
//          onPress={this.validator}/>
//          </View>
//          </ScrollView>
//        </View>
 
  
//   )
//     }
//  }   
    
    
// const styles = StyleSheet.create ({
//   container:{
//     flex:1,
//     backgroundColor:'white',
//     padding:5,
//     margin:10,
//     borderWidth:1
//    },
//    name:{
//   height:20,  
//    width:20,
//    margin:5
   
//    },
//    full:{
// fontSize:15,
// marginTop:20,

//    },
//   text:{
//     fontSize:15,
//     marginTop:2,
//     marginLeft:1,
//     padding:4,
//     },
//   FullName:{
//     flexDirection: 'row',
//     borderLeftColor: 'purple',
//     borderRightColor: 'purple',
//     borderTopColor: 'purple',
//     borderWidth: 1,
//     borderColor: 'purple',
//     borderRadius:4,
//     width:340,
//     margin:5,
    
//     height:35,
//    marginLeft:5,
//     marginRight:5
    
//   },
//  placeholder:{
//     marginLeft:10,
//     marginRight:60,
//     width:210
//    },
//   email:{
//     flexDirection: 'row',
//     borderLeftColor: 'purple',
//     borderRightColor: 'purple',
//     borderTopColor: 'purple',
//     borderWidth: 1,
//     borderRadius:4,
//     borderColor: 'purple',
//     width:340,
//     margin:5,
//     height:35,
//    marginLeft:5,
//     marginRight:5
//      },
//   address:{
//     flexDirection: 'row',
//     borderLeftColor: 'purple',
//     borderRightColor: 'purple',
//     borderTopColor: 'purple',
//     borderWidth: 1,
//     borderRadius:4,
//     borderColor: 'purple',
//     width:340,
//     margin:5,
//     height:35,
//    marginLeft:5,
//     marginRight:5
//   },
//   placeholderadd:{
//     marginLeft:10,
//     margin:10
// },
//   emailimage:{
//     height:20, 
//    width:20,
//    margin:5
//   },
//   key:{
//     height:30,
//     width:30,
//     margin:2
//   },
//   emailerror:{
//   color:'red',
//   marginTop:1
//   },
//   eye:{
//     height:20,
//     width:20,
//     margin:2,
//   },
//   textStyle:{
//     fontSize:20,
//     padding:10,
//     margin:20
//   },
//   close:{
//     height:10,
//     width:10,
//     paddingTop:20
//   }, 
//   add:{
//     fontSize:15,
//     padding:10,
//     margin:10
//   },
//   button:{
//     backgroundColor:'blue',
//     margin:10
//   }
// })  
// export default App;   
 import React, {Component} from 'react';
 import {View, Text} from 'react-native';
 import Login from './Demo/Login';
 import TextInputComponent from './Demo/TextInputComponent';
 class App extends React.Component {

  constructor() {
    super();
  
    this.state = {

    }
  };
    render(){
      return(
        
          <Login/>
          
        
      )
    }
  }
  export default App;
