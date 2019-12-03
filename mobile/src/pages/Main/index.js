import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Text, View, AsyncStorage } from "react-native";

import socket from "socket.io-client";

import api from "../../services/api";

import Header from "../../components/Header";
import Card from "../../components/Card";

import {
  Container,
  Title,
  NavContainer,
  NavAction,
  NavActionText
} from "./styles";

export default function Main({ navigation }) {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user_id, setUser_id] = useState('No user ID yet')

  useEffect(() => {
    subscribeToEvents(user_id);
    setLoading(true);
    loadRides().then(() => setLoading(false));

  }, []);

  subscribeToEvents = (user_id) => {
    const io = socket("http://192.168.0.174:3333", {
      query: { user_id }
    });

    io.on("pago", () => {
      setLoading(true);
      loadRides().then(() => setLoading(false));
    });

    io.on('removed', () => {
      setLoading(true);
      loadRides().then(() => setLoading(false));
    })

  };

  async function loadRides() {
    const response = await api.get("/runs");

    setRides(response.data);
  }

  function handleAddNavigation() {
    navigation.navigate("Add");
  }

  function handlePaidNavigation() {
    navigation.navigate("PaidList");
  }

  renderRides = () => (
    <FlatList
      data={rides}
      showsVerticalScrollIndicator={false}
      keyExtractor={ride => ride._id}
      renderItem={({ item }) => <Card data={item} />}
    />
  );

  renderList = () =>
    rides.length ? (
      renderRides()
    ) : (

        <>
          <Text style={{ fontFamily: 'Gotham-Light', color: '#FFF' }}>Nenhuma anotação encontrada!</Text>
        </>
      );

  return (
    <>
      <Header />
      <Container>
        <Title>Caronas Recentes:</Title>
        <NavContainer>
          <NavAction onPress={handleAddNavigation}>
            <NavActionText>{"Adicionar".toUpperCase()}</NavActionText>
          </NavAction>
          <NavAction onPress={handlePaidNavigation}>
            <NavActionText>{"Pagos".toUpperCase()}</NavActionText>
          </NavAction>
        </NavContainer>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
            renderList()
          )}
      </Container>
    </>
    );

}
