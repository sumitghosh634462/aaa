import { Component,ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  varfromctoparent:string = "";
  varOutputFromChildToParent:string = "";
  @ViewChild(LoginComponent) childObj:any;
  
  ngAfterViewInit(){
    console.log(this.childObj);
    this.varfromctoparent = this.childObj.varcp;
  }

  receiveMessage($event:any){
    this.varOutputFromChildToParent = $event;
  }

  constructor(private router: Router){

  }


  onSubmit(){
    this.router.navigate(['/query'],{queryParams:{page:1,order:'newest'}});
  }

}
