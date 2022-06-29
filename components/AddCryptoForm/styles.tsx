import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  text-align: left;
  width: 88%;
`;

export const Input = styled.TextInput`
  height: 60px;
  border-color: #bbbaba;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  width: 88%;
`;

export const ButtonContainer = styled.View`
  width: 88%;
`;

export const EmptyInputMessage = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50%;
  margin-left: auto;
  background-color: #e6c301;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
`;
