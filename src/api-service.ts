export async function search(query: any): Promise<any> {
  return fetch("http://35.230.98.210/api/search_by_nedb_query", {
    method: "POST",
    body: query
  }).then(response=>response.json())
}
