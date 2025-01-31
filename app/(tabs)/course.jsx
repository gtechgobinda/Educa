import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link, Tabs } from "expo-router";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
import CourseContent from "../components/courseContent.jsx";

const Course = () => {
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
        {/* <Text>COURSE HELLOOOOO</Text> */}
        <CourseContent/>
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
    // position:'absolute',
    // top:'15%',
  },
});

export default Course;
