import { bindable } from 'aurelia-framework';
import { ObjectCard } from 'card';
export class ObjectCardRow {
  @bindable
  card: ObjectCard = null;
  public getTags() {
    return this.card.tags.join(",");
  }
}
