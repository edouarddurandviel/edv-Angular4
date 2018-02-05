
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IntMembers } from './../_interfaces/members';
import { Member } from './../member';
import { IntMemberWithSkills } from './../_interfaces/membersWithSkills';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';




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
    return this._http.get(this._membersUrl + '?filter[order]=id%20DESC')
    .map((res: Response) => <IntMembers[]> res.json())
    .catch(this.handleError)
  }
        // create a member with Promises
        createMember(member: Member): Promise<Member> {
          return this._http
            .post( this._membersUrl, JSON.stringify(member), { headers: this.headers } )
            .toPromise()
            .then( this.extractData )
            .catch( this.promiseHandleError );
            }
              private promiseHandleError(error: any): Promise<any> {
                console.error('EDOUARD An error occurred', error);
                  return Promise.reject(error.message || error);
              }
              private extractData(res: Response) {
                if( res.ok == true){
                  let body = res.json();
                    return body || { 'status': 'yes'};
                }
              }

        // TODO createMember en Observable
        createMemberObserv( member: Member): Observable<Member>{
          return this._http.post( this._membersUrl, JSON.stringify(member), this.options )
          .map( this.extractData )
          .catch( this.obsHandleError );
        }
            private obsHandleError(error: any) {
              let errMsg = (error.message) ? error.message :
                  error.status ? `${error.status} - ${error.statusText}` : 'Server error';
              console.error(errMsg);
              return Observable.throw(errMsg);
            }




  // get One ember by Id
  getMember(id: number): Observable<IntMembers[]> {
    return this._http.get(this._membersUrl + '/' + id)
    .map((response: Response) => <IntMembers[]> response.json())
    .catch(this.handleError);
  }

  // get all Skills by member Id
  getMemberSkills(id: number): Observable<IntMemberWithSkills[]> {
    return this._http.get(this._membersUrl + '/' + id + '/skill')
    .map((res: Response) => <IntMemberWithSkills[]> res.json())
    .catch(this.handleError);
  }

  // erreurs
  private handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error());
  }


}
