import fire from '../FirestoreConfig'
 
const fireDB =  fire.firestore();
 
const getProductTypesBySubCategory = async (subCategoryId) => {
  
    let ProductTypes = [];
    await fireDB.collection("producttype").where("subcategoryId","==",subCategoryId).get()
    .then((snapShots) => {
        snapShots.docs.map( (producttype) => {
            ProductTypes.push({...producttype.data(), id: producttype.id});
        } )
    })
 
    return ProductTypes;
}
 
export { getProductTypesBySubCategory };