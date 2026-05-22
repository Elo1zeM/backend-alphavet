let categorias = [
    { id: 1, nome: 'Medicamentos' },
    { id: 2, nome: 'Cirurgias' },
    { id: 3, nome: 'Petiscos' },
];

let produtos = [
    //medicamentos
    {
        categoriaId: 1,
        nome: 'Bravecto – Antipulgas e Carrapatos',
        descricao: "Medicamento parasiticida que protege cães contra pulgas e carrapatos por 3 meses com uma única dose.",
        preco: 179.90,
        imagem: 'https://http2.mlstatic.com/D_643289-MLB51992761630_102022-C.jpg'
    },
    {
        categoriaId: 1,
        nome: 'Prediderm 5 mg',
        descricao: "Anti‑inflamatório para cães, usado para aliviar dor e inflamação em músculos e articulações.",
        preco: 19.90,
        imagem: 'https://images.petz.com.br/fotos/1612369843970.jpg'
    },
    {
        categoriaId: 1,
        nome: 'Furolisin 10 Comprimidos',
        descricao: "Diurético usado em alguns casos veterinários para auxiliar no controle de retenção de líquidos conforme prescrição.",
        preco: 16.90,
        imagem: 'https://cobasi.vteximg.com.br/arquivos/ids/947028-368-368'
    },
    {
        categoriaId: 1,
        nome: 'Suplemento Beneflora Vet Avert',
        descricao: "Suplemento probiótico para saúde intestinal de cães e gatos (não é medicamento curativo, mas auxilia no equilíbrio da microbiota).",
        preco: 89.90,
        imagem: 'https://cobasi.vteximg.com.br/arquivos/ids/315085/Suplemento-para-Caes-e-Gatos-Beneflora-VET-14g.jpg?v=638138073624400000'
    },

    //cirurgias
    {
        categoriaId: 2,
        nome: 'Castração',
        descricao: "Pacote Cirúrgico: Avaliação pré‑anestésica, Anestesia geral, Antibióticos e analgésicos pós‑operatórios",
        preco: 450.00,
        imagem: 'https://cobasi.vteximg.com.br/arquivos/ids/302772/Roupa-Pos-Cirurgica-para-Caes-Machos-Castracao-Azul-Pet-Med-2.jpg?v=638888051443630000'
    },
    {
        categoriaId: 2,
        nome: 'Cesárea',
        descricao: "Pacote Cirúrgico: Avaliação pré‑anestésica, Anestesia geral, Antibióticos e analgésicos pós‑operatórios",
        preco: 450.00,
        imagem: 'https://cobasi.vteximg.com.br/arquivos/ids/302772/Roupa-Pos-Cirurgica-para-Caes-Machos-Castracao-Azul-Pet-Med-2.jpg?v=638888051443630000'
    },
    {
        categoriaId: 2,
        nome: 'Cirurgia de Obstrução',
        descricao: "Exames de imagem, Avaliação e preparo anestésico, Anestesia geral, Antibióticos e analgésicos",
        preco: 850.00,
        imagem: 'https://cobasi.vteximg.com.br/arquivos/ids/302772/Roupa-Pos-Cirurgica-para-Caes-Machos-Castracao-Azul-Pet-Med-2.jpg?v=638888051443630000'
    },

    //petiscos
    {
        categoriaId: 3,
        nome: 'Vet Snack Weight Control 85g',
        descricao: "Petisco de baixa caloria desenhado especialmente para controle de peso, ideal para cães com tendência à obesidade ou em dieta.",
        preco: 26.90,
        imagem: 'https://www.happydoguk.com/cdn/shop/files/VET_Snack_HD_Skin_853b8e81-5b46-4757-b4e8-b710e437313f_1080x.jpg?v=1741192407'
    },
    {
        categoriaId: 3,
        nome: 'Dog Treat Naturals Superfood Sticks',
        descricao: "Petiscos naturais com superfoods (ex.: batata‑doce, quinoa), ricos em nutrientes e antioxidantes — boa escolha para petisco fit e saudável.s",
        preco: 69.90,
        imagem: 'https://dogtreatnaturals.com/cdn/shop/files/DTN_SuperFoods_DuckApple_10oz_Front.png?v=1731687039&width=480'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
// Exportamos as duas variáveis num único objeto para que outros
// arquivos (como as rotas) possam importar e usar esses dados.
module.exports = { categorias, produtos };
