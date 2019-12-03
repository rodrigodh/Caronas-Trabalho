import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ed4c67;
  align-items: center;
  padding: 40px 20px 0px;
`;

export const FormContainer = styled.View`
  width: 100%;
  height: 450px;
  background-color: #fff;
  border-radius: 3px;
  padding: 20px;
`;

export const FormTitle = styled.Text`
    font-family: 'Gotham-Bold';
    font-size: 18px;
    padding: 25px 10px 0px;
`;

export const FormLabel = styled.Text`
    font-family: 'Gotham-Light';
    font-size: 13px;
    padding: 20px 10px 0px;
`;

export const FormInputs = styled.View`
    margin-top: 40px;
`

export const FormInput = styled.TextInput`
    margin-bottom: 40px;
    border-width: 1px;
    border-color: #ddd;
    padding: 0px 20px 0px;
    font-family: 'Gotham-Bold';
    font-size: 10px;
    color: #333;
    height: 35px;
    width: 300px;
    border-radius: 20;
    
`;

export const FormButtons = styled.View`
    flex-direction: row;
    align-self: flex-end;
    margin-top: 30;
    margin-right: 10;
`;

export const FormSaveButton = styled.Text`
    color: #ed4c67;
    font-family: "Gotham-Bold";
    font-size: 11px;
`;
export const FormBackButton = styled.Text`
    color: #999;
    font-family: "Gotham-Bold";
    font-size: 11px;
    margin-right: 10;
`;