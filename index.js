// const fetchUserdetails = () => {
//     console.log("Fetched using Arrow Functions")
// }
// fetchUserdetails()//Write after writing the functions it is different from normal functions

// //Callback functions
// //call back functions is called when we click in click on event add listener

// setTimeout(() => {
//     console.log("logging")
// }, 1000)//1000 means logging out after 1 second
// //Part of synchronous programming related to time



// document.getElementById("btn").addEventListener("click", function () {
//     console.log("Button clicked")
// })



//typescript compiles into javascript on online platforms

//ECMA6
//features
//For each vs mAp
//for each is like forloop for array
//map creates a space in memory and store new result in that one for existing array

// let prices = [10, 20, 30, 40]

// let adjustedPrice = []

// prices.forEach((element, index, prices) => {
//     console.log(element, index, prices)
//     //Adjusted
//     adjustedPrice.push(element * 2)

// });

// adjustedPrice = prices.map((element, index, prices) => {
//     return {
//         index,
//         price: element * 10
//     }
// })
// console.log(adjustedPrice, prices)



//Spread operator
//use to avoid copyness
// let oprice = [10, 20]
// let cprice = oprice

// console.log(oprice, cprice)

// oprice.push(50)

//EXAMPLE OF SPREAD OPERATOR

// let oprice = [10, 20]
// let cprice = [...oprice]
// //spread opeator ...
// console.log(oprice, cprice)
// //While pushing increase in length of oprice but not of cprice
// oprice.push(50)



/*Destructing*/
//works left to right
//pulls out value based on indexing
//rest operator can be used to collect all indexes remaining

// let userdetails = {
//     name1: "vansh",
//     age: 23
// }
// //instead of using dot operator for calling this functions we can go for destructor
// let { name1, age, ...rest } = userdetails
// //user details pulled out from object
// console.log({
//     name1, age, rest
// })

// let prices = [10, 20, 30, 40]
// let [first, second, ...rest] = prices
// console.log(first, second, rest)
// //first and second will be 10 20 rest is 30,40
// //pulls out from left to right


/*Asynchronous programming*/
//only one call  stack js has
//line after line execution

// const getEmployeeidWithCallBack = (callback) => {
//     setTimeout(() => {
//         callback(Math.floor(Math.random() * 10)
//         )
//     }, 1000)
// }
// const getEmployeeWithCallBackDetails = (id, callback) => {
//     setTimeout(() => {
//         callback({
//             id, name: "vansh",
//             age: 23
//         })
//     })
// }
//calling function
// getEmployeeidWithCallBack(id => {
//     console.log(id)
//     getEmployeeWithCallBackDetails(id, details =>
//         console.log(details))
// })
/***********NEsting levels can increase at the time of callback it is known as callback hell */

//Promises (call back issue solve)
//states : pending fulfilled rejected

// const getEmployeeid = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.floor(Math.random() * 10))
//         }, 1000)
//     })
// }
const getEmployeeid1 = () => {
    return new Promise((resolve, reject) => {
        // reject("Some error occured")
        resolve(Math.floor(Math.random() * 10))
    })
}
const getEmployeedetails = id => new Promise((resolve, reject) => {
    if (id > 5) {
        reject("error")
    }
    else {
        resolve({
            name: "vansh",
            age: 20
        })
    }
})
// getEmployeeid1().then(id => {
//     console.log(id);
//     return getEmployeedetails(id)
// })
//     .then(details => {
//         console.log(details);
//     }).catch(error => {
//         console.error(error)
//     })


// Promise.all([getEmployeeid1()], [getEmployeedetails()])
//     .then(response => {
//         console.log(response)
//     })

/*********Async and Await */
//easy to use promise (async )return promises 
//await is used simultaneously with async

async function minefunction() {
    try {
        let id = await getEmployeeid1();
        // console.log(id)
        let details = await getEmployeedetails(id);
        // console.log(details)
        console.log({ id, details })
    } catch (error) {
        console.error(error)
    }
}
minefunction()
