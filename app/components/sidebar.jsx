import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <View style={[styles.sidebar, isOpen ? styles.sidebarOpen : styles.sidebarClosed]}>
      <Text style={styles.sidebarContent}>Sidebar Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: '12%',
    bottom: 0,
    left: 0,
    width: '70%',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1000,
    transform: [{ translateX: -500 }],
  },
  sidebarOpen: {
    transform: [{ translateX: 0 }],
  },
  sidebarClosed: {
    transform: [{ translateX: -500 }],
    position:'absolute',
    right:0,
  },
  closeButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sidebarContent: {
    marginTop: 20,
  },
});

export default Sidebar;
