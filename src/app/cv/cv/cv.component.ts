import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  nb = 0;
  cvs: Cv[] = [];
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
    this.cvService.selectItem$
    .pipe(distinctUntilChanged())
    .subscribe({
      next: (cv) => {this.nb++}
    });
  }
  /*   selectCv(cv: Cv) {
    this.selectedCv = cv;
  } */
}
