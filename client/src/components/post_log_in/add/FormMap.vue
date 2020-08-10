<template>
  <div class="map">
                <l-map @update:zoom="zoomUpdate" :zoom="zoom" :center="center" v-on:click="mapClick">
                    <l-tile-layer :url="url" :attribution="attribution" ></l-tile-layer>
                    <l-marker v-if="selectedPlace" :latLng="latLng(selectedPlace.lat, selectedPlace.lng)" class="marker">
                        <l-icon :icon-url="`${publicPath}feather-separator.png`" :iconSize="[14, 40]" :iconAnchor="[7, 45]" ></l-icon>
                    </l-marker>
                </l-map>
            </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css"
import { eventBus } from "../../../main"
import { mapGetters, mapActions } from "vuex"


delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

export default {
    name: "form-map",
    data() {
        return {
            zoom: 6,
            center: L.latLng(57.036701, -5.038022),
            url: "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=3576413ab5c044b1be3431efff7b1149",
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            publicPath: process.env.BASE_URL,
            selectedPlace: null,
        }
    },

    computed: mapGetters(['selectedLat', 'selectedLng']),

    methods: {
        ...mapActions(['getLatLng']),

        latLng: function(lat, lng) {
            return L.latLng(lat, lng);
        },
        zoomUpdate: function(zoom) {
            this.currentZoom = zoom;
        },
        mapClick: function(e) {
            this.selectedPlace = e.latlng
            this.getLatLng(e.latlng)
        },
    },

    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup,
        LIcon
    }

}
</script>

<style>

.map {
  height: 50vh;
  width: 30vw;
  min-width: 10vw;
  margin-left: 5px;
  margin-right: 5px;
  background-color: cyan;
  z-index: 1;
}

.marker{
    width: 1vw;
    height: 1vw;
}

</style>