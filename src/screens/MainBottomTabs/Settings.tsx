import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Layout from '@constants/Layout';
import Themes from '@constants/Themes';

export default function Settings(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Layout.flexCol.center,
    backgroundColor: Themes.light.backgroundColor,
    flex: 1,
  },
});
