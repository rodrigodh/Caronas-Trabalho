import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ed4c67;
  padding: 40px 20px 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Gotham-Light";
  margin-top: 30px;
`;

export const NavContainer = styled.View`
  flex-direction: row;
  margin: 20px 0;
`;
export const NavAction = styled.TouchableOpacity`
  background-color: #fff;
  padding: 5px 10px;
  margin-right: 20px;
  border-radius: 3px;
`;
export const NavActionText = styled.Text`
  color: #ed4c67;
  font-family: "Gotham-Bold";
`;
