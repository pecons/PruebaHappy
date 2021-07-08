import { Component, Input, OnInit } from '@angular/core';
import { website } from '../../models/website.model';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {

  @Input() public websites !: Array<website>;

  constructor() { }

  ngOnInit(): void {
  }

}
