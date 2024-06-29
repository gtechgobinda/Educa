import { Link } from "expo-router";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HELLO EDUCA</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Link href="/course" style={styles.btn}>
        <Text style={styles.text}>LOGIN</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  btn: {
    height: 40,
    backgroundColor: "#d4d4d4",
    color: "#000000",
    textAlign: "center",
    fontSize: 20,
  },
});

export default Home;
