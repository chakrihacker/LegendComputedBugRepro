/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import React from 'react';
import {SomeScreen} from './SomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
