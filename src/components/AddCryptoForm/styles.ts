import styled from 'styled-components/native';
import theme from '../../utils/theme';

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
  color: ${theme.colors.black};
  margin-bottom: 20px;
  text-align: left;
  width: 88%;
`;

export const Input = styled.TextInput`
  height: 60px;
  border-color: ${theme.colors.grey};
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
  background-color: ${theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
`;

export const ButtonDisabled = styled.TouchableOpacity`
  height: 50px;
  width: 50%;
  margin-left: auto;
  background-color: ${theme.colors.yellowDisabled};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
`;
