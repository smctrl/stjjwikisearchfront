import { bindable } from 'aurelia-framework';
import { TaleCard } from 'card';
export class TaleCardRow {
  @bindable
  card: TaleCard = null;
}
