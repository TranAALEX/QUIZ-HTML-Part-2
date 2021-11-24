let scoreHandler = {
  changeGeneralScore: function(submitButton, generalScore) {
    let splicedText = submitButton.innerText.slice(0,-13)
    submitButton.innerText = splicedText + `${generalScore}`
  },

  calculateTotal: function(pointsArray) {
    let totalPoints = 0;
    for (let i=0; i<pointsArray.length; i++) {
      totalPoints += pointsArray[i];
    }
    return totalPoints;
  },

  generalQuizScore: function(playerPoints,totalMarks) {
    let percentage = playerPoints/totalMarks
    let submitButton = document.getElementById("THE-BIG-SUBMIT-BUTTON")
    if (percentage == 1) {
      this.changeGeneralScore(submitButton, `(Perfect! ${playerPoints}/${totalMarks})`);
    } else if (percentage >= 0.50) {
      this.changeGeneralScore(submitButton, `(Pass! ${playerPoints}/${totalMarks})`);
    } else {
      this.changeGeneralScore(submitButton, `(Fail! ${playerPoints}/${totalMarks})`);
    }
  }
}
