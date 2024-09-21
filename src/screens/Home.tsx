import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
