import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCrypto} from '../../store/actions/messariActions';
import {
  Container,
  Title,
  Input,
  ButtonContainer,
  EmptyInputMessage,
  Button,
} from './styles';

const AddCryptoForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [searchIsEmpty, setSearchIsEmpty] = useState(false);

  const searchCrypto = () => {
    if (search === '') {
      setSearchIsEmpty(true);
      setTimeout(() => {
        setSearchIsEmpty(false);
      }, 2000);
      return;
    }

    dispatch(getCrypto(search));
    setSearch('');
    navigation.navigate('Home');
  };
  return (
    <>
      <Container>
        <Title>Add a Cryptocurrency</Title>
        <Input
          placeholder="Use a name or ticker symbol..."
          value={search}
          onChangeText={val => setSearch(val)}
        />
        <ButtonContainer>
          {searchIsEmpty ? (
            <EmptyInputMessage>
              Write the name or symbol of a cryptocurrency...
            </EmptyInputMessage>
          ) : null}
          <Button onPress={searchCrypto}>
            <Text>Add</Text>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default AddCryptoForm;
