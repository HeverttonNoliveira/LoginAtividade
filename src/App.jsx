import React from "react";
import { SafeAreaView, Text } from "react-native";

import estilo from "./Components/estilo";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";

export default () =>{
    return(
        <SafeAreaView style={estilo.conteiner}>
            {/* <Login/> */}
            <Cadastro/>
        </SafeAreaView>
    )
}