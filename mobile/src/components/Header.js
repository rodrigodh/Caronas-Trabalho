import React from 'react';
import { StyleSheet, View, Image, StatusBar, AsyncStorage, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import logo from '../../assets/logo.png';

function Header({ navigation }) {

    async function logOff() {
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('name');

        navigation.navigate('Login');
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={logOff}>
                <Image source={logo} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#ED4C67',
        justifyContent: "center",
        alignItems: 'center',
    },

    image: {
        height: 75,
        width: 75,
        marginTop: StatusBar.currentHeight + 10,
        resizeMode: 'contain'
    }
});

export default withNavigation(Header);