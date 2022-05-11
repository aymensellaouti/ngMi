import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  date = new Date();
  cvs: Cv[] = [
    new Cv(1, 39, 'aymen', 'sellaouti', 'teacher', '              ', '1234'),
    new Cv(
      2,
      3,
      'skander',
      'sellaouti',
      'tgangin',
      'rotating_card_profile3.png',
      '7'
    ),
    new Cv(3, 3, 'skander', 'sellaouti', 'tgangin', '', '7'),
  ];
  constructor() {}

  ngOnInit(): void {}
  selectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
