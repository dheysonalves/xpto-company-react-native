import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Card } from '../components/composites';

import { Text, View, TextInput, Button } from '../components/primitives';

const DATAMOCK = {
		id: "7eb626fe-064e-4441-977a-adc276a31969",
		name: "Testing",
		cnpj: "84649484946464",
		description: "MEI",
		logo: "https://google.com",
		createdAt: "2022-05-31T04:34:03.153286Z",
		address: {
			zip: "49944994",
			state: "CE",
			city: "Quixada",
			neighborhood: "Centro",
			street: "Rua 11",
			number: "5",
			complement: "",
		},
	};

export default function ModalScreen() {
  return (
		<View style={styles.container}>
			<Text style={styles.title}>Modal</Text>
			<Card data={DATAMOCK} />
			<Button text="test" handleSubmit={() => console.log("submit")} />
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
