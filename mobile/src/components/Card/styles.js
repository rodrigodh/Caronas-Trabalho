import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Anotation = styled.Text`
  color: #ed4c67;
  font-family: "Gotham-Bold";
  padding: 3px 0;
`;

export const InformationContainer = styled.View`
  margin: 10px 0;
  font-size: 12px;

`;

export const Information = styled(Anotation)`
  color: #333;
  font-size: 12px;

`;

export const Discription = styled(Anotation)`
  color: #999;
  font-size: 12px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Action = styled.TouchableOpacity`
  padding: 5px;
  margin-left: 5px;

`;

export const ActionText = styled.Text`
  font-family: "Gotham-Bold";
  font-size: 12px;

  color: ${props => (props.pay ? "#ed4c67" : "#999")};
`;
