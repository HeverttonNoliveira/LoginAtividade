import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./Header";

export default () =>{
    return(
        <SafeAreaView>
            <Header/>

            <View style={{flexDirection:"row"}}>

            <View style={style.intes}>
                <Image style={style.Image} source={require("../image/QuemSomos.png")}/>
                <Text style={style.fonte}>Quem Somos</Text>
            </View>

            <View style={style.intes}>
                <Image style={style.Image} source={require("../image/Perfil.png")}/>
                <Text style={style.fonte}>Editar Perfil</Text>
            </View>

            </View>

        </SafeAreaView>

    )
}

const style = StyleSheet.create(
    {
        Image:{
            width: 100,
            height: 100
        },

        fonte:{
            fontSize: 18,
            color: "#FFFFFF"
        },

        intes:{
            margin: 24,
            flexDirection:"column",
            textAlign:"center",
        }
        
    }
)