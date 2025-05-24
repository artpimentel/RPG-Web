document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("item_weight").addEventListener("click", function() {
        document.getElementById("weight_input").classList.toggle("active")
    })

    document.getElementById("weight_input").addEventListener("mouseup", function() {
        this.classList.remove("active")
    })

    document.getElementById("weight_input").addEventListener("input", function () {
        const value = parseFloat(this.value).toFixed(1)
        document.getElementById("item_weight").innerHTML = `${value} kg`
    })





    document.getElementById("item_value").addEventListener("click", function() {
        document.getElementById("value_input").classList.toggle("active")
    })

    document.getElementById("value_input").addEventListener("mouseup", function() {
        this.classList.remove("active")
    })

    document.getElementById("value_input").addEventListener("input", function () {
        const value = parseFloat(this.value).toFixed(2)
        document.getElementById("item_value").innerHTML = `$${value}`
    })





    const itemTypes = document.querySelectorAll('input[name="item_type"]');
    const sections = document.querySelectorAll('.type_creation');

    itemTypes.forEach(itemType => {
        itemType.addEventListener('change', () => {
            const selected = itemType.value;

            sections.forEach(section => {
                const isSelected = section.id === `${selected}_creation`;

                section.classList.toggle('active', isSelected);

                section.disabled = !isSelected;
            });
        });
    });






    // Adiciona EFEITOS
    document.querySelectorAll('.add_effect').forEach(button => {
        button.addEventListener('click', () => {
            const container = button.previousElementSibling;
            const effect = document.createElement('div');
            effect.className = 'effect';
            effect.innerHTML = `
                <label>Efeito: 
                    <select>
                        <option value="" selected disabled>Selecione</option>
                    </select>
                    <select>
                        <option value="" selected disabled>Duração</option>
                        <option value="2">2 turnos</option>
                        <option value="4">4 turnos</option>
                        <option value="8">8 turnos</option>
                        <option value="0">Até ser curado</option>
                    </select>
                    <button type="button" class="remove">x</button>
                </label>
            `;
            container.appendChild(effect);
        });
    });

    // Adiciona MODIFICADORES
    document.querySelectorAll('.add_modifier').forEach(button => {
        button.addEventListener('click', () => {
            const container = button.previousElementSibling;
            const modifier = document.createElement('div');
            modifier.className = 'modifier';
            modifier.innerHTML = `
                <label>Modificador: 
                    <select>
                        <option value="" selected disabled>Selecione</option>
                        <option value="agility">Agilidade</option>
                        <option value="cognition">Cognição</option>
                        <option value="strength">Força</option>
                        <option value="presence">Presença</option>
                        <option value="vigor">Vigor</option>
                    </select>
                    <select>
                        <option value="" selected disabled>Selecione</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="+1">+1</option>
                        <option value="+2">+2</option>
                    </select>
                    <button type="button" class="remove">x</button>
                </label>
            `;
            container.appendChild(modifier);
        });
    });

    // Atualiza % do range ao mover
    document.addEventListener('input', e => {
        if (e.target.type === 'range') {
            const span = e.target.nextElementSibling;
            if (span) span.textContent = `${e.target.value}%`;
        }
    });

    // Botão "Remover"
    document.addEventListener('click', e => {
        if (e.target.classList.contains('remove')) {
            e.target.parentElement.remove();
        }
    });

});