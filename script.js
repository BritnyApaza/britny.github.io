// Objeto para almacenar los valores de las reacciones
const reactions = {
    like: 0,
    dislike: 0,
    love: 0,
    poop: 0
};

// Función que incrementa y actualiza la reacción seleccionada
function incrementReaction(reaction) {
    if (reactions[reaction] !== undefined) { // Verifica que la reacción exista
        reactions[reaction]++; // Incrementa el valor
        document.getElementById(reaction).textContent = reactions[reaction]; // Actualiza el contador
    }
}