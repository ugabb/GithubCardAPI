import { Component, SimpleChanges, OnChanges, Input } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss'],
})
export class GithubCardComponent implements OnChanges {
  @Input() data: any;

  constructor(private githubApi: GithubService) {}

  ngOnInit() {
    this.githubApi.getData().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }

  ngOnChanges() {
    this.githubApi.getData().subscribe((res) => {
      this.data = res;
      console.log(res, "NGONCHANGES");
    });
  }
}
