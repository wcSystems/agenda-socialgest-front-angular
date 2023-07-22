import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { Router, ActivatedRoute , ParamMap} from '@angular/router';
import { contactInterface } from '../../interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  contact: contactInterface = { name: "", last_name: "", phone: 0, email: "" }

  checkoutForm: FormGroup = this.formBuilder.group({
    name: ['', [
      Validators.required
    ]],
    last_name: ['', [
      Validators.required
    ]],
    phone: ['', [
      Validators.required,
    ]],
    email: ['', [
      Validators.required,Validators.email
    ]],
  });


  constructor(
    private formBuilder: FormBuilder,
    private _service: ServicesService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._service.viewContact(this._route.snapshot.paramMap.get('id')).subscribe((response) => {
      this.checkoutForm = this.formBuilder.group({
        name: [response.data.name, [
          Validators.required
        ]],
        last_name: [response.data.last_name, [
          Validators.required
        ]],
        phone: [response.data.phone, [
          Validators.required,
        ]],
        email: [response.data.email, [
          Validators.required,Validators.email
        ]],
      });
    });
    
  }
  onSubmit(): void {

    let payload: Object = {
      contact:  this.checkoutForm.value,
      id: this._route.snapshot.paramMap.get('id')
    }

    this._service.editContact(payload).subscribe((response) => {
      this._service.emitIOAll();
      this._router.navigate(['agenda']);
    });
  }
  
}
