import fire from '../FirestoreConfig'
 
const fireDB =  fire.firestore();
 
const getProducts = async () => {
    let products = [];
    await fireDB.collection("product").get()
    .then((snapShots) => {
        snapShots.docs.map( (product) => {
            products.push({...product.data(), id: product.id});
        } )
    })
    return products;
}


const getProductbyId = async (productId) => { 
    let products = [];
    await fireDB.collection("product").doc(productId).get()
    .then((snapshot) => {  
        [snapshot].map((doc) => {
            products.push({...doc.data(), id: doc.id}); 
        })        
    }) 
    
    return products;
}

 


const getProductsByLabel = async (labelCod) => {
    let products = [];
    await fireDB.collection("product").where("labelId","==",labelCod).get()
    .then((snapShots) => {
        snapShots.docs.map( (product) => {
            products.push({...product.data(), id: product.id});
        } )
    }) 
    return products; 
}

const createProduct = async (product) => {
    return await fireDB.collection("product").add(product);
}

export { getProducts, getProductbyId, getProductsByLabel, createProduct };