import React from 'react';
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import Cryptocurrencies from '../../components/Cryptocurrencies';
import {Container, AddCryptoButton, EmptyList, CryptoList} from './styles';
import {useNavigation} from '@react-navigation/native';
import theme from '../../utils/theme';

const Home = () => {
  const navigation = useNavigation();
  const cryptos = [
    {
      data: {
        id: '5da7bde4-61e9-4a6f-9fc3-7ed66effb198',
        symbol: 'BUSD',
        name: 'Binance USD',
        market_data: {
          price_usd: 0.99998,
          percent_change_usd_last_24_hours: 0.059,
        },
      },
    },
    {
      data: {
        id: '1e31218a-e44e-4285-820c-8282ee222035',
        symbol: 'BTC',
        name: 'Bitcoin',
        market_data: {
          price_usd: 20027.0629,
          percent_change_usd_last_24_hours: -2.059,
        },
      },
    },
    {
      data: {
        id: '21c795f5-1bfd-40c3-858e-e9d7e820c6d0',
        symbol: 'ETH',
        name: 'Ethereum',
        market_data: {
          price_usd: 1014.6138,
          percent_change_usd_last_24_hours: -8.92336,
        },
      },
    },
  ];

  return (
    <>
      <StatusBar backgroundColor={theme.colors.blue} />
      <Container>
        <ScrollView>
          {cryptos.length > 0 ? (
            <CryptoList
              data={cryptos}
              keyExtractor={item => item.data.id}
              renderItem={({item}) => <Cryptocurrencies item={item} />}
            />
          ) : (
            <EmptyList>The list is empty!</EmptyList>
          )}
          <TouchableOpacity
            onPress={navigation.navigate.bind(null, 'AddCryptoScreen')}>
            <AddCryptoButton>+ Add a Cryptocurrency</AddCryptoButton>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
