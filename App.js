import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView, Button, Image, TouchableOpacity, Modal} from 'react-native';

class App extends React.Component {

constructor() {
  super();

  this.state = { 
  
    hidePassword: "true ",
     email: "",
     emailError: "",
     password: "",
     passwordError: "",
     fullname:"",
      email:"",
      createpassword:"",
      confirmpassword:"",
      houseflatnumber:"",
      street:"",
      area:"",
      city:"",
      state:"",
      phoneno:""
    }
};
setModalVisible = (visible) => {
  this.setState({ modalVisible: visible });
}
secureTextEntry = () => {
  this.state.secureTextEntry ? this.setState({secureTextEntry:false})
  : this.setState({secureTextEntry:true});
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

// CompleteValidator = () => {
//   if(this.state.email== "" && this.state.password == ""){
// alert ('Incorrect email id and password')
//   }
//   else{
//     alert('Login Successfully')
//   }
// }


setPasswordVisibility = () => {
  this.setState({ hidePassword: !this.state.hidePassword });
}


  

 render(){
  const { modalVisible } = this.state;
  return (

<View style ={styles.container}>
      <Text style ={styles.txt}>Full Name</Text>
      <View style ={{flexDirection:'row'}}>
       <View style={styles.FullName} >
        <TextInput placeholder ="FullName" 
        onChangeText={(text)=> this.setState({fullname: text})}
         style={styles.placeholder}/>
        </View>
    </View>
    
    <View>
        <Text style={styles.text}>Email</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.email}>
            <Image source={require('./Assets/email-icon.jpeg')} style={styles.image}/>
            <TextInput placeholder= "Email" 
            
            onBlur={() => this.emailValidator()}
            autoCapitalize="words"
           
        
          onChangeText={(text) => this.setState({email: text})}/>

        


            
    </View>
    </View>  
    <Text style={styles.emailerror}>{this.state.emailError}></Text> 
    </View>
    <View>
        <Text style={styles.text}>Create Password</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.email}>
            <TextInput placeholder= "Create Password" 
            style={styles.placeholder}
            onChangeText={(text)=> this.setState({createpassword: text})}/>
    </View>
    </View>
    </View>
    <View>
        <Text style={styles.text}>Confirm Password</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.email}>
            <Image source ={require('./Assets/key.png')} style={styles.key}/>
            <TextInput placeholder= "Confirm Password" style={styles.placeholder}
            
            onBlur={() => this.passwordValidator()}
            autoCapitalize="words"
            onChangeText={(text) => {this.setState({password:text})}}
            secureTextEntry={this.state.hidePassword}></TextInput>
             
              <TouchableOpacity onPress={this.setPasswordVisibility}>
        <Image source={(this.state.hidePassword)  ? require('./Assets/eye.png') : require('./Assets/eye-hidden.webp')} style={styles.eye}/>
        
             </TouchableOpacity>
            
            
    </View>
    </View>
    <Text style={styles.emailerror}>{this.state.passwordError}></Text>
    </View>
    <View>
    <Text style={styles.text}>Address</Text>
        <View style={{flexDirection: 'row'}}>
        </View>
            <View>
              <Text style={styles.text}>. House/Flat Number</Text>
            <View style={{flexDirection:"column"}}>
            <View style={styles.address}>
              <TextInput placeholder ="1070" 
              onChangeText={(text)=> this.setState({houseflatnumber: text})}/>
              </View>
            </View>
            </View>
            <View>
              <Text style={styles.text}>. Street</Text>
            <View style={{flexDirection:"column"}}>
            <View style={styles.address}>
              <TextInput placeholder ="Street"
              onChangeText={(text)=> this.setState({street: text})} />
              </View>
            </View>
            </View>
            <View>
            <Text style={styles.text}>. Area/Locality (optional)</Text>
            <View style={{flexDirection:"column"}}>
            <View style={styles.address}>
              <TextInput placeholder ="Area/Locality (optional)"
             onChangeText={(text)=> this.setState({area: text})} />
            </View>
            </View>
            </View>
            <View>
            <Text style={styles.text}>. City</Text> 
            <View style={{flexDirection:"column"}}>
            <View style={styles.address}>
              <TextInput placeholder ="City"
              onChangeText={(text)=> this.setState({city: text})}/>
            </View>
            </View>
            </View>
            <View>
            <Text style={styles.text}>. State</Text> 
            <View style={{flexDirection:"column"}}>
            <View style={styles.address}>
              <TextInput placeholder ="State"
              onChangeText={(text)=> this.setState({state: text})}/>
            </View>
            </View>
            </View>
    </View>
    
    
    <View>
    <Text style={styles.text}>User's mobile phone</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.email}>
            <TextInput placeholder= "User's mobile phone" 
             keyboardType="numeric"
             onChangeText={(text)=> this.setState({phoneno: text})}
            style={styles.placeholder}/>
    </View>
    </View>

