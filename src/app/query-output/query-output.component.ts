import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-output',
  templateUrl: './query-output.component.html',
  styleUrls: ['./query-output.component.css']
})
export class QueryOutputComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(e => {
      console.log(e.get('abvc'));
      console.log(e.get('OrderBy'));
      console.log(e.get('page'));
    })
  }

}
