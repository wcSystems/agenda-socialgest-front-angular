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
  ) { }

  ngOnInit(): void {
    this._service.getContacts().subscribe((response) => {
      this.contactos = response.data
    });
  }

  mostrarColumnasTabla: string[] = ['id','name','phone','action'];
  contactos: contactsInterface[] = [ ];
  
  deleteContact(id:number) {
    this._service.deleteContact(id).subscribe((response) => {
      this.contactos = this.contactos.filter(i => i.id != id);
    });
  }

}
