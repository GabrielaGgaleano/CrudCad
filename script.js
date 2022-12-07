class Produto{
    constructor(){
        this.id = 1;
        this.arrayProduto=[]
        this.editId = null;
        }

        salvar(){
            let Produto = this.lerDados();
            if(this.validaCampos(Produto)) {
                if(this.editId== null){
                    this.adicionar(Produto);
            }
            else{
                this.atualizar(this.editId, Produto);
            }  
        }
        this.listaTabela();
        this.cancelar();
        }
        listaTabela() {
            let tbody = document.getElementById('tbody');
            tbody.innerText = '';
    
            for(let i = 0; i < this.arrayProduto.length; i++ ) {
                let tr = tbody.insertRow();
    
                let td_Prod= tr.insertProd();
                let td_Descricao = tr.insertDescricao();
                let td_Preco = tr.Preço();
                let td_Obser = tr.insertObser();
                let td_ = tr.insertIndicado();
    
    
                td_id.innerText = this.arrayProduto[i].NºDoProduto;
                td_NomeDoProduto.innerText = this.arrayProduto[i].NomeDoProduto;
                td_Codigo.innerText = this.arrayProduto[i].Codigo;
                td_Quantidade.innerText = this.arrayQuantidade[i].Quantidade;
                td_valorunitario.innerText = this.arrayValor[i].total
            }
        }
    
        adicionar(Produto) {
            Produto.NºDoProduto = parseFloat(produto.NºDoProduto)
            Produto.NomeDoProduto= parseFloat(produto.NomeDoProduto)
            Produto.Codigo= parseFloat(produto.Codigo)
            Produto.Quantidade= parseFloat(produto.Quantidade)
            Produto.valorunitario= parseFloat(produto.valorunitario)
            Produto.total=parseFloat(produto.total)

            this.arrayProduto.push(produto);
            this.id++;
        }
    
        atualizar(valorunitario,Quantidade,NºDoProduto) {
            for (let i = 0; i < this.arrayPessoa.length; i++) {
                if(this.arrayPessoa[i].produto == produto) {
                    this.arrayPessoa[i].produto= produto.Quantidade;
                    this.arrayPessoa[i].produto= produto.valorunitario;
                }
            }
        }
    
        preparaEditar(dados) {
            this.editId = dados.id;
    
            document.getElementById('Nº Do Produto').value = dados.NºDoProduto;
            document.getElementById(NomeDoProduto).value=dados.NomeDoProduto;
            document.getElementById(Codigo).value = dados.Codigo;
            document.getElementById(Quantidade). value = dados.Quantidade;
            document.getElementById(valorunitario).value = dados.valorunitario;
            doocument.getElementById(total).value = dados.total; 
            document.getElementById('btnAdd').innerText = 'Atualizar';
        }
    
        lerDados(){
            let pessoa = {}
    
            pessoa.id = this.id;
            pessoa.nomecompleto = document.getElementById('NomeCompleto').value;
            pessoa.cpf = document.getElementById('CPF').value;
            pessoa.genero = document.getElementById('Genero').value;
            pessoa.telefone =  document.getElementById('Telefone').value;
            pessoa.endereco = document.getElementById('Endereco').value;
            pessoa.observacoes = document.getElementById('Observacoes').value;
    
            return pessoa;
        }
       
        validaCampos(pessoa){
            let msg = '';
            if(pessoa.nomecompleto == ''){
                msg += 'Informe o Nome Completo \n';
            } 
            if(pessoa.cpf == ''){
                msg += 'Informe o CPF \n';
            } 
            if(pessoa.genero== ''){
                msg += 'Informe o gênero \n';
            } 
            if(pessoa.telefone== ''){
                msg += 'Informe o telefone \n';
            } 
            if(pessoa.endereco == ''){
                msg += 'Informe o endereço \n';
            } 
            if(pessoa.observacoes == ''){
                msg += 'Informe observações\n';
            } 
            if(msg !=''){
                alert(msg);
                return false 
            }
            return true;
    
        }
    
        cancelar(){
            document.getElementById('NomeCompleto').value = '';
            document.getElementById('CPF').value = '';
            document.getElementById('Genero').value = '';
            document.getElementById('Telefone').value = '';
            document.getElementById('Endereco').value = '';
            document.getElementById('Observacoes').value = '';
    
            document.getElementById('btnAdd').innerText = 'Adicionar';
            this.editId = null;
        }
    
        deletar(id) {
    
            let tbody = document.getElementById('tbody');
    
            for(let i = 0; i < this.arrayPessoa.length; i++) {
                if(this.arrayPessoa[i].id == id) {
                    this.arrayPessoa.splice(i , 1);
                    tbody.deleteRow(i);
                }
            }
        }
    
    }
    var pessoa = new Pessoa();
        

