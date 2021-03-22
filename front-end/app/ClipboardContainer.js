import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,MyAppHeaderText} from 'react-native';

const ClipboardContainer = () => {
    const [code, setText] = useState('');
    return (
        <View>
            <Text
              style={externalStyle.textSTYLE}
            >Clipboard</Text>
            
            <Text
            style= {externalStyle.textCLIP1}
            >[Date/Time]</Text>

            <Text
            style= {externalStyle.textCLIP2}
            >[Date/Time]</Text>

            <Text
            style= {externalStyle.textCLIP3}
            >[Date/Time]</Text>
        </View>
    );
  };

  const externalStyle=StyleSheet.create({
    
    textSTYLE:{
        flex:.25,
        height:80,
        width:300,
        color: 'blue',
        fontSize:40,
        backgroundColor: 'white',
        alignItems: "center",
        textAlign:"left",
        textAlignVertical: "center",
        
        
    },
    textCLIP1:{
        flex:1,
        height:200,
        width:300,
        color: 'black',
        fontSize:30,
        
        backgroundColor: 'white',
        alignItems: "center",
        textAlign:"center",
        justifyContent: "center",
        marginTop : 100,
        marginBottom : 100,
    },
    textCLIP2:{
        flex:1,
        height:200,
        width:300,
        color: "black",
        fontSize:30,
        backgroundColor: "white",
        alignItems: "center",
        textAlign:"center",
        marginBottom : 100,
    },
    textCLIP3:{
        flex:1,
        height:200,
        width:300,
        color: "black",
        fontSize:30,
        backgroundColor: "white",
        alignItems: "center",
        textAlign:"center",


    }

})



  export default ClipboardContainer;

  
