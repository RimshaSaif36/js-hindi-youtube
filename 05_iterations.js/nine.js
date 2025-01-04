 const myNums = [1,2,3]
//  const newNums = myNums.reduce(function ( accmulator , currentValue) {
//     console.log(`accmulator value :${accmulator} and currentValue :${ currentValue}`);
//     return accmulator + currentValue
//  }, 2)


const mytotal =myNums.reduce((acc, curr)=> acc + curr ,0)
 console.log(mytotal)

 const ShoppingCard =[
    {
        itemname :"js course",
        price: "5000"
    },
    {
        itemname :"java course",
        price: "3000"
    },
    {
        itemname :"python course",
        price: "4000"
    },
 ]
 const PriceToBuy = ShoppingCard.reduce((acc, item)=> acc +item.price , 0)

 console.log(PriceToBuy)

 