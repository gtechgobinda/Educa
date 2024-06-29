import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Home = () => {
  return (
    // <View>
    //   <Text>index</Text>
    // </View>
    <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>
  )
}

export default Home

const styles = StyleSheet.create({})