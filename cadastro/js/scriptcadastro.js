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
            let tr = tbody.insertRow(i);
   
            let td_NumProd  = tr.insertCell(0);
            let td_NomeProd = tr.insertCell(1);
            let td_CodProd  = tr.insertCell(2);
            let td_QtdProd  = tr.insertCell(3);
            let td_TknProd  = tr.insertCell(4);
            let td_VlrProd  = tr.insertCell(5);
            let td_VlrTotal = tr.insertCell(6);
            
            td_NumProd.innerText  = this.arrayProduto[i].NumDoProduto;
            td_NomeProd.innerText = this.arrayProduto[i].NomeDoProduto;
            td_CodProd.innerText  = this.arrayProduto[i].Codigo;
            td_TknProd.innerText  = "Para fazer";
            td_QtdProd.innerText  = this.arrayProduto[i].Quantidade;
            td_VlrProd.innerText  = this.arrayProduto[i].ValorUnitario
            td_VlrTotal.innerText = this.arrayProduto[i].Total

        }
    }

    adicionar(Produto) {
        Produto.NumDoProduto = parseFloat(Produto.NumDoProduto)
        Produto.Codigo= parseFloat(Produto.Codigo)
        Produto.Quantidade= parseFloat(Produto.Quantidade)
        Produto.valorunitario= parseFloat(Produto.valorunitario)
        Produto.total=parseFloat(Produto.total)

        this.arrayProduto.push(Produto);
        this.id++;
    }

    atualizar(id, produto) {

        let editCadastro = this.arrayProduto.find(value => value.NumDoProduto == id);

        let indiceCadastro = this.arrayProduto.findIndex(value => value.NumDoProduto == id);
        
        editCadastro.NumDoProduto = produto.NumDoProduto;
        editCadastro.NomeDoProduto = produto.NomeDoProduto;
        editCadastro.Codigo = produto.Codigo;
        editCadastro.Quantidade = produto.Quantidade;
        editCadastro.ValorUnitario = produto.ValorUnitario;
        editCadastro.Total = produto.Total;
        
        
        this.arrayProduto.splice(indiceCadastro, 1, editCadastro);
            
    }

    preparaEditar() {
        let NumDoProduto = document.getElementById("NumDoProduto").value;
        let editCadastro = this.arrayProduto.find(value => value.NumDoProduto == NumDoProduto);
      
        document.getElementById('NumDoProduto').value = editCadastro.NumDoProduto;
        document.getElementById('NomeDoProduto').value = editCadastro.NomeDoProduto;
        document.getElementById('Codigo').value = editCadastro.Codigo;
        document.getElementById('Quantidade').value = editCadastro.Quantidade;
        document.getElementById('ValorUnitario').value = editCadastro.ValorUnitario;
        document.getElementById('Total').value = editCadastro.Total;

        this.editId = NumDoProduto;
        document.getElementById('btnAdd').value = 'Editar';

    }

    lerDados(){
        let produto = {}

        produto.NumDoProduto = document.getElementById('NumDoProduto').value;
        produto.NomeDoProduto = document.getElementById('NomeDoProduto').value;
        produto.Codigo = document.getElementById('Codigo').value;
        produto.Quantidade = document.getElementById('Quantidade').value;
        produto.ValorUnitario=  document.getElementById('ValorUnitario').value;
        produto.Total = document.getElementById('Total').value;
        
        return produto;
    }

    validaCampos(produto){
        let msg = '';
        if(produto.NumDoProduto == ''){
            msg += 'Informe o Numero do produto \n';
        } 
        if(produto.NomeDoProduto == ''){
            msg += 'Informe o produto \n';
        } 
        if(produto.Codigo== ''){
            msg += 'Informe o codigo \n';
        } 
        if(produto.Quantidade== ''){
            msg += 'Informe a quantidade \n';
        } 
        if(produto.token== ''){
            msg += 'Informe o token \n';
        } 
        if(produto.valorunitario == ''){
            msg += 'Informe o valor unitario \n';
        } 
        if(produto.total == ''){
            msg += 'Informe o total \n';
        } 
        if(msg !=''){
            alert(msg);
            return false 
        }
        return true;
    }

    cancelar(){
        document.getElementById('NumDoProduto').value = '';
        document.getElementById('NomeDoProduto').value = '';
        document.getElementById('Codigo').value = '';
        document.getElementById('Quantidade').value = '';
        document.getElementById('Token').value = '';
        document.getElementById('ValorUnitario').value = '';
        document.getElementById('Total').value = '';

        this.editId = null;
    }

    deletar(id) {
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProduto.length; i++) {
            if(this.arrayPessoa[i].id == id) {
                this.arrayPessoa.splice(i , 1);
                tbody.deleteRow(i);
            }
        }
    }
}
var product = new Produto();

console.log(product)