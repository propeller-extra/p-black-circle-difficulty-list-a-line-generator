import { Component, OnInit } from '@angular/core';

// imports class
import { PCircleDifficultyList } from '../../models/p-circle-difficulty-list';

@Component({
  selector: 'app-p-circle-difficulty-list-form',
  templateUrl: './p-circle-difficulty-list-form.component.html',
  styleUrls: ['./p-circle-difficulty-list-form.component.sass'],
})
export class PCircleDifficultyListFormComponent implements OnInit {

  public pCircleDifficultyList: PCircleDifficultyList; // ビューへの描写専用モデル
  public pBlackCircleDifficultyList: PCircleDifficultyList; // 黒丸難易度表
  public pWhiteCircleDifficultyList: PCircleDifficultyList; // 白丸難易度表

  public switchUsingModel(switchModelName: string): void {
    if (switchModelName === 'white') {
      this.pCircleDifficultyList = this.pWhiteCircleDifficultyList;
    } else if (switchModelName === 'black') {
      this.pCircleDifficultyList = this.pBlackCircleDifficultyList;
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.pCircleDifficultyList = new PCircleDifficultyList('');
    this.pWhiteCircleDifficultyList = new PCircleDifficultyList('white');
    this.pBlackCircleDifficultyList = new PCircleDifficultyList('black');

    this.pCircleDifficultyList = this.pWhiteCircleDifficultyList; // 初期値は白丸難易度表
  }
}
