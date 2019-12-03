import React from "react";
import { Alert } from "react-native";
import { withNavigation } from "react-navigation";

import api from "../../services/api";

import {
  Container,
  Anotation,
  InformationContainer,
  Information,
  Discription,
  ActionsContainer,
  Action,
  ActionText
} from "./styles";

function Card({ data, navigation }) {
  async function handlePaid(id) {
    const response = await api.post(`/payrun/${id}`);

    const { name } = response.data;

    Alert.alert(`A Anotação de ${name} foi paga com sucesso!`);
  }

  function fixData(data) {
    var today = data;
    var arr = today.split('-');

    var yy = arr[0];
    var mm = arr[1];
    var dd = arr[2].split('T');
    var dd = dd[0];

    today = dd + '/' + mm + '/' + yy;

    return today
  }

  async function handleRemove(id) {
    const response = await api.post("/deleteruns", {
      id
    });

    console.log(id);


    const { message } = response.data;

    Alert.alert(message);
  }
  const {
    state: { routeName }
  } = navigation;
  let rides = !data.paid;
  if (routeName === "PaidList") {
    rides = data.paid;
  }
  return (
    <>
      {rides && (
        <Container>
          <Anotation>
            {"Anotação ".toUpperCase()} {data.name}
          </Anotation>
          <InformationContainer>
            <Information>
              {"Ida: ".toUpperCase()} {data.go}
            </Information>
            <Information>
              {"Volta: ".toUpperCase()} {data.back}
            </Information>
          </InformationContainer>
          <Discription>
            {"Descrição: ".toUpperCase()} {data.coment}
          </Discription>

          <Discription>
            {"Data: ".toUpperCase()} {fixData(data.createdAt)}
          </Discription>
          <ActionsContainer>
            <Action onPress={() => handleRemove(data._id)}>
              <ActionText>{"Remover".toUpperCase()}</ActionText>
            </Action>
            {routeName !== "PaidList" && (
              <Action onPress={() => handlePaid(data._id)}>
                <ActionText pay>{"Pago?".toUpperCase()}</ActionText>
              </Action>
            )}
          </ActionsContainer>
        </Container>
      )}
    </>
  );
}

export default withNavigation(Card);
