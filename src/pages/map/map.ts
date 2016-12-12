import {Component} from '@angular/core';
import {
    Geolocation, GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, Geoposition,
    GoogleMapsMarker, GoogleMapsMarkerOptions
} from 'ionic-native';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {
    private position:GoogleMapsLatLng;
    private map:GoogleMap;
    private marker:GoogleMapsMarker;

    /**
     * Init view
     */
    public ionViewDidLoad() {
        let element:HTMLElement = document.getElementById('map');

        this.map = new GoogleMap(element);

        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
            Geolocation.getCurrentPosition().then((latLng:Geoposition) => {
                this.position = new GoogleMapsLatLng(latLng.coords.latitude, latLng.coords.longitude);
                let cameraPosition:CameraPosition = {
                    target: this.position,
                    zoom: 8
                };

                this.map.moveCamera(cameraPosition);

                this.addMarker();
            });
        });
    }

    /**
     * Add marker
     */
    private addMarker() {
        let markerOptions:GoogleMapsMarkerOptions = {
            position: this.position,
            title: 'Marker',
            draggable: true,
        };

        this.map.addMarker(markerOptions).then((marker:GoogleMapsMarker) => {
            this.marker = marker;
            this.marker.addEventListener(GoogleMapsEvent.MARKER_DRAG).subscribe((marker:GoogleMapsMarker) => {
                marker.getPosition().then((position:GoogleMapsLatLng) => {
                    this.position = position;
                })
            });
        })
    }
}
