import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
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

export default function PaidList({ navigation }) {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPaid, setShowPaid] = useState(false);

  useEffect(() => {
    subscribeToEvents();
    setLoading(true);
    loadRides().then(() => setLoading(false));
  }, []);

  subscribeToEvents = () => {
    const io = socket("http://192.168.0.174:3333");

    io.on("pago", () => {
      setLoading(true);
      loadRides().then(() => setLoading(false));
    });


    io.on("removed", () => {
      setLoading(true);
      loadRides().then(() => setLoading(false));
    });

  };

  async function loadRides() {
    const response = await api.get("/runs");

    setRides(response.data);
  }

  function handleBack() {
    navigation.navigate("Main");
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
        <Text style={{fontFamily: 'Gotham-Light', color: '#FFF'}}>Nenhuma anotação foi paga!</Text>
      </>
    );

  return (
    <Container>
      <Header />
      <Title>Caronas Pagas:</Title>
      <NavContainer>
        <NavAction onPress={handleBack}>
          <NavActionText>{"Voltar".toUpperCase()}</NavActionText>
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
  );
}
