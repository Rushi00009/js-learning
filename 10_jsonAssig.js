let person = `
{
    name: "Aleix Melon",
    id: "E00245",
    role: ["Dev", "DBA "],
    age: 23,
    doj: "11-12-2019",
    married: false,
    address: {
        street: "32, Laham St.",
        city: "Innsbruck",
        country: "Austria",
    },
    referred_by: "E0012"
}`
console.log(person);


let per = {
    name: "Aleix Melon",
    id: "E00245",
    role: ["Dev", "DBA "],
    age: 23,
    doj: "11-12-2019",
    married: false,
    address: {
        street: "32, Laham St.",
        city: "Innsbruck",
        country: "Austria",
    },
    referred_by: "E0012"
}
console.log(`Log on console role "DEV" : ${per.role[0]}`);

const wosplit = console.log(per.name.split(" "));
console.log(`Last word is : ${per.name.substring(5)}`);
console.log(`Joying Year is : ${per.doj.substring(6)} `);