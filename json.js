let person ={
    firstname: "haieqa",
    lastname: "wahab",
    birthdate: new Date("July 6, 2005)"),
    title:"unemloyed",
    salary: 0

};

let jsonvalue = JSON.stringify(person);
console.log(jsonvalue);
jsonvalue = JSON.stringify(person, null, 2);
console.log(jsonvalue);

let newperson = JSON.parse(jsonvalue);
console.log(newperson);

let jsonstring = `{
"firstname": "haieqa",
"lastname": "jone"
}`;

let notJSONE = "hello!";
let newobj = JSON.parse(notJSONE);

