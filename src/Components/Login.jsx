import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import estilo from "./estilo";




export default () => {
    const [email, setEmail] = useState('')
    const [passwords, setPasswords] = useState('')
    const [showWelcome, setShowWelcome] = useState(false);
    const [showaccount, setShowAccount] = useState(false);

    // Funcão para armazenar user a mensagem de boas vindas
    function Welcome(email) {
        let wel = "Bem vindo(a) ao sistema" + email;
        return wel;
    }

    function logult(email) {
        let sair = "Usuario" + email + "saiu do sistema";
        return sair;
    }

    //Função para mostrar a mensagem de boas vindas
    function handleEntrarPress() {
        setShowWelcome(true);
    }
    function handleSairPress() {
        setShowAccount(true);
        setShowWelcome(false);
    }

    return (
        <View style={estilo.Container}>
            <Image
                style={style.Image}
                source={require("../image/inicioLogo.png")}
            />
            <Text style={style.Title}>Faça seu Login</Text>
            <View>
                <TextInput
                    style={style.input}
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
                    style={style.input}
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

            </View>
            <View style={{ marginTop: 32, }}>
                <Button textColor="#000000" style={style.buttonLogin} mode="contained" onPress={handleEntrarPress}>
                    Entrar
                </Button>
                <Button textColor="#ffffff" style={style.buttonSair} mode="outlined" onPress={handleSairPress}>
                    Sair
                </Button>
            </View>

            {/* Mostrar mensagem de boas-vindas */}
            {showWelcome && <Text style={style.FonteSucess}>{Welcome(email)}</Text>}
            {showaccount && <Text style={style.FonteError}>{logult(email)}</Text>}

        </View>
    )
}

const style = StyleSheet.create(
    {
        Image: {
            alignSelf: 'center',
            margin: "auto",
            width: 48,
            height: 48,
        },

        Title:{
            textAlign:"center",
            fontSize:32,
            marginBottom:10,
            fontWeight: "bold",
            color: "#FFFFFF",
        },
        
        FonteSucess:{
            fontSize:14,
            color: "#52b788",
        },

        FonteError:{
            fontSize:14,
            color: "#c1121f",
        },

        input:{
            fontSize: 18,
            marginTop: 16,
            marginBottom: 16,
            fontSize:18,
            backgroundColor: "none",
            borderBottomColor: "#FFFFFF",
            color: "#FFFFFF"
        },

        buttonLogin:{ 
            fontSize: 18,
            padding:2,
            borderRadius: 4,
            marginBottom: 8,
            backgroundColor: "#FFFFFF",
            
        },
        
        buttonSair:{
            fontSize: 18,
            padding:2,
            borderRadius: 4,
            marginTop: 8,
            marginBottom: 8,
            borderColor: "#FFFFFF",
            
        }
    }

)