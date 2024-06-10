import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown

Animated splash screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 4: Splashscreen' }} />
      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href='/day4/animation' asChild>
        <Button title='Go to the animation' />
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default DayDetailsScreen;
