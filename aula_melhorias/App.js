import { useState, useMemo, useCallback, Suspense } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator } from 'react-native'; // importar FlatList, Button, ActivityIndicator
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import UserCard from './UserCard'; // importando o UserCard

export default function App() {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
}

function MainApp() {
  const [accessibleMode, setAccessibleMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const styles = useMemo( // use Memo meroiza em uma cache para não precisar ficar reenderizar toda vez
    () => StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: accessibleMode ? '#000' : '#f4f4f4',

      },
      header: {
        alignItems: 'center',
        paddingVertical: 20,
      },
      title: {
        fontSize: accessibleMode ? 26 : 20,
        color: accessibleMode ? '#fff' : '#333',
        fontWeight: 'bold',
      },
      buttonContainer: {
        marginTop: 10,
      },
    }), [accessibleMode]
  ); // Fim useMemo() 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de usuários</Text>
        <View style={styles.buttonContainer}> 
          <Button
            title={accessibleMode ? 'Modo Padrão' : 'Modo Acessível'}
            onPress={() => setAccessibleMode(!accessibleMode)}
            color={accessibleMode ? '#4caf50' : '#007aff'}
          />
        </View>
      </View>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </SafeAreaView>
  );


}


