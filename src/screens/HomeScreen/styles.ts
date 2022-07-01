import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
`;

export const AddCryptoButton = styled.Text`
  font-size: 17px;
  color: ${theme.colors.blue};
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const EmptyList = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: ${theme.colors.blue};
  text-align: center;
  padding-top: 20px;
  padding-bottom: 15px;
  max-height: 90%;
`;

export const CryptoList = styled.FlatList`
  padding: 10px 25px 0px 25px;
`;
