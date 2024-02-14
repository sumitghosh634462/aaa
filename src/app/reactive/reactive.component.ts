import { Component } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  form: any;
  constructor() {
    this.form = new FormGroup({

      //name
      fullName: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5)
        ]),

      //email
      email: new FormControl('',
        [
          Validators.required

        ]),

      //address
      address: new FormControl('',
        [
          Validators.required
        ])
    });


  }
  get fullName() {
    return this.form.get("fullName");
  }
  get email() {
    return this.form.get("email");
  }
  get address() {
    return this.form.get("address");
  }
}
