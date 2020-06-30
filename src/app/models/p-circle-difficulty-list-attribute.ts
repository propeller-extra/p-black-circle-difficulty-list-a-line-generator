export interface PCircleDifficultyListAttribute {

  attr: [
    {synthesis: boolean}, // 総合力
    {stair: [ // 階段
      {isEnabled: boolean}, // 属性に階段あるかないか
      {isSpiral: boolean}, // 螺旋
      {isCrossed: boolean}, // クロス
      {isDoubled: boolean}, // 二重
    ]},
    {chords: boolean}, // 同時押し
    {drumrolls: boolean}, // 交互連打
    {scattering: boolean}, // 乱打
    {jackhammers: boolean}, // 縦連打
    {hardest: boolean}, // 発狂
    {lastHardest: boolean}, // ラス殺し
    {oneHand: boolean}, // 片手処理
    {swing: boolean}, // 左右振り
    {deviation: boolean}, // ズレ押し
    {stamina: boolean}, // 体力
    {soflans: boolean}, // ソフラン
    {strictTiming: boolean}, // 辛判定
    {elbow: boolean}, // 無理押し
    {strictGauge: [ // 辛ゲージ
      {isEnabled: boolean}, // 属性に辛ゲージあるかないか
      {isSlightly: boolean}, // 微辛
    ]},
  ];

}
