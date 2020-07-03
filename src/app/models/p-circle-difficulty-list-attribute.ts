export class PCircleDifficultyListAttribute {
  propertyName: string; // 呼び出す時に使う名前
  showName: string; // viewに表示する時に使う日本語名
  isEnabled: boolean; // viewでチェックしたかどうか
  attrInDetail: object; // 二重階段、螺旋階段、クロス階段などの詳細属性がある時に使うプロパティ
}
