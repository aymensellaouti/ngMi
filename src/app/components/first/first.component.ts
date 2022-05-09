import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  color = 'green';
  isHidden = true;
  constructor() {}

  ngOnInit(): void {}
  processStafs() {
    this.name == 'mohamed' ? (this.name = 'aymen') : (this.name = 'mohamed');
    this.isHidden = !this.isHidden;
  }
}
