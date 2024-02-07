<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, getCurrentInstance } from 'vue';
const uid = getCurrentInstance().uid;
console.log(uid);
onMounted(() => {
    let map = L.map('map'+uid).setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});

</script>
<template>
    <div :id="'map'+uid"></div>
</template>

<style scoped>
div { 
    height: 600px; 
}
</style>