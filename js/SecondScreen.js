import React from 'react';
import {Button} from 'react-native';
import BugScreen from './BugScreen';

export default function SecondScreen({navigation}) {
  return (
    <>
      <Button
        title="navigate to first screen"
        onPress={() => navigation.navigate('first')}
      />
      <BugScreen />
    </>
  );
}
