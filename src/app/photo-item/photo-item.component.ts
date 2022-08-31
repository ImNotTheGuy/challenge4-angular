import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit {

  nextVal = 0;

  @Input() photoList!: any[];

  constructor() {}

  ngOnInit(): void {}

  onNext() {
    this.nextVal++;
  }

  onPrevious() {
    if (this.nextVal > 0){
      this.nextVal--;
    }
  }
}
