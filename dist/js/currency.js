function convertCurrency() {
  var from = document.getElementById("fromCountry").value;
  var to = document.getElementById("toCountry").value;
  var xmlHttp = new XMLHttpRequest();
  var url =
    "http://data.fixer.io/api/latest?access_key=680cfe3bad2382bd1c5207f35b9a0d8e" +
    "&symbols=" +
    from +
    "," +
    to;
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var result = xmlHttp.responseText;
      // alert(result);
      var jsResult = JSON.parse(result);
      var oneUnit = jsResult.rates[to] / jsResult.rates[from];
      var amt = document.getElementById("fromAmount").value;
      document.getElementById("toAmount").value = (oneUnit * amt).toFixed(2);
    }
  };
}
