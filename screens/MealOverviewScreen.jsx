import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

const MealOverviewScreen = (
    // { route }
) => {
    // const catId = route.params.categoryId;
    const route = useRoute();
    const navigation = useNavigation();

    const catId = route.params.categoryId;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(item =>
            item.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [navigation, catId])



    const displayedMeals = MEALS.filter((meals) => {
        return meals.categoryIds.indexOf(catId);
    })

    return <MealList displayedMeals={displayedMeals}/>
    
}

export default MealOverviewScreen;
