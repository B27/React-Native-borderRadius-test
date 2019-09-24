import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

function CustomModal({
  headerText = 'Modal',
  visible,
  onPressCancel,
  cancelText = 'cancel',
  borderRadius = undefined,
}) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onPressCancel}>
        <View style={styles.scrim}>
          {/* set borderRadius to undefined fix render*/}
          <View style={[styles.container, {borderRadius}]}>
            <Text style={styles.header}>{headerText}</Text>
            <Button onPress={onPressCancel} style={styles.button}>
              {cancelText}
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

function Button({onPress, children}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
}

const modalColors = {
  shadow: '#000',
  container: 'white',
  header: '#000000de',
  content: '#00000099',
  scrim: '#00000052',
};

const marginHorizontal = 24;

const styles = StyleSheet.create({
  container: {
    elevation: 24,
    width: 280,
    // borderRadius: 4,
    backgroundColor: modalColors.container,
  },
  header: {
    fontSize: 20,
    color: modalColors.header,
    marginHorizontal,
    marginTop: 16,
    marginBottom: 4,
  },
  button: {
    minWidth: 64,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    letterSpacing: 0.5,
    marginVertical: 8,
    marginHorizontal: 8,
    textTransform: 'uppercase',
    color: 'red',
  },
  scrim: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: modalColors.scrim,
    flex: 1,
  },
});

export default React.memo(CustomModal);
