import { search } from "api-service";
export class App {
  public message: string = 'Hello World!2';
  public result : string = "";
  public doSearch() {
    const query = {
      cardType: "Object",
      $or : [
        {objectClass:"Neutralized"},
        {objectClass:"Explained"},
      ]
    }
    search(query).then(json => {console.log("JSON到着");this.result = JSON.stringify(json)});
  }
}
