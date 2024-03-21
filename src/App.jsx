import React from "react";
import { SafeAreaView, Text } from "react-native";

import estilo from "./Components/estilo";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Inicio from "./Components/inicio";
import Home from "./Components/Home";

export default () =>{
    return(
        <SafeAreaView style={estilo.Fundo}>
            <Home/>
            {/* <Inicio/> */}
            {/* <Login/> */}
            {/* <Cadastro/> */}
        </SafeAreaView>
    )
}