import { search } from "api-service";
import { Card } from "card";
export class App {
  public message: string = 'Hello World!3';
  public result : string = "";
  public cards: Card[] = [];
  public query: string = "";
  public doSearch() {
    search(JSON.parse(this.query)).then(json => {console.log("JSON到着");this.cards = json}).catch(reason => this.message = JSON.stringify(reason));
  }
}
