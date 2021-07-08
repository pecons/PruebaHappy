import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() public title!: string;
  @Input() public desc!: string;
  @Input() public labels!: Array<string>;
  

  constructor() { }

  ngOnInit(): void {
    if (this.title === undefined) {
			this.title = 'Title';
		}
    if (this.desc === undefined) {
			this.desc = 'Description';
		}
    if (this.labels === undefined) {
			this.labels = ['label1','label2'];
		}

  }

}
