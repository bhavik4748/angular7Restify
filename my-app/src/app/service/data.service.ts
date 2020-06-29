import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  extension = environment.extension;
  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get(this.baseUrl + `/location` + this.extension);
  }

  getStorageItems(item) {
    return this.http.get(this.baseUrl + '/search/' + item + this.extension);
  }
}
