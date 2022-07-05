import React from 'react';
import {Alert, Text} from 'react-native';
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
import {useDispatch} from 'react-redux';
import {deleteCrypto} from '../../store/actions/messariActions';

const Cryptocurrencies = ({item}: {item: CurrencyData}) => {
  const dispatch = useDispatch();
  const deleteCoin = () => {
    Alert.alert('Delete', 'Do you want to delete this crypto?', [
      {text: 'No', style: 'cancel'},
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteCrypto(item.data.id));
        },
      },
    ]);
  };

  return (
    <Container onPress={deleteCoin}>
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
          {item.data.market_data.percent_change_usd_last_24_hours > 0 ? (
            <Arrows source={ArrowUp} />
          ) : (
            <Arrows source={ArrowDown} />
          )}{' '}
          {item.data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
        </Percentage>
      </PricesContainer>
    </Container>
  );
};

export default Cryptocurrencies;
