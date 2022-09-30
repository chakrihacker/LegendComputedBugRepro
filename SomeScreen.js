import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {makeApiCall, myComputed} from './model';

export const SomeScreen = () => {
  useEffect(() => {
    makeApiCall();
  }, []);

  if (myComputed.isInit.get()) {
    return (
      <View style={styles.root}>
        <Text>{'Init'}</Text>
      </View>
    );
  }

  if (myComputed.isPending.get()) {
    return (
      <View style={styles.root}>
        <Text>{'Pending'}</Text>
      </View>
    );
  }

  if (myComputed.isError.get()) {
    return (
      <View style={styles.root}>
        <Text>{'Pending'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Text>{'Success'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
