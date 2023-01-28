class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload() {
        this.bar=new Bar({scene:this,x:game.config.width/2,y:game.config.height/2});
        this.progText=this.add.text(game.config.width/2,game.config.height/2,"0%",{color:'#ffffff',fontSize:game.config.width/20});
        this.progText.setOrigin(0.5,0.5);
        this.load.on('progress', this.onProgress,this);

        this.load.image("road","images/road.jpg");
        this.load.spritesheet("cars","images/Ambulance.png",{frameWidth:96,frameHeight:211});
        this.load.image("titleBack","images/titleBack.jpg");
        this.load.image("line","images/line.png");
        this.load.image("pcar1","images/truck.png");
        this.load.image("pcar2","images/taxi.png");
        this.load.image("cone","images/Black_viper.png");
        this.load.image("barrier","images/Mini_truck.png");

        this.load.image("toggleBack","images/ui/toggles/4.png");
        
        this.load.image("musicOn","images/ui/icons/music_on.png");
        this.load.image("musicOff","images/ui/icons/music_off.png");
     
        this.load.audio("backgroundMusic",['audio/sleepwalking.mp3']);
        this.load.audio("boom",['audio/boom.mp3','audio/boom.ogg']);
        this.load.audio("whoosh",['audio/whoosh.mp3','audio/whoosh.ogg']);

       
    }
    onProgress(value)
    {
        var per=value*100;
        this.bar.setPercent(value);
        this.progText.setText(per+"%");
    }
    create() {
    	this.scene.start("SceneTitle");
    }
}