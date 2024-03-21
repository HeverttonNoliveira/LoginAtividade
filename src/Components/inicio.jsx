import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
    return (
        <SafeAreaView>

            <Image
                style={style.Image}
                source={require("../image/inicioLogo.png")}
            />
            <Text style={style.Titulo}>Express-Coffee</Text>

            <Button textColor="#000000" style={style.button} mode="contained" onPress={() => console.log('Pressed')}>
                Começar
            </Button>

        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        Titulo: {
            marginTop: 16,
            textAlign: "center",
            fontSize: 32,
            color: "#ffffff",
            fontWeight: "bold",
        },

        Image: {
            alignSelf: "center",
            width: 180,
            height: 180,
        },

        button:{ 
            fontSize: 18,
            padding:2,
            marginTop: 24,
            borderRadius: 4,
            backgroundColor: "#f1f1f1", 
        },
    }
)