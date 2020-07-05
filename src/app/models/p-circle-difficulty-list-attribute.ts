import { PCircleDifficultyListAttributeInDetail } from './p-circle-difficulty-list-attribute-in-detail';

export class PCircleDifficultyListAttribute {
  readonly propertyName: string; // 呼び出す時に使う名前
  readonly showName: string; // viewに表示する時に使う日本語名
  isEnabled: boolean; // viewでチェックしたかどうか
  attrInDetail: PCircleDifficultyListAttributeInDetail[]; // 二重階段、螺旋階段、クロス階段などの詳細属性がある時に使うプロパティ
}
