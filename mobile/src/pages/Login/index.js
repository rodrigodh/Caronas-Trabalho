import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform, AsyncStorage } from "react-native";

import api from "../../services/api";

import Header from "../../components/Header";

import {
  Container,
  FormContainer,
  FormTitle,
  FormInput,
  FormAction,
  FormActionText
} from "./styles";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");

  async function checkUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      navigation.navigate("Main");
    }
  }

  async function handleSubmit() {
    const response = await api.post("/user", {
      username
    });

    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);
    await AsyncStorage.setItem("name", username);

    navigation.navigate("Main");
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 2 }}
    >
      <Header />
      <Container>
        <FormContainer>
          <FormTitle>Quem é você?</FormTitle>
          <FormInput
            placeholder="Digite seu nome aqui!"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={username}
            onChangeText={setUsername}
          />
          <FormAction onPress={handleSubmit}>
            <FormActionText>{"Entrar".toUpperCase()}</FormActionText>
          </FormAction>
        </FormContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
