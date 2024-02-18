function determineSkinCondition(userResponses) {
    // Define criteria for each skin condition
    const conditions = {
        "Eczema": {
            criteria: ["Face", "Arms", "Legs", "Torso", "Hands", "Feet", "Other (please specify)", "Chronic itching", "Redness and inflammation", "Dry and flaky", "Scaly", "Family history of eczema or other allergic conditions"]
        },
        "Psoriasis": {
            criteria: ["Face", "Arms", "Legs", "Torso", "Hands", "Feet", "Other (please specify)", "Thick, red patches covered with silvery scales", "Itching, burning, or soreness", "Nail changes", "Joint pain or swelling"]
        },
        "Acne": {
            criteria: ["Face", "Chronic itching", "Redness and inflammation", "Rough and bumpy", "Oily or greasy"]
        },
        "Rosacea": {
            criteria: ["Face", "Chronic itching", "Redness and inflammation", "Smooth"]
        },
        "Contact Dermatitis": {
            criteria: ["Face", "Arms", "Legs", "Torso", "Hands", "Feet", "Other (please specify)", "Itching or discomfort", "Redness and inflammation"]
        },
        "Hives": {
            criteria: ["Face", "Arms", "Legs", "Torso", "Hands", "Feet", "Other (please specify)", "Itching or discomfort", "Redness and inflammation", "Swelling or puffiness"]
        },
        "Fungal Infections": {
            criteria: ["Face", "Arms", "Legs", "Torso", "Hands", "Feet", "Other (please specify)", "Itching or discomfort", "Redness and inflammation"]
        },
        "Skin Cancer": {
            criteria: ["Face", "Arms", "Legs", "Torso", "Hands", "Feet", "Other (please specify)", "Changes in appearance of moles or spots", "New growths or sores that don't heal", "Family history of skin cancer"]
        },
        "Allergic Reactions": {
            criteria: ["Face", "Arms", "Legs", "Torso", "Hands", "Feet", "Other (please specify)", "Itching or discomfort", "Redness and inflammation", "Swelling or puffiness"]
        },
        "Seborrheic Dermatitis": {
            criteria: ["Face", "Chronic itching", "Redness and inflammation", "Oily or greasy", "Yellow or white scales"]
        }
    };

    let matchedConditions = [];

    for (const condition in conditions) {
        if (conditions[condition].criteria.every(criteria => userResponses.includes(criteria))) {
            matchedConditions.push(condition);
        }
    }

    return matchedConditions;
}

function submitSurvey() {
    // Get user responses from the form
    const userResponses = [];
    const form = document.getElementById('skinQuiz');
    const inputs = form.querySelectorAll('input[type="radio"]:checked');
    inputs.forEach(input => userResponses.push(input.nextElementSibling.textContent.trim()));

    // Determine likely skin condition(s)
    const likelyConditions = determineSkinCondition(userResponses);

    // Display the result
    const resultDiv = document.getElementById('result');
    if (likelyConditions.length > 0) {
        resultDiv.innerHTML = `<h3>Likely Skin Condition(s):</h3><ul>${likelyConditions.map(condition => `<li>${condition}</li>`).join('')}</ul>`;
    } else {
        resultDiv.innerHTML = `<p>No likely skin conditions found based on your responses.</p>`;
    }
}
