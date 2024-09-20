import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'path-to-your-dataset.json'; // URL to your dataset

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
