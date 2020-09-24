import db from '../FirestoreConfig'
 
const getProducts = async () => {
    let products = [];
    await db.collection("product").get()
    .then((snapShots) => {
        snapShots.docs.map( (product) => {
            products.push({...product.data(), id: product.id});
        } )
    })
    return products;
}


const getProductsByLabel = async (labelCod) => {
    let products = [];
    await db.collection("product").where("labelId","==",labelCod).get()
    .then((snapShots) => {
        snapShots.docs.map( (product) => {
            products.push({...product.data(), id: product.id});
        } )
    }) 
    return products; 
}

const createProduct = async (product) => {
    return await db.collection("product").add(product);
}

export { getProducts, getProductsByLabel, createProduct };