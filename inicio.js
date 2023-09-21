class inicio extends Phaser.Scene{
    constructor(){
        super('inicio')
    }

    create(){
        this.add.image(0,0, 'start')
        .setOrigin(0)

        setTimeout(/*função anonima*/ //atrasa antes de chamar a função de callback (retorno) 
            // TEM FUNÇÕES QUE ESPERA DE RETORNO UMA OUTRA AÇÃO E FUNÇÃO E O CALLBACK DA UMA ATRASADINHA ALI E 
            //ATRASA E AI EXECUTA A OUTRA FUNÇÃO

            ()=>{ //função flecha, arrow function, o que muda é que nao tem nome e tem a seta, mas é igual as outras
           // this.add.text(game.config.width/2, game.config.height/2+40, //isso é na onde o texto vai ficar na minha tela 

           /* this.add.text(500,300, 'PRESS ENTER!!',
            {fontSize: '32px',
             fill: 'MidnightBlue',
            fontWeight: 'bold',
            fontFamily: 'Helvetica'})
            .setOrigin(.5)*/
                                                 //se ela for pressionada para baixo    /uma função anonima dentro de outra   /parametro esta falando que quando pressionar vai iniciar a fase, senão, não ira
            this.input.keyboard.addKey('enter') .on('down', ()=> {this.scene.start('fase01') }) //Fim do addKey
        },200)// tempo em milisegundos, dentro da programação muita coisa é em milisegundos, que é só dividir por 1000//Fim Timeout

    }//Fim do Create

}//Fim class


// NAO USA FUNCTION NOME_FUNÇÃO DENTRO DE CLASSE. ELE JA SABE QUE É UMA FUNÇÃOA AUTOMATICAMENTE
// TEM COMO CRIAR FUNÇÃO ANONIMA, IGUAL FOI NESTE TIMEOUT


//FUNÇÃO-->  CONJUNTO DE CÓDIGOS QUE É AGRUPADO COM UM NOME QUE PODE OU NÃO POSSUIR PARAMETROS
//QUE MODIFIQUE A SUA EXECUÇÃO. UM CONJUNTO DE PROCESSOS QUE TEM UM NOME. 
//ONDE SÓ CHAMANDO ESSA FUNÇÃO COM UM NOME, ELA JA FUNCIONA, NAO PRECISA CHAMAR TODOS AQUELES CODIGOS DELA JUNTO. 
//OU SEJA FICA MAIS FACIL DE CHAMAR


//PARÂMETRO-->   VARIAVEIS CRIADAS ENTRE PARANTESES
// EXEMPLO: NOME_FUNCAO (PARAMETRO1, PARAMETRO2, PARAMETRO3...)
// PARAMETRO ALTERA A FORMA COMO É FEITA A SUA FUNÇÃO, É DIFERENTE DA VARIAVEL QUE NAO FAZ ISSO
// COMO SE FOSSE OS INGREDIENTES, SE MUDA O INGREDIENTE, MUDA O RESULTADO.
// NAO É OBRIGATORIO TER PARAMETRO, MAS SE TEM PARAMETRO TEM QUE PASSAR ELES


//RETORNO--> A DEVOLUTIVA DA NOSSA FUNÇÃO, É ALGO QUE A FUNÇÃO VAI DEVOLVER
// PARA QUEM A CHAMOU. 
//EXEMPLO:EU FAÇO O PEDIDO DO LANCHE E ESPERO RECEBE-LO
// EU SAIO DA SALA SEM AVISAR, O PROFESSOR NAO ESPERA O RETORNO

// TUDO ISSO FAZ PARTE DO CONCEITO DE FUNÇÃO
