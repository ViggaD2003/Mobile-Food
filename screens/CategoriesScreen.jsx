import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTitle from "../components/CategoriesGridTitle";



const CategoriesScreen = ({ navigation }) => {

    function renderCategoryItem(itemData) {

        const handleRedirect = () => {
            navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
        }

        return <CategoriesGridTitle
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={handleRedirect}
        />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;