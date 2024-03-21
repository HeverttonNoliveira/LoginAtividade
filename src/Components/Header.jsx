import React from "react";
import { SafeAreaView, Image, StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";

export default () => {
    return (
        <SafeAreaView style={style.container}>
            <View style={{flexDirection:"column"}}>
            <Text style={estilo.SubTitle}>Bem-Vinda</Text>
            <Text style={style.fonte}>Nico Robin</Text>
            </View>
            <Image
            style={style.Image}
            source={require("../image/UserPhoto.png")}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        Image: {
            alignSelf: 'center',
            margin: "auto",
            width: 80,
            height: 80,
            marginLeft: "auto",
        },

        container:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent: 'flex-start',
        },

        fonte:{
            fontSize:18,
            fontWeight:"bold",
            color: "#f1f1f1",

        }
    }
)