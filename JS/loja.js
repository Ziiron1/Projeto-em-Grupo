const itensARR = [
    {
        id: 0,
        nome: ' Fone JBL Tune 225TWS',
        img: '../img/loja-fone1b.jpg',
        valor: 299,
        cores: ['Branco', 'Preto'],
        descricao: 'Com proteção IPX4, é o fone resistente à respingos de água e suor e conexão Bluetooth 5.0, garantia de 12 meses, Com 4 horas de bateria do fone mais 12 horas de recarga do estojo, são 16 horas de música sem parar',
     
    },

    {
        id: 1,
        nome: 'Fone de Ouvido WAAW by ALOK',
        img: '../img/loja-fone2.jpg',
        valor: 379.99,
        cores: ['Preto e Verde'],
        descricao: 'Entre em harmonia com sua música e seu mundo. Sem fios para atrapalhar, e o Dual Connect permite usar só um fone ou os dois. Você escolhe! Possui 12 meses de garantia, até 5 horas (fone) + 15 horas (backup no estojo de carregamento)',
 
    
    },

    {
        id: 2,
        nome: 'Smartwatch Amazfit Gts 2 A2018 Mini Relógio Inteligente',
        img: '../img/loja-smarth1.jpg',
        valor: 532.99,
        cores: ['Preto', 'Rosa'],
        descricao: 'Monitoramento de frequência cardíaca 24 horas O GTS 2 mini oferece suporte ao rastreamento aprofundado líder do setor da saúde do coração, com avisos para frequência cardíaca em repouso regular mente elevada fornecida. Possui 5 meses de garantia',
    },

    
    {
        id: 3,
        nome: 'Relógio Smartwatch D20 ',
        img: '../img/loja-smart2.jpg',
        valor: 44.90,
        cores: ['Preto', 'Rosa', 'Prata'],
        descricao: 'O Smartwatch D20 Altomex é o dispositivo ideal para você. Além de monitorar seu sono, pressão arterial, batimento cardíaco e oxigênio no sangue, ele também tem funções esportivas com contagem de passos e notificações de texto, Facebook, WhatsApp etc. Possui Garantia de 12 meses.  Resistente a pingos de água(não mergulhar na agua)',
    },

    {   
        id:10, 
        nome:'Protein Crisp Bar', 
        img:'../img/loja-item01.png', 
        valor:51.43, 
        cores:['540g', '630g', '960g'], 
        descricao:'Barra proteica ,Alimento saudável e proteico, Aumenta a oferta de proteínas no dia a dia,Informações sobre alérgenos: Não contém glúten'},
    {
        id:11, 
        nome:'Termogênico Hell', 
        img:'../img/loja-item02.png', 
        valor:99.00, 
        cores:['120Caps', '120Caps', '120Caps'], 
        descricao:'Termogênico Hell - A combinação perfeita de ingredientes para acelerar a queima de gorduras - L Carnitina, Cafeína, L Tirosina, Vitamina B3, Vitamina B6, Picolinato de Cromo, MCT ou TCM, 3Vs Nutrition,Informações sobre alérgenos:Não contém glúten, '},
    {
        id:12, 
        nome:'KIT Waxy Whey 900g + BCAA 100g + POWER Creatina 100g - Bodybuilders ', 
        img:'../img/loja-item03.jpg', 
        valor:104.90, 
        cores:['ComboX1', 'ComboX2', 'ComboX3'], 
        descricao:'O suplemento Waxy Whey foi desenvolvido especialmente para as pessoas que buscam o ganho de massa muscular magra, força muscular, mais energia durante os treinos e o aumento e capacidade do corpo de reparar os músculos pós-treino.'},
    {
        id:4, 
        nome:'Creatina Monohidrata 3VS Nutrition', 
        img:'../img/loja-item04.png', 
        valor:114.00, 
        cores:['300g', '530g', '860g'], 
        descricao:'Suplemento a base de creatina, esse componente tem como principal função aumentar a atp (energia celular), dessa forma os músculos conseguem desenvolver mais força e assim ajudar nos processos de hipertrofia muscular.'},
    {
        id:5, 
        nome:'100% Whey Protein Gold Standard', 
        img:'../img/loja-item05.jpg', 
        valor:253.00 , 
        cores:['360g', '560g', '960g'], 
        descricao:'Favorece o ganho de massa muscular,Proteínas de alto valor biológico,Aporte de aminoácidos ,Não contém glúten'},
    {
        id:6, 
        nome:'Fone de Ouvido Bluetooth JBL Tune 510BT Pure Bass', 
        img:'../img/loja-item06.jpg', 
        valor:194.55, 
        cores:['BRANCO', 'PRETO', 'ROSA'], 
        descricao:'Leve, confortável e com design dobrável Reproduza som de alta qualidade sem aquela bagunça dos fios com transmissão por Bluetooth 5.0,Até 40 horas de bateria e carregamento rápido: 5 minutos = 2 horas,Conexões multipontos permite que você mude de um dispositivo Bluetooth para outro'},
    {
        id:7, 
        nome:'JBL, Fone de Ouvido Bluetooth, Wave 200 TWS', 
        img:'../img/loja-item07.png', 
        valor:250.99, 
        cores:['BRANCO', 'PRETO', 'ROSA'], 
        descricao:'A música fica melhor com JBL. E o seu dia também. Sinta o som grave profundo ampliado pelos drivers de 8 mm e adicione diversão à sua rotina.,Até 20 horas de reprodução combinada,Com reserva de até 5 horas nos fones de ouvido e até 15 horas no estojo, o JBL Wave 200TWS dura tanto quanto você.'},
 {
        id:9, 
        nome:'Envoltório de aquecimento', 
        img:'../img/loja-item09.jpg', 
        valor:239.71, 
        cores:['BRANCO', 'PRETO', 'AZUL'], 
        descricao:' Engrenagens: O motor de massagem proporciona uma massagem relaxante aos tecidos e músculos.'}
]

