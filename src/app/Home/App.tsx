// import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
// import { styles } from "./Style";
// import {Event} from "../../components/Event"

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Nome Evento</Text>
//             <View style={styles.form}>
//             <TextInput style={styles.input} placeholder='Digite o Evento' placeholderTextColor={'#fff'}></TextInput>
//             <TouchableOpacity  style={styles.button} /*</View></View>onPress={()=>{Alert.alert("Teste Botão")}}*/>
//                 <Text style={styles.buttonText}>+</Text>
//             </TouchableOpacity>
//             </View>
//             <Event name='Evento Novo'/>
//             <Event name='Evento Cancelado'/>
//         </View>
        
//     )
// }

import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Style";


interface Item {
  id: string;
  nome: string;
}

export default function App() {
  const [item, setItem] = useState<string>("");
  const [lista, setLista] = useState<Item[]>([
    { id: "1", nome: "Arroz" },
    { id: "2", nome: "Feijão" },
    { id: "3", nome: "Leite" },
  ]);

  const adicionarItem = () => {
    if (item.trim() === "") return;
    setLista([...lista, { id: Date.now().toString(), nome: item }]);
    setItem("");
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => (
    <View
      style={[
        styles.item,
        index === lista.length - 1 && { borderBottomWidth: 0 },
      ]}
    >
      <AntDesign name="checkcircle" size={20} color="#055200" />
      <Text style={styles.texto}>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o Produto"
          placeholderTextColor="#055200"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <AntDesign name="pluscircleo" size={24} color="055200" />
        </TouchableOpacity>
      </View>

      <View style={styles.listaContainer}>
        <FlatList
          data={lista}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}