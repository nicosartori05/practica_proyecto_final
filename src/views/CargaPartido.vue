<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import { cargarPartido } from "../services/partidos.js";

const {fields, loading, handleSubmit} = useCargaPartido();

function useCargaPartido() {
    const fields = ref({
        // Campos a pedir en la carga del form.
    });

    const loading = ref(false);

    async function handleSubmit() {
        loading.value = true;

        await cargarPartido()
    }
}
</script>

<template>

</template>