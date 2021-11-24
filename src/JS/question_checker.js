function changeMark(questionHeader, mark, outOf) {
  let slicedMark = questionHeader[0].innerText.slice(0,-5)
  questionHeader[0].innerText = slicedMark + `(${mark}/${outOf})`
}

function checkQuestion1() {
  const rightAnswer = document.getElementById("Italy");
  let q1Object = document.getElementById("question-1");
  let questionHeader = q1Object.getElementsByTagName("h3");
  if (rightAnswer.checked == true) {
    console.log("[Question 1] correct.");
    questionHeader[0].style.color = "green";
    changeMark(questionHeader, 1, 1);
    return 1;
  } else {
    console.log("[Question 1] wrong.");
    questionHeader[0].style.color = "red";
    questionHeader[0].innerText += " ANSWER(s): Italy";
    return 0;
  }
}

function checkQuestion2() {
  const rightAnswer = "statue of liberty";
  let q2Object = document.getElementById("question-2");
  let questionHeader = q2Object.getElementsByTagName("h3");
  let textBox = document.getElementsByName("q2")[0];
  if (textBox.value.toLowerCase() == rightAnswer) {
    console.log("[Question 2] correct.");
    questionHeader[0].style.color = "green";
    changeMark(questionHeader, 1, 1);
    return 1;
  } else {
    console.log("[Question 2] wrong.");
    questionHeader[0].style.color = "red";
    questionHeader[0].innerText += " ANSWER(s): Statue of Liberty";
    return 0;
  }
}

function checkQuestion3() {
  const rightAnswer = "eiffel tower";
  let q3Object = document.getElementById("question-3");
  let questionHeader = q3Object.getElementsByTagName("h3");
  let textBox = document.getElementsByName("q3")[0];
  if (textBox.value.toLowerCase() == rightAnswer) {
    console.log("[Question 3] correct.");
    questionHeader[0].style.color = "green";
    changeMark(questionHeader, 1, 1);
    return 1;
  } else {
    console.log("[Question 3] wrong.");
    questionHeader[0].style.color = "red";
    questionHeader[0].innerText += " ANSWER(s): Eiffel Tower";
    return 0;
  }
}

function checkQuestion4() {
  let rightAnswers = document.getElementsByName("q4");
  delete rightAnswers[1];
  let rightAnswersCounter = 0;
  let q4Object = document.getElementById("question-4");
  let questionHeader = q4Object.getElementsByTagName("h3");
  for (let i=0; i<rightAnswers.length; i++) {
    if (rightAnswers[i].checked == true) {
      rightAnswersCounter++;
    }
  }
  if (rightAnswersCounter == 3) {
    questionHeader[0].style.color = "green";
    changeMark(questionHeader, rightAnswersCounter, 3);
  } else {
    questionHeader[0].style.color = "red";
    changeMark(questionHeader, rightAnswersCounter, 3);
    questionHeader[0].innerText += " ANSWER(s): Taj Mahal, Pyramid of Giza, Kremlin";
  }
  console.log(`[Question 4] got ${rightAnswersCounter} right.`);
  return rightAnswersCounter;
}

function checkQuestion5() {
  let rightAnswersCounter = 0;
  let correctSequence = [
    "Pyramid of Giza",
    "Great Wall of China",
    "Moai, Easter Island",
    "Eiffel Tower"
  ];
  let q5Object = document.getElementById("question-5");
  let questionHeader = q5Object.getElementsByTagName("h3")
  let buttonList = q5Object.getElementsByTagName("button");
  for (let i=0; i<correctSequence.length; i++) {
    if (buttonList[i].innerText == correctSequence[i]) {
      rightAnswersCounter++;
    }
  }
  if (rightAnswersCounter == 4) {
    questionHeader[0].style.color = "green";
    changeMark(questionHeader, rightAnswersCounter, 4);
  } else {
    questionHeader[0].style.color = "red";
    changeMark(questionHeader, rightAnswersCounter, 4);
    questionHeader[0].innerText += " ANSWER(s): 'Pyramid of Giza', 'Great Wall of China', 'Moai, Easter Island', 'Eiffel Tower'";
  }

  console.log(`[Question 5] got ${rightAnswersCounter} right.`);
  return rightAnswersCounter;
}

function checkQuestion6() {
  let rightAnswersCounter = 0;
  let correctSequence = [
    "c.",
    "a.",
    "b.",
    "d."
  ];
  let q6Object = document.getElementById("question-6");
  let questionHeader = q6Object.getElementsByTagName("h3")
  let buttonList = q6Object.getElementsByTagName("button");
  for (let i=0; i<correctSequence.length; i++) {
    if (buttonList[i].innerText.substring(0,2) == correctSequence[i]) {
      rightAnswersCounter++;
    }
  }
  if (rightAnswersCounter == 4) {
    questionHeader[0].style.color = "green";
    changeMark(questionHeader, rightAnswersCounter, 4);
  } else {
    questionHeader[0].style.color = "red";
    changeMark(questionHeader, rightAnswersCounter, 4);
    questionHeader[0].innerText += " ANSWER(s): 'c.', 'a.', 'b.', 'd.'";
  }

  console.log(`[Question 6] got ${rightAnswersCounter} right.`);
  return rightAnswersCounter;
}

function submit() {
  let pointsArray = [
    checkQuestion1(),
    checkQuestion2(),
    checkQuestion3(),
    checkQuestion4(),
    checkQuestion5(),
    checkQuestion6()
  ];
  let playerPoints = scoreHandler.calculateTotal(pointsArray);
  console.log(scoreHandler.generalQuizScore(playerPoints, 14));
}
