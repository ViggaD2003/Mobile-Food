import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetail from "../components/MealsDetails";
import Subtitle from "../components/MealDetail/Substitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/slice/favoritesSlice";



function MealDetailScreen({ route, navigation }) {
    // const favoriteContext = useContext(FavoritesContext);
    const favoriteIds = useSelector((state) => state.favoriteMeals.ids);

    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const meal = MEALS.find(item => item.id === mealId);

    const mealIsFavorite = favoriteIds.includes(mealId);


    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])

    return <ScrollView style={styles.routeCOntainer}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealsDetail textStyle={styles.detailText} duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} />

        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={meal.ingredients} />
                <Subtitle >
                    Steps
                </Subtitle>
                <List data={meal.steps} />
            </View>
        </View>

    </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    routeCOntainer: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listContainer: {
        width: "80%",
    },
    listOuterContainer: {
        alignItems: "center",
    }
})