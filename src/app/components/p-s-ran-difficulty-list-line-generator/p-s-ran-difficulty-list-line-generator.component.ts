import { Component, OnInit, Input } from '@angular/core';

// imports class
import { PSRanDifficultyList } from '../../models/p-s-ran-difficulty-list';
import { PSRanDifficultyListLvAllColors } from '../../models/p-s-ran-difficulty-list-lv-all-clolors';

@Component({
  selector: 'app-p-s-ran-difficulty-list-line-generator',
  templateUrl: './p-s-ran-difficulty-list-line-generator.component.html',
  styleUrls: ['./p-s-ran-difficulty-list-line-generator.component.sass']
})
export class PSRanDifficultyListLineGeneratorComponent implements OnInit {

  public outputText: string; // viewのtextareaに表示される値
  private pSRanDifficultyListLvAllColors: PSRanDifficultyListLvAllColors;

  @Input() pSRanDifficultyList: PSRanDifficultyList;

  public outputTextBtnOnClick(): void {
    let lineText = '|'; // このメソッド内で作成される1行のテキスト。この値をoutputTextにぶち込む。

    // lv color
    lineText += this.pSRanDifficultyListLvAllColors.colors[this.pSRanDifficultyList.lv] + ':';

    // lv
    lineText += this.pSRanDifficultyList.lv.toString() + '|';

    // link and name
    lineText += '[[' + this.pSRanDifficultyList.link.toString() + '|' + this.pSRanDifficultyList.name.toString() + ']]|';

    // bpm
    lineText += this.pSRanDifficultyList.bpm + '|';

    // attr and isImportantAttr
    this.pSRanDifficultyList.attr.forEach(attr => {
      if (attr.isImportantAttr && attr.isEnabled) {
        lineText += '@gold:';
      }

      if (attr.isEnabled) {
        lineText += '◯|';
      } else {
        lineText += ' |';
      }
    });

    this.outputText = lineText;
  }

  constructor() {}

  ngOnInit(): void {
    this.pSRanDifficultyListLvAllColors = new PSRanDifficultyListLvAllColors();
  }
}
