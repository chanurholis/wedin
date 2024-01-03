const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const nameParam = params.get('name');


document.querySelector('.yts').textContent = nameParam ? `  ${nameParam}  ` : '  Everyone  ';