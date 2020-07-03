import { PCircleDifficultyListAttribute } from './p-circle-difficulty-list-attribute';

export class PCircleDifficultyList{
  lv: number;
  name: string;
  link: string;
  attr: PCircleDifficultyListAttribute[];

  constructor() {
    this.lv = undefined;
    this.name = '';
    this.link = '';
    this.attr = [
      {
        propertyName: 'synthesis',
        showName: '総合力',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'stair',
        showName: '階段',
        isEnabled: false,
        attrInDetail: [
          { isSpiral: false }, // 螺旋
          { isCrossed: false }, // クロス
          { isDoubled: false }, // 二重
        ],
      },
      {
        propertyName: 'chords',
        showName: '同時押し',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'drumrolls',
        showName: '交互連打',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'scattering',
        showName: '乱打',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'jackhammers',
        showName: '縦連打',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'hardest',
        showName: '発狂',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'lastHardest',
        showName: 'ラス殺し',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'oneHand',
        showName: '片手処理',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'swing',
        showName: '左右振り',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'deviation',
        showName: 'ズレ押し',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'stamina',
        showName: '体力',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'soflans',
        showName: 'ソフラン',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'strictTiming',
        showName: '辛判定',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'elbow',
        showName: '無理押し',
        isEnabled: false,
        attrInDetail: [],
      },
      {
        propertyName: 'strictGauge',
        showName: '辛ゲージ',
        isEnabled: false,
        attrInDetail: [
          { isSlightly: false }, // 微辛
        ],
      },
    ];
  }
}
