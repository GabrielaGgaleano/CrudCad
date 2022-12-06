class Produto{
    constructor(){
        this.id = 1;
        this.arrayPessoa=[]
        this.editId = null;
        }

        salvar(){
            let pessoa = this.lerDados();
            if(this.validaCampos(Produto)) {
                if(this.editId== null){
                    this.adicionar(Produto);
            }
          }
      }
}

