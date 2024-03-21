import React from "react";
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create(
    {
        Fundo:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor: "#000000",
        },

        Container:{
            width: "85%"
        },

        SubTitle:{
            fontSize: 24,
            textAlign:"center",
            fontWeight: "bold",
            color: "#FFFFFF",
        }
    }
)

export default estilo;