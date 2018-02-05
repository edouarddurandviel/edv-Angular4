
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TemplateMembersComponent } from './../../_DynamicComponent/template.component';
// constuctor for Component
import { ListView } from './../list.view';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

// Interface
interface IntMembers {
  firstname: string;
  lastname: string;
  jobtitle: string;
  id: number;
}

@Injectable()
export class MembersService {

  headers: Headers;
  options: RequestOptions;

  private _membersUrl = 'http://localhost:3000/api/Members';

  // constructeur
  constructor(private _http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });
   }

  // CRUD and then get all members with Observable
  getMembers(): Observable<IntMembers[]> {
    return this._http.get(this._membersUrl)
    .map((res: Response) => <IntMembers[]> res.json())
    .catch(this.handleError);
  }

  // get One ember by Id
  getMember(id: number): Observable<IntMembers[]> {
    return this._http.get(this._membersUrl + '/' + id)
    .map((response: Response) => <IntMembers[]> response.json())
    .catch(this.handleError);
  }

  // erreurs
  private handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error());
  }


}
