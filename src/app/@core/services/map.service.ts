import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  /**
   * Variables para la llamada de la api.
   */
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

  /**
   * Metodo @get_parkings para obtener la informacion de los parking que necesitamos para la creacion de los puntos de
   * localizacion de cada uno
   */
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

  /**
   * Metodo @BuildMap para la creacion del mapa
   */
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

  /**
   * Metodo @crearMakers para la creacion de los puntos de cada uno de los parkings recibidos mediante de la api llamada desde @get_parkings
   * @param response recibe la informacion de la api para la posterior iteriacion para la creacion de los puntos.
   */
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

  /**
   * Metodo @load_parkings asincrono para que las llamadas a la api @get_parkings y la creacion de los markes puedan confluir en el momento
   * oportuno para que no alla errores en los tiempos de llamada
   */
  async load_parkings() {
    try {
      const get = await this.get_parkings();
      const get2 = this.crearMarkers(get);
    } catch (error) {
      console.log('Error al cargar API', error);
    }
  }
}
