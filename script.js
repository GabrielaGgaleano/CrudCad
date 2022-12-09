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
            let produto = {}
    
            produto.NºDoProduto = this.NºDoProduto;
            produto.NomeDoProduto = document.getElementById('NomeDoProduto').value;
            produto.Codigo = document.getElementById('Codigo').value;
            produto.Quantidade = document.getElementById('Quantidade').value;
            produto.valorunitario=  document.getElementById('valorunitario').value;
            produto.total = document.getElementById('Total').value;
           
            return produto;
        }
       
    }
    console.log("pipipopo")
    