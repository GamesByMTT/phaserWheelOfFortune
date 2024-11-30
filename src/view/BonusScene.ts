import Phaser, { Scene } from "phaser";
import { currentGameData, Globals, initData, ResultData } from "../scripts/Globals";
import SoundManager from "../scripts/SoundManager";
let values = initData.gameData.BonusPayout
export default class BonusScene extends Scene{
    public bonusContainer!: Phaser.GameObjects.Container
   public spinContainer!: Phaser.GameObjects.Container;
   public outerContainer!: Phaser.GameObjects.Container;
   SoundManager!: SoundManager
   SceneBg!: Phaser.GameObjects.Sprite
 
    stopArrow!: Phaser.GameObjects.Sprite
    wheel!: Phaser.GameObjects.Sprite
    normalLight!: Phaser.GameObjects.Sprite
    spinWheelBg!: Phaser.GameObjects.Sprite
    spinCircle!: Phaser.GameObjects.Sprite
    spinCenter!: Phaser.GameObjects.Sprite
    startButton!: Phaser.GameObjects.Sprite
    betHeading!: Phaser.GameObjects.Text
    betAmount!: Phaser.GameObjects.Text
    public canSpinBonus: boolean = true;
    private textObjects: Phaser.GameObjects.Text[] = []; // Store text objects
    constructor() {
        super({ key: 'BonusScene' });
       
        
    }
    create(){
        // console.log(values, "values");
        const { width, height } = this.cameras.main;
        this.bonusContainer = this.add.container();
        this.SceneBg = new Phaser.GameObjects.Sprite(this, width/2, height/2, 'Background').setDisplaySize(width, height)
        this.spinWheelBg = new Phaser.GameObjects.Sprite(this, width/2, height/2, 'wheelBg').setScale(0.6)
        this.stopArrow = this.add.sprite(width * 0.5, height * 0.16, "stopArrow").setScale(0.6),
        this.normalLight = this.add.sprite(width/2, height/2, "normalLight").setScale(0.6)
        // Create the spin circle sprite
        this.spinCircle = new Phaser.GameObjects.Sprite(this, 0, 0, 'spinCircle').setScale(0.59);
        this.betHeading = this.add.text(width * 0.13, height * 0.25, "Bet/Lines", {fontFamily: "Nunito", fontSize: "60px", color: "#FFFFFF", fontStyle:"bold"});
        this.betAmount = this.add.text(width * 0.2, height * 0.35, `${initData.gameData.Bets[currentGameData.currentBetIndex]}`,{fontFamily: "Nunito", fontSize: "50px", color: "#FFFFFF", fontStyle:"bold"}).setOrigin(0.5);
         
        // Create a container for the spin circle and numbers
        this.spinContainer = this.add.container(width / 2, height / 2, [this.spinCircle]);
     
        // Set a circular mask for the container to match the spinCircle size
        const maskShape = this.make.graphics({ x: 0, y: 0 });
        maskShape.fillCircle(0, 0, this.spinCircle.width / 2);
        const mask = maskShape.createGeometryMask();
        this.spinContainer.setMask(mask);
     
        this.spinCenter = new Phaser.GameObjects.Sprite(this, width/2, height/2, 'spinCenter').setScale(0.7);
        this.startButton = new Phaser.GameObjects.Sprite (this, width/2, height/1.08, 'freeSpinStartButton').setScale(0.7).setInteractive()
        this.bonusContainer.add([ this.SceneBg, this.spinWheelBg, this.startButton, this.spinCircle, this.spinCenter, this.normalLight, this.betHeading]);
        this.spinContainer = this.add.container(width / 2, height / 2, [this.spinCircle]);
     
       
        let segments = initData.gameData.BonusPayout.length;
        let anglePerSegment = 360 / segments;
        // console.log("anglePerSegment", anglePerSegment); 
        
        for(let i=0; i< segments; i++){
            let startAngle = Phaser.Math.DegToRad(i * anglePerSegment);
            let endAngle = Phaser.Math.DegToRad((i + 1) * anglePerSegment);
            
            let text = this.add.text(0, 0, `X ${initData.gameData.BonusPayout[i]}`, { 
                fontFamily: "Nunito", 
                fontSize: "35px", 
                color: "#fff", 
                fontStyle: "bold" 
            });
            text.setOrigin(0.5);
            
            // Store the initial angle for later rotation
            text.setData('initialAngle', startAngle + (endAngle - startAngle) / 2);
            
            this.updateTextPosition(text);
            this.spinContainer.add(text);
            this.textObjects.push(text);
        }

        this.spinContainer.angle = 0;
        this.startButton.on("pointerdown", ()=>{
            if (this.canSpinBonus) {
                 if(ResultData.gameData.BonusIndex){
                    this.startButton.setTexture("freeSpinStartButtonPressed")
                    this.spinWheel(ResultData.gameData.BonusIndex);
                 }
                //  else{
                //     this.spinWheel(1);
                //  }
                 // Pass the index you want the wheel to stop at
            }
        })
        this.outerContainer = this.add.container();
        this.outerContainer.add(this.stopArrow);
        this.startBlinking();
      }
      startBlinking() {
        // Create a timer event that repeats indefinitely
        this.time.addEvent({
            delay: 400, // Time in milliseconds between blinks
            callback: this.toggleLight,
            callbackScope: this,
            loop: true
        });
        }
        
