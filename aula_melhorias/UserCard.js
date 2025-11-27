import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function UserCard(){
    const styles = StyleSheet.create({
        card: {
            backgroundColor: '#cde',
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
            fontSize: 16,
            color: '#333',
        }
    });

    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Text style={styles.text}>Usuário 1</Text>
            </View>
        </TouchableOpacity>
    )
}