import { Component, OnInit } from '@angular/core';

// imports class
import { PCircleDifficultyList } from '../../models/class/p-circle-difficulty-list';

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
    for (const key of Object.getOwnPropertyNames(this.pCircleDifficultyList.attr)) {
      console.log(key);
      console.log(this.pCircleDifficultyList.attr[key]);
    }
    for (const firstKey of Object.getOwnPropertyNames(this.pCircleDifficultyList.attrInDetail)) {
      for (const secondKey of Object.getOwnPropertyNames(this.pCircleDifficultyList.attrInDetail[firstKey])) {
        console.log(firstKey, secondKey);
        console.log(this.pCircleDifficultyList.attrInDetail[firstKey][secondKey]);
      }
    }
  }
}
