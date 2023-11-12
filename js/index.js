BuscarTodosPosts()

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#container-posts");

async function BuscarTodosPosts() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");

    console.log(resposta);

    const data = await resposta.json();

    console.log(data);

    loadingElement.classList.add("hide");

    data.map((postagem) => {

        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link  = document.createElement("a");

       title.innerText = postagem.title;
       body.innerText = postagem.body;
       
       link.innerText = "Ler";
       link.setAttribute("href", '/post.html?id='+ postagem.id);

       div.appendChild(title);
       div.appendChild(body);
       div.appendChild(link);

        postsContainer.appendChild(div);
       
    })
}