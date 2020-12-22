import { bindable } from 'aurelia-framework';
import { IncidentCard } from 'card';
export class IncidentCardRow {
  @bindable
  card: IncidentCard = null;
}
