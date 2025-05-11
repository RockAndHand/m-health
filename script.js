/**
     * Dynamically calculates the total score by iterating over all form fields whose name starts with 'q'.
     * @param {FormData} formData - The form data from the assessment form.
     * @returns {Number} Total score.
     */
function calculateScore(formData) {
    let totalScore = 0;
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('q')) {
        totalScore += parseInt(value, 10);
      }
    }
    return totalScore;
  }

  /**
   * Defines the depression severity based on the total score.
   * PHQ-9 recommended thresholds:
   * 0 - 4 : Minimal Depression
   * 5 - 9 : Mild Depression
   * 10 - 14 : Moderate Depression
   * 15 - 19 : Moderately Severe Depression
   * 20 - 27 : Severe Depression
   * 
   * @param {Number} score - Total score.
   * @returns {String} The severity description.
   */
  function defineProblem(score) {
    if (score >= 0 && score <= 4) {
      return 'Minimal Depression';
    } else if (score >= 5 && score <= 9) {
      return 'Mild Depression';
    } else if (score >= 10 && score <= 14) {
      return 'Moderate Depression';
    } else if (score >= 15 && score <= 19) {
      return 'Moderately Severe Depression';
    } else if (score >= 20) {
      return 'Severe Depression';
    } else {
      return 'Undefined';
    }
  }

  /**
   * Provides tailored advice based on the problem severity.
   * @param {String} problem - The problem definition from defineProblem.
   * @returns {String} Advice string.
   */
  function provideAdvice(problem) {
    switch (problem) {
      case 'Minimal Depression':
        return 'Your responses suggest minimal depressive symptoms. Continue to maintain a healthy routine, balanced nutrition, regular exercise, and good sleep habits.';
      case 'Mild Depression':
        return 'Your responses indicate mild depressive symptoms. Consider engaging in stress-reducing activities, simple mindfulness practices, and talking with someone you trust about your feelings.';
      case 'Moderate Depression':
        return 'Your responses point to moderate depressive symptoms. It might be beneficial to schedule an appointment with a mental health professional, explore therapy, or try structured self-help programs.';
      case 'Moderately Severe Depression':
        return 'Your responses suggest moderately severe depressive symptoms. Professional guidance could be very helpful—consider reaching out to a mental health professional for evaluation and support.';
      case 'Severe Depression':
        return 'Your responses indicate severe depressive symptoms. It is important to seek immediate professional help. Please consider contacting a trusted mental health professional or crisis intervention services right away.';
      default:
        return 'We were unable to provide an assessment. Please try again or consult a professional for further evaluation.';
    }
  }

  // Event listener for the form submission.
  document.getElementById('mentalHealthForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the page from refreshing
    const formData = new FormData(this);
    const score = calculateScore(formData);
    const problem = defineProblem(score);
    const advice = provideAdvice(problem);
    
    document.getElementById('result').innerHTML = `
      <h2>Assessment Result</h2>
      <p><strong>Your total score is:</strong> ${score}</p>
      <p><strong>Assessment:</strong> ${problem}</p>
      <p><strong>Advice:</strong> ${advice}</p>
    `;
  });