// Problem statement

/*Create a program to determine whether a student is eligible for an award or not. 
If they are eligible, store true in the answer; otherwise, store false.

To be eligible for the award, a student must meet one of the following criteria:

Scholarship Eligibility: A student scores above 80 in at least two out of three subjects.

Science Fair Participation: A student has a total score of at least 250 across all three subjects.
If a student meets either of the above criteria, they are eligible for the award.

CASE I:
Input:-
English: 77
Maths:   84
Science: 93

Expected Output:-
true


CASE II:
Input:
English: 79
Mathematics: 75
Science: 98

Expected Output:
true
*/

//Solution

function isEligible(mathScore, englishScore, scienceScore) {
	// Check if the student is eligible for a scholarship (at least two subject scores above 80).
	let eligibleForScholarship = true;
	eligibleForScholarship = (((mathScore > 80) && (englishScore >80)) || ((mathScore > 80) && (scienceScore >80)) || ((scienceScore > 80) && (englishScore >80)) );
	
	if(eligibleForScholarship) {
		console.log("Student is eligible for Scholarship");
	}

	// Check if the student qualifies for the science fair (total score at least 250).
	let qualifiesForScienceFair = true;
	qualifiesForScienceFair = (mathScore + englishScore + scienceScore) >= 250;
	
	if(qualifiesForScienceFair) {
		console.log("Student is qualified for Science Fair");
	}

	// Determine eligibility for the award (meets either scholarship or science fair criteria).
	let eligibleForAward= true;
	eligibleForAward = eligibleForScholarship || qualifiesForScienceFair ;

	// Return the final eligibility status for the award.
	return eligibleForAward;
}

