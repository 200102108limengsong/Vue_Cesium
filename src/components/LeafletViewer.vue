<template>
    <div id="leafletContainer"></div>
</template>

<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.pm/dist/leaflet.pm.css';
import 'leaflet.pm';
import { onMounted } from 'vue';

onMounted(() => {
    const map = L.map('leafletContainer').setView([39.56, 118.25], 6);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWVuZ3NvbmdsaSIsImEiOiJjbHgzemp1ZGExMnhiMmxvcXFtYmhrOXdtIn0.X6pkcAiiHaZKE9NNhfG8lg', {
    maxZoom: 18,
    id: 'mapbox/outdoors-v11', // 你可以选择不同的样式
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© Mapbox © OpenStreetMap'
  }).addTo(map);

    map.pm.addControls({
        position: "topleft",
        drawPolygon: false,
        drawMarker: false,
        drawCircleMarker: false,
        drawPolyline: false,
        drawRectangle: true,
        drawCircle: false,
        editMode: true,
        dragMode: true,
        cutPolygon: true,
        removalMode: true
    });

    map.pm.setPathOptions({
        color: "orange",
        fillColor: "green",
        fillOpacity: 0.4
    });

    map.pm.setLang('zh');
});
</script>

<style scoped>
#leafletContainer {
    height: 90vh;
    width: 100vw;
}
</style>