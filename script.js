const questions = [
  {
    question: "Apa definisi self-esteem?",
    answers: [
      { text: "Persepsi orang lain terhadap kita", correct: false },
      { text: "Penilaian individu terhadap dirinya sendiri", correct: true },
      { text: "Kemampuan menyelesaikan masalah", correct: false }
    ],
    feedback: "Self-esteem adalah penilaian seseorang terhadap dirinya sendiri, apakah ia merasa berharga, mampu, dan layak."
  },
  {
    question: "Self-esteem rendah cenderung menyebabkan...",
    answers: [
      { text: "Kepercayaan diri tinggi", correct: false },
      { text: "Kecemasan sosial meningkat", correct: true },
      { text: "Kinerja optimal", correct: false }
    ],
    feedback: "Orang dengan self-esteem rendah sering merasa tidak layak, yang dapat memicu kecemasan sosial."
  }
];

let currentQuestionIndex = 0;

function startGame() {
  document.getElementById('tutorial').classList.add('hidden');
  document.getElementById('question-container').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  question.answers.forEach((ans, index) => {
    const button = document.createElement('button');
    button.textContent = ans.text;
    button.onclick = () => selectAnswer(ans.correct, question.feedback);
    answersDiv.appendChild(button);
  });
}

function selectAnswer(isCorrect, feedback) {
  const feedbackDiv = document.getElementById('feedback');
  feedbackDiv.textContent = isCorrect ? "Benar! 🎉 " + feedback : "Salah. ❌ " + feedback;
  feedbackDiv.classList.remove('hidden');

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      feedbackDiv.classList.add('hidden');
      showQuestion();
    }, 3000);
  } else {
    setTimeout(() => {
      document.getElementById('question-container').innerHTML = "<h2>Terima kasih telah belajar!</h2>";
      feedbackDiv.classList.add('hidden');
    }, 3000);
  }
}
