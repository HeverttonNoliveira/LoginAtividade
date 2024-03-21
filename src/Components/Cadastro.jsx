import React, { useState } from "react"
import { Image, View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import estilo from "./estilo";

export default () => {

    //Input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddres] = useState('');
    const [homenum, setHomeNum] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    //Buttons
    const [showcrate, setShowCreate] = useState(false);
    const [showupdate, setShowUpdate] = useState(false);
    const [showdelete, setShowDelete] = useState(false);
    const [showsearch, setShowSearch] = useState(false);

    // Funcão para armazenar user a mensagem de boas vindas

    function Create() {
        let cre = "usuario cadastrado";
        return cre;
    }
    function Update() {
        let upd = "alteração feita com suscesso";
        return upd;
    }
    function Delete() {
        let del = "dados deletado com suscesso";
        return del;
    }
    function Search() {
        let sea = "Pesquisa realizado com sucesso";
        return sea;
    }

    //Função para mostrar a mensagem de boas vindas
    function handleCadastrarPress() {
        setShowCreate(true);
    }

    function handleUpdatePress() {
        setShowUpdate(true);
    }

    function handleDeletePress() {
        setShowDelete(true);
    }

    function handleSearchPress() {
        setShowSearch(true);
    }


    return (
        <View>

            <Image
                style={style.Image}
                source={require("../image/inicioLogo.png")}
            />
            <Text style={estilo.Title}>Criar Cadastro</Text>

            <TextInput
                style={estilo.input}
                label="Nome"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Insira seu nome"
                keyboardType="email-address"
                maxLength={50}
            />
            <TextInput
                style={estilo.input}
                label="E-mail"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Insira E-mail"
                keyboardType="email-address"
                maxLength={50}
            />
            <TextInput
                style={estilo.input}
                label="Telefone"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder="1194541389"
                keyboardType="number-pad"
                maxLength={11}
            />
            <TextInput
                style={estilo.input}
                label="Endereço"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={address}
                onChangeText={(text) => setAddres(text)}
                placeholder="Insira seu Endereço"
                keyboardType="ascii-capable"
                maxLength={50}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={estilo.input}
                    label="Número"
                    mode="flat"
                    forceTextInputFocus={Boolean}
                    textColor="#FFFFFF"
                    value={homenum}
                    onChangeText={(text) => setHomeNum(text)}
                    placeholder="Insira seu Endereço"
                    keyboardType="number-pad"
                    maxLength={10}
                />
                <TextInput
                    style={estilo.input}
                    label="CEP"
                    mode="flat"
                    forceTextInputFocus={Boolean}
                    textColor="#FFFFFF"
                    value={cep}
                    onChangeText={(text) => setCep(text)}
                    placeholder="Insira seu CEP"
                    keyboardType="number-pad"
                    maxLength={8}
                />
            </View>
            <TextInput
                style={estilo.input}
                label="Cidade"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={city}
                onChangeText={(text) => setCity(text)}
                placeholder="Insira sua Cidade"
                keyboardType="ascii-capable"
                maxLength={8}
            />
            <TextInput
                style={estilo.input}
                label="Estado"
                mode="flat"
                forceTextInputFocus={Boolean}
                textColor="#FFFFFF"
                value={state}
                onChangeText={(text) => setState(text)}
                placeholder="Insira seu Estado"
                keyboardType="ascii-capable"
                maxLength={8}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Button style={estilo.buttonLogin} mode="contained" onPress={handleCadastrarPress}>
                    Cadastrar
                </Button>

                <Button style={estilo.buttonLogin} mode="contained" onPress={handleUpdatePress}>
                    Alterar
                </Button>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Button style={estilo.buttonLogin} mode="contained" onPress={handleDeletePress}>
                    Excluir
                </Button>

                <Button style={estilo.buttonLogin} mode="contained" onPress={handleSearchPress}>
                    Pesquisar
                </Button>

            </View>


            {/* Mostrar mensagem de boas-vindas */}
            {showcrate && <Text style={estilo.FontePadrao}>{Create()}</Text>}
            {showupdate && <Text style={estilo.FontePadrao}>{Update()}</Text>}
            {showdelete && <Text style={estilo.FontePadrao}>{Delete()}</Text>}
            {showsearch && <Text style={estilo.FontePadrao}>{Search()}</Text>}

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