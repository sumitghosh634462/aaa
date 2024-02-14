import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movieNames:Array<any>=[
    {id:1,name:"Sholey"},
    {id:2,name:"3Idiots"},
    {id:3,name:"Munna Bhai MBBS"}
  ]
  constructor(private route : ActivatedRoute){

  }
  // ngOnInit():void{
  //   // this.route.paramMap.this.service.function
  //   //   .subscribe(arg => this.property = arg);
  //   this.route.paramMap
  //     .subscribe(value => {
  //       let id = value.get('id');
  //       console.log(id);
  //     });
    
  // }
}
