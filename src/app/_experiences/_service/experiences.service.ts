
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IntExperiences } from './../_interfaces/experience';
import { Experience } from './../experience';
import { IntMembers } from './../../_members/_interfaces/members';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';




@Injectable()
export class ExperienceService {

  headers: Headers;
  options: RequestOptions;

  private _experiencesUrl = 'http://localhost:3000/api';
  private _addexpeUrl = 'http://localhost:3000/api/Members/';

  // constructeur
  constructor(private _http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });
   }

  // CRUD and then get all members with Observable
        // create a member with Promises
        createMemberExperience(memberId: number, experience: Experience): Promise<Experience> {
          return this._http
            .post( this._addexpeUrl + memberId + '/experience', JSON.stringify(experience), { headers: this.headers } )
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
        createMemberObserv(memberId: number, experience: Experience): Observable<Experience>{
          return this._http.post(  this._addexpeUrl + memberId + '/experience', JSON.stringify(experience), this.options )
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
  getMemberProfil(id: number): Observable<IntMembers[]> {
    return this._http.get(this._experiencesUrl + '/Members/' + id)
    .map((response: Response) => <IntMembers[]> response.json())
    .catch(this.handleError);
  }

  // get all Experiences by member Id
  getMemberExperiences(memberId: number): Observable<IntExperiences[]> {
    return this._http.get(this._experiencesUrl + '/Members/' + memberId + '/experience?filter[order]=id%20DESC')
    .map((res: Response) => <IntExperiences[]> res.json())
    .catch(this.handleError);
  }

  getThisMemberExperience(memberId: number, id: number): Observable<IntExperiences[]>{
    return this._http.get(this._experiencesUrl + '/Members/' + memberId + '/experience/' + id)
    .map((res: Response) => <IntExperiences[]> res.json())
    .catch(this.handleError);
  }


  // erreurs
  private handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error());
  }


}
