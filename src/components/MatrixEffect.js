import { useEffect } from 'react';

function MatrixEffect() {
  useEffect(() => {
    const finalTextElement = document.querySelector('.intro');
    const finalText = "Welcome to the Calculator App";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    let currentText = Array(finalText.length).fill('');
    
    function getRandomCharacter() {
      return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function updateText() {
      for (let i = 0; i < finalText.length; i++) {
        if (currentText[i] !== finalText[i]) {
          currentText[i] = getRandomCharacter();
        }
      }
      finalTextElement.textContent = currentText.join('');
    }

    function transformText() {
      let isComplete = true;
      for (let i = 0; i < finalText.length; i++) {
        if (currentText[i] !== finalText[i]) {
          if (Math.random() < 0.5) { // 10% chance to change to correct character
            currentText[i] = finalText[i];
          } else {
            currentText[i] = getRandomCharacter();
          }
          isComplete = false;
        }
      }
      finalTextElement.textContent = currentText.join('');

      if (!isComplete) {
        requestAnimationFrame(transformText);
      }
    }

    // Start with random characters
    for (let i = 0; i < 10; i++) { // Run for 20 frames (about 1/3 second) before starting transformation
      setTimeout(updateText, i * 50);
    }

    // Then start transforming
    setTimeout(transformText, 1000);

  }, []);

  return null; // No visual output is returned from this component
}

export default MatrixEffect;