import { PDifficultyList } from '../interface/p-difficulty-list';

export class PCircleDifficultyList implements PDifficultyList {
  lv: number;
  name: string;
  link: string;
  attr: {
    synthesis: boolean, // 総合力
    stair: boolean, // 階段
    chords: boolean, // 同時押し
    drumrolls: boolean, // 交互連打
    scattering: boolean, // 乱打
    jackhammers: boolean, // 縦連打
    hardest: boolean, // 発狂
    lastHardest: boolean, // ラス殺し
    oneHand: boolean, // 片手処理
    swing: boolean, // 左右振り
    deviation: boolean, // ズレ押し
    stamina: boolean, // 体力
    soflans: boolean, // ソフラン
    strictTiming: boolean, // 辛判定
    elbow: boolean, // 無理押し
    strictGauge: boolean, // 辛ゲージ;
  };
  attrInDetail: {
    stair: {
      isSpiral: boolean, // 螺旋
      isCrossed: boolean, // クロス
      isDoubled: boolean, // 二重
    },
    strictGauge: {
      isSlightly: boolean, // 微辛
    },
  };

  constructor() {
    this.lv = undefined;
    this.name = '';
    this.link = '';

    // なんて愚直なクソコードなんだ！
    // 【言い訳】ループ回してやろうとすると「Cannot convert undefined or null to object」出るしこれしか思いつかなかった（泣）
    this.attr = {
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
    };

    this.attrInDetail = {
      stair: {
        isSpiral: false, // 螺旋
        isCrossed: false, // クロス
        isDoubled: false, // 二重
      },
      strictGauge: {
        isSlightly: false, // 微辛
      },
    };
  }
}