const c = (el) => { return document.querySelector(el) };
const cs = (el) => { return document.querySelectorAll(el) };

let qtitens = 1;
let carrinho = [];

let itenCarrinho = 0;

//mapeia os itens do array
itensARR.map((item, indexARR) => {
    //clona as divs no html
    let itens = c('.modelo .loja-item').cloneNode(true);

    //adiciona a informação de qual item
    itens.setAttribute('data-key', indexARR);

    //retorna os itens clonados em uma div
    c('.itens-amostra').append(itens);


    //Adiciona os elementos respectivos a cada item
    itens.querySelector('.loja-item-nome').innerHTML = item.nome;
    itens.querySelector('.loja-item-valor').innerHTML = `R$ ${item.valor.toFixed(2)}`;
    itens.querySelector('.loja-item-imagem img').src = item.img;


    //adiciona os 2 botões tanto da imagem tanto para o proprio botao, e desliga a função de link
    itens.querySelector('.btn-img').addEventListener('click', desligarClick);
    itens.querySelector('.btn-btn').addEventListener('click', desligarClick);

    //função para abrir o modal dos itens
    function desligarClick(e) {

        //tira a fução de recarregar a pagina
        e.preventDefault();

        //retorna a key do item 
        let key = e.target.closest('.loja-item').getAttribute('data-key');

        //reseta a quantidade de itens no carirnho
        qtitens = 1;


        itenCarrinho = key;

        //Adiciona o itens 
        c('.item-desc-itens h1').innerHTML = itensARR[key].nome;
        c('.item-desc-img img').src = itensARR[key].img;
        c('.item-desc-descricao').innerHTML = itensARR[key].descricao;
        c('.loja-desc-valor').innerHTML = `R$ ${itensARR[key].valor.toFixed(2)}`;
        c('.qt-itens').innerHTML = qtitens;

        //controla animação
        c('.add-item-alpha').style.opacity = 0;
        c('.add-item-alpha').style.display = 'flex';
        setTimeout(() => {
            c('.add-item-alpha').style.opacity = 1;
        }, 200);

        //captura o valor da cor do item e seleção
        let coresADD = '';
        itensARR[key].cores.forEach((cores, coresI) => {

            if (coresI == 0) {
                document.querySelector('.itens-cor').innerHTML =
                    coresADD += `<li class="color-click" data-color=${coresI}>${item.cores[coresI]}</li>`
            }
            else {
                document.querySelector('.itens-cor').innerHTML =
                    coresADD += `<li data-color=${coresI}>${item.cores[coresI]}</li>`
            }


        });



        //cria a interação com os botões de cores
        let addCor = document.querySelectorAll('.itens-cor li').forEach((cor) => {

            cor.addEventListener('click', () => {
                if (document.querySelector('.itens-cor li.color-click')) {
                    document.querySelector('.itens-cor li.color-click').classList.remove('color-click')
                }
                cor.classList.add('color-click')

            })

        })






    }

});

