import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link, Tabs } from "expo-router";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";

const Question = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <TouchableOpacity style={styles.overlay} onPress={toggleSidebar} />
      )}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <View style={styles.content}>
        <Text>QUESTION</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
  overlay: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Question;
