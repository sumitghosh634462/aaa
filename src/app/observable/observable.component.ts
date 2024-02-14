import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  str:any;
  ngOnInit() {
    const obsTest$ = new Observable(observer => {
      // console.log("printed from observable hey i am here");
      observer.next("this is first from observer");
      observer.next("this is second from observer");
      observer.next(10 + 5);

      setTimeout(() => {
        observer.next(" 2 sec Done {third}");
      }, 2000);
      observer.next("this is fourth");
      observer.next("Jay Shree Ram");

    }).subscribe(value => {
      this.str = value;
      console.log(value);
    });

    const obsTest = function () {
      // console.log("is is normal function");
      return "It is normal function";
    }

    const returnData = obsTest();
    console.log(returnData);
    // obsTest();
  }

}
