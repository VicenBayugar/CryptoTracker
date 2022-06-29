import React from 'react';
import {StatusBar} from 'react-native';

import AddCryptoForm from '../../components/AddCryptoForm/AddCryptoForm';

const AddCryptoScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <AddCryptoForm />
    </>
  );
};

export default AddCryptoScreen;
