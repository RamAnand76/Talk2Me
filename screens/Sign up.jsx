import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = () => {
    // handle sign in logic here
  };

  const navigateToSignIn = () => {
    navigation.navigate("SignIn"); // Replace "SignIn" with the name of your sign-in screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SIGN UP</Text>
        </View>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>Repeat Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={repeatPassword}
          onChangeText={setRepeatPassword}
        />
        <TouchableOpacity style={styles.link} onPress={navigateToSignIn}>
          <Text>
            <Text style={styles.linkText}>Already have an account? </Text>
            <Text style={[styles.linkText, { color: "#FFF" }]}>Sign in.</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#61A2DF",
  },
  form: {
    backgroundColor: "#514FBC",
    borderRadius: 18,
    padding: 16,
    width: "100%",
    maxWidth: 400,
  },
  header: {
    borderRadius: 18,
    backgroundColor: "#514FBC",
    marginBottom: 20,
    padding: 16,
  },
  headerText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 32,
    fontFamily: "Inter, sans-serif",
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 21,
    marginTop: 4,
    marginBottom: 12,
    height: 40,
    paddingHorizontal: 10,
  },
  link: {
    marginTop: 10,
    alignItems: "center",
  },
  linkText: {
    color: "#64DAFF",
    fontSize: 12,
    fontFamily: "Inter, sans-serif",
  },
  button: {
    backgroundColor: "#6BCF5B",
    alignSelf: "center",
    marginTop: 30,
    width: 120,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 12,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
  },
});

export default Signup;