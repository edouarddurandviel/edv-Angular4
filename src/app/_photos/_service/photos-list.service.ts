
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IntPhotosDesc } from '../_interfaces/photos-desc';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PhotosServiceDesc {
  private _photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  // constructeur
  constructor(private _http: Http) {}

  // getters cherche ce qui est observable à savoir: l'interface IintProduct
  getPhotosDesc(userID: number): Observable<IntPhotosDesc[]> {
    return this._http.get(this._photosUrl + '?albumId=' + userID)
    .map((response: Response) => <IntPhotosDesc[]> response.json()) // transforme IntPhotos[] en réponse Json
    .catch(this.handleError);
  }

// fonction privée gestion des erreurs
  private handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error());
  }
}
