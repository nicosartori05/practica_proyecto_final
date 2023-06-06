import { doc, collection, serverTimestamp, setDoc, addDoc } from "@firebase/firestore";
import { db } from "./firebase";

export async function cargarPartido(data/*{nombre, complejo, fecha, hora, cantidadJ, cambios, tipo, valorCancha}*/) {
    const partidoRef = collection(db, "partidos");

    try {
        await addDoc(partidoRef, {
            ...data,
            // nombre,
            // complejo,
            // fecha,
            // hora,
            // cantidadJ,
            // cambios,
            // tipo,
            // valorCancha,
            created_at: serverTimestamp(),
        });
        return null;
    } catch (err) {
        console.error("[partidos.js cargaPartido] Ocurrió un error al cargar el partido.", err);
        throw err;
    }
}