import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const LogoutButton = ({ onPress }) => {
    return (
        <TouchableOpacity style = {{ width: 100, height: 40, borderRadius: 10, backgroundColor: '#01003b', 
                                    borderColor: 'white', alignSelf: 'end', overflow: 'hidden' }} onPress = {onPress}>
            <Text style = {{ color: 'white', fontSize: 15, alignSelf: 'center' }}> Logout </Text>
        </TouchableOpacity>
    );
};

export default LogoutButton;