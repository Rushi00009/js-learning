var marriageEligibility = function(age, candidateName, gender) {

    if (age >= 21 && gender == "Male") {

        console.log(`Eligible : Age- ${age}, Name- ${candidateName}`);

    }

}

marriageEligibility(23, "Bill", "Male");

marriageEligibility(20, "Elon", "Male");