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
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'stair',
        showName: '階段',
        isEnabled: false,
        attrInDetail: [
          {
            propertyName: 'isSpiral',
            showName: '螺旋',
            afterConversionName: '螺',
          },
          {
            propertyName: 'isCrossed',
            showName: 'クロス',
            afterConversionName: 'X',
          },
          {
            propertyName: 'isMultiple',
            showName: '多重',
            afterConversionName: '重',
          },
          {
            propertyName: 'isDoubled',
            showName: '二重',
            afterConversionName: '二',
          },
          {
            propertyName: 'isTriple',
            showName: '三重',
            afterConversionName: '三',
          },
        ],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'chords',
        showName: '同時押し',
        isEnabled: false,
        attrInDetail: [
          {
            propertyName: 'isTrident',
            showName: '三角押し',
            afterConversionName: '三',
          },
        ],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'drumrolls',
        showName: '交互連打',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'scattering',
        showName: '乱打',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'jackhammers',
        showName: '縦連打',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'hardest',
        showName: '発狂',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'lastHardest',
        showName: 'ラス殺し',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'oneHand',
        showName: '片手処理',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'swing',
        showName: '左右振り',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'deviation',
        showName: 'ズレ押し',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'stamina',
        showName: '体力',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'soflans',
        showName: 'ソフラン',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'strictTiming',
        showName: '辛判定',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'elbow',
        showName: '無理押し',
        isEnabled: false,
        attrInDetail: [],
        selectedAttrInDetail: undefined,
      },
      {
        propertyName: 'strictGauge',
        showName: '辛ゲージ',
        isEnabled: false,
        attrInDetail: [
          {
            propertyName: 'isSlightly',
            showName: '微辛ゲージ',
            afterConversionName: '微',
          },
        ],
        selectedAttrInDetail: undefined,
      },
    ];
  }
}
