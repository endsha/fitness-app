import Layout from '@constants/Layout';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Activities(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Activities Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Layout.flexCol.center,
    flex: 1,
    backgroundColor: 'white',
  },
});
