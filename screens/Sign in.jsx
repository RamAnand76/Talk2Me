import * as React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./Sign up";


function SignIn(props) {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // handle sign in logic here
  };

  const handleCreateAccount = () => {
    navigation.navigate("SignUp"); // Navigate to the SignUp page
  };

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  return (
    <View style={styles.container}>
      <Text>Welcome Talk2Me !</Text>
      <View style={styles.loginContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LOG IN</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.footerLink} onPress={handleCreateAccount}>
            <Text style={styles.footerLinkText}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerLink} onPress={handleForgotPassword}>
            <Text style={styles.footerLinkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61A2DF",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    borderRadius: 18,
    backgroundColor: "#514FBC",
    width: "80%",
    padding: 28,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 32,
    fontFamily: "Inter, sans-serif",
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 13,
    fontFamily: "Inter, sans-serif",
    marginBottom: 6,
  },
  input: {
    borderRadius: 21,
    backgroundColor: "#D9D9D9",
    height: 40,
    paddingLeft: 16,
    color: "#000",
  },
  buttonContainer: {
    alignSelf: "center",
    marginTop: 37,
    width: 109,
    maxWidth: "100%",
  },
  button: {
    borderRadius: 16,
    backgroundColor: "#6BCF5B",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerLink: {},
  footerLinkText: {
    color: "#BCB2FC",
    fontWeight: "500",
    fontSize: 12,
    fontFamily: "Inter, sans-serif",
  },
});