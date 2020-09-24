import db from '../FirestoreConfig'
 
const getCategories = async () => {
    let Categories = [];
    await db.collection("category").get()
    .then((snapShots) => {
        snapShots.docs.map( (category) => {
            Categories.push({...category.data(), id: category.id});
        } )
    })

    return Categories;
}

const createCategory = async (category) => {
    return await db.collection("category").add(category);
}

export { getCategories, createCategory };