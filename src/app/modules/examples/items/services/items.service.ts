import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private readonly http: HttpClient) {}

  getItems(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

}

