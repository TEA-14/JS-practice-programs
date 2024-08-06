//object

const person = {
    name : "Tayyab-Ejaz-Ahmed",
    age : 21,
    profession : "Software-Developer"
}

//two ways to add object properties
person['DOB'] = ['14-08-2003'];
person.admin = true;

//to remove the property
delete person.admin;
console.log("The details of the person data: ", person );

console.log(person['profession']);
console.log(person.name);