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

const Cryptocurrencies = ({item}) => {
  return (
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
          {item.data.market_data.percent_change_usd_last_24_hours.toFixed(2) >
          0 ? (
            <Arrows source={require('../../assets/arrow_up.png')} />
          ) : (
            <Arrows source={require('../../assets/arrow_down.png')} />
          )}{' '}
          {item.data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
        </Percentage>
      </PricesContainer>
    </Container>
  );
};

export default Cryptocurrencies;
