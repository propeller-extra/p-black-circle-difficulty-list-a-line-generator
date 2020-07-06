import { Component, OnInit, Input } from '@angular/core';

// imports class
import { PCircleDifficultyList } from '../../models/p-circle-difficulty-list';

@Component({
  selector: 'app-p-circle-difficulty-list-line-generator',
  templateUrl: './p-circle-difficulty-list-line-generator.component.html',
  styleUrls: ['./p-circle-difficulty-list-line-generator.component.sass']
})
export class PCircleDifficultyListLineGeneratorComponent implements OnInit {

  public outputText: string;

  // 例のオブジェクトをInputする
  @Input() pCircleDifficultyList: PCircleDifficultyList;

  public outputTextBtnOnClick(): void {

    let lineText: string; // このメソッド内で作成される1行のテキスト。この値をoutputTextにぶち込む。

    lineText = '';

    // lvが入力されているかどうか判定

    // link

    // name

    // for attr of OBJECT

    this.outputText = 'あほ';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
