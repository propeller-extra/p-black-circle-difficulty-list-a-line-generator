import { Component, OnInit } from '@angular/core';

// imports class
import { PCircleDifficultyList } from '../../models/p-circle-difficulty-list';

@Component({
  selector: 'app-p-circle-difficulty-list-form',
  templateUrl: './p-circle-difficulty-list-form.component.html',
  styleUrls: ['./p-circle-difficulty-list-form.component.sass'],
})
export class PCircleDifficultyListFormComponent implements OnInit {

  public pCircleDifficultyList: PCircleDifficultyList;

  /* Viewする時に使えそうな処理
    for (const key of Object.getOwnPropertyNames(this.pCircleDifficultyList.attr)) {
      this.pCircleDifficultyList.attr[key] = false;
    }
  */

  constructor() {}

  ngOnInit(): void {
    this.pCircleDifficultyList = new PCircleDifficultyList();

    // 動作確認
    for (const hoge of this.pCircleDifficultyList.attr) {
      console.log(hoge.showName);
    }
  }
}
