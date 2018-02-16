import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  backendUrl = 'http://localhost:3000/news/'
  currentCardIndex:number = +this.activatedRoute.snapshot.params['id']

  public card:any;

  fetchCard(id) {
    this.newsService.get(this.backendUrl + id).then((response) => {
      this.card = response;
    })
  }

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchCard(this.currentCardIndex);
  }

}
