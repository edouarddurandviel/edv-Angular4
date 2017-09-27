import {Injectable} from '@angular/core';

import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


import {myText} from './Content';




@Injectable()
export class ContentService {
  private textUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: Http) { }

  getTexts(): Promise<myText[]> {
        return this.http.get( this.textUrl )
        .toPromise()
        .then(response => response.json().data as myText[])
        .catch(this.handledError);
  }

  private handledError(error: any){
    console.error(error);
    return Promise.reject(error.message || error);

  }


  }
