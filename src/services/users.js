import {db} from './firebase.js';
import {setDoc, doc, getDoc} from 'firebase/firestore';

export function createUser(id, {
    email,
    nombre,
    apellido,
    nacimiento,
    nivel,
    genero,
    pais,
    ciudad,
    barrio,
    telefono,
    terminos}) {
    const userRef = doc(db, 'users', id);

    return setDoc(userRef, {
        email,
        nombre,
        apellido,
        nacimiento,
        nivel,
        genero,
        pais,
        ciudad,
        barrio,
        telefono,
        terminos
    });
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export async function getUserById(id) {
    const userRef = doc(db, "users", id);

    const user = await getDoc(userRef);

    if (!user.exists) {
        throw new Error ("[users.js getUserById] No existe el usuario con el id provisto");
    }

    return {
        id,
        email: user.data().email,
        nombre: user.data().nombre,
        apellido: user.data().apellido,
        nacimiento: user.data().nacimiento,
        nivel: user.data().nivel,
        genero: user.data().genero,
        pais: user.data().pais,
        ciudad: user.data().ciudad,
        barrio: user.data().barrio,
        telefono: user.data().telefono,
    }
}