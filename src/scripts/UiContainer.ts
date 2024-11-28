import Phaser from 'phaser';
import { Scene, GameObjects, Types } from 'phaser';
import { Globals, ResultData, currentGameData, initData } from './Globals';
import { TextLabel } from './TextLabel';
import { gameConfig } from './appconfig';
import MainScene from '../view/MainScene';
import SoundManager from './SoundManager';
import PathBase from 'phaser3-rex-plugins/plugins/gameobjects/shape/shapes/geoms/lines/PathBase';
// Define UiContainer as a Phaser Scene class
export class UiContainer extends Phaser.GameObjects.Container {
    SoundManager: SoundManager
    spinBtn!: Phaser.GameObjects.Sprite;
    autoBetBtn!: Phaser.GameObjects.Sprite;
    freeSpinBgImg!: Phaser.GameObjects.Sprite
    CurrentBetText!: TextLabel;
    currentWiningText!: Phaser.GameObjects.Text;
    currentBalanceText!: Phaser.GameObjects.Text;
    mBtn!: Phaser.GameObjects.Sprite;
    turboStatus: boolean = false;
    betOpen: boolean = true;
    trippleSevenAmount!: TextLabel;
    doubleSevenAmount!: TextLabel;
    singleSevenAmount!: TextLabel;
    barBarAmount!: TextLabel
    barAmount!: TextLabel;
    doubleDollarAmount!: TextLabel;
    mixedSeven!: TextLabel;
    mixedBar!: TextLabel;
    anyText!: TextLabel;
    addDollar!: TextLabel;
    CurrentLineText!: TextLabel;
    freeSpinText!: TextLabel;
    pBtn!: Phaser.GameObjects.Sprite;
    public isAutoSpinning: boolean = false; // Flag to track if auto-spin is active
    mainScene!: Phaser.Scene
    betButtonDisable!: Phaser.GameObjects.Container
    freeSpinContainer!: Phaser.GameObjects.Container
    spinButtonSound!: Phaser.Sound.BaseSound
    normalButtonSound!: Phaser.Sound.BaseSound
    tripple7: Phaser.GameObjects.Sprite[] = [];
    double7: Phaser.GameObjects.Sprite[] = [];
    single7: Phaser.GameObjects.Sprite[] = [];
    barBarSprite: Phaser.GameObjects.Sprite [] = []
    barSprite : Phaser.GameObjects.Sprite []=[]
    mixSevenSprite!: Phaser.GameObjects.Sprite
    mixBarSprite!: Phaser.GameObjects.Sprite;
    buttonBg!: Phaser.GameObjects.Sprite;
    turboButton!: Phaser.GameObjects.Sprite;
    turbobuttonOff!: Phaser.GameObjects.Sprite
    private betContainer: Phaser.GameObjects.Container | null = null;

    constructor(scene: Scene, spinCallBack: () => void, soundManager: SoundManager) {
        super(scene);
        scene.add.existing(this); 
        // this.buttonBackground()
        // Initialize UI elements
        // this.maxBetInit();
        this.spinBtnInit(spinCallBack);
        this.autoSpinBtnInit(spinCallBack);
        this.lineBtnInit();
        this.winBtnInit();
        this.balanceBtnInit();
        this.BetBtnInit();
        this.SoundManager = soundManager;
    }
   

