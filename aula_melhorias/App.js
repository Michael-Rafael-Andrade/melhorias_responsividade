import { useState, useMemo, useCallback, Suspense } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator } from 'react-native'; // importar FlatList, Button, ActivityIndicator
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }), [accessibleMode]
  ); // Fim useMemo() 

  return (
    <SafeAreaView>
      <View>
        <Text>Lista de usuários</Text>
      </View>
    </SafeAreaView>
  );


}


