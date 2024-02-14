import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  OnSubmit(f: NgForm) {
    // console.log("success");
    console.log(f);
  }
  getValue(f: NgModel) {
    console.log(f);
  }
}
