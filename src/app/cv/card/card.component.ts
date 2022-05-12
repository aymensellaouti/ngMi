import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {}
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.tostr.success(
          `Le cv de ${this.cv.firstname} ${this.cv.name} a été pré selectionné`
        );
      } else {
        this.tostr.warning(
          `Le cv de ${this.cv.firstname} ${this.cv.name} est déjà pré selectionné`
        );
      }
    }
  }
}
