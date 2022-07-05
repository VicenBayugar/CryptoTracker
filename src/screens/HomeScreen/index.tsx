import React, {useEffect} from 'react';
import {Alert, StatusBar, TouchableOpacity} from 'react-native';
import Cryptocurrencies from '../../components/Cryptocurrencies';
import {Container, AddCryptoButton, EmptyList, CryptoList} from './styles';
import {useNavigation} from '@react-navigation/native';
import theme from '../../utils/theme';
import {useSelector, useDispatch} from 'react-redux';
import {updateCryptos} from '../../store/actions/messariActions';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let {cryptos, error} = useSelector(state => state.cryptos);
  if (error.length > 0) {
    Alert.alert('Error', `${error}`);
  }
  // let timer = setTimeout(() => {
  //   if (cryptos.length > 0) {
  //     dispatch(updateCryptos(cryptos, timer));
  //   }
  //   clearTimeout(timer);
  // }, 6000);
  useEffect(() => {
    dispatch(updateCryptos(cryptos));
  }, [cryptos]);

  // setTimeout(() => clearInterval(timerId), 6001);
  // clearInterval(timerId);

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
