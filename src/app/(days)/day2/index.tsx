import { Link, Stack } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 2: Onboarding' }} />
      <Text>Day Details Screen</Text>

      <Link href='/day2/onboarding' asChild>
        <Button title='Go to onboarding' />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DayDetailsScreen;
