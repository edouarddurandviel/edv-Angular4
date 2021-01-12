
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IntPhotos } from '../_interfaces/photos';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PhotosService {
  private _photosUrl = 'https://jsonplaceholder.typicode.com/albums';

  // constructeur
  constructor(private _http: Http) {}

  // getters cherche ce qui est observable à savoir: l'interface IintProduct
  getProducts(): Observable<IntPhotos[]> {
    return this._http.get(this._photosUrl)
    .map((response: Response) => <IntPhotos[]> response.json()) // transforme IntPhotos[] en réponse Json
    .catch(this.handleError);
  }

// fonction privée gestion des erreurs
  private handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error());
  }
}
