// 1. Importa o Express
const Express = require('express');

// 2. Cria uma instância do Express
const app = Express();

// 3. Define a porta onde a API irá rodar
const port = 3000

// 4. Middleware para permitir que o servidor lide com requisições no formato JSON
app.use(Express.json());


// 5. Criação da rota GET na raiz ('%') que responde com uma mensagem simples
app.get('/', (req, res) => {
    res.send('Bem Vindo a Loja!');
});

let dados = [];

// Rota post chamada principal

app.post('/cadastro', (req, res) => {
    const { nomeprod, qtde } = req.body;
    res.send(`Nome do Produto: ${nomeprod}, Quantidade: ${qtde}`);
    if(!nomeprod || !qtde){
        return res.status(400).json({error:'Informe Nome do Produto e a Quantidade'})
    }
    
    const novo = {nomeprod,qtde};
    dados.push(novo);
    res.status(201).json({message:'Dados salvos com sucesso! ',data:novo})
});

// Rota get para exibir os dados

app.get('/cadastro', (req, res) => {
    res.json(dados);
})

// 6. Inicia o Servidor e define que ele deve rodar na porta especificada (3000)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
