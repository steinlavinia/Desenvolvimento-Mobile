import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './Style'

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}> Nome do evento:</Text>
			<TextInput style={styles.input} placeholder="Digite o evento: " placeholderTextColor={"#fff"}/>
      		<Button title="Botão" onPress={() =>console.log("Teste")} color={'#9d4edd'}/>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Botão Teste</Text>
			</TouchableOpacity>
		</View>
	);
}
