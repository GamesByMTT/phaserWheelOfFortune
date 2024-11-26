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
    CurrentBetText!: Phaser.GameObjects.Text;
    currentWiningText!: Phaser.GameObjects.Text;
    currentBalanceText!: Phaser.GameObjects.Text;
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
    CurrentLineText!: Phaser.GameObjects.Text;
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
        this.buttonBackground()
        // Initialize UI elements
        // this.maxBetInit();
        this.spinBtnInit(spinCallBack);
        this.autoSpinBtnInit(spinCallBack);
        this.lineBtnInit();
        this.winBtnInit();
        this.balanceBtnInit();
        // this.turboButtonClick()
        // this.BetBtnInit();
        // this.tripleSeven()
        // this.doubleSeven();
        // this.singleSeven();
        // this.barbar();
        // this.bar()
        // this.mixSeven()
        // this.rightRedBox();

        this.SoundManager = soundManager;
    }
    buttonBackground(){
        this.buttonBg = this.scene.add.sprite(gameConfig.scale.width/2, gameConfig.scale.height * 0.92, "GameButtonsPanel").setOrigin(0.5);
        this.add(this.buttonBg)
    }

    mixSeven(){
        this.mixSevenSprite = this.scene.add.sprite(gameConfig.scale.width * 0.5, gameConfig.scale.height * 0.2, "differentSeven").setScale(0.45)
       
        this.mixBarSprite = this.scene.add.sprite(gameConfig.scale.width * 0.57, gameConfig.scale.height * 0.2, "differentBar").setScale(0.45);
        const mixSeveAmountbg = this.scene.add.sprite(gameConfig.scale.width * 0.5, gameConfig.scale.height * 0.24, "AmountBg").setScale(0.5);
        this.mixedSeven = new TextLabel(this.scene, gameConfig.scale.width * 0.5, gameConfig.scale.height * 0.24, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 10).toString(), 27)
        const mixBarAmountBg = this.scene.add.sprite(gameConfig.scale.width * 0.57, gameConfig.scale.height * 0.24, "AmountBg").setScale(0.5);
        this.mixedBar = new TextLabel(this.scene, gameConfig.scale.width * 0.57, gameConfig.scale.height * 0.24, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 4).toString(), 27)
        const anySprite = this.scene.add.sprite(gameConfig.scale.width * 0.63, gameConfig.scale.height * 0.2, "anyImage").setScale(0.6)
        const anySpriteAmountBg = this.scene.add.sprite(gameConfig.scale.width * 0.63, gameConfig.scale.height * 0.24, "AmountBg").setScale(0.5);
        this.anyText = new TextLabel(this.scene, gameConfig.scale.width * 0.63, gameConfig.scale.height * 0.24, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 2).toString(), 27)
        this.add([mixSeveAmountbg, mixBarAmountBg, anySprite, anySpriteAmountBg]);
    }

    barbar(){
        this.barBarSprite = []
        for(let k = 0; k < 3; k++){
            this.barBarSprite[k] = this.scene.add.sprite(
                gameConfig.scale.width * (0.49 + (k * 0.035)), 
                gameConfig.scale.height * 0.07,
                "slots4_0"
            ).setScale(0.3)
        }
        const barBarAmountBg = this.scene.add.sprite(gameConfig.scale.width * 0.62, gameConfig.scale.height * 0.07, "AmountBg").setScale(0.8);
        this.barBarAmount = new TextLabel(this.scene, gameConfig.scale.width * 0.62, gameConfig.scale.height * 0.07,  new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 30).toString(), 27);
        this.add([barBarAmountBg, this.barBarAmount]);
    }

    tripleSeven(){
        this.tripple7 = [];
        for(let i = 0; i < 3; i++) {
            this.tripple7[i] = this.scene.add.sprite(
                gameConfig.scale.width * (0.29 + (i * 0.035)), // Increases x position by 0.2 each time
                gameConfig.scale.height * 0.07,
                "slots1_0"
            ).setScale(0.28);
        }
        const triple7amountBg = this.scene.add.sprite(gameConfig.scale.width * 0.42, gameConfig.scale.height * 0.07, "AmountBg").setScale(0.8)
        this.trippleSevenAmount = new TextLabel(this.scene, gameConfig.scale.width * 0.42, gameConfig.scale.height * 0.07, new Number(initData.gameData.Bets[currentGameData.currentBetIndex]* 500).toString(), 27);
        this.add([triple7amountBg, this.trippleSevenAmount]);
    }

    doubleSeven(){
        this.double7 = []
        for(let i = 0; i< 3; i++){
            this.double7 [i]= this.scene.add.sprite(
                gameConfig.scale.width * (0.29 + (i * 0.035)),
                gameConfig.scale.height * 0.15,
                "slots2_0"
            ).setScale(0.3);
        }
        const double7amountBg = this.scene.add.sprite(gameConfig.scale.width * 0.42, gameConfig.scale.height * 0.15, "AmountBg").setScale(0.8)
        this.doubleSevenAmount = new TextLabel(this.scene, gameConfig.scale.width * 0.42, gameConfig.scale.height * 0.15, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 100).toString(), 27);
        this.add([double7amountBg, this.doubleSevenAmount])
    }
    bar(){
        this.barSprite = [];
        for(let k = 0; k < 3; k ++){
            this.barSprite[k] = this.scene.add.sprite(
                gameConfig.scale.width * (0.49 + (k * 0.035)), 
                gameConfig.scale.height * 0.15,
                "slots5_0"
            ).setScale(0.22)
        }
        const barSpriteAmount = this.scene.add.sprite(gameConfig.scale.width * 0.62, gameConfig.scale.height * 0.15, "AmountBg").setScale(0.8);
        this.barAmount = new TextLabel(this.scene, gameConfig.scale.width * 0.62, gameConfig.scale.height * 0.15, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 20).toString(), 27)
        this.add([barSpriteAmount, this.barAmount]);
    }

    singleSeven(){
        this.single7 = [];
        for(let k = 0; k < 3; k++){
            this.single7[k] = this.scene.add.sprite(
                gameConfig.scale.width * (0.29 + (k * 0.035)),
                gameConfig.scale.height * 0.23,
                "slots3_0"
            ).setScale(0.3)
        }
        const single7amountBg = this.scene.add.sprite(gameConfig.scale.width * 0.42, gameConfig.scale.height * 0.23, "AmountBg").setScale(0.8)
        this.singleSevenAmount = new TextLabel(this.scene, gameConfig.scale.width * 0.42, gameConfig.scale.height * 0.23, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 50).toString(), 27);
        this.add([single7amountBg, this.singleSevenAmount]);
    }

    rightRedBox(){
        const tenx = this.scene.add.sprite(gameConfig.scale.width * 0.7, gameConfig.scale.height * 0.07, "slots6_0").setScale(0.4);
        const fivex = this.scene.add.sprite(gameConfig.scale.width * 0.76, gameConfig.scale.height * 0.07, "slots7_0").setScale(0.4);
        const Twox = this.scene.add.sprite(gameConfig.scale.width * 0.82, gameConfig.scale.height * 0.07, "slots8_0").setScale(0.4);
        const multipleSprite = this.scene.add.sprite(gameConfig.scale.width * 0.88, gameConfig.scale.height * 0.07, "multiple").setScale(0.8);
        const doubleAdd = this.scene.add.sprite(gameConfig.scale.width * 0.7, gameConfig.scale.height * 0.16, "slots9_0").setScale(0.4);
        const doubleAddAmountBg = this.scene.add.sprite(gameConfig.scale.width * 0.749, gameConfig.scale.height * 0.16, "AmountBg").setScale(0.7)
        this.doubleDollarAmount = new TextLabel(this.scene, gameConfig.scale.width * 0.749, gameConfig.scale.height * 0.16, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 100).toString(), 27);
        const addSprite = this.scene.add.sprite(gameConfig.scale.width * 0.82, gameConfig.scale.height * 0.16, "slots10_0").setScale(0.4);
        const addSpirteAmountBg =  this.scene.add.sprite(gameConfig.scale.width * 0.86, gameConfig.scale.height * 0.16, "AmountBg").setScale(0.7)
        this.addDollar = new TextLabel(this.scene, gameConfig.scale.width * 0.86, gameConfig.scale.height * 0.16, new Number(initData.gameData.Bets[currentGameData.currentBetIndex] * 10).toString(), 27)
        const reSpin = this.scene.add.sprite(gameConfig.scale.width * 0.7, gameConfig.scale.height * 0.23, "slots11_0").setScale(0.4);
        const getImage = this.scene.add.sprite(gameConfig.scale.width * 0.76, gameConfig.scale.height * 0.23, "getSprite").setScale(1.3)
        const onToFive = this.scene.add.sprite(gameConfig.scale.width * 0.82, gameConfig.scale.height * 0.23, "oneToFive").setScale(0.7)
        const reSpinText = this.scene.add.sprite(gameConfig.scale.width * 0.88, gameConfig.scale.height * 0.23, "respinSprite").setScale(1.3)
        this.add([tenx, fivex, Twox, multipleSprite, doubleAddAmountBg, this.doubleDollarAmount, doubleAdd, addSpirteAmountBg, addSprite, reSpin, getImage, onToFive, reSpinText])
    }

    /**
     * @method lineBtnInit Shows the number of lines for example 1 to 20
     */
    lineBtnInit() { 
        const container = this.scene.add.container(gameConfig.scale.width * 0.26, gameConfig.scale.height * 0.88);
        // const lineText = new TextLabel(this.scene, -20, -70, "LINES", 30, "#3C2625");
        // container.add(lineText);
        this.pBtn = this.createButton('betButton', 80, 3, () => {
            this.betOption();
            this.bnuttonMusic("buttonpressed");
            this.pBtn.setTexture('betButtonH');
            this.pBtn.disableInteractive();
            this.scene.time.delayedCall(200, () => {
                this.pBtn.setTexture('betButton');
                this.pBtn.setInteractive({ useHandCursor: true, pixelPerfect: true });
            });
        }).setDepth(0);
        container.add(this.pBtn);
       let initialBet = initData.gameData.Bets[currentGameData.currentBetIndex] * 3
        this.CurrentLineText = this.scene.add.text( gameConfig.scale.width * 0.3, gameConfig.scale.height * 0.95, initialBet.toString(), {fontFamily:"Arial", fontSize: "35px", color:"#ffffff"}).setOrigin(0.5);
        //Line Count
        this.add(this.CurrentLineText).setDepth(1)
    }

    /**
     * @method winBtnInit add sprite and text
     * @description add the sprite/Placeholder and text for winning amount 
     */
    winBtnInit() {
        const winPanel = this.scene.add.text(gameConfig.scale.width/2, gameConfig.scale.height * 0.88, 'Win', {fontFamily: "Arial", color: "#ffffff", fontSize: "35px"});
        winPanel.setOrigin(0.5);
        const currentWining: any = ResultData.playerData.currentWining;
       
        this.currentWiningText = this.scene.add.text(gameConfig.scale.width/2, gameConfig.scale.height * 0.95, currentWining.toFixed(2), {fontFamily:"Arial", color: "#ffffff", fontSize: "35px"} ).setOrigin(0.5);
        this.add(this.currentWiningText)
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
        const balancePanel = this.scene.add.text(gameConfig.scale.width * 0.2, gameConfig.scale.height * 0.88, "Balance", {fontFamily: "Arial", color:"#ffffff", fontSize:"35px"});
        balancePanel.setOrigin(0.5);
        currentGameData.currentBalance = initData.playerData.Balance;
        this.currentBalanceText = this.scene.add.text(gameConfig.scale.width * 0.2, gameConfig.scale.height * 0.95, new Number(currentGameData.currentBalance).toFixed(2), {fontFamily: "Arial", fontSize: "35px", color:"#ffffff",}).setOrigin(0.5);
        this.add(this.currentBalanceText);
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
                    Globals.Socket?.sendMessage("SPIN", { currentBet: currentGameData.currentBetIndex, currentLines: 14, spins: 1 });
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

    }

    turboButtonClick(){
        this.turboButton = this.scene.add.sprite(gameConfig.scale.width * 0.65, gameConfig.scale.height * 0.92, "turboBtn").setOrigin(0.5).setInteractive().setScale(0.8)
        this.turboButton.on('pointerdown', () => {
            this.turboStatus = !this.turboStatus;
            currentGameData.turboMode = this.turboStatus;
            if(this.turboStatus){
                this.turboButton.setTexture("turboBtnHover")
            }else{
                this.turboButton.setTexture("turboBtn")
            }            
        })
        this.add(this.turboButton)
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
            gameConfig.scale.width * 0.75,
            gameConfig.scale.height * 0.92,
            () => {
                this.normalButtonSound = this.scene.sound.add("buttonpressed", {
                    loop: false,
                    volume: 0.8
                })
                this.normalButtonSound.play()
                this.scene.tweens.add({
                    targets: this.autoBetBtn,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    duration: 100,
                    onComplete: () =>{
                        this.isAutoSpinning = !this.isAutoSpinning; // Toggle auto-spin state
                        if (this.isAutoSpinning && currentGameData.currentBalance > 0) {
                            Globals.Socket?.sendMessage("SPIN", {
                                currentBet: currentGameData.currentBetIndex,
                                currentLines : 20
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
                            scaleX: 0.8,
                            scaleY: 0.8,
                            duration: 100,
                            onComplete: () => {
                                // this.spinBtn.setTexture('spinBtn');
                            }
                        });
                    }
                })
            }
        ).setDepth(0);
    }

    /**
     * @method startSpinRecursion
     * @param spinCallBack 
     */
    startSpinRecursion(spinCallBack: () => void) {
        if (this.isAutoSpinning && currentGameData.currentBalance > 0) {
            // this.startFireAnimation();
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

    betOption() {
        if (this.betContainer) {
            this.betContainer.destroy();
            this.betContainer = null;
            return;
        }
        this.betContainer = this.scene.add.container(0, 0).setDepth(15);
        const closeOnOutsideClick = this.scene.add.rectangle(0,  0, gameConfig.scale.width,  gameConfig.scale.height, 0x000000, 0.01).setOrigin(0).setInteractive();
        closeOnOutsideClick.setDepth(14); // Set depth lower than bet container
        closeOnOutsideClick.on('pointerdown', () => {
            if (this.betContainer) {
                this.betContainer.destroy();
                this.betContainer = null;
            }
            closeOnOutsideClick.destroy();
        });
        
        this.betContainer.add(closeOnOutsideClick);
            const popupBg = this.scene.add.image(gameConfig.scale.width * 0.3, gameConfig.scale.height * 0.6,'betContainer').setOrigin(0.5);
            popupBg.setDisplaySize(400, 500);
        
            const bets = [...initData.gameData.Bets].reverse()
            const rows = 5;
            const cols = 3;
            const buttonWidth = 120;
            const buttonHeight = 90;
            const padding = 7;
        
            // Calculate starting position relative to popup background
            let startX = popupBg.x - ((cols * (buttonWidth + padding)) / 2) + (buttonWidth / 2);
            let startY = popupBg.y - ((rows * (buttonHeight + padding)) / 2) + (buttonHeight / 2);    
            this.betContainer.add([ popupBg]);
        
            // Create bet buttons
            for (let i = 0; i < bets.length; i++) {
                const row = Math.floor(i / cols);
                const col = i % cols;
                const x = startX + (col * (buttonWidth + padding));
                const y = startY + (row * (buttonHeight + padding));
        
                // Create button background
                const betButton = this.scene.add.image(x, y, 'betContainerButon')
                    .setDisplaySize(buttonWidth, buttonHeight)
                    .setInteractive({ useHandCursor: true });
        
                // Add hover effect
                betButton.on('pointerover', () => {
                    betButton.setTint(0x999999);
                });
                
                betButton.on('pointerout', () => {
                    betButton.clearTint();
                });
        
                let betNumber = (bets[i] * 3).toFixed(2)
                // Create bet text
                const betText = this.scene.add.text(x, y, betNumber.toString(), {fontSize: '24px', fontFamily: 'Arial', color: '#ffffff',
                    align: 'center'
                }).setOrigin(0.5);
        
                betButton.on('pointerdown', () => {
                    this.bnuttonMusic("buttonpressed");
                    currentGameData.currentBetIndex = i;
                    this.CurrentLineText.setText(betNumber);
                    this.updateAllAmounts(Number(bets[i]));
                    // this.updateAllAmounts(bets[i]);
                    if (this.betContainer) {
                        this.betContainer.destroy();
                        this.betContainer = null;
                    }
                });
        
                this.betContainer.add([betButton, betText]);
            }
            this.add(this.betContainer);
    }
    private updateAllAmounts(betAmount: number) {
        this.trippleSevenAmount.updateLabelText((betAmount * 500).toString());
        this.doubleSevenAmount.updateLabelText((betAmount * 100).toString());
        this.singleSevenAmount.updateLabelText((betAmount * 50).toString());
        this.doubleDollarAmount.updateLabelText((betAmount * 100).toString());
        this.mixedSeven.updateLabelText((betAmount * 10).toString());
        this.mixedBar.updateLabelText((betAmount * 4).toString());
        this.addDollar.updateLabelText((betAmount * 10).toString());
        this.anyText.updateLabelText((betAmount * 2).toString());
        this.barBarAmount.updateLabelText((betAmount * 30).toString());
        this.barAmount.updateLabelText((betAmount * 20).toString());
    }

    bnuttonMusic(key: string){
        this.SoundManager.playSound(key)
    }

    handleMatchingAnimation(symbolId: string, reelIndex: number) {
        // Here you can create special effects or animations
        // based on the matching symbols
        
        // Example: Create special effects for matching symbols
        // this.createMatchingSymbolEffect(symbolId, reelIndex);
    }

    update(dt: number){
        
    }
}
