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
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}', {
        subdomains: '1234',
        maxZoom: 18,
        attribution: '© 高德地图'
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
    height: 100vh;
    width: 100vw;
}
</style>