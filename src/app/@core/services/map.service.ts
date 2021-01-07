import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 40.4167635;
  lng = -3.7037659;
  zoom = 10;
  points = [];

  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  get_parkings() {
    console.log('Solicitando datos a la API');
    return new Promise((resolve, reject) => {
      $.ajax({
        url:
          'https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json',
      })
        .done((listaParking) => {
          resolve(listaParking);
        })
        .fail(() => {
          reject('No se han podido cargar los datos');
        });
    });
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
      })
    );
  }

  crearMarkers(response) {
    response['@graph'].forEach((item) => {
      const latitud = item.location.latitude;
      const longitud = item.location.longitude;
      const nameText = item.title;
      const popup = new mapboxgl.Popup({ offset: 30 }).setText(nameText);
      const marker = new mapboxgl.Marker()
        .setLngLat([longitud, latitud])
        .setPopup(popup)
        .addTo(this.map);
      this.points.push(marker);
    });
  }

  async load_parkings() {
    try {
      const get = await this.get_parkings();
      const get2 = this.crearMarkers(get);
    } catch (error) {
      console.log('Error al cargar API', error);
    }
  }
}
