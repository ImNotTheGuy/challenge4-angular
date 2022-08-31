import { Component } from '@angular/core';
import { PicturesService } from './pictures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'challenge4-angular';
  photoList !: any[];

  constructor(private picturesService: PicturesService) {
      this.picturesService.collection.subscribe((data) => {

        console.log('data.id :>> ', data);
        this.photoList = data;
        this.photoList.slice(0,40);
      })
  }


  ngOnInit(){

  }

  ngOnChanges(){
  }
}
