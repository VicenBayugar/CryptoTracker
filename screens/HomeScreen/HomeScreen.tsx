import React from 'react';
import {FlatList, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies';
import {Container, AddCryptoButton} from './styles';

const Home = ({navigation}) => {
  // const {cryptos} = useSelector(state => state.cryptos);
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
  ];
  return (
    <>
      <StatusBar backgroundColor={'#476280'} />
      <Container>
        <ScrollView>
          <FlatList
            data={cryptos}
            keyExtractor={item => item.data.id}
            renderItem={({item}) => <Cryptocurrencies item={item} />}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Back to list')}>
            <AddCryptoButton>+ Add a Cryptocurrency</AddCryptoButton>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
