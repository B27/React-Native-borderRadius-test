import React, {useState} from 'react';
import {View, Button, Text, ScrollView} from 'react-native';
import {useCustomModal} from './CustomModal';
import styles from './styles';

export default function BugScreen({}) {
  const [visible, setVisible] = useState(true);
  const [CustomModal, toggleModalVisible] = useCustomModal();
  const [modalBorderRadius, setModalBorderRadius] = useState(8);
  const [componentsBorderRadius, setComponentsBorderRadius] = useState(8);

  return (
    <>
      <CustomModal borderRadius={modalBorderRadius} />
      <Button title="toggle modal visible" onPress={toggleModalVisible} />
      <Button title="swap components" onPress={() => setVisible(!visible)} />
      <View style={{flexDirection: 'row'}}>
        <Text>Set modalBorderRadius to</Text>
        <Button title="8" onPress={() => setModalBorderRadius(8)} />
        <Button title="null" onPress={() => setModalBorderRadius(null)} />
        <Button
          title="undefined"
          onPress={() => setModalBorderRadius(undefined)}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text>Set componentsBorderRadius to </Text>
        <Button title="8" onPress={() => setComponentsBorderRadius(8)} />
        <Button title="null" onPress={() => setComponentsBorderRadius(null)} />
        <Button
          title="undefined"
          onPress={() => setComponentsBorderRadius(undefined)}
        />
      </View>

      {visible ? (
        <TwoIntersectView borderRadius={componentsBorderRadius} />
      ) : (
        <ViewWithShadow borderRadius={componentsBorderRadius} />
      )}
    </>
  );
}

function ViewWithShadow({borderRadius}) {
  return <View style={[styles.abs3, {borderRadius}]} />;
}

function TwoIntersectView({borderRadius}) {
  return (
    <>
      <View style={styles.abs}>
        <Text>First element</Text>
      </View>
      <View style={[styles.abs2, {borderRadius}]}>
        <Text>Second element</Text>
      </View>
    </>
  );
}
