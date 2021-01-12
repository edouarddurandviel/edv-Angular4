// Component decorators
import { Component, OnInit} from '@angular/core';
// Home-made Interfaces - Services
import { IntPhotosDesc } from './_interfaces/photos-desc';
import { PhotosServiceDesc } from './_service/photos-list.service';

// import { TruncatePipe } from './truncate';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component ({
  selector: '<photos-des></photos-des>',
  templateUrl: './_html/app.photos-list.component.html',
  providers: [PhotosServiceDesc]
})
export class AppPhotosDesc implements OnInit{

  pdesc: IntPhotosDesc[];
  appStatus: Boolean = true;

  constructor(
    private _photos: PhotosServiceDesc,
    private route: ActivatedRoute,
    private location: Location
 ) {}

  ngOnInit(): void {
  this._initPhotoDescription();
  }

  _initPhotoDescription(){
    // get photo description
    this.route.paramMap
      .switchMap((params: ParamMap) => this._photos
      .getPhotosDesc(+params.get('id')))
      .subscribe( pdesc => this.pdesc = pdesc );
  }



}