//Fechamento da tela de comprar
let btnCancelar = document.querySelector('.loja-desc-cancelar').addEventListener('click', fecharCompra)
function fecharCompra(e) {

    c('.add-item-alpha').style.opacity = 0;
    setTimeout(() => {
        c('.add-item-alpha').style.display = 'none';
    }, 500);
}


//subtrai os itens e fecha se for menor que 1
c('.btn-qt-menos').addEventListener('click', () => {
    qtitens--;

    if (qtitens <= 0) {
        fecharCompra()
    } else {
        c('.qt-itens').innerHTML = qtitens;
    }



})


//acrescenta os itens no modal
c('.btn-qt-mais').addEventListener('click', () => {
    qtitens++;
    c('.qt-itens').innerHTML = qtitens;
})


let corItem
//acrescenta no carrinho 
c('.loja-desc-comprar').addEventListener('click', () => {

    corItem = c('.color-click').getAttribute('data-color');

    let identificador = itenCarrinho + '@' + corItem;
    console.log(identificador)

    let key = carrinho.findIndex((item) => {
        return item.identificador == identificador
    });
    console.log(key)


    if (key > -1) {

        carrinho[key].quantidade += qtitens;
        console.log('aki')

    } else {

        carrinho.push({
            identificador,
            id: itenCarrinho,
            corItem,
            quantidade: qtitens,
        });

    }

    fecharCompra();
    attCarrinho();
});

function attCarrinho(){
    if(carrinho.length > 0){
        c('aside').classList.add('show');
        c('.itens-amostra').style.maxWidth = '70vw'
        c('.carrinho').innerHTML ='';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in carrinho){

            //clona os itens
            let itensCarrinho = itensARR.find((item)=>{
                return item.id == carrinho[i].id
            })

            subtotal += itensCarrinho.valor * carrinho[i].quantidade;

            let carrinhos = c('.item-carrinho').cloneNode(true)

           
            let cores = parseInt(corItem);
            let produtoCor = itensCarrinho.cores[parseInt(cores)];

            
                console.log(itensCarrinho.cores[parseInt(cores)])
                console.log(produtoCor)
            let produtoNome = `${itensCarrinho.nome}, (${produtoCor})`;

            carrinhos.querySelector('img').src = itensCarrinho.img;
            carrinhos.querySelector('h3').innerHTML = produtoNome;
            carrinhos.querySelector('.item-car-preço h4').innerHTML =`R$ ${itensCarrinho.valor.toFixed(2)}`;
            carrinhos.querySelector('.carrinho-qt').innerHTML = carrinho[i].quantidade;

            carrinhos.querySelector('.carrinho-qt-btnMa').addEventListener('click',(()=>{
                console.log('click')
                carrinho[i].quantidade ++
                attCarrinho();
            }))

            carrinhos.querySelector('.carrinho-qt-btnMe').addEventListener('click',(()=>{
               console.log('click')
                if(carrinho[i].quantidade > 1){
                    carrinho[i].quantidade--;   
                }else{
                    carrinho.splice(i,1)
                }
                 
                attCarrinho();
            }))

            c('.carrinho').append(carrinhos);
        }
            desconto = subtotal * 0.15;
            total = subtotal - desconto;

            c('.carrinho-subtotal').innerHTML = ` Sub-Total R$ ${subtotal.toFixed(2)}`
            c('.carrinho-desconto').innerHTML = ` Desconto R$ ${desconto.toFixed(2)}`
            c('.carrinho-total').innerHTML = ` Total R$ ${total.toFixed(2)}`
    }else{
        c('aside').classList.remove('show');
        c('.itens-amostra').style.maxWidth ='100vw'
    }
}

c('.btn-voltar').addEventListener('click',(()=>{
    c('aside').classList.remove('show');
}))