   /**
     * @method lineBtnInit Shows the number of lines for example 1 to 20
     */
   lineBtnInit() { 
    const container = this.scene.add.container(0, 0);
    const linePanel = this.scene.add.sprite(0, 0, "blackBox").setDepth(0)
    linePanel.setOrigin(0.5);
    linePanel.setPosition(gameConfig.scale.width * 0.42, gameConfig.scale.height * 0.88);
    const linePanelText = this.scene.add.text(linePanel.x, gameConfig.scale.height * 0.95, "Bets/Line", {fontFamily: "Nunito", fontSize: "35px", color: "#ffffff"}).setOrigin(0.5)
    // container.add(lineText);
    this.pBtn = this.createButton('pBtn', gameConfig.scale.width * 0.49, gameConfig.scale.height * 0.88, () => {
        this.bnuttonMusic("buttonpressed");
        this.pBtn.setTexture('pBtnH');
        this.pBtn.disableInteractive();
        if (!currentGameData.isMoving) {
            currentGameData.currentBetIndex++;
            if (currentGameData.currentBetIndex >= initData.gameData.Bets.length) {
                currentGameData.currentBetIndex = 0;
            }
            const betAmount = initData.gameData.Bets[currentGameData.currentBetIndex];
            
            const updatedBetAmount = betAmount * 9;
            this.CurrentLineText.updateLabelText(betAmount);
            this.CurrentBetText.updateLabelText(updatedBetAmount.toFixed(2).toString());

        }
        this.scene.time.delayedCall(200, () => {
            this.pBtn.setTexture('pBtn');
            this.pBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
        });
    }).setDepth(8);
    this.pBtn.setScale(0.8)
    this.mBtn = this.createButton('mBtn', gameConfig.scale.width * 0.35, gameConfig.scale.height * 0.88, ()=>{
        this.bnuttonMusic("buttonpressed");
        this.mBtn.setTexture('mBtnH');
        this.mBtn.disableInteractive();
        if (!currentGameData.isMoving) {
            currentGameData.currentBetIndex--;
            if (currentGameData.currentBetIndex <= 0) {
                currentGameData.currentBetIndex = 0;
            }
            const betAmount = initData.gameData.Bets[currentGameData.currentBetIndex];
            const updatedBetAmount = betAmount * 9;
            this.CurrentLineText.updateLabelText(betAmount);
            this.CurrentBetText.updateLabelText(updatedBetAmount.toString());
        }
        this.scene.time.delayedCall(200, () => {
            this.mBtn.setTexture('mBtn');
            this.mBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
        });
    })
    this.mBtn.setScale(0.8)
    container.add([this.pBtn, this.mBtn]);
    this.CurrentLineText = new TextLabel(this.scene, linePanel.x, linePanel.y, initData.gameData.Bets[currentGameData.currentBetIndex], 35, "#ffffff").setOrigin(0.5)
    //Line Count
    container.add(this.CurrentLineText).setDepth(1)
}

    /**
         * @method BetBtnInit 
         * @description this method is used to create the bet Button which will show the totla bet which is placed and also the plus and minus button to increase and decrese the bet value
         */
    BetBtnInit() {
        const container = this.scene.add.container(gameConfig.scale.width * 0.25, gameConfig.scale.height * 0.88);
        this.betButtonDisable = container;
        const betPanelHeading = this.scene.add.text(0, 75, "Total Bet", {fontFamily:"Nunito", fontSize: "35px", color: "#ffffff"}).setOrigin(0.5)
        const betPanel = this.scene.add.sprite(0, 0, 'blackBox').setOrigin(0.5).setDepth(4).setScale(0.9);
        container.add(betPanel);
        this.CurrentBetText = new TextLabel(this.scene, 0, 0, ((initData.gameData.Bets[currentGameData.currentBetIndex]) * 9).toFixed(2).toString(), 35, "#ffffff").setDepth(6);
        container.add([betPanelHeading, this.CurrentBetText]);
    }

