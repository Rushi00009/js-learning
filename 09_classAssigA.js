class vehicle {
    constructor(name, module, price, saftyRating, average) {
        this.name = name;
        this.module = module;
        this.price = price;
        this.saftyRating = saftyRating;
        this.average = average;
    }
    detail() {
        console.log(`Name: ${this.name}, module: ${this.module}, price: ${this.price}, saftyRating: ${this.saftyRating}, average: ${this.average}`);
    }
}
const velar = new vehicle("Range Rover", "Velar Dynamic", "1 Cr", "5 Star", "15 kmpl");
//velar.detail();

const mercedes = new vehicle("Mercedes Benz", "S Class", "1.5 Cr", "5 Star", "10 kmpl");
//mercedes.detail();

const tata = new vehicle("TATA", "Harrier Fearless Plus", "33 lakh", "5 Star", "20 kmpl");
//tata.detail();

const mahindra = new vehicle("Mahindra", "Thar", "16 lakh", "5 Star", "15 kmpl");
//mahindra.detail();

const marinaras = new vehicle("Mahindra", "Scorpio N", "25 lakh", "5 Star", "15 kmpl");
//marinaras.detail();


console.log(`========== Vehicle Details ========== `);
console.log(``);

// console.log(`===== Traversing array object ======`);
const array = [velar, mercedes, tata, mahindra, marinaras];
for (const element of array) {
    element.detail();
}

console.log(``);
console.log(`========== College Details ========== `);
console.log(``);

class college {
    constructor(name, address, ranking, campusarea) {
        this.name = name;
        this.address = address;
        this.ranking = ranking;
        this.campusarea = campusarea;
    }
    detail() {
        console.log(`College Details => Name: ${this.name}, Address: ${this.address}, Ranking: ${this.ranking},Campusarea: ${this.campusarea}`);
    }
}
const iitb = new college("IIT Bombay", "Mumbai", 1, "545 Acres");
iitb.detail();

const iitM = new college("IIT Madras", "Chennai", 2, "617 Acres");
iitM.detail();

const iitD = new college("IIT Delhi", "Delhi", 3, "320 Acres");
iitD.detail();

const iitG = new college("IIT Guwahati", "Assam", 4, "700 Acres");
iitG.detail();