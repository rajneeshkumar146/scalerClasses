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

export default function basicOps(arrayOfProducts, searchTerm) {
    if (arrayOfProducts === null || arrayOfProducts.length === 0) {
        return [];
    }

    let modifiedArray = arrayOfProducts;
    /** ********************* Filtering Products ****************** */
    modifiedArray = searchItems(modifiedArray, searchTerm);


    return modifiedArray;
}