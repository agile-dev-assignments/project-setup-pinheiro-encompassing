import * as React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount = () => {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.props.navigation.navigate("ClipboardContainer");
            }else{
                this.props.navigation.navigate("LoginScreen");
            }
        })
    }

    render(){
    return(
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size = 'large' color = 'black'></ActivityIndicator>
        </View>
        );
    }
}

export default LoadingScreen;
