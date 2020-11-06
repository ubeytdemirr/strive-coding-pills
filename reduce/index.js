const basket = [
  {
    asin: "1940026091",
    title: "Pandemic (The Extinction Files, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
    price: 7.81,
    category: "scifi",
  },
  {
    asin: "0425264041",
    title: "Shards of Hope (Psy-Changeling Novel, A)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg",
    price: 7.59,
    category: "scifi",
  },
  {
    asin: "1250082757",
    title: "Born of Vengeance: The League: Nemesis Rising",
    img: "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
    price: 26.09,
    category: "scifi",
  },
  {
    asin: "045146799X",
    title: "Gameboard of the Gods",
    img: "https://images-na.ssl-images-amazon.com/images/I/81-vppSolJL.jpg",
    price: 7.59,
    category: "scifi",
  },
  {
    asin: "1101987790",
    title: "Silver Silence (Psy-Changeling Trinity)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91eGxsWGH7L.jpg",
    price: 17.6,
    category: "scifi",
  },
];

// traditional function (callback)

const total = basket.reduce(function(accumulator,current){
    return accumulator+current.price
},0)

const totalWithArrow = basket.reduce((accumulator,current)=>accumulator+current.price,0)

console.log(totalWithArrow)
// calculate total price of basket (SUM)

