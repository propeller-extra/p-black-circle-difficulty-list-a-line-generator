import { PDifficultyList } from '../interface/p-difficulty-list';

export class PSRanDifficultyList implements PDifficultyList {
  lv: number;
  name: string;
  link: string;
  bpm: number;
  attr: {
    synthesis: boolean; // 総合力
    elbow: boolean; // 無理押し
    scattering: boolean; // 乱打
    multiple: boolean; // 多重
    complex: boolean; // 複合
    hardest: boolean; // 発狂
    accuracy: boolean; // 精度
    deviation: boolean; // ズレ押し
    stamina: boolean; // 体力
    lastHardest: boolean; // ラス殺し
    soflans: boolean; // ソフラン
    longNotes: boolean; // ロングノーツ
  };
  mainAttr: []; // 主要な属性(難易度表内で黄色く塗られている属性)
  attrInDetail: {};

  constructor() {
    this.lv = undefined;
    this.name = '';
    this.link = '';
    this.bpm = undefined;

    this.attr = {
      synthesis: false, // 総合力
      elbow: false, // 無理押し
      scattering: false, // 乱打
      multiple: false, // 多重
      complex: false, // 複合
      hardest: false, // 発狂
      accuracy: false, // 精度
      deviation: false, // ズレ押し
      stamina: false, // 体力
      lastHardest: false, // ラス殺し
      soflans: false, // ソフラン
      longNotes: false, // ロングノーツ
    };

    this.mainAttr = [];
    this.attrInDetail = {};
  }
}
