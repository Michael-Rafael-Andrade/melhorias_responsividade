import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function UserCard({ name, selected, accessibleMode, onPress }){
    const styles = StyleSheet.create({
        card: {
            backgroundColor: selected 
            ? accessibleMode 
                ? '#444' 
                : '#cde' 
            : accessibleMode 
                ? '#222' 
                : '#fff',    // Observe que o if e else está sendo aplicado aqui de forma organizada.
            padding: 16, // Espaçamento interno
            marginVertical: 6, // Espaçamento externo
            MarginHorizontal: 12, // Espaçamento externo
            borderRadius: 10, // Arredondar as bordas do card
            shadowColor: '#000', // colocar uma sombra no fundo
            shadowOpacity: 0.1, // colocar opacidade na sombra para não ficar totalmente preto
            shadowRadius: 3, // fazer um raio na sombra para acompanhar o card
            elevation: 2, // senso de elevação na página
        },
        text: {
            fontSize: accessibleMode ? 22 : 16,
            color: accessibleMode ? '#fff' : '#333',
        }
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}