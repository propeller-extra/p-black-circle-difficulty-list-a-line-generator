import { Component, OnInit, Input } from '@angular/core';

// imports class
import { PCircleDifficultyList } from '../../models/p-circle-difficulty-list';
import { PCircleDifficultyListAttribute } from '../../models/p-circle-difficulty-list-attribute';

@Component({
  selector: 'app-p-circle-difficulty-list-form',
  templateUrl: './p-circle-difficulty-list-form.component.html',
  styleUrls: ['./p-circle-difficulty-list-form.component.sass'],
})
export class PCircleDifficultyListFormComponent implements OnInit {
  public pCircleDifficultyList: PCircleDifficultyList;

  public selectedValue: any;

  constructor() {}

  ngOnInit(): void {
    this.pCircleDifficultyList = new PCircleDifficultyList();

    // 動作確認
    for (const hoge of this.pCircleDifficultyList.attr) {
      console.log(hoge.showName);
    }
  }
}
