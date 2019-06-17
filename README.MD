##User experience requirements
The initial screen should have a button that users can click to start the quiz.
Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
Questions are selected from a larger question set (each new game will produce different questions)
Users are asked questions one at a time only
User must submit an answer before being able to continue (cannot skip)
Users should have a progress meter (e.g. question 2 of 5) and score meter throughout the quiz
Upon submitting an answer, users should:
receive textual feedback about their answer
if they were incorrect, they should be provided the correct answer
be moved onto the next question (or interact with an element to move on).
At the end of the quiz, users should be told if their current score has exceeded the currently recorded high score (tracked by local session only)
Users should be able to start a new quiz, retaining the high score
##Technical requirements
Your quiz app must:

Render answer choices in a <form>.
Use semantic HTML, along with CSS and jQuery.
Follow a11y best practices.
Refer back to the checkpoints on accessibility and forms for help.
Use responsive design.
Retrieve question set from Open Trivia DB