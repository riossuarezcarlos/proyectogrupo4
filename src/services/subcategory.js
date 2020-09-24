import db from '../FirestoreConfig'
 
const getSubCategories= async (categoryId) => {
    let SubCategories = [];
    await db.collection("subcategory").where("categoryId","==",categoryId).get()
    .then((snapShots) => {
        snapShots.docs.map( (subcategory) => {
            SubCategories.push({...subcategory.data(), id: subcategory.id});
        } )
    })
 
    return SubCategories;
}
 
export { getSubCategories };