    /**
     * @method winBtnInit add sprite and text
     * @description add the sprite/Placeholder and text for winning amount 
     */
    winBtnInit() {
        const winPanelImage = this.scene.add.sprite(gameConfig.scale.width * 0.59, gameConfig.scale.height * 0.88, "blackBox").setDepth(0).setOrigin(0.5)
        const winPanel = this.scene.add.text(winPanelImage.x, gameConfig.scale.height * 0.95, 'Win', {fontFamily: "Nunito", color: "#ffffff", fontSize: "35px"});
        winPanel.setOrigin(0.5);
        const currentWining: any = ResultData.playerData.currentWining;
       
        this.currentWiningText = this.scene.add.text(winPanelImage.x, gameConfig.scale.height * 0.88, currentWining.toFixed(2), {fontFamily:"Nunito", color: "#ffffff", fontSize: "35px"} ).setOrigin(0.5);
        this.add([winPanelImage, winPanel, this.currentWiningText])
        if(currentWining > 0){
            this.scene.tweens.add({
                targets:  this.currentWiningText,
                scaleX: 1.3, 
                scaleY: 1.3, 
                duration: 800, // Duration of the scale effect
                yoyo: true, 
                repeat: -1, 
                ease: 'Sine.easeInOut' // Easing function
            });
        }
    }
    /**
     * @method balanceBtnInit Remaning balance after bet (total)
     * @description added the sprite/placeholder and Text for Total Balance 
     */
    balanceBtnInit() {
        const balanceBg = this.scene.add.sprite(gameConfig.scale.width * 0.75, gameConfig.scale.height * 0.88, "blackBox").setOrigin(0.5)
        const balancePanel = this.scene.add.text(balanceBg.x, gameConfig.scale.height * 0.95, "Balance", {fontFamily: "Nunito", color:"#ffffff", fontSize:"35px"});
        balancePanel.setOrigin(0.5);
        currentGameData.currentBalance = initData.playerData.Balance;
        this.currentBalanceText = this.scene.add.text(balanceBg.x, gameConfig.scale.height * 0.88, new Number(currentGameData.currentBalance).toFixed(2), {fontFamily: "Nunito", fontSize: "35px", color:"#ffffff",}).setOrigin(0.5);
        this.add([balanceBg, balancePanel, this.currentBalanceText]);
    }
    /**
     * @method spinBtnInit Spin the reel
     * @description this method is used for creating and spin button and on button click the a SPIn emit will be triggered to socket and will deduct the amout according to the bet
     */
    spinBtnInit(spinCallBack: () => void) {
        this.spinBtn = this.createButton('spinBtn', gameConfig.scale.width / 1.14, gameConfig.scale.height - 170, () => {
        this.bnuttonMusic("spinButton");
        if(this.isAutoSpinning){
            this.autoBetBtn.emit('pointerdown'); // Simulate the pointerdown event
            this.autoBetBtn.emit('pointerup'); // Simulate the pointerup event (if needed)
            return;
        }
        // tween added to scale transition
            this.scene.tweens.add({
                targets: this.spinBtn,
                scaleX: 1,
                scaleY: 1,
                duration: 100,
                onComplete: () => {
                    // Send message and update the balance
                    Globals.Socket?.sendMessage("SPIN", { currentBet: currentGameData.currentBetIndex, currentLines: 3, spins: 1 });
                    // currentGameData.currentBalance -= initData.gameData.Bets[currentGameData.currentBetIndex];
                    // this.currentBalanceText.setText(currentGameData.currentBalance.toFixed(2));
                    // Trigger the spin callback
                    this.onSpin(true);
                    spinCallBack();

                    // Scale back to original size 
                    this.scene.tweens.add({
                        targets: this.spinBtn,
                        scaleX: 0.8,
                        scaleY: 0.8,
                        duration: 100,
                        onComplete: () => {
                            
                        }
                    });
                    // 
                }
            });
        }).setDepth(1);
        this.spinBtn.setScale(0.8)

    }

    /**
     * @method autoSpinBtnInit 
     * @param spinCallBack 
     * @description crete and auto spin button and on that spin button click it change the sprite and called a recursive function and update the balance accroding to that
     */
    autoSpinBtnInit(spinCallBack: () => void) {
        this.autoBetBtn = new Phaser.GameObjects.Sprite(this.scene, 0, 0, "autoSpin");
        this.autoBetBtn = this.createButton(
            'autoSpin',
            gameConfig.scale.width * 0.12,
            gameConfig.scale.height - 170,
            () => {
                this.normalButtonSound = this.scene.sound.add("buttonpressed", {
                    loop: false,
                    volume: 0.8
                })
                this.normalButtonSound.play()
                this.scene.tweens.add({
                    targets: this.autoBetBtn,
                    duration: 100,
                    onComplete: () =>{
                        this.isAutoSpinning = !this.isAutoSpinning; // Toggle auto-spin state
                        if (this.isAutoSpinning && currentGameData.currentBalance > 0) {
                            Globals.Socket?.sendMessage("SPIN", {
                                currentBet: currentGameData.currentBetIndex,
                                currentLines : 3
                            });
                            currentGameData.currentBalance -= initData.gameData.Bets[currentGameData.currentBetIndex];
                            this.currentBalanceText.setText(currentGameData.currentBalance.toFixed(2));
                            this.autoSpinRec(true)
                            spinCallBack(); // Callback to indicate the spin has started
                            // Start the spin recursion
                            this.startSpinRecursion(spinCallBack);
                        } else {
                            // Stop the spin if auto-spin is turned off
                            this.autoSpinRec(false);
                        }
                        this.scene.tweens.add({
                            targets: this.autoBetBtn,
                            duration: 100,
                            onComplete: () => {
                                // this.spinBtn.setTexture('spinBtn');
                            }
                        });
                    }
                })
            }
        ).setDepth(0);
        this.autoBetBtn.setScale(0.8)
    }

