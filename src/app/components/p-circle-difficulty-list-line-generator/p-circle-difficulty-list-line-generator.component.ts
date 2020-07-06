import { Component, OnInit, Input } from '@angular/core';

// imports class
import { PCircleDifficultyList } from '../../models/p-circle-difficulty-list';

@Component({
  selector: 'app-p-circle-difficulty-list-line-generator',
  templateUrl: './p-circle-difficulty-list-line-generator.component.html',
  styleUrls: ['./p-circle-difficulty-list-line-generator.component.sass']
})
export class PCircleDifficultyListLineGeneratorComponent implements OnInit {

  public outputText: string; // viewのtextareaに表示される値

  // 例のオブジェクトをInputする
  @Input() pCircleDifficultyList: PCircleDifficultyList;

  public outputTextBtnOnClick(): void {

    let lineText = '|'; // このメソッド内で作成される1行のテキスト。この値をoutputTextにぶち込む。

    // lvが入力されているかどうか判定
    if (this.pCircleDifficultyList.lv == null) {
      lineText += ' ::: |';
    } else {
      lineText += this.pCircleDifficultyList.lv.toString() + '|';
    }

    // link and name
    lineText += '[[' + this.pCircleDifficultyList.link + '|' + this.pCircleDifficultyList.name + ']]|';

    // for attr of OBJECT
    this.pCircleDifficultyList.attr.forEach(attr => {
      if ((attr.selectedAttrInDetail != null) && (attr.isEnabled)) {
        // propertynameを愚直に探索
        attr.attrInDetail.forEach(attrInDetail => {
          if (attr.selectedAttrInDetail === attrInDetail.propertyName) {
            lineText += attrInDetail.afterConversionName + '|'; // propertyNameが一致したらそのオブジェクトから一文字を引き出す
            return;
          }
        });
      } else {
        if (attr.isEnabled) {
          lineText += '◯|';
        } else {
          lineText += ' |';
        }
      }
    });

    this.outputText = lineText;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
