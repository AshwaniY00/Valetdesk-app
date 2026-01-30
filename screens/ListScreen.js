import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { getItems } from "../services/api";

export default function ListScreen({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { id: item.id })}
        >
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