    /**
     * @method startSpinRecursion
     * @param spinCallBack 
     */
    startSpinRecursion(spinCallBack: () => void) {
        if (this.isAutoSpinning && currentGameData.currentBalance > 0) {
            // Delay before the next spin
            const delay = currentGameData.isMoving ? 5000 : 7000;
            this.scene.time.delayedCall(delay, () => {
                if (this.isAutoSpinning && currentGameData.currentBalance >= 0) {
                    Globals.Socket?.sendMessage("SPIN", {
                        currentBet: currentGameData.currentBetIndex,
                        currentLines : 20
                    });
                    currentGameData.currentBalance -= initData.gameData.Bets[currentGameData.currentBetIndex];
                    this.currentBalanceText.setText(currentGameData.currentBalance.toFixed(2));
                    spinCallBack();
                    // Call the spin recursively
                    this.spinRecursively(spinCallBack);
                }
            });
        }
    }

    spinRecursively(spinCallBack: () => void) {
        if (this.isAutoSpinning) {
            // Perform the spin
            this.autoSpinRec(true);
            if (currentGameData.currentBalance < initData.gameData.Bets[currentGameData.currentBetIndex]) {
                // Stop the spin when a winning condition is met or balance is insufficient
                this.autoSpinRec(false);
                spinCallBack();
            } else {
                // Continue spinning if no winning condition is met and balance is sufficient
                this.startSpinRecursion(spinCallBack);
            }
        }
    }
    
    createButton(key: string, x: number, y: number, callback: () => void): Phaser.GameObjects.Sprite {
        const button = this.scene.add.sprite(x, y, key).setInteractive({ useHandCursor: true, pixelPerfect: true });
        button.setScale(0.9)
        button.on('pointerdown', callback);
        return button;
    }
   
    autoSpinRec(spin: boolean){
        if(spin){
            this.spinBtn.setTexture("spinBtnOnPressed");
            this.autoBetBtn.setTexture("autoSpinOnPressed");
            // this.maxbetBtn.disableInteractive();
            this.pBtn.disableInteractive();
        }else{
            this.spinBtn.setTexture("spinBtn");
            this.autoBetBtn.setTexture("autoSpin");
            // this.maxbetBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
            this.pBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
        }        
    }

    onSpin(spin: boolean) {
        // Handle spin functionality
        if(this.isAutoSpinning){
            return
        }
        if(spin){
            this.spinBtn.disableInteractive();
            this.spinBtn.setTexture("spinBtnOnPressed");
            this.autoBetBtn.setTexture("autoSpinOnPressed");
            this.autoBetBtn.disableInteractive();
            // this.turboButton.disableInteractive()
            // this.maxbetBtn.disableInteractive();
            this.pBtn.disableInteractive();
            
        }else{
            // this.turboButton.setInteractive()
            this.spinBtn.setTexture("spinBtn");
            this.spinBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
            this.autoBetBtn.setTexture("autoSpin");
            this.autoBetBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
            // this.maxbetBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
            this.pBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
        }        
    }

    bnuttonMusic(key: string){
        this.SoundManager.playSound(key)
    }

    update(dt: number){
        
    }
}
