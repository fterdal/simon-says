import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {
  private baseUrl = 'http://localhost:8080'  

  constructor(private http: HttpClient) { }

  getSequence() {
    return this.http.get(this.baseUrl)
  }


}
