import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  names:string[] = ["Arun","Ajay","Nayaz","Sumit","Sayan"];

  objArray:Array<Object> = [
    {eid:1,fName:"Sayan Nag"}, 
    {eid:2,fName:"Sumit Ghosh"},
    {eid:3,fName:"Amit Shah"},
    {eid:4,fName:"Ayan Ren"},
    {eid:5,fName:"Sankha sen"}
  ]




  // changecolor: boolean = false;
  isAvailable:boolean = false;
  onewaydata: string = "it's from one way data";

  title: string = "Data from Component";

  varcp: string = "this data CUMMING from child to parent";
  varOutputfromcToParent: string = "this CUMMING from from child to parent by clicking the button";

  @Output() messageEvent = new EventEmitter<string>();
  @Input() varpc: any;

  // varForm1:string = "Form 1";
  // varForm2:string = "Form 2";
  // varForm3:string = "Form 3";

  message:string = "";

  form1(val:any){
    // this.messageEvent.emit(this.varForm1);
    this.message = val;
  }

  // form2(){
  //   this.messageEvent.emit(this.varForm2);
  // }

  // form3(){
  //   this.messageEvent.emit(this.varForm3);
  // }

  sendMessage(){
    this.messageEvent.emit(this.varOutputfromcToParent);
  }

  // num: number = 10 + 5;

  // clr: string = "green";
  // imageUrl: string = "data:image/jpeg;base64,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";




  // buttonC() {
  //   // console.log("onewaydat");
  // }


  // onKeyButton() {
  //   console.log(this.onewaydata);
  // }


  // buttonClick() {
  //   console.log("Button click event happened");
  // }


  // onKeyUp($event: any) {
  //   if ($event.code == "Enter")
  //     console.log($event);
  // }


  // onKeyUpHappen() {
  //   console.log("Key Pressed")
  // }


  // onKeyUpInput(name: string) {
  //   console.log("Entered value is: " + name);
  // }
}
