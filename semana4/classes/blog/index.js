class Post{
    constructor(autor, email, mensagem){
        this.autor = autor;
        this.emal = email;
        this.mensagem = mensagem;
    }
}

            this.onButtonClick = () => {
                const autor = document.getElementById("autor");
                const email = document.getElementById("email");
                const mensagem = document.getElementById("mensagem");

                let novoPost = new Post(autor.value, email.value, mensagem.value);
                
                console.log("Nome: " + autor.value + "\nE-mail: " + email.value + "\nMensagem: " + mensagem.value);
                
            }

            
        