    </View>
    <View>
         <Button title = 'Submit' 
        onPress={() => this.setModalVisible(!modalVisible)}
        // onPress={this.CompleteValidator}
        />
   
    </View>
    <Modal animationType ={"slide"}
    transparent = {true}
    visible = {modalVisible}
    onRequestClose = {() => ('closed')}>

<View style={styles.container}>
         <View style={styles.modalContainer}>

         
            <Text>{this.state.fullname}</Text>
            <Text>{this.state.email}</Text>
            <Text>{this.state.createpassword}</Text>
            <Text>{this.state.confirmpassword}</Text>
            <Text>{this.state.houseflatnumber}</Text>
            <Text>{this.state.street}</Text>
            <Text>{this.state.area}</Text>
            <Text>{this.state.city}</Text>
            <Text>{this.state.state}</Text>
            <Text>{this.state.phoneno}</Text>


            <TouchableOpacity>
            
             <Button title='Close Modal' onPress={() => this.setModalVisible(!modalVisible)}/>
             </TouchableOpacity> 
          </View>
         </View>
       </Modal>
       </View>
  
  )
    
  
   
 
  
 }
 }   
    
    
const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'white',
    padding:1,
    margin:5
   
  },
  text:{
    fontSize:15,
    marginRight:20,
    marginLeft:1,
    padding:10,
    
  },
  txt:{
    fontSize:15,
    marginRight:20,
    marginLeft:1,
    padding:10,
    margin:10
    
  },
  FullName:{
    flexDirection: 'row',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    
  
    width:350,
    margin:1,
    height:20,
    marginLeft:10,
    marginRight:10,
    
  },
  // placeholder:{
  // //  marginLeft:10,
  //  marginRight:60
  // },
  email:{
    
  flexDirection: 'row',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
     margin:10,
    width:350,
    height:20,
    marginLeft:10,
    marginRight:10,
    
  },
  address:{
    flexDirection:"row",
    width:300,
    height:20,
    borderColor:'green',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
  },
  image:{
    height:15, 
   width:20
  },
  key:{
    height:20,
    width:20
  },
  emailerror:{
  color:'red',
  marginTop:10
  },
  eye:{
    height:20,
    width:15
  },
  textStyle:{
    fontSize:20,
    padding:10,
    margin:20
  },
  close:{
    height:10,
    width:10,
    paddingTop:20
  }
})  
export default App;   


// const [isVisible, setVisible] = useState(false);
// const tempFunction = () => {
// Alert.alert('onShow');
//  }
// const callDismiss_iOS = () => {
// console.log('onDismiss');
 
//   }
 
//   const Modal_Component = () => (
//     <View style={{height:0}}>
//       <Modal
//         animationType={"slide"}
//         transparent={false}
//         visible={isVisible}
//         onDismiss={callDismiss_iOS}
//         presentationStyle={"FullScreen"}
//         supportedOrientations={['portrait']}
//         onOrientationChange={['landscape']}
//         onShow={tempFunction}
//         hardwareAccelerated={false}
//         onRequestClose={() => {
//           console.log("closed.");
//         }}>
//         <View style={styles.container}>
//           <View style={styles.modalContainer}>

           
//            <Text style={styles.text}>hardwareAccelerated Modal</Text>
//            <Text style={styles.text}>hardwareAccelerated Modal</Text>
//            <TouchableOpacity style={styles.button}>
//             <Button title='Hide Modal' onPress={() => setVisible(!isVisible)} />
//             </TouchableOpacity>
//          </View>
//         </View>
//       </Modal>
    
//     </View>
    
  
//   );
 
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.MainContainer}>
//         <Image source={require("./Assets/download.jpeg")} style={styles.image}/>
//          <Modal_Component/>
//          <Text style={styles.text}>Click now to open modal</Text>
//          <TouchableOpacity style={styles.button}>
//         <Button onPress={() => setVisible(true)} title='Show Modal' />
//         </TouchableOpacity>
//        </View>
//       </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container:{
//     flex:1, 
//     backgroundColor:'#DCDCDC',
//     borderColor:"#DCDCDD",
//     borderWidth:2,
//     borderRadius:20,
//     margin:20,
//     padding:10,
//     shadowOpacity:10,
//     shadowRadius:10,
//     elevation:10, 
//     justifyContent:'center',
//     alignItems:'center'
//   },
 
//   MainContainer: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   modalContainer: {
//     width: 300,
//     height: 300,
//     backgroundColor: '#F50057',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: 'white'
//   },
//   text: {
//     fontSize: 28,
//     textAlign: 'center',
//     color: 'blue',
//     padding: 10
//   },
//   image: {
//     marginTop: 100,
//     marginBottom: 10,
//     width: '90%',
//     height: 200,
//   },
//   button: {
//     borderRadius:6,
//     backgroundColor:'lightgreen',
//     shadowColor:'pink',
//     shadowRadius: 25,
//     marginTop:50,
//     borderRadius:20,
//     height:50,
//     width:150
//   }
 
// });