import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createUser } from "./users";

export async function register({
  email,
  password,
  nombre,
  apellido,
  nacimiento,
  nivel,
  genero,
  pais,
  ciudad,
  barrio,
  telefono,
  terminos,
}) {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    await createUser(user.uid, {
      email: user.email,
      nombre,
      apellido,
      nacimiento,
      nivel,
      genero,
      pais,
      ciudad,
      barrio,
      telefono,
      terminos,
    });

    return {
      id: user.uid,
      email: user.email,
    };
  } catch (err) {
    console.error("[auth.js register()] Error al registrar el usuario. ", err);
    throw err;
  }
}

/**
 * Inicia sesión.
 *
 * @param {string} email
 * @param {string} password
 * @return {Promise<{id: string, email: string}>}
 */
export async function login({ email, password }) {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;
    return {
      id: user.uid,
      email: user.email,
    };
  } catch (err) {
    console.error("[auth.js login()] Error al autenticar el usuario. ", err);
    throw err;
  }
}