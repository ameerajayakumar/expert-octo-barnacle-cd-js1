//Curreny Symbol Prefixer

const withCurrencyPrefix = (value, formatter) => formatter(value);

//Formatter functions

const rupee = (value) => {
  return '₹' + value;
};

const dollar = (value) => '$' + value;

const euro = (value) => '€' + value;

console.log(withCurrencyPrefix(total, rupee)); //₹10

console.log(withCurrencyPrefix(total, dollar)); //$10
