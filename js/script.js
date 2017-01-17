var responses = { 0: null, 1: null, 2: null, 3: null };
var num_responses = 0;

function showResults() {
    var counts = {'A': 0, 'C': 0, 'D': 0};

    for (var qid = 0; qid < 4; qid++) {
        counts[meaning[qid][responses][qid]]++;
    }

    var max = null;
    for (var letter in counts) {
        if (max === null || counts[letter] > counts[max]) {
            max = letter;
        }
    }

    document.getElementById('results').style.display = 'block';
    document.getElementById('results-text').textContext = max + ' Level!';
}

var meaning = {
    0: { 0: 'A', 1: 'C', 2: 'D'},
    1: { 0: 'A', 1: 'C' },
    2: { 0: 'C', 1: 'A', 2: 'D'},
    3: { 0: 'A', 1: 'D' }
};

function prepareAnswer(qid, question, aid, answer) {
    answer.addEventListener('click', function() {
        if (responses[qid] === null) {
            responses[qid] = aid;
            num_responses++;
            answer.classList.add('selected-answer');
        }
        if (num_responses === 4) {
            showResults();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var questions = document.getElementsByClassName('question');

    for (var qid = 0; qid < questions.length; qid++) {
        var answers = questions[qid].getElementsByClassName('answer');

        for (var aid = 0; aid < answers.length; aid++) {
            prepareAnswer(qid, questions[qid], aid, answers[aid])
        }
    }

});