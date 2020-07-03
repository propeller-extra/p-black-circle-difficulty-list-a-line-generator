import { Component, OnInit } from '@angular/core';

// imports class
import { PSRanDifficultyList } from '../../models/class/p-s-ran-difficulty-list';

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

    // 動作確認
    for (const key of Object.getOwnPropertyNames(this.pSRanDifficultyList.attr)) {
      console.log(key);
      console.log(this.pSRanDifficultyList.attr[key]);
    }
    this.pSRanDifficultyList.mainAttr.forEach(mainAttr => {
      console.log(mainAttr);
    });
  }
}
