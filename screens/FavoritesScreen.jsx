// import { useContext } from "react";
import MealList from "../components/MealList/MealList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import {View, Text, StyleSheet} from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen() {
    // const favoriteContext = useContext(FavoritesContext);
    const favoriteIds = useSelector((state) => state.favoriteMeals.ids);

    // console.log(favoriteIds);
    
    const listFavorite = MEALS.filter((item) => favoriteIds.includes(item.id));

    // console.log(listFavorite);

    if(listFavorite.length === 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>Your have no favorite meals yet...</Text>
        </View>
    }
    

    return <MealList displayedMeals={listFavorite}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})