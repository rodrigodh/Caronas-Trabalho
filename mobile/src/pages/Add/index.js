import React, { useState, useEffect } from "react";
import { AsyncStorage, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import api from "../../services/api";

import { Container, FormContainer, FormTitle, FormLabel, FormInput, FormInputs, FormButtons, FormSaveButton, FormBackButton } from './styles';

export default function Add({ navigation }) {
    const [username, setUsername] = useState("");
    const [go, setGo] = useState("");
    const [back, setBack] = useState("");
    const [coment, setComent] = useState("");

    useEffect(() => {
        AsyncStorage.getItem("name").then(name => {
            setUsername(name);
        });
    }, []);

    function handleBack() {
        navigation.navigate("Main");
    }

    async function handleSubmit() {
        await api.post("/addruns", {
            name: username,
            go,
            back,
            coment
        });

        navigation.navigate("Main");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 2 }}
        >
            <Header />
            <Container>
                <FormContainer>
                    <FormTitle>Olá, Tivemos carona hoje?</FormTitle>
                    <FormLabel>Ótimo, {username} vou precisar de algumas{"\n"}informações para prosseguir.</FormLabel>
                    <FormInputs>
                        <FormInput
                            placeholder="Como foi a ída?"
                            placeholderTextColor="#999"
                            autoCorrect={true}
                            value={go}
                            onChangeText={setGo}
                        />

                        <FormInput
                            placeholder="Como foi a volta?"
                            placeholderTextColor="#999"
                            autoCorrect={true}
                            value={back}
                            onChangeText={setBack}
                        />

                        <FormInput
                            placeholder="Tem algo a mais para comentar?"
                            placeholderTextColor="#999"
                            autoCorrect={true}
                            value={coment}
                            onChangeText={setComent}
                        />
                    </FormInputs>

                    <FormButtons>
                        <TouchableOpacity onPress={handleBack}>
                            <FormBackButton>
                                VOLTAR
                        </FormBackButton>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSubmit}>
                            <FormSaveButton>
                                SALVAR
                        </FormSaveButton>
                        </TouchableOpacity>
                    </FormButtons>
                </FormContainer>
            </Container>
        </KeyboardAvoidingView>
    );
}