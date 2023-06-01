<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
})
</script>

<template>
        <nav class="navbar sticky-bottom bg-light">
            <div class="container-fluid mx-3">
                <div class="row justify-content-between align-items-center">
                    <a class="navbar-toggler col-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </a>
    
                    <a class="col-2"><img src="../assets/sobre.png" alt="Sobre para mandar mensajes" class="icono-nav" /></a>
                    
                    <div class="col-2 fondo-plus rounded">
                        <a><img src="../assets/plus.png" alt="Icono de agregar partido" class="icono-nav-plus" /></a>
                    </div>
    
                    <a class="col-2"><img src="../assets/campanas.png" alt="Campanas de notificaciones" class="icono-nav" /></a>
    
                    <a class="col-2"><img src="../assets/usuario.png" alt="Icono de usuario" class="icono-nav" /></a>
    
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <router-link class="nav-link active" aria-current="page" to="/home">Inicio</router-link>
                                </li>
                                <!-- <li class="nav-item">
                                    <router-link class="nav-link" to="/myProfile">Mi Perfil</router-link>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
</template>

<style scoped>
    .icono-nav {
        width: 75%;
    }

    .icono-nav-plus {
        width: 100%;
    }

    .fondo-plus {
        background-color: #5d880d;
    }

</style>