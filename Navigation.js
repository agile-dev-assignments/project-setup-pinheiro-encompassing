// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Google from 'expo-google-app-auth';

import LoadingScreen from './LoadingScreen';
import ClipboardContainer from './ClipboardContainer';
import LoginScreen from './LoginScreen';
import Logout from './Logout';

// function Login({navigation}){
//         return (
//             <SafeAreaView style={styles.container}>
//                 <LoginScreen/>
//             </SafeAreaView>
//         );
//     }

// function Clipboard({navigation}){
//         return (
//             <SafeAreaView style={styles.container}>
//                 <ClipboardContainer/>
//             </SafeAreaView>
//         )
// }

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingScreen">
                <Stack.Screen name="LoadingScreen"
                    component={LoadingScreen} options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ClipboardContainer"
                    component={ClipboardContainer} options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="LoginScreen"
                    component={LoginScreen} options={{
                        headerShown: false,
                    }} />

                {/* <Stack.Screen name="Logout"
                    component={Logout} options={{
                        headerShown: false,
                    }} />     */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#01003b",
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
    },
});