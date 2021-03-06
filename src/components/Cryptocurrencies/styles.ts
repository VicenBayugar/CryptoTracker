import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.TouchableOpacity`
  padding-top: 25px;
  padding-bottom: 25px;
  border-color: ${theme.colors.grey};
  border-bottom-width: 0.19px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const NameContainer = styled.View`
  padding-left: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.black};
`;

export const PricesContainer = styled.View`
  margin-left: auto;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.black};
  text-align: right;
`;

export const Percentage = styled.Text`
  text-align: right;
`;

export const Arrows = styled.Image`
  width: 20px;
  height: 20px;
`;
