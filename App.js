import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DestinationSearch from './Screens/DestinationSearch/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <DestinationSearch/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
