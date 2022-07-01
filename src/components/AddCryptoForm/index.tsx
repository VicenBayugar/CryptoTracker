import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCrypto} from '../../store/actions/messariActions';
import {
  Container,
  Title,
  Input,
  ButtonContainer,
  ButtonDisabled,
  Button,
} from './styles';

const AddCryptoForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const {cryptos} = useSelector(state => state.cryptos);

  const searchCrypto = () => {
    dispatch(getCrypto(search, cryptos));
    setSearch('');
    navigation.goBack();
  };
  return (
    <>
      <Container>
        <Title>Add a Cryptocurrency</Title>
        <Input
          placeholder="Use a name or ticker symbol..."
          value={search}
          onChangeText={setSearch}
        />
        <ButtonContainer>
          {search.length < 1 ? (
            <ButtonDisabled onPress={searchCrypto} disabled={true}>
              <Text>Add</Text>
            </ButtonDisabled>
          ) : (
            <Button onPress={searchCrypto} disabled={false}>
              <Text>Add</Text>
            </Button>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
};

export default AddCryptoForm;
