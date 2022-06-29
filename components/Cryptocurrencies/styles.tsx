import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 25px;
  border-color: #a7a7a7;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Icon = styled.Image`
  width: 50;
  height: 50;
`;

export const NameContainer = styled.View`
  margin-left: 10;
`;

export const Title = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: black;
`;

export const PricesContainer = styled.View`
  margin-left: auto;
`;

export const Price = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: black;
  text-align: right;
`;

export const Percentage = styled.Text`
  text-align: right;
`;

export const Arrows = styled.Image`
  width: 20;
  height: 20;
`;
