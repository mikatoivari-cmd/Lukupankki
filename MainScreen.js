import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, FlatList } from "react-native";
import dayjs from "dayjs";

export default function MainScreen() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  useEffect(() => {
    let timer;
    if (running) timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const multiplier = minutes > 10 ? 1.3 : 1.0;
  const bonus = Math.floor(minutes * multiplier);
  const fontColor = minutes > 10 ? "green" : "black";

  const addBook = () => {
    if (!newBook.trim()) return;
    setBooks([...books, { id: Date.now(), title: newBook }]);
    setNewBook("");
  };

  return (
    <View style={{ padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 36 }}>Lukupankki</Text>

      <Text style={{ marginTop: 20, fontSize: 22 }}>Ajastin</Text>
      <Text style={{ fontSize: 50, color: fontColor }}>{minutes} min</Text>

      <Button title={running ? "Pysäytä" : "Käynnistä"} onPress={() => setRunning(!running)} />

      <Text style={{ marginTop: 20, fontSize: 22 }}>
        Bonus: {bonus} min (x{multiplier})
      </Text>

      <Text style={{ marginTop: 30, fontSize: 22 }}>Kirja-arkisto</Text>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TextInput
          style={{ flex: 1, padding: 8, borderWidth: 1 }}
          placeholder="Kirjan nimi"
          value={newBook}
          onChangeText={setNewBook}
        />
        <Button title="Lisää" onPress={addBook} />
      </View>

      <FlatList
        data={books}
        renderItem={({ item }) => <Text>• {item.title}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
