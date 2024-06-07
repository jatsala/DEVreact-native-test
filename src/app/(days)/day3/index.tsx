import { Link, Stack } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
      <Text>Day Details Screen</Text>

      <Link href='/day3/editor' asChild>
        <Button title='Go to editor' />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DayDetailsScreen;
