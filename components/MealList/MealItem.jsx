import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealsDetail from "../MealsDetails";

const MealItem = ({ id, title, imageURL, duration, complexity, affordability }) => {
    
    const navigation = useNavigation();

    const SelectMealItemHandler = () => {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }
    
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={SelectMealItemHandler}
                >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageURL }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealsDetail duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 8,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform === "android" ? "hidden" : "visible"

    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.45
    },
    
})