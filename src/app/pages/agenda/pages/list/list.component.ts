import { Component, OnInit } from '@angular/core';
import { contactsInterface } from '../../interface';
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
    this._service.getIOAll("create").subscribe((data: any) => {
      this.contactos.push(data)
    })
    this._service.getIOAll("edit").subscribe((data: any) => {
      let index = this.contactos.findIndex( i => i.id == data.id )
      this.contactos[index] = data
    })
    this._service.getIOAll("delete").subscribe((data: any) => {
      this.contactos.splice(data,1)
    })
  }

  ngOnInit(): void {
    this._service.getContacts().subscribe((response) => {
      this.contactos = response.data
    });
  }

  contactos: contactsInterface[] = [ ];
  
  deleteContact(id:number,index:number) {
    this._service.deleteContact(id).subscribe((response) => {
      this._service.emitIOAll("delete",index);
    });
  }
}
