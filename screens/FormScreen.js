import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { createItem } from "../services/api";

export default function FormScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    createItem({ title, description })
      .then(() => setMessage("Item created successfully!"))
      .catch(() => setMessage("Error creating item"));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}
