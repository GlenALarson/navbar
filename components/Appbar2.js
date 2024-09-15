import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Appbar2 = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.Content title="Navbar" />
      <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
      <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
    </Appbar.Header>
  );
};

export default Appbar2;
