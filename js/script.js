const radioButtons = document.querySelectorAll('input[name="language"]');
const resultParagraph = document.getElementById('result');

radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked) {
            const lang = this.value.toUpperCase();
            resultParagraph.textContent = `Ви знаєте: ${lang}`;
        }
    });
});