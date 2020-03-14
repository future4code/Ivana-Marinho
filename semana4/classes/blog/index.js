class Post{
    constructor(autor, assunto, mensagem){
        this.autor = autor;
        this.assunto = assunto;
        this.mensagem = mensagem;
    }
}

            let arrayDePosts = [];

            this.onButtonClick = () => {
                const autor = document.getElementById("autor");
                const assunto = document.getElementById("assunto");
                const mensagem = document.getElementById("mensagem");

                let novoPost = new Post(autor.value, assunto.value, mensagem.value);
                
                console.log("Nome: " + autor.value + "\nAssunto: " + assunto.value + "\nMensagem: " + mensagem.value);
                
                arrayDePosts.push(novoPost.autor, novoPost.assunto, novoPost.mensagem);
                
                console.log(arrayDePosts);
                
                autor.value = "";
                assunto.value = "";
                mensagem.value = "";

            }

            function incluiComentario() {
                
            }
            
        