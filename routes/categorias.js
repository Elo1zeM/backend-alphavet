const express = require('express');

// ─── Criação do Router ────────────────────────────────────────
// Router é um mini-servidor que gerencia apenas as rotas de categorias.
const router = express.Router();

// ─── Importação do banco de dados ────────────────────────────
// Importamos o objeto com os arrays de categorias e produtos.
// '../' volta uma pasta (de /routes para /aula6-backend)
// 'data/database' aponta para o nosso arquivo de banco de dados
const supabase = require('../data/supabase');

// ─── [GET] /api/categorias ────────────────────────────────────
// Retorna a lista completa de categorias do cardápio.
//
// Teste no Thunder Client:
//   Método: GET
//   URL: http://localhost:3000/api/categorias
//
// Resposta esperada:
//   [ { "id": 1, "nome": "Combinados" }, { "id": 2, "nome": "Temakis" }, ... ]
router.get('/', async (req, res, next) => {
    // db.categorias é o array de categorias do nosso banco em memória.
    // res.json() converte o array para JSON e envia como resposta.
   try{
    const { data, error} = await supabase
    .from ('categorias')
    .select('*')
    .order('id', {ascending: true});

   if (error){
    throw error;
   }
   res.json(data);
}catch (err){
    next(err);
}
});

// ─── [POST] /api/categorias ───────────────────────────────────
// Cria uma nova categoria no cardápio.
//
// Teste no Thunder Client:
//   Método: POST
//   URL: http://localhost:3000/api/categorias
//   Body (JSON): { "nome": "Sobremesas" }
//
// Resposta esperada (status 201 Created):
//   { "id": 4, "nome": "Sobremesas" }
router.post('/', async (req, res, next) => {
    // db.categorias é o array de categorias do nosso banco em memória.
    // res.json() converte o array para JSON e envia como resposta.
   try{
    const { data, error} = await supabase
    .from ('categorias')
    .insert([{nome: req.body.nome}])
    .select();
    
   if (error) throw error;
   
   res.status(201).json(data[0]);
}catch (err){
    next(err);
}
});

router.put('/:id', async (req, res, next) => {
    // db.categorias é o array de categorias do nosso banco em memória.
    // res.json() converte o array para JSON e envia como resposta.
   try{
     const { id } = req.params;
    const { data, error} = await supabase
    .from ('categorias')
    .update([{nome: req.body.nome}])
     .eq ('id', id)
    .select();
    
   if (error) throw error;

   if (data && data.length > 0){
     res.json(data[0]);
   }else{
    res.status(404).json({mensagem: 'Categoia não encontrada para atualizar'});
   }
  
} catch (err) {
    next(err);
}
});


router.delete('/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const { error } = await supabase
        .from('categorias')
        .delete()
        .eq('id', id);
    if (error) throw error;

    res.json({ mensagem: 'Categoria deletada com sucesso!'});
    } catch (err) {
        next(err);
    }
});


// ─── Exportação do Router ─────────────────────────────────────
// Exportamos o router para ser usado no server.js
module.exports = router;