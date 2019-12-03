import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ed4c67;
  align-items: center;
  padding: 90px 20px 0px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const FormContainer = styled.View`
  width: 100%;
  height: 300px;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 3px;
  padding: 20px;
`;

export const FormTitle = styled.Text`
  font-family: "Gotham-Bold";
  font-size: 25px;
  text-align: center;
`;

export const FormInput = styled.TextInput`
  border: 1px solid #ddd;
  padding: 15px;
  color: #444;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 13px;
  font-family: "Gotham-Bold";
`;

export const FormAction = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px;
`;

export const FormActionText = styled.Text`
  color: #ed4c67;
  font-family: "Gotham-Bold";
`;
