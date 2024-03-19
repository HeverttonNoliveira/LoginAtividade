import React from "react";
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create(
    {
        conteiner:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor: "#000000",
        },

        Title:{
            fontSize:32,
            fontWeight: "bold",
            color: "#8605b8",
        },

        FontePadrao:{
            fontSize:16,
            color: "white"
        },

        input:{
            marginTop: 8,
            marginBottom: 8,
            fontSize:18,
            backgroundColor: "none",
            borderBottomColor: "#FFFFFF",
            color: "#FFFFFF"
        },

        buttonLogin:{
            width:"auto",   
            borderRadius: 4,
            marginTop: 8,
            marginBottom: 8,
            backgroundColor: "#8605b8",
            color: "withe"
            
        },
        
        buttonSair:{
            width:"auto",   
            borderRadius: 4,
            borderColor: "#8605b8",
            marginTop: 8,
            marginBottom: 8,
            color: "withe"
            
        }
    }
)

export default estilo;