import fire from '../FirestoreConfig'
 
const fireDB =  fire.firestore();

const getOrderByUser = async (userId) => {
    let products = [];
    await fireDB.collection("order").where("userId","==",userId).get()
    .then((snapShots) => {
        snapShots.docs.map( (order) => {
            console.log("orderaaa", order);
            products.push({...order.data(), id: order.id});
        } )
    }) 

    return products; 
}

const createOrder =  async (order) => {
    return await fireDB.collection("order").add(order);
}

export { createOrder, getOrderByUser };