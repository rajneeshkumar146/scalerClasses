const searchItems = (arrayOfProducts, searchTerm) => {
    let modifiedArray = arrayOfProducts;
    if (searchTerm != "") {
        modifiedArray = modifiedArray.filter(product => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerCaseTitle = product.title.toLowerCase();

            return lowerCaseTitle.includes(lowerSearchTerm);
        });
    }

    return modifiedArray;
}

const sortingOfProducts = (arrayOfProducts, sortDirection) => {
    let modifiedArray = arrayOfProducts;
    if (sortDirection != 0) {
        if (sortDirection == 1) {
            // Sort in Increasing Order.
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product1.price - product2.price;
            });
        } else {
            // Sort in Decreasing Order.
            modifiedArray = modifiedArray.sort((product1, product2) => {
                return product2.price - product1.price;
            });
        }
    }
    return modifiedArray;
}

const categorization = (arrayOfProducts, currCategories) => {
    let modifiedArray = arrayOfProducts;
    const ALL_CATEGORIES = "All Categories";
    if (currCategories.localeCompare(ALL_CATEGORIES) != 0) {
        modifiedArray = modifiedArray.filter((product) =>
            product.category == currCategories)
    }

    return modifiedArray;
}

const pagination = (arrayOfProducts, pageNum, pageSize) => {
    let modifiedArray = arrayOfProducts;
    let totalPages = Math.ceil(modifiedArray.length / pageSize);

    let sidx = (pageNum - 1) * pageSize;
    let eidx = Math.min(sidx + (pageSize - 1), modifiedArray.length - 1);

    modifiedArray = modifiedArray.slice(sidx, eidx + 1);

    return { modifiedArray, totalPages };
}

export default function basicOps(arrayOfProducts, searchTerm, sortDirection, currCategories, pageNum, pageSize) {
    if (arrayOfProducts === null || !Array.isArray(arrayOfProducts) || arrayOfProducts.length === 0) {
        return [];
    }

    let modifiedArray = arrayOfProducts;
    /** ********************* Filtering Products ****************** */
    modifiedArray = searchItems(modifiedArray, searchTerm);

    /******************** Sorting products ********************/
    modifiedArray = sortingOfProducts(modifiedArray, sortDirection);

    /********************categorization /********************/
    modifiedArray = categorization(modifiedArray, currCategories);


    if (!Array.isArray(modifiedArray)) {
        console.log("You forget to return modified array!");
    }

    return pagination(modifiedArray, pageNum, pageSize);
}