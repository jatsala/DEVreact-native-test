import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1' }} />
      <Text>Day Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DayDetailsScreen;
