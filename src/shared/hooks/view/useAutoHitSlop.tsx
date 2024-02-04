import { useCallback, useState } from 'react';
import { Insets, LayoutChangeEvent, Platform } from 'react-native';

type FrameSize = {
  x: number;
  y: number;
};

const MIN_FRAME_IOS = 44;
const MIN_FRAME_ANDROID = 48;

const getHitSlopForSize = ({ x, y }: FrameSize): Insets => {
  let horizontalFrame = 0;
  let verticalFrame = 0;
  const platformValue = Platform.OS === 'ios' ? MIN_FRAME_IOS : MIN_FRAME_ANDROID;

  if (x < platformValue) {
    horizontalFrame = Math.round((platformValue - x) / 2);
  }

  if (y < platformValue) {
    verticalFrame = Math.round((platformValue - y) / 2);
  }

  return {
    top: verticalFrame,
    right: horizontalFrame,
    bottom: verticalFrame,
    left: horizontalFrame,
  };
};

export const useAutoHitSlop = () => {
  const [frameSize, setFrameSize] = useState<FrameSize>({
    x: 0,
    y: 0,
  });

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const {
        nativeEvent: { layout },
      } = event;

      if (layout.width !== frameSize.x && layout.height !== frameSize.y) {
        setFrameSize({ x: layout.width, y: layout.height });
      }
    },
    [frameSize],
  );

  return { insets: getHitSlopForSize(frameSize), onLayout };
};
