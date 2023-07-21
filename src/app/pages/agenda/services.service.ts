import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { contactInterface } from '../agenda/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http: HttpClient) {}

  url_test: string = "http://localhost:3000";

  getContacts(): Observable<any> {
    return this._http.get(`${this.url_test}/contacts/lists`);
  }
  viewContact(id:any): Observable<any> {
    return this._http.get(`${this.url_test}/contacts/${id}`);
  }
  createContact(data:contactInterface): Observable<any> {
    return this._http.post(`${this.url_test}/contacts`,data);
  }
  editContact(data:any): Observable<any> {
    return this._http.put(`${this.url_test}/contacts/${data.id}`,data.contact);
  }
  deleteContact(id:any): Observable<any> {
    return this._http.delete(`${this.url_test}/contacts/${id}`);
  }
}
