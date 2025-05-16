import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({children}) => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: "#e2b497",
        fontWeight: "bold",
        textAlign: "center",
    },
    subContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 4,
        marginVertical: 4,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
    }
})