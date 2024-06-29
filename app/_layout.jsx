import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const RootLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
    // <Tabs/>
    <Tabs>
    <Tabs.Screen name="course" options={{ headerShown: false }}/>
    <Tabs.Screen name="college" options={{ headerShown: false }}/>
    <Tabs.Screen name="liveClass" options={{ headerShown: false }}/>
    <Tabs.Screen name="question" options={{ headerShown: false }}/>
  </Tabs>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
