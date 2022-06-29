import React from 'react';
import {FlatList, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Cryptocurrencies from '../../components/Cryptocurrencies/Cryptocurrencies';
import {Container, AddCryptoButton} from './styles';

const Home = ({navigation}) => {
  const {cryptos} = useSelector(state => state.cryptos);

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
