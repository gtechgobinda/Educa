import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="course" options={{ headerShown: false }}/>
        <Tabs.Screen name="college" options={{ headerShown: false }}/>
        <Tabs.Screen name="liveClass" options={{ headerShown: false }}/>
        <Tabs.Screen name="question" options={{ headerShown: false }}/>
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
