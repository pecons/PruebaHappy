import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-who-what',
  templateUrl: './why-who-what.component.html',
  styleUrls: ['./why-who-what.component.css']
})
export class WhyWhoWhatComponent implements OnInit {

  @Input() public whyText!: string;
  @Input() public howText!: string;
  @Input() public whatText!: string;
  @Input() public imgUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
