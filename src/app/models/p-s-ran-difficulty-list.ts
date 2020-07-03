import { PCircleDifficultyListAttribute } from '../models/p-s-ran-difficulty-list-attribute';

export class PSRanDifficultyList {
  lv: number;
  name: string;
  link: string;
  bpm: number;
  attr: PCircleDifficultyListAttribute[];

  constructor() {
    this.lv = undefined;
    this.name = '';
    this.link = '';
    this.bpm = undefined;

    this.attr = [
      {
        propertyName: 'synthesis',
        showName: '総合力',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'elbow',
        showName: '無理押し',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'scattering',
        showName: '乱打',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'multiple',
        showName: '多重',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'complex',
        showName: '複合',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'hardest',
        showName: '発狂',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'accuracy',
        showName: '精度',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'deviation',
        showName: 'ズレ押し',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'stamina',
        showName: '体力',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'lastHardest',
        showName: 'ラス殺し',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'soflans',
        showName: 'ソフラン',
        isEnabled: false,
        isImportantAttr: false,
      },
      {
        propertyName: 'longNotes',
        showName: 'ロングノーツ',
        isEnabled: false,
        isImportantAttr: false,
      },
    ];
  }
}
