import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [
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
  constructor() { }
  getCvs(): Cv[] {
    return this.cvs;
  }
}