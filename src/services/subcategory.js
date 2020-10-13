import fire from '../FirestoreConfig'
 
const fireDB =  fire.firestore();
 
const getSubCategoriesByCategory = async (categoryId) => {
    let SubCategories = [];
    await fireDB.collection("subcategory").where("categoryId","==",categoryId).get()
    .then((snapShots) => {
        snapShots.docs.map( (subcategory) => 
            SubCategories.push({...subcategory.data(), id: subcategory.id})
         )
    })
 
    return SubCategories;
}
 
export { getSubCategoriesByCategory };