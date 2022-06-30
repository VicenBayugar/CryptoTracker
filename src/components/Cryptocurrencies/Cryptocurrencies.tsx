import React from 'react';
import {Text} from 'react-native';
import {
  Container,
  Icon,
  NameContainer,
  Title,
  PricesContainer,
  Price,
  Percentage,
  Arrows,
} from './styles';
import ArrowUp from '../../assets/arrow_up.png';
import ArrowDown from '../../assets/arrow_down.png';
import CurrencyData from '../../interfaces/CurrencyData';

const Cryptocurrencies = ({item}: {item: CurrencyData}) => (
  <Container>
    <Icon
      source={{
        uri: `https://messari.io/asset-images/${item.data.id}/32.png`,
      }}
    />
    <NameContainer>
      <Title>{item.data.name}</Title>
      <Text>{item.data.symbol}</Text>
    </NameContainer>
    <PricesContainer>
      <Price>${item.data.market_data.price_usd.toFixed(2)}</Price>
      <Percentage>
        {Number(item.data.market_data.percent_change_usd_last_24_hours) > 0 ? (
          <Arrows source={ArrowUp} />
        ) : (
          <Arrows source={ArrowDown} />
        )}{' '}
        {item.data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
      </Percentage>
    </PricesContainer>
  </Container>
);

export default Cryptocurrencies;
