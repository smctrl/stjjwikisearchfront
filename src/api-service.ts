export async function search(query: any): Promise<any> {
  return fetch("https://api.stjj.tk/api/search_by_nedb_query", {
    method: "POST",
    body: query
  }).then(response=>{console.log("レスポンス到着");return response.json()})
}
