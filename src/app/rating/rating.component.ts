import { Component } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  rating: number = 0;
  submitted: boolean = false;

  changeRating(rating: number){
    this.rating = rating;
  }

  submit(){
    this.submitted = true;
  }
}
