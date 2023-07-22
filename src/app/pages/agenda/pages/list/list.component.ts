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
    this._service.listenToServer(this.connection.change).subscribe((change) =>{
      this.onChange(change)
    })
    this._service.listenToServer(this.connection.create).subscribe((create) =>{
      this.onCreate(create)
    })
  }

  ngOnInit(): void {
    
    this._service.getContacts().subscribe((response) => {
      this.contactos = response.data
    });

    this._service.listenToServer(this.connection.change).subscribe((change) =>{
      this.onChange(change)
    })
    this._service.listenToServer(this.connection.create).subscribe((create) =>{
      this.onCreate(create)
    })

  }

  mostrarColumnasTabla: string[] = ['id','name','phone','action'];
  contactos: contactsInterface[] = [ ];
  connection: connectionInterface = { change: "change", create: "create" };
  
  deleteContact(id:number) {
    this._service.deleteContact(id).subscribe((response) => {
      this.contactos = this.contactos.filter(i => i.id != id);
    });
  }

  onChange(change: any){
    console.log("change",change)
  }
  onCreate(create: any){
    console.log("create",create)
  }

}
