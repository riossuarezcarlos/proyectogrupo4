import db from '../FirestoreConfig'
 
const getLabels = async () => {
    let Labels = [];
    await db.collection("label").get()
    .then((snapShots) => {
        snapShots.docs.map( (label) => {
            Labels.push({...label.data(), id: label.id});
        } )
    })
 
    return Labels;
}
 
export { getLabels };