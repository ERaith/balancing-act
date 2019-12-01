//Function to hide the wecomeBanner.
//localStorage sessionStorage

// if(isHidden==true){
//  document.getElementsByClassName('welcomeBanner').style.display ='none';
// }
// sessionStorage.setItem('isHidden',false)
let data = sessionStorage.getItem('hidden');
if (data === 'true') {
  document.getElementById('welcomeBanner').style.display = "none";
} else {
  document.getElementById('welcomeBanner').style.display = "block";
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
  showMain();
});
transActive.addEventListener('click', function() {
  setActive(transActive);
  showTransactions();
});
proActive.addEventListener('click', function() {
  setActive(proActive);
});
//Removes active link and adds it to the selected nav button.
function setActive(activeLink) {
  proActive.classList.remove('activeLink');
  assetActive.classList.remove('activeLink');
  transActive.classList.remove('activeLink');
  activeLink.classList.add('activeLink');
}


//Hides the Main page content and shows Transactions Page
function showTransactions() {
  console.log('yay')
  const pageContent = document.getElementById('mainHome');
  pageContent.innerHTML = '';
  pageContent.innerHTML = `
  <section class="section-left" id="recentTransactions">
    <div class="transaction-hero">
      <h2>Transactions</h2>
      <div class='button-nav'>
        <button type="button"><strong>OUTFLOW</strong></button>
        <button type="button"><strong>INFLOW</strong></button>
        <button type="button" class='active'><strong>ALL</strong></button>
      </div>
    </div>
    <div class="transactions">
      <table class="recent-transactions">
        <tr>
          <th class='date'>Date</th>
          <th class='account'>Account</th>
          <th class='payee'>Payee</th>
          <th class='inflow'>Inflow</th>
          <th class='outflow'>Outflow</th>
        </tr>
        <tr>
          <td class='date'>10-25-19</td>
          <td class='account'>Credit Card</td>
          <td class='payee'>Target</td>
          <td class='inflow'>-</td>
          <td class='outflow'>$82.35</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>Express</td>
          <td class='inflow'>-</td>
          <td class='outflow'>$212.24</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>Paycheck</td>
          <td class='inflow'>$1,319.12</td>
          <td class='outflow'>-</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>Trader Joe's</td>
          <td class='inflow'>-</td>
          <td class='outflow'>$54.92</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>Shell</td>
          <td class='inflow'>-</td>
          <td class='outflow'>$46.23</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>Rent</td>
          <td class='inflow'>$800</td>
          <td class='outflow'>-</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>Hapa Sushi</td>
          <td class='inflow'>-</td>
          <td class='outflow'>$13.97</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>Pig Train</td>
          <td class='inflow'>-</td>
          <td class='outflow'>$4.83</td>
        </tr>
        <tr>
          <td class='date'>10-24-19</td>
          <td class='account'>Account</td>
          <td class='payee'>RTD</td>
          <td class='inflow'>-</td>
          <td class='outflow'>$6.00</td>
        </tr>
      </table>
    </div>
  </section>

  <section class="section-right">
    <div class="transaction-hero">
    </div>
    <div class="new-transactions">
    <h2>New Transactions</h2>
    <form method="post" action="/">



      <div>
        <label for="Type of Transaction">
          <span>Type of Transaction: </span>
          <select id="transaction" name="transaction" tabindex="1">
            <option value="Expense">Expense</option>

          </select>
        </label>
      </div>
      <div>
        <label for="Category">
          <span>Category: </span>
          <select id="subject" name="subject" tabindex="2">
            <option value="hello"> - Select One -</option>

          </select>
        </label>
      </div>
      <div>
        <label for="Account from:">
          <span>Account from: </span>
          <select id="subject" name="subject" tabindex="3">
            <option value="hello"> - Select One -</option>
          </select>
        </label>
      </div>

      <div>
        <label for="Payee">
          <span class="payee">Payee:</span>
          <input type="text" id="name" name="name" value="" tabindex="4" autofocus="autofocus" />
        </label>
      </div>
      <div>
        <label for="Outflow">
          <span class="required">Outflow:</span>
          <input type="email" id="email" name="email" value=""  tabindex="5" required="required" />
        </label>
      </div>
      <div>
        <label for="Inflow">
          <span class="required">Inflow:</span>
          <input type="email" id="email" name="email" value=""  tabindex="6" required="required" />
        </label>
      </div>

      <div>
        <button name="submit" type="submit" id="submit">Log Expense</button>
      </div>
    </form>
  </div>
  </section>

  `;
}
//Hides the transaction content and shows Main Page.
function showMain() {
  console.log('yay')
  const pageContent = document.getElementById('mainHome');
  pageContent.innerHTML = '';
  pageContent.innerHTML = `
  <div class="hero">
    <h1>Balancing Act</h1>
  </div>
  <section class="section-left">
    <div id="welcomeBanner">
      <button onclick='hideBanner()' class='welcome-banner-button'><img src="assets/close.svg" class='welcome-img'></button>
      <h3>Welcome, Oscar!</h3>

    </div>
    <section class="accountOverview">
      <div class="card col-33 left">
        <p>INCOME</p>
        <h3>$2,119.12</h3>
      </div>
      <div class="card col-33">
        <p>EXPENSES</p>
        <h3>$420.54</h3>
      </div>
      <div class="card col-33 right">
        <p>CREDIT SCORE</p>
        <h3>673</h3>
      </div>
    </section>
    <section class="accounts" id="accounts">
      <h2>Accounts</h2>
      <button type="button" class='manageAccount-button' name="ManageAccounts">MANAGE ACCOUNTS</button>
      <div class="card col-100">
        <img src="assets/checking.svg" alt="checking" class='card-img'>
        <h4>Wells Fargo</h4>
        <h5>Checking</h5>
      </div>
      <div class="card col-100">
        <img src="assets/savings.svg" alt="savings" class='card-img'>
        <h4>Wells Fargo</h4>
        <h5>Savings</h5>
      </div>
      <div class="card col-100">
        <img src="assets/credit-card.svg" alt="credit card" class='card-img'>
        <h4>Amazon Credit</h4>
        <h5>Credit Card</h5>
      </div>
      <div class="card col-100">
        <img src="assets/credit-card.svg" alt="credit card" class='card-img'>
        <h4>Southwest Credit</h4>
        <h5>Credit Card</h5>
      </div>
    </section>
  </section>
  <section class="recentTransactions" id="recentTransactions">
    <h2>Recent Transactions</h2>
    <button type="button">NEW TRANSACTIONS</button>
    <table class="recent-transactions">
      <tr>
        <th class='date'>Date</th>
        <th class='payee'>Payee</th>
        <th class='inflow'>Inflow</th>
        <th class='outflow'>Outflow</th>
      </tr>
      <tr>
        <td class='date'>Oct 25,2019</td>
        <td class='payee'>Target</td>
        <td class='inflow'>-</td>
        <td class='outflow'>$82.35</td>
      </tr>
      <tr>
        <td class='date'>Oct 24,2019</td>
        <td class='payee'>Express</td>
        <td class='inflow'>-</td>
        <td class='outflow'>$212.24</td>
      </tr>
      <tr>
        <td class='date'>Oct 22,2019</td>
        <td class='payee'>Paycheck</td>
        <td class='inflow'>$1,319.12</td>
        <td class='outflow'>-</td>
      </tr>
      <tr>
        <td class='date'>Oct 21,2019</td>
        <td class='payee'>Trader Joe's</td>
        <td class='inflow'>-</td>
        <td class='outflow'>$54.92</td>
      </tr>
      <tr>
        <td class='date'>Oct 20,2019</td>
        <td class='payee'>Shell</td>
        <td class='inflow'>-</td>
        <td class='outflow'>$46.23</td>
      </tr>
      <tr>
        <td class='date'>Oct 19,2019</td>
        <td class='payee'>Rent</td>
        <td class='inflow'>$800</td>
        <td class='outflow'>-</td>
      </tr>
      <tr>
        <td class='date'>Oct 19,2019</td>
        <td class='payee'>Hapa Sushi</td>
        <td class='inflow'>-</td>
        <td class='outflow'>$13.97</td>
      </tr>
      <tr>
        <td class='date'>Oct 18,2019</td>
        <td class='payee'>Pig Train</td>
        <td class='inflow'>-</td>
        <td class='outflow'>$4.83</td>
      </tr>
      <tr>
        <td class='date'>Oct 18,2019</td>
        <td class='payee'>RTD</td>
        <td class='inflow'>-</td>
        <td class='outflow'>$6.00</td>
      </tr>
    </table>
  </section>


  `;
  //once the new html is inserted into the DOM tree, we need to check again if the welcome banner should be shown.
  var data= sessionStorage.getItem('hidden');
  if (data === 'true') {
    document.getElementById('welcomeBanner').style.display = "none";
  } else {
    document.getElementById('welcomeBanner').style.display = "block";
  }
}


//Table JavaScript to put the table wherever I want. WIP
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
