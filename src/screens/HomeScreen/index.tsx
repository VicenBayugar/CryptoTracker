import React from 'react';
import {Alert, StatusBar, TouchableOpacity} from 'react-native';
import Cryptocurrencies from '../../components/Cryptocurrencies';
import {Container, AddCryptoButton, EmptyList, CryptoList} from './styles';
import {useNavigation} from '@react-navigation/native';
import theme from '../../utils/theme';
import {useSelector} from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const {cryptos, error} = useSelector(state => state.cryptos);
  if (error.length > 0) {
    Alert.alert('Error', `${error}`);
  }
  return (
    <>
      <StatusBar backgroundColor={theme.colors.blue} />
      <Container>
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
          onPress={() => navigation.navigate('AddCryptoScreen')}>
          <AddCryptoButton>+ Add a Cryptocurrency</AddCryptoButton>
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default Home;
