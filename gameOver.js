class gameOver extends Phaser.Scene{
    constructor(){
        super('gameOver')
    }

    create(){
        //this.scene.start("fase01")
        this.add.image(0,0, 'gameover')
        .setOrigin(0)
        .setScale(1,1)// tamanho plataforma

        setTimeout(()=>{
            this.add.text(500,450,
            'Pressione ENTER, para tentar novamente!!',
            {fontSize: '28px',
            fill: 'LightGrey', 
           // fontWeight: 'bold',
            fontFamily: 'Helvetica'})
           .setOrigin(.5)
             
            .setShadow (0, 0, '#FFF', 3)
            .setScrollFactor(0)
           
        
            this.input.keyboard.addKey('enter') .on('down', ()=> {this.scene.start('fase01') }) 
        },200 )//Fim Timeout

    }//Fim do Create

}//Fim class


