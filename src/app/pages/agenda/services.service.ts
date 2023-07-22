import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { contactInterface, connectionInterface } from '../agenda/interface';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  url_test: string = "http://localhost:3000";
  /* io = io(this.url_test,{
    withCredentials: true,
    autoConnect: true
  }) */

  private clientSocket: any;
  constructor(private _http: HttpClient) {
    this.clientSocket = socketIo.connect(this.url_test)
  }

  listenToServer(connection: any): Observable<any> {
    return new Observable((suscribe) => {
      this.clientSocket.on(connection, (data:any) => {
        suscribe.next(data)
      })
    })
  }

  emitToServer(connection: any, data: contactInterface): void {}

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
