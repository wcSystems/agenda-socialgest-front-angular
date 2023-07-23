import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { contactInterface, connectionInterface } from '../agenda/interface';

import { environment } from 'src/environments/environment';
import { Socket } from 'ngx-socket-io';  

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  
  @Output() outEven: EventEmitter<any> = new EventEmitter();

  constructor(
    private socket: Socket,
    private _http: HttpClient
  ) { }


  // emit event
	emitIOAll(params:any,arg:any) {
		this.socket.emit(params,arg);
	} 

	// listen event
	getIOAll(params:any) {
		return this.socket.fromEvent(params);
	}


  getContacts(): Observable<any> {
    return this._http.get(`${environment.serverSocket}/contacts/lists`);
  }
  viewContact(id:any): Observable<any> {
    return this._http.get(`${environment.serverSocket}/contacts/${id}`);
  }
  createContact(data:contactInterface): Observable<any> {
    return this._http.post(`${environment.serverSocket}/contacts`,data);
  }
  editContact(data:any): Observable<any> {
    return this._http.put(`${environment.serverSocket}/contacts/${data.id}`,data.contact);
  }
  deleteContact(id:any): Observable<any> {
    return this._http.delete(`${environment.serverSocket}/contacts/${id}`);
  }
}
