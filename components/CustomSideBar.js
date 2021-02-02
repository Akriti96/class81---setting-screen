import React from 'react';
import { Image,View,Text,StyleSheet,TouchableOpacity, Touchable } from 'react-native';
import {DrawerItems} from "react-navigation-drawer"

import firebase from "firebase";
export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <DrawerItems {...this.props}/>
                <TouchableOpacity style={styles.logOutButton}
                onPress={()=>{
                    this.props.navigation.navigate("WelcomeScreen")
                    firebase.auth().signOut()
                }}>
                    <Text style={styles.logOutText}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles= StyleSheet.create({
    container:{
        flex:1,     
    },
    DrawerItemsContainer:{
        flex:0.8
    },
    logOutButton : {
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10
      },
      logOutText:{
        fontSize: 30,
        fontWeight:'bold'
      }
})