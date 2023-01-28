class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
    
      
   
    }
    create() {
        //defining our objects
        //set up
        emitter=new Phaser.Events.EventEmitter();
        controller=new Controller();
        
        model.gameOver=false;
        model.speed=1;
        model.score=0;

        this.sb=new ScoreBox({scene:this});
        this.sb.x=game.config.width-50;
        this.sb.y=50;
        emitter.on(G.SCORE_UPDATED,this.scoreUpdated,this);
        


        this.road= new Road({scene:this});
        this.road.x=game.config.width/2;
        this.road.makeLines();

        this.alignGrid=new AlignGrid({scene:this,rows:5,cols:5});
        //this.alignGrid.showNumbers();
        this.alignGrid.placeAtIndex(4,this.sb);

        var soudButtons=new SoundButtons({scene:this});
    }
    scoreUpdated()
    {
        if(model.score/5==Math.floor(model.score/5))
        {
            model.speed+=.25;
            if(model.speed>1.25)
            {
                model.speed=1.5;
            }
        }
    }
    update() {
        //constant running loop 
        this.road.movelines();
        this.road.moveObject();
    }
}