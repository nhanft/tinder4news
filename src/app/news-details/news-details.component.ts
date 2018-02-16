import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  backendUrl = 'http://localhost:3000/news/'
  currentCardIndex:number = +this.activatedRoute.snapshot.params['id']

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchCard(this.currentCardIndex);
  }

  fetchCard(id) {
    this.newsService.get(this.backendUrl + id).then((response) => {
      this.card = response;
    })
  }

}
