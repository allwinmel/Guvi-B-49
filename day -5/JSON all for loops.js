// for the given JSON iterate over all for loops (for, for in, for ofEach)

// let json = [{
//     "id" : "1", 
//     "msg"   : "hi",
//     "tid" : "2013-05-05 23:35",
//     "fromWho": "hello1@email.se"
// },
// {
//     "id" : "2", 
//     "msg"   : "there",
//     "tid" : "2013-05-05 23:45",
//     "fromWho": "hello2@email.se"
// }];

// for(let i = 0; i < json.length; i++) {
//     let obj = json[i];

//     console.log(obj.id);}

console.log("---------------------------");

//for in loop

let json = { name: "Allwin", "age": 34, "place": "tuticorin" };

for (let key in json) {
    console.log(`${key}: ${json[key]}`);
    
}

console.log("---------------------------");

//for ofEach

let element = [{
    "id" : "john", 
    "msg"   : "Hello",
    "city" : "chennai",
    "age": 30
}];

element.forEach(element => console.log(element));
