console.log('main.js');
(() => {
    console.log('Here we are!')
    window.addEventListener("load", (event) => {
        const multiplier = document.getElementById( 'multiplier' );
        const multiplicand = document.getElementById( 'multiplicand' );
        const product = document.getElementById( 'product' );
        const operator = document.getElementById( 'operator' );

        const update = () => {
                const a = parseFloat(multiplier.value)
                const b = parseFloat(multiplicand.value)

                let result;

                if (operator.value === '+'){
                    result = a + b;
                } else if (operator.value === '-'){
                    result = a - b;
                } else if (operator.value === '*'){
                    result = a * b;
                } else {
                    result = a / b;
                }
                product.textContent = result;
        };

        multiplier.addEventListener("input", update);
        multiplicand.addEventListener("input", update);
        operator.addEventListener('change', update);

        update();
    });      
})();
