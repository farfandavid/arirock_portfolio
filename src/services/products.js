


export async function NotionApi() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "");
  myHeaders.append("Notion-Version", "2022-06-28");
  myHeaders.append("Content-Type", "application/json");

  var raw = "";

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  await fetch("https://api.notion.com/v1/databases/1e0983150b5a422faebd14a13448637b/query", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}