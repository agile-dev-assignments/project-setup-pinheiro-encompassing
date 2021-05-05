import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-google-app-auth";
import { ThemeConsumer } from "react-native-elements";
import firebase from "firebase";
import { Systrace } from "react-native";

var userName = "";
var userID = "";

const LoginScreen = ({ navigation }) => {
  const [code, setText] = useState("");
  
  function signIntest() {
    Alert.alert("loggedIn");
  }

  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  async function storeData(value) {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  }

  function onSignIn(googleUser) {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        console.log(credential);
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            console.log("User Signed In");

            const check = result.additionalUserInfo.isNewUser;
            //console.log(result.user.given_name  result.user.last);
            const name = result.additionalUserInfo.profile.name;
            userName = name;
            console.log("HERE");
            console.log(userName);
            console.log("HERE2");
            console.log(name);
            console.log("TESTING UID");
            //console.log(generateUID()); 

            storeData(name);

            if (check) {
              console.log("hereio1" + code);
              var uidExists = false;
              var uid = "";
              var mail = "";
              userData = firebase.database().ref("/users/").on("value", function(snapshot) {
                snapshot.forEach(function(data) {
                  if (data.child("uid").exists() && String(data.child("uid").val())==String(code)){
                    uidExists = true;
                    uid = data.child("uid").val();
                  }
                  console.log(data.child("uid").exists()+ " " + data.child("uid").val() + " " + code + " " +String(data.child("uid").val())==String(code));
                });
              });
              if (!uidExists){
                uid = generateUID();
              }
              userID = uid;
              mail = result.user.email;
              name = result.additionalUserInfo.profile.name;
              //const picture = result.additionalUserInfo.photoUrl;
              //const locale = result.additionalUserInfo.locale;
              console.log("hereio2" + uid);
              if (!uidExists){
                firebase
                  .database()
                  .ref("/users/" + uid)
                  .set({
                    gmail: mail,
                    //profile_picture: picture,
                    name: name,
                    uid: uid,
                    created_at: Date.now(),
                  });
              }
              else {
                firebase
                  .database()
                  .ref("/users/" + uid)
                  .update({
                    gmail: mail,
                    name : name,
                  })
              }
              console.log("hereio3" + uid);
                
            } else {
              userData = firebase.database().ref("/users/").on("value", function(snapshot) {
                snapshot.forEach(function(data) {
                  if (data.child("gmail").val() == result.user.email){
                    userID = data.child("uid").val();
                    userName = data.child("name").val();
                  }
                });
              });
            }
            navigation.navigate("ClipboardContainer");
            console.log("hereio4");
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var errorCredential = error.credential;
            // ...
            console.log("Error code: " + errorCode);
            console.log("Error Message: " + errorMessage);
            console.log("Email: " + email);
            console.log("Credential: " + errorCredential);
          });
      } else {
        console.log("User already signed-in to Firebase.");
      }
    });
  }
  
  console.log("here1.5")

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "978388863015-hi167o41cme3livr3vdgkoa2e4t46fia.apps.googleusercontent.com",
        iosClientId:
          "978388863015-8mr8gcj6ms0ca4rnnf0jbkfiipjlj0lq.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  function codeSignIn () {
    try{
      userData = firebase.database().ref("/users/").on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          if (data.child("uid").val() == code){
            userID = data.child("uid").val();
            userName = data.child("name").val();
          }
        });
      });
      console.log("codeSignInCompleted");
      navigation.navigate("ClipboardContainer");
    }
    catch (e) {
      return {error: true}
    }
  }
  return (
    <SafeAreaView style={styles.containerLogin}>
      <View style={{ flex: 0.1 }} />
      <Text style={styles.containerHeader}>CopyPasta</Text>
      <Text style={styles.containerSubHeader}>sharing. made easy.</Text>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.textInput}
          placeholder="CopyPasta code here!"
          onChangeText={(code) => setText(code)}
          defaultValue={LoginScreen.code}
        />
      </KeyboardAvoidingView>
      <View style={{ flex: 0.2 }} />
      <TouchableOpacity
        style={styles.button}
        onPress={codeSignIn}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{ flex: 0.1 }} />
      <TouchableOpacity style={styles.button} onPress={signInWithGoogleAsync}>
        <Text style={styles.buttonText}>Google Sign In</Text>
      </TouchableOpacity>
      <View style={{ flex: 0.15 }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLogin: {
    backgroundColor: "#01003b",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  containerHeader: {
    flex: 0.15,
    fontSize: 48,
    color: "#fff",
  },
  containerSubHeader: {
    flex: 0.25,
    fontSize: 22,
    color: "#fff",
  },
  textInput: {
    textAlign: "center",
    alignSelf: "center",
    width: 300,
    maxHeight: 100,
    backgroundColor: "#fff",
    color: "#01003b",
    fontSize: 24,
    flex: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#01003b",
    fontSize: 24,
  },
});

function generateUID() {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var charsLengthMinusOne = chars.length - 1
  var result = ''
  for (var i = 8; i > 0; --i)
      result += chars[Math.round(Math.random() * (charsLengthMinusOne))]
  return result;
}

console.log("HERE 3");
console.log(userName);
console.log(userID);
export default LoginScreen;

export { userName };
export { userID };
