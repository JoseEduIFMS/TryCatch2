class ErroCustomizado extends Error{
    constructor(mensagem, name){
    super(mensagem, name)
    //Super precisar estar SEMPRE acima do This ou do resto
    this.name = nome;
    this.stack = "Bairro do Limoeiro";
    //this.stack = "HIHIHIHA"
    //this.stack = this.name + ": frase" ()
    }

detalhes(){
return this.name + "\n" + this.message + "\n" + this.stack
}
}

class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    area(){
        try {
            return this.calcularArea();
        } catch(erro){
            //return erro.name (Retorna "Error")
            //return erro.message (Retorna a mensagem após "throw new Error...")
            //(Retorna "erro.nome:" + "erro.message" + pilha de informações pré-estabelecidas do js.)
            return erro.detalhes()
        }
    }

    calcularArea(){
        if (this.largura > 0 && this.altura > 0){
            return this.largura * this.altura
        } else {
            throw new ErroCustomizado ("Altura e Largura","Erro do Zeca"); 
            //Error retorna o que está errado.
        }
    }
}

var retangulo = new Retangulo(0, 40);
console.log(retangulo.area())