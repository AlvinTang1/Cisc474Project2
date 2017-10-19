import { DialogService } from 'ng2-bootstrap-modal';
import { LastFmService } from '../../last-fm.service';
import { Component, OnInit } from '@angular/core';
import {ArtistPopupComponent} from './artist-popup/artist-popup.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any[] = [ ];
  attributes: any[] = [ ];
  constructor(private _apiSvc: CategoriesService, private _dialogService: DialogService) {
    _apiSvc.getCategories(1).subscribe(x => {
      this.categories = x.categories.category;
      this.attributes = x.categories['@attr'];
     });
  }

  showDetail(index, category) {
    console.log(index);
    console.log(category.name);
    const disposable =  this._dialogService.addDialog(CategoryPopupComponent,  {
                      title: category.name,
                      message: 'Description: ' + category.description,
                      linkUrl: category.url,
                      imageUrl: category.image[2]['#text']})
                      .subscribe((isConfirmed) => {
                      });
                  setTimeout(() => {
                      disposable.unsubscribe();
                  }, 10000);
  }
}
