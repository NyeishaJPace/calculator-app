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

    function updateText(index) {
      if (index >= finalText.length) return; // Stop when all characters are done

      currentText[index] = getRandomCharacter();
      finalTextElement.textContent = currentText.join('');

      // Gradually reveal the correct character
      setTimeout(() => {
        currentText[index] = finalText[index];
        finalTextElement.textContent = currentText.join('');

        // Proceed to the next character
        updateText(index + 1);
      }, 100); // Delay for each character
    }

    // Start the effect
    updateText(0);
  }, []);

  return null; // No visual output is returned from this component
}

export default MatrixEffect;