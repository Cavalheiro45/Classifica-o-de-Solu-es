/**
 * Função para mostrar/esconder os passos das questões
 * @param {string} stepId - O ID do elemento que será alternado
 */
function toggleStep(stepId) {
    const element = document.getElementById(stepId);
    
    if (element) {
        // Verifica se o elemento está visível
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    } else {
        console.error("Elemento com ID " + stepId + " não foi encontrado.");
    }
}

// Log de confirmação para o console (opcional)
console.log("Sistema de exercícios carregado com sucesso!");