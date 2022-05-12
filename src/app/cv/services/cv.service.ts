import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
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
  constructor() {}
  getCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteCv(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
    }
  }
  addCv(cv: Cv) {
    if (this.cvs.length) {
      cv.id = this.cvs[this.cvs.length - 1].id + 1;
    } else {
      cv.id = 1;
    }
    this.cvs.push(cv);
  }
}
