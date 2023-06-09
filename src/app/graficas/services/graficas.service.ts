import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/MetricsReportsPerDate');
  }

  getUsuariosRedesUsuariosDonaData() {
    return this.getUsuariosRedesSociales()
      .pipe(
        delay(1500),
        map( data => {
          const labels = Object.keys( data );
          const values  = Object.values( data );
          return { labels, values };
        })
      );
  }
}
