import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    // this.route.paramMap.this.service.function
    //   .subscribe(arg => this.property = arg);
    this.route.paramMap
      .subscribe(value => {
        let id = value.get('id');
        console.log(id);
        let n = value.get('name');
        console.log(n);
      });

  }
}