        toggleLight() {
            if (this.normalLight.texture.key === 'normalLight') {
                this.normalLight.setTexture('glowLight');
            } else {
                this.normalLight.setTexture('normalLight');
            }
        }
      updateTextPosition(text: Phaser.GameObjects.Text) {
        const initialAngle = text.getData('initialAngle');
        const currentContainerAngle = Phaser.Math.DegToRad(this.spinContainer.angle);
        const finalAngle = initialAngle + currentContainerAngle;
        
        text.setPosition(
            260 * Math.cos(finalAngle),
            260 * Math.sin(finalAngle)
        );
        
        // Rotate text so bottom points to center
        text.angle = Phaser.Math.RadToDeg(finalAngle) + 360;
    }
      
      spinWheel(targetIndex: number) {
        const spinSound = Globals.soundResources["spinWheelMusic"];
        spinSound.rate(1);  // Ensure starting rate is 1 (normal speed)
        spinSound.play();
        
        this.canSpinBonus = false;
        
        let segments = initData.gameData.BonusPayout.length;
        let anglePerSegment = 360 / segments; // 45 degrees for 8 segments
        let desiredStopAngle = 247.5;  // Your desired stopping angle
    
        // Calculate the rotation needed to align targetIndex at the desired stop angle
        let targetAngle = (desiredStopAngle - ((targetIndex * anglePerSegment) + (anglePerSegment / 2))) + 22.5;
    
        // Calculate random spins before landing on target
        let randomSpins = Phaser.Math.Between(2, 5);
        // console.log(randomSpins, "randomSpins");
        
        let totalRotation = randomSpins * 360 + targetAngle;  // Total rotation including full spins
        // console.log(totalRotation, "totalRotation", targetAngle) ;
        
        // Spin the wheel
        this.tweens.add({
            targets: this.spinContainer,
            angle: totalRotation,
            ease: 'Back.easeOut',
            duration: 5000,
            onUpdate: (tween, target) => {
                const progress = tween.progress;
                // Gradually slow down the spin sound as the wheel slows down
                if (progress > 0.5) {
                    const newRate = 1 - ((progress - 0.7) * 2);  // Decrease rate to slow down
                    spinSound.rate(Phaser.Math.Clamp(newRate, 0.5, 1));  // Ensure rate doesn't go below 0.5
                }
            },
            onComplete: () => {
                spinSound.rate(0.5);
                spinSound.stop();
    
                this.startButton.setInteractive();
                this.startButton.setTexture("freeSpinStartButton");
                
                setTimeout(() => {
                    Globals.SceneHandler?.removeScene("BonusScene");
                }, 2000);
            }
        });
    }
    
}