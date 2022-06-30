import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddCryptoButton = styled.Text`
  font-size: 17px;
  color: #476280;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const EmptyList = styled.Text`
  font-size: 25;
  color: #476280;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const CryptoList = styled.FlatList`
  padding: 10px 25px 20px 25px;
`;
