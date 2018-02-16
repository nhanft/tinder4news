import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  backendUrl = 'http://localhost:3000/news/'
  currentCardIndex = 1

  constructor() {}

  loadCard(cardIndex){
    fetch(this.currentCardIndex + 1)
      .then(function(response) {
        return console.log(response);
      })
  }

  randomNumber(min, max){
    Math.floor((Math.random() * max) + min);
  }

  ngOnInit() {
    this.loadCard(1);
  }

}
