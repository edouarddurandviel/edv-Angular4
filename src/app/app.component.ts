import { Component, OnInit } from '@angular/core';
import { myText } from './Content';
import { ContentService } from './content.services';

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContentService]
})
export class AppComponent implements OnInit {

  title = 'Edouard. New Angular 4 App';

  date = new Date();

  findDay = function(){
    if (this.date.getDate() < 10) {
       var day: String = '0' + this.date.getDate();
    } else {
       var day: String = this.date.getDate();
    }
    return day;
  };

  findMonth = function(){
      if ((this.date.getMonth() + 1 ) < 10) {
        var month: String = '0' + (this.date.getMonth() + 1 );
       } else {
         var month: String = this.date.getMonth() + 1;
      }
      return month;
    };

  currentDay = this.findDay();

  currentMonth = this.findMonth();

  subtitle = 'The current Date: '+ this.currentDay + '/'+ this.currentMonth + '/'+ this.date.getFullYear();


   itext : myText[];
   constructor(private _text: ContentService) {}
   getTexts(): void {
    this._text.getTexts().then(itext => this.itext = itext);
  }
   ngOnInit(): void {
    console.log(this.getTexts() + ' 1');
   }
}
