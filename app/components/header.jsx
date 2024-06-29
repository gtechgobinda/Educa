import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Header = ({ toggleSidebar }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
        <Ionicons name="menu" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Course</Text>
      <TouchableOpacity style={styles.notificationButton}>
        <Ionicons name="notifications" size={24} color="white" />
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#002a3b',
    width: '100%',
    zIndex:10001
  },
  menuButton: {
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationButton: {
    padding: 5,
  },
  notificationBadge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'yellow',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#002a3b',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default Header;
