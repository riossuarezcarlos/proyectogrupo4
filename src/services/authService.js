import fire from '../FirestoreConfig'
 

const registro = (email, password) => {
    return new Promise((resolve, reject) => {
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log(u.user.uid);
            resolve("Usuario Creado");
        })
        .catch(error => {
            reject(`Error al crear usuario ${error}`);
        })
    })
}

const ingresar = (email, password) => {
    return new Promise((resolve, reject) => {
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            resolve(u.ser)
        })
        .catch(error => {
            reject(`Error al logear usuario ${error}`);
        })
    })
}

export { registro, ingresar }