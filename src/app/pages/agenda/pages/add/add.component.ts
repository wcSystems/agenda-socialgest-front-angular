import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  
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
    private _router: Router,
  ) { }

  onSubmit(): void {
    this._service.createContact(this.checkoutForm.value).subscribe((response) => {
      this._service.emitIOAll("create",response.data);
      this._router.navigate(['agenda']);
    });
  }
}
