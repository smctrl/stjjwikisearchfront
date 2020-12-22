export type CardType = "Object" | "Personnel" | "Tale" | "Incident" | "Canon";
export type Card = ObjectCard | PersonnelCard | TaleCard | IncidentCard | CanonCard;
export type ObjectClass = "Safe" | "Euclid" | "Keter" | "Thaumiel" | "Neutralized" | "Unclassed" | "Anomalous" | "Explained";

export class ObjectCard {
  public cardType: CardType = "Object";
  constructor(
    public url: string,
    public cardName: string,
    public objectClass: ObjectClass,
    public cost: string,
    public sp: string,
    public scpNo: string,
    public effectTop: string,
    public effect: string,
    public flavor: string,
    public tags: string[],
    public source: string,
    public etc: string,
    public html: string,
    public image: string,
    public lastUpdate: Date,
  ) { }
}

export class PersonnelCard {
  public cardType: CardType = "Personnel";
  constructor(
    public url: string,
    public cardName: string,
    public effect: string,
    public flavor: string,
    public tags: string[],
    public source: string,
    public etc: string,
    public html: string,
    public image: string,
    public lastUpdate: Date,
  ) { }
}

export class TaleCard {
  public cardType: CardType = "Tale";
  constructor(
    public url: string,
    public cardName: string,
    public effect: string,
    public flavor: string,
    public source: string,
    public etc: string,
    public html: string,
    public image: string,
    public lastUpdate: Date,
  ) { }
}

export class IncidentCard {
  public cardType: CardType = "Incident";
  constructor(
    public url: string,
    public cardName: string,
    public effect: string,
    public flavor: string,
    public source: string,
    public etc: string,
    public html: string,
    public image: string,
    public lastUpdate: Date,
  ) { }
}

export class CanonCard {
  public cardType: CardType = "Canon";
  constructor(
    public url: string,
    public cardName: string,
    public effect: string,
    public source: string,
    public etc: string,
    public html: string,
    public image: string,
    public lastUpdate: string,
  ) { }
}
