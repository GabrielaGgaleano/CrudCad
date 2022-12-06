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
                let td_indicado= tr.insertIndicado();
    
    
                td_Prod.innerText = this.arrayProduto[i].id;
                td_Descricao.innerText = this.arrayProduto[i].td_Descricao
                td_Preco.innerText = this.arrayProduto[i].td_Preco;
                td_Obser.innerText = this.arrayProduto[i].td.insertObser;
                td_indicad.innerText = this.arrayProduto[i].insertIndicado;
                td_id.classList.add('center');
    

            }
        }
    }