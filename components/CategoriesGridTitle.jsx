import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoriesGridTitle = ({ title, color, onPress}) => {
    return <View style={styles.gridItem}>
        <Pressable android_ripple={{color: "#ccc"}} 
        onPress={onPress}
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoriesGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowOffset: { width: 0, height: 2},
        shadowColor: "white",
        shadowOpacity: 0.75,
        shadowRadius: 8,
        backgroundColor: "white",
        overflow: Platform === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        borderRadius: 8,
        alignItems: "center",        
    },
    buttonPressed: {
        opacity: 0.45
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    }
})