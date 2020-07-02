import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PCircleDifficultyList } from '../../models/p-circle-difficulty-list';

@Component({
  selector: 'app-line-generator',
  templateUrl: './line-generator.component.html',
  styleUrls: ['./line-generator.component.sass'],
})
export class LineGeneratorComponent implements OnInit {

  public pCircleDifficultyList: PCircleDifficultyList = {
    lv: undefined,
    name: '',
    link: '',
    attr: {
      synthesis: false, // 総合力
      stair: false, // 階段
      chords: false, // 同時押し
      drumrolls: false, // 交互連打
      scattering: false, // 乱打
      jackhammers: false, // 縦連打
      hardest: false, // 発狂
      lastHardest: false, // ラス殺し
      oneHand: false, // 片手処理
      swing: false, // 左右振り
      deviation: false, // ズレ押し
      stamina: false, // 体力
      soflans: false, // ソフラン
      strictTiming: false, // 辛判定
      elbow: false, // 無理押し
      strictGauge: false, // 辛ゲージ;
    },
    attrInDetail: {
      stair: {
        isSpiral: false, // 螺旋
        isCrossed: false, // クロス
        isDoubled: false, // 二重
      },
      strictGauge: {
        isSlightly: false, // 微辛
      },
    },
  };

  constructor() {
  }

  ngOnInit(): void {}

  clicked(): void {}
}
