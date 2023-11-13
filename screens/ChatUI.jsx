import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Voice from 'react-native-voice';

function MyComponent(props) {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  const handleVoiceInput = () => {
    if (isRecording) {
      Voice.stop();
    } else {
      startRecognizing();
    }
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('en-US'); // Set the language here, 'en-US' for English
      setIsRecording(true);
      setRecognizedText("");
    } catch (error) {
      console.log("Speech recognition error:", error);
    }
  };

  Voice.onSpeechResults = (event) => {
    const recognizedWords = event.value;
    setRecognizedText(recognizedWords[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <TouchableOpacity style={styles.microphoneButton} onPress={handleVoiceInput}>
        <Image
          resizeMode="contain"
          source={{
            uri:
              "https://cdn.builder.io/api/v1/image/assets/TEMP/c8724efd-a186-470b-9fd2-f02c1bf480cd?apiKey=02a4882d5aa04b13a1cd6ce93ee8015c&",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      {isRecording && <Text style={styles.recognizedText}>{recognizedText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  box: {
    borderRadius: 32,
    backgroundColor: "#D9D9D9",
    display: "flex",
    marginTop: 16,
    flexShrink: 0,
    height: 462,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  microphoneButton: {
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    alignSelf: "center",
    display: "flex",
    width: "100%",
    maxWidth: 291,
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 62,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    mixBlendMode: "multiply",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
    display: "flex",
    width: 78,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: 1,
    filter: "blur(2px)",
  },
  recognizedText: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
  },
});

export default MyComponent;