import React, {useCallback, useState} from 'react';
import Modal from './CustomModal';

function useCustomModal() {
  const [visible, setVisible] = useState(false);

  const toggleModalVisible = useCallback(() => setVisible(!visible), [visible]);

  const CustomModal = useCallback(
    ({onPressCancel = toggleModalVisible, ...remainingProps}) => {
      return (
        <Modal
          visible={visible}
          onPressCancel={onPressCancel}
          {...remainingProps}
        />
      );
    },
    [toggleModalVisible, visible],
  );

  return [CustomModal, toggleModalVisible];
}

export default useCustomModal;
