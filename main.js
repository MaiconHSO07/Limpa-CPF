 document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();

            const cpf_cnpj = document.querySelector('input[name="cpf-cnpj"]').value;
            const limpo = cpf_cnpj.replace(/\D/g, '');

            alert(`O CPF/CNPJ limpo é: ${limpo}`);
        });