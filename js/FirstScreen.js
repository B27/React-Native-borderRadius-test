import React from 'react';
import {Button} from 'react-native';
import BugScreen from './BugScreen';

export default function FirstScreen({navigation}) {
  return (
    <>
      <Button
        title="navigate to second screen"
        onPress={() => navigation.navigate('second')}
      />
      <BugScreen />
    </>
  );
}
