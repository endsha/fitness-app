import { Platform, StatusBar } from 'react-native';
import { hasDynamicIsland, hasNotch } from 'react-native-device-info';

export const getStatusBarHeight = (): number => {
  // iOS status bar height
  if (Platform.OS === 'ios') {
    if (hasDynamicIsland()) {
      return 58;
    }
    if (hasNotch()) {
      return 44;
    }
    return 20;
  }
  // Android status bar height
  const statusBarHeight = StatusBar.currentHeight || 0;
  return statusBarHeight;
};

export const formatSecondsToTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours === 0) {
    return `${minutes}min`;
  }
  return `${hours}h ${minutes}min`;
};

export const getRandomSeconds = (): number => {
  const minSeconds = 30 * 60; // 30 minutes in seconds
  const maxSeconds = 2 * 60 * 60; // 2 hours in seconds
  return Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
};
