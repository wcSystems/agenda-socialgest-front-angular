import { Component, OnInit } from '@angular/core';
import { contactsInterface, connectionInterface } from '../../interface';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(
    private _service: ServicesService
  ) { 

  }

  ngOnInit(): void {

    this._service.getContacts().subscribe((response) => {
      this.contactos = response.data
    });

		this._service.getIOAll().subscribe((data: any) => {
      this._service.getContacts().subscribe((response) => {
        this.contactos = response.data
      });
    })
  }

  mostrarColumnasTabla: string[] = ['id','name','phone','action'];
  contactos: contactsInterface[] = [ ];
  connection: connectionInterface = { change: "change", create: "create" };
  
  deleteContact(id:number) {
    this._service.deleteContact(id).subscribe((response) => {
      this._service.emitIOAll();
    });
  }
}
