//Function to hide the wecomeBanner.
//localStorage sessionStorage

// if(isHidden==true){
//  document.getElementsByClassName('welcomeBanner').style.display ='none';
// }
// sessionStorage.setItem('isHidden',false)
let data = sessionStorage.getItem('hidden');
if(data === 'true'){
  document.getElementById('welcomeBanner').style.display ="none";
}else{
  document.getElementById('welcomeBanner').style.display ="block";
}
// sessionStorage.setItem('hidden','true')
function hideBanner() {
  var x = document.getElementById('welcomeBanner');
  x.style.display = "none";
  sessionStorage.setItem('hidden', 'true');

}
//Function to add/remove active class based on url.
  var assetActive = document.getElementById('assets');
  var transActive = document.getElementById('transactions');
  var proActive = document.getElementById('profile');

  assetActive.addEventListener('click', function() {
    setActive(assetActive);
  });
  transActive.addEventListener('click', function() {
    setActive(transActive);
  });
  proActive.addEventListener('click', function() {
    setActive(proActive);
  });

  function setActive(activeLink) {
    proActive.classList.remove('activeLink');
    assetActive.classList.remove('activeLink');
    transActive.classList.remove('activeLink');
    activeLink.classList.add('activeLink');
  }

//Table JavaScript to put the table wherever I want.
function json2table(json, classes) {
  var cols = Object.keys(json[0]);
  var headerRow = '';
  var bodyRows = '';
  //checks to make sure classes is initiallized with either class or an empty string
  classes = classes || '';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //Map HeaderRow of table from Json.
  cols.map(function(col) {
    headerRow += `<th>${capitalizeFirstLetter(col)}</th>`;
    // headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
  })
  json.map(function(row) {
    bodyRows += '<tr>';
    cols.map(function(colName) {
      bodyRows += '<td>' + row[colName] + '</td>';
    })
    bodyRows += '</tr>';
  });
  return '<table class="' +
    classes +
    '"><thead><tr>' +
    headerRow +
    '</tr></thead><tbody>' +
    bodyRows +
    '</tbody></table>';
}
// json2table(data/finances.json)
