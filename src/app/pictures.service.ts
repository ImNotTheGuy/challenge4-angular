import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  private collection$;

  constructor(http: HttpClient) {
    this.collection$ = http.get<any>(environment.urlApi);
    console.log('this.collection$ :>> ', this.collection$);
  }

  get collection(){
    return this.collection$;
  }
}
