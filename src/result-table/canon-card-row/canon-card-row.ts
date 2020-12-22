import { bindable } from 'aurelia-framework';
import { CanonCard } from 'card';
export class CanonCardRow {
  @bindable
  card: CanonCard = null;
}
