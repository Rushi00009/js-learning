function voteEligible(age) {
    if (age <= 0 || age > 130) {
        console.log(`Invalid Data`);

    } else {
        if (age < 18) {
            console.log(`Sorry , your are not Eligible for vote`);
        }
        if (age >= 18) {
            console.log(`Welcome , your are Eligible for vote`);

        }

    }

}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);