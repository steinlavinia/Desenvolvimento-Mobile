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

import { styles } from "./Style";

interface Item {
  id: string;
  nome: string;
}

export default function App() {
  const [texto, setTexto] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (texto.trim() === '') return;
    setLista([...lista, { id: Date.now().toString(), value: texto }]);
    setTexto('');
  };

  const excluirItem = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Adicionar" onPress={adicionarItem} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTexto}>{item.value}</Text>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => excluirItem(item.id)}
            >
              <Text style={styles.botaoTexto}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
