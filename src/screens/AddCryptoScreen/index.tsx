import React from 'react';
import {StatusBar} from 'react-native';
import theme from '../../utils/theme';

import AddCryptoForm from '../../components/AddCryptoForm';

const AddCryptoScreen = () => (
  <>
    <StatusBar backgroundColor={theme.colors.white} />
    <AddCryptoForm />
  </>
);

export default AddCryptoScreen;
