import db from '../FirestoreConfig'
 
const getProductTypes = async (subCategoryId) => {
    let ProductTypes = [];
    await db.collection("producttype").where("subcategoryId","==",subCategoryId).get()
    .then((snapShots) => {
        snapShots.docs.map( (producttype) => {
            ProductTypes.push({...producttype.data(), id: producttype.id});
        } )
    })
 
    return ProductTypes;
}
 
export { getProductTypes };