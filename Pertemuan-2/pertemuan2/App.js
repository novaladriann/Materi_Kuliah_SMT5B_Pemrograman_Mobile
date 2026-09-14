import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama : Noval Adrian</Text>
      <Text>NIM : 2488010018</Text>
      <Text>Asal sekolah : SMAN 8 Kota Cirebon</Text>
      <Text>Cita-cita: AI Engineer</Text>
      <Text>Rencana menggapai cita-cita: Belajar dan berlatih secara konsisten</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
