import { PDifficultyListAttribute } from './p-difficulty-list-attribute';

export interface PDifficultyList extends PDifficultyListAttribute {
  lv: number;
  name: string;
  link: string;
}
