    import { FlatList, StyleSheet, View } from "react-native";
    import MealItem from "./MealItem";

    function MealList({ displayedMeals }) {
        function renderMealItem(itemData) {
            const item = itemData.item;

            const mealOfITem = {
                id: item.id,
                title: item.title,
                imageURL: item.imageUrl,
                duration: item.duration,
                complexity: item.complexity,
                affordability: item.affordability
            }

            return <MealItem {...mealOfITem} />
        }


        return (
            <View style={styles.container}>
                <FlatList data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
                />
            </View>
        )
    }

    export default MealList;


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16
        }
    })