import {Icon, useStyleSheet} from '@ui-kitten/components';
import React, {ReactNode, useRef} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {themedStyles} from './swipe.styles';

interface SwipeProps {
  children: ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}

const Swipe = ({onEdit, onDelete, children}: SwipeProps) => {
  const styles = useStyleSheet(themedStyles);
  const swipeableRef = useRef<Swipeable>(null);

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<number>,
  ) => {
    const trans = dragAnimatedValue.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, 0, 100],
      extrapolate: 'clamp',
    });

    const onEditPress = () => {
      swipeableRef.current?.close();
      onEdit();
    };

    return (
      <View style={styles.rightAction}>
        <TouchableOpacity onPress={onEditPress}>
          <View style={[styles.actionButton, styles.editAction]}>
            <View style={styles.iconWrapper}>
              <Icon name="edit-outline" />
            </View>
            <Animated.Text
              style={[styles.actionText, {transform: [{translateX: trans}]}]}>
              Edit
            </Animated.Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <View style={[styles.actionButton, styles.deleteAction]}>
            <View style={styles.iconWrapper}>
              <Icon name="trash-outline" />
            </View>
            <Animated.Text
              style={[styles.actionText, {transform: [{translateX: trans}]}]}>
              Delete
            </Animated.Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootLeft={false}
      ref={swipeableRef}>
      {children}
    </Swipeable>
  );
};

export default Swipe;
