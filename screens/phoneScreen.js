import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import call from 'react-native-phone-call';

export default function PhoneScreen() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const makePhoneCall = () => {
        if (!phoneNumber) {
            Alert.alert("Erro", "Por favor, insira um número de telefone.");
            return;
        }

        const args = {
            number: phoneNumber,
            prompt: false // Set to false to make the call without prompt
        };

        call(args).catch(console.error);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fazer uma ligação</Text>
            <TextInput
                style={styles.input}
                keyboardType='phone-pad'
                placeholder='Digite o número'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button title='Ligar' onPress={makePhoneCall} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', padding: 20},
    title: {fontSize: 24, marginBottom: 20, textAlign: 'center'},
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 20,
        borderRadius: 6,
    },
});
