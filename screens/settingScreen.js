import React from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput,TextComponent,Alert} from 'react-native';
import MyHeader from "../components/MyHeader"
import firebase from "firebase";
import db from "../config"

export default class SettingScreen extends React.Component{

    constructor(){
        super();
        this.state={
          emailId   : '',
          firstName : '',
          lastName  : '',
          address   : '',
          contact   : '',
          docId     : ''
        }
      }

      getuserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
          .then(snapshot=>{
              snapshot.forEach(doc=>{
                  var data= doc.data()
                  this.setState({
                      emailId : data.email_id,
                      firstName :data.first_name,
                      lastName :data.last_name,
                      address :data.address,
                      contact :data.contact,
                      docId:doc.id
                  })
              })
          })
      }

      updateUserdetails=()=>{
          db.collection("users").doc(this.state.docId).update({
              first_name:this.state.firstName,
              last_name:this.state.lastName,
              address:this.state.address,
              contact:this.state.contact
          })
          Alert.alert("Profile updated Successfully")
      }

      componentDidMount(){
          this.getuserDetails();
      }
    render(){
        return(
            <View style={styles.container}>
          <MyHeader title="Settings" navigation={this.props.navigation}/>
          <View style={styles.TextInputcontainer}>
        <TextInput style={styles.TextInputBox}
        placeholder={"First Name"}
        maxLength={10}
        onChangeText={(text)=>{
            this.setState({
                firstName:text
            })
        }}
        value={this.state.firstName}>
        </TextInput>

        <TextInput style={styles.TextInputBox}
        placeholder={"LastName"}
        maxLength={10}
        onChangeText={(text)=>{
            this.setState({
                lastName:text
            })
        }}
        value={this.state.lastName}>
        </TextInput>


        <TextInput style={styles.TextInputBox}
        placeholder={"Contact"}
        maxLength={10}
        keyboardType={"numeric"}
        onChangeText={(text)=>{
            this.setState({
               contact:text
            })
        }}
        value={this.state.contact}>
        </TextInput>

        <TextInput style={styles.TextInputBox}
        placeholder={"Address"}
        multiline={true}
        onChangeText={(text)=>{
            this.setState({
               address:text
            })
        }}
        value={this.state.address}>
        </TextInput>
        <TouchableOpacity style={styles.savebutton}
         onPress={()=>{
             this.updateUserdetails();
         }}>
            <Text style={styles.savebuttonText}>
                Save
            </Text>
        </TouchableOpacity>


          </View>
            </View>
        )
    }
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    TextInputcontainer:{
        flex:1,
        width:"100%",
        alignItems:"center"
    },
    TextInputBox:{
        width:'75%',
        height:35,
        alignSelf:"center",
        borderColor:"#ffab91",
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    savebutton:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20 
    },

    savebuttonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff" 
    }

})