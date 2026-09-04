<script>
        let produtoSelecionado = "";
        let precoSelecionado = "";

        function abrirModal(produto, preco) {
            produtoSelecionado = produto;
            precoSelecionado = preco;
            document.getElementById('infoProduto').innerText = `${produto} - ${preco}`;
            document.getElementById('modalPedido').classList.remove('hidden');
            document.getElementById('modalPedido').classList.add('flex');
        }

        function fecharModal() {
            document.getElementById('modalPedido').classList.add('hidden');
            document.getElementById('modalPedido').classList.remove('flex');
        }

        function enviarPedido(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const pagamento = document.getElementById('pagamento').value;
            const endereco = document.getElementById('endereco').value;

            // Monta a mensagem formatada para WhatsApp (simulando salvamento e contato direto seguro)
            const texto = `Olá! Tenho interesse na gema: *${produtoSelecionado}* (${precoSelecionado}).\n\n*Dados do Cliente:*\nNome: ${nome}\nTelefone: ${telefone}\nPagamento: ${pagamento}\nEndereço: ${endereco}`;
            
            const url = `https://wa.me/5583999999999?text=${encodeURIComponent(texto)}`;
            
            // Redireciona para o WhatsApp oficial com todos os dados preenchidos
            window.open(url, '_blank');
            fecharModal();
        }
    </script>
