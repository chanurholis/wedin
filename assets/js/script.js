const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const nameParam = params.get('name');

if (nameParam) {
  document.querySelector('.yts').textContent = nameParam;
}