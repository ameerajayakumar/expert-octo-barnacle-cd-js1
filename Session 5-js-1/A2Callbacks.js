//Curreny Symbol Prefixer

const withCurrencyPrefix = (value, formatter) => formatter(value);

//Formatter functions

const rupee = (value) => {
  return '₹' + value;
};

const dollar = (value) => '$' + value;

const euro = (value) => '€' + value;

console.log(withCurrencyPrefix(20, rupee)); //₹10

console.log(withCurrencyPrefix(30, dollar)); //$10
