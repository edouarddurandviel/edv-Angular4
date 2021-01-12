// Component decorators
import { Component, OnInit } from '@angular/core';
// Home-made Interfaces - Services
import { IntPhotos } from './_interfaces/photos';
import { PhotosService } from './_service/photos.service';
// From http injectable get Map operator
import 'rxjs/add/operator/map';



@Component ({
  selector: '<photos></photos>',
  templateUrl: './_html/app.photos.component.html',
  providers: [PhotosService]
})

export class AppPhotos implements OnInit {

  iphotos: IntPhotos[];
  appStatus: Boolean = true;

  constructor(private _product: PhotosService) {}

  ngOnInit(): void {
    this._initProducts();
  }
  _initProducts(){
    // get products
    this._product.getProducts().subscribe(iphotos => this.iphotos = iphotos);
  }
}
