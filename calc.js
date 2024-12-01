const display = document.getElementById('display')

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearButton() {
            display.value = '';
        }

        function deleteButton() {
            display.value = display.value.slice(0, -1); 
        }

        function calculateResult() {
            try {
                let result = 'I Love You';
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        }