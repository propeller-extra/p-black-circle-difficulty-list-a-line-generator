import { Component, OnInit } from '@angular/core';

// imports class
import { PSRanDifficultyList } from '../../models/p-s-ran-difficulty-list';

@Component({
  selector: 'app-p-s-ran-difficulty-list-form',
  templateUrl: './p-s-ran-difficulty-list-form.component.html',
  styleUrls: ['./p-s-ran-difficulty-list-form.component.sass'],
})
export class PSRanDifficultyListFormComponent implements OnInit {

  public pSRanDifficultyList: PSRanDifficultyList;

  constructor() {}

  ngOnInit(): void {
    this.pSRanDifficultyList = new PSRanDifficultyList();
  }
}
