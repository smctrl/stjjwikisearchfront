import { bindable } from 'aurelia-framework';
import { PersonnelCard } from 'card';
export class PersonnelCardRow {
  @bindable
  card: PersonnelCard = null;
}
