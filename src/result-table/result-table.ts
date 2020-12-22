import { bindable } from 'aurelia-framework';
import { Card } from 'card';
export class ResultTable {
  constructor() {}
  @bindable
  cards: Card[];
}
