import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getItemById } from "../services/api";

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemById(id)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!item) return <Text>Loading...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.details}</Text>
    </View>
  );
}
