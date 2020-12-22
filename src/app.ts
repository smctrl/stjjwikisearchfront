import { search } from "api-service";
export class App {
  public message: string = 'Hello World!';
  public result : string = "";
  public doSearch() {
    const query = {
      "cardType": "Object",
      "$or" : [
        {"objectClass":"Neutralized"},
        {"objectClass":"Explained"},
      ]
    }
    search(query).then(json => this.result = JSON.stringify(json));
  }
}
