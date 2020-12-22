# `stjj-wiki-search-front`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `au run`, then open `http://localhost:8080`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To enable Webpack Bundle Analyzer, do `au run --analyze`.

To enable hot module reload, do `au run --hmr`.

## Build for production

Run `au build --env prod`.

## デプロイのためにやること
`npm run build`  
向こうにpush  
反映を待つ  



function getTable() {
return document.getElementById("search_result");
}

function loadToTable(result) {
  for(let index=0;index<result.length;index++) {
    createObjectCardRow(result[index], index+1);
  }
}

function createObjectCardRow(singleResult, index) {
const newRow = getTable().insertRow(index);

const cardNameCell  = newRow.insertCell(0);
const cardNameNode  = document.createTextNode(singleResult.cardName);
cardNameCell.appendChild(cardNameNode);

const costCell  = newRow.insertCell(1);
const costNode  = document.createTextNode(singleResult.cost);
costCell.appendChild(costNode);

const spCell  = newRow.insertCell(2);
const spNode  = document.createTextNode(singleResult.sp);
spCell.appendChild(spNode);

const objectClassCell  = newRow.insertCell(3);
const objectClassNode  = document.createTextNode(singleResult.objectClass);
objectClassCell.appendChild(objectClassNode);

const effectCell  = newRow.insertCell(4);
const effectNode  = document.createTextNode(singleResult.effect);
effectCell.appendChild(effectNode);

const tagsCell  = newRow.insertCell(5);
const tagsNode  = document.createTextNode(singleResult.tags.join(","));
tagsCell.appendChild(tagsNode);

}
