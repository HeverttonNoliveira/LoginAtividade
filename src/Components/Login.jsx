import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import estilo from "./estilo";




export default () => {
    const [email, setEmail] = useState('')
    const [passwords, setPasswords] = useState('')
    const [showWelcome, setShowWelcome] = useState("");
    const [showaccount, setShowAccount] = useState("");

    // Funcão para armazenar user a mensagem de boas vindas
    function Welcome(email) {
        let wel = "Bem vindo(a) ao sistema " + email;
        return wel;
    }

    function logult(email) {
        let sair = "Usuario " + email + " saiu do sistema";
        return sair;
    }

    //Função para mostrar a mensagem de boas vindas
    function handleEntrarPress() {
        setShowWelcome(true);
        setShowWelcome(false);
    }
    function handleSairPress() {
        setShowAccount(true);
    }


    return (
        <View>
            <Image
                style={style.Image}
                source={require("../image/Logo.png")} 
            />
            <Text style={estilo.Title}>Faça seu Login</Text>


            <TextInput
                style={estilo.input}
                label="Usuario"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Insira seu nome de login"
                keyboardType="email-address"
                maxLength={50}
            />

            <TextInput
                style={estilo.input}
                label="Senha"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={passwords}
                onChangeText={passwords => setPasswords(passwords)}
                placeholder="Insira sua Senha"
                secureTextEntry={true}
                maxLength={20}
            />


            <Button  style={estilo.buttonLogin} mode="contained"   onPress={handleEntrarPress}>
                Entrar
            </Button>

            <Button  style={estilo.buttonSair} mode="outlined" onPress={handleSairPress}>
                Sair
            </Button>

            {/* Mostrar mensagem de boas-vindas */}
            {showWelcome && <Text style={estilo.FontePadrao}>{Welcome(email)}</Text>}
            {showaccount && <Text style={estilo.FontePadrao}>{logult(email)}</Text>}

        </View>
    )
}

const style = StyleSheet.create(
    {
        Image: {
            margin: "auto",
            width: 48,
            height: 48,
        }
    }

)