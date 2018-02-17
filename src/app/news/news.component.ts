import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => slideOutLeft', animate(300, keyframes(kf.slideOutLeft))),
      transition('* => slideOutRight', animate(300, keyframes(kf.slideOutRight)))
    ])
  ]
})

export class NewsComponent implements OnInit {

  animationState: string;
  backendUrl = 'http://localhost:3000/news/'
  // currentCardIndex:number = +this.activatedRoute.snapshot.params['id']
  currentCardIndex = 1;
  cardDisplay = 'none';

  public card:any;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchCard(this.currentCardIndex);
  }


  fetchCard(id) {
    this.cardDisplay = 'none';
    this.newsService.get(this.backendUrl + id).then((response) => {
      this.card = response;
      setTimeout(() => {
        this.cardDisplay = 'block';

      }, 200);
    })
  }

  handleAnimationDone() {
    if (this.animationState) {
      this.resetAnimationState();
      this.currentCardIndex++;
      this.fetchCard(this.currentCardIndex);

    }
  }

  startAnimation(state) {
    console.log(state);

    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

}
