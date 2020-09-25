import fire from '../FirestoreConfig'
 
const fireDB =  fire.firestore();
 
const getLabels = async () => {
    let Labels = [];
    await fireDB.collection("label").get()
    .then((snapShots) => {
        snapShots.docs.map( (label) => {
            Labels.push({...label.data(), id: label.id});
        } )
    })
 
    return Labels;
}
 
export { getLabels };