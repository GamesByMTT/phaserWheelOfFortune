import Phaser from "phaser";
import { currentGameData, Globals, initData, TextStyle } from "./Globals";
import { gameConfig } from "./appconfig";
import { UiContainer } from "./UiContainer";
import SoundManager from "./SoundManager";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';

const Random = Phaser.Math.Between;

export class UiPopups extends Phaser.GameObjects.Container {
    SoundManager: SoundManager;
    
    UiContainer: UiContainer
    menuBtn!: InteractiveBtn;
    settingBtn!: InteractiveBtn;
    rulesBtn!: InteractiveBtn;
    infoBtn!: InteractiveBtn;
    exitBtn!: InteractiveBtn
    yesBtn!: InteractiveBtn;
    noBtn!: InteractiveBtn
    isOpen: boolean = false;
    isExitOpen: boolean = false;
    settingClose!: InteractiveBtn;
    voulmneAdjust!: InteractiveBtn;
    onButton!: InteractiveBtn;
    offButton!:InteractiveBtn;
    toggleBar!: InteractiveBtn;
    soundEnabled: boolean = true; // Track sound state
    musicEnabled: boolean = true; // Track sound state
    normalButtonSound!: Phaser.Sound.BaseSound
    private volumeOnTexture!: Phaser.Textures.Texture;
    private volumeOffTexture!: Phaser.Textures.Texture;
    constructor(scene: Phaser.Scene, uiContainer: UiContainer, soundManager: SoundManager) {
        super(scene);
        this.volumeOnTexture = this.scene.textures.get('volumneSpeaker');
        this.volumeOffTexture = this.scene.textures.get('volumneSpeakerH');
        this.setPosition(0, 0);
        // this.ruleBtnInit();
        // this.settingBtnInit();
        this.infoBtnInit();
        this.updateVolumeButton();
        this.menuBtnInit();
        this.exitButton();
        this.UiContainer = uiContainer
        this.SoundManager = soundManager
        scene.add.existing(this);
    }

    menuBtnInit() {
        const menuBtnTextures = [
            this.scene.textures.get('MenuBtn'),
            this.scene.textures.get('MenuBtnH')
        ];
        this.menuBtn = new InteractiveBtn(this.scene, menuBtnTextures, () => {
            this.buttonMusic("buttonpressed")
            this.openPopUp();
        }, 0, true);
        this.menuBtn.setPosition( gameConfig.scale.width * 0.065, gameConfig.scale.height * 0.9 ).setScale(0.9);
        this.add(this.menuBtn);
    }
    exitButton(){
        const exitButtonSprites = [
            this.scene.textures.get('exitButton'),
            this.scene.textures.get('exitButtonPressed')
        ];
        this.exitBtn = new InteractiveBtn(this.scene, exitButtonSprites, ()=>{
                this.buttonMusic("buttonpressed")
                this.openLogoutPopup();
        }, 0, true, );
        this.exitBtn.setPosition(90, 40).setScale(0.5).setOrigin(0.5)
        this.add(this.exitBtn)
    }

    private updateVolumeButton() {
        // Remove the old volume button if it exists
        if (this.voulmneAdjust) {
            this.remove(this.voulmneAdjust, true); // Destroy the old button
        }
        const textures = currentGameData.soundMode ? 
            [this.volumeOnTexture, this.volumeOffTexture] : 
            [this.volumeOffTexture, this.volumeOnTexture];
        this.voulmneAdjust = new InteractiveBtn(this.scene, textures, () => {
            this.buttonMusic("buttonpressed");
            this.openPopUp();
            this.adjustSoundVolume();
            this.updateVolumeButton(); // Update the button after toggling sound
        }, 2, false);

        this.voulmneAdjust.setPosition(gameConfig.scale.width/ 2 - this.voulmneAdjust.width * 5, this.voulmneAdjust.height * 0.7).setDepth(5).setScale(0.8);
        this.add(this.voulmneAdjust);
    }
    
    infoBtnInit() {
        const infoBtnSprites = [
            this.scene.textures.get('infoBtn'),
            this.scene.textures.get('infoBtnH'),
        ];
        this.infoBtn = new InteractiveBtn(this.scene, infoBtnSprites, () => {
            // info button 
            this.buttonMusic("buttonpressed")
            this.openPopUp();
            this.openInfoPopup();
        }, 2, false); // Adjusted the position index
        this.infoBtn.setPosition(gameConfig.scale.width/ 2 - this.infoBtn.width * 5, this.infoBtn.height * 0.7).setScale(0.8);
        this.add(this.infoBtn);
    }

    openPopUp() {
        // Toggle the isOpen boolean
        this.isOpen = !this.isOpen;
        this.menuBtn.setInteractive(false);
        if (this.isOpen) {
            // this.tweenToPosition(this.rulesBtn, 3);
            this.tweenToPosition(this.infoBtn, 2);
            this.tweenToPosition(this.voulmneAdjust, 1);
        } else {
            // this.tweenBack(this.rulesBtn);
            this.tweenBack(this.infoBtn);
            this.tweenBack(this.voulmneAdjust);
        }
    }

    tweenToPosition(button: InteractiveBtn, index: number) {
        const targetY =  this.menuBtn.y - (index * (this.menuBtn.height + 25))
       // Calculate the Y position with spacing
       button.setPosition(this.menuBtn.x, this.menuBtn.y)
        button.setVisible(true);
        this.scene.tweens.add({
            targets: button,
            y: targetY,
            duration: 300,
            ease: 'Elastic',
            easeParams: [1, 0.9],
            onComplete: () => {
                button.setInteractive(true);
                this.menuBtn.setInteractive(true);
            }
        });
    }
    tweenBack(button: InteractiveBtn) {
        button.setInteractive(false);
        this.scene.tweens.add({
            targets: button,
            y: button,
            duration: 100,
            ease: 'Elastic',
            easeParams: [1, 0.9],
            onComplete: () => {
                button.setVisible(false);
                this.menuBtn.setInteractive(true);
            }
        });
    }

    // Function to adjust sound volume
    adjustSoundVolume() {
        currentGameData.soundMode = !currentGameData.soundMode; // Toggle sound mode
        this.SoundManager.setSoundEnabled(currentGameData.soundMode);
    }
    /**
     * 
     */
    openSettingPopup() {
        const settingblurGraphic = this.scene.add.graphics().setDepth(1); // Set depth lower than popup elements
        settingblurGraphic.fillStyle(0x2a1820, 0.9); // Black with 50% opacity
        settingblurGraphic.fillRect(0, 0, this.scene.scale.width, this.scene.scale.height); // Cover entire screen
        settingblurGraphic.setInteractive()
        // const inputOverlay = this.scene.add.rectangle(0, 0, this.scene.cameras.main.width, this.scene.cameras.main.height, 0x920000, 0.95)
        const infopopupContainer = this.scene.add.container(
            this.scene.scale.width / 2,
            this.scene.scale.height / 2
        ).setDepth(1).setInteractive();
        settingblurGraphic.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            pointer.event.stopPropagation();
        });
        
        const popupBg = this.scene.add.image(0, 0, 'settingPopup').setDepth(9);
        const settingText = this.scene.add.image(0, -350, "settingText").setDepth(9).setOrigin(0.5)
        const soundsImage = this.scene.add.image(-200, -120, 'soundImage').setDepth(10);
        const musicImage = this.scene.add.image(-200, 50, 'musicImage').setDepth(10);

        const toggleBarSprite = [
            this.scene.textures.get('toggleBar'),
            this.scene.textures.get('toggleBar')
        ];
        if(this.soundEnabled){
            
        }
        const initialTexture = currentGameData.soundMode? "onButton" : "offButton";
        let onOff: any
        if(!currentGameData.soundMode){
            onOff = this.scene.add.image(160, -120, initialTexture);
        }else{
            onOff = this.scene.add.image(240, -120, initialTexture);
        }
        onOff.setInteractive()
        onOff.on('pointerdown', () => {
            this.toggleSound(onOff);
        })

        const toggleMusicBar = this.scene.add.image(200, 50, "toggleBar")   
        const musicinitialTexture = currentGameData.musicMode ? "onButton" : "offButton";

        let offMusic: any
        if(!currentGameData.musicMode){
            offMusic = this.scene.add.image(160, 50, musicinitialTexture);
        }else{
            offMusic = this.scene.add.image(240, 50, musicinitialTexture);
        }
        offMusic.setInteractive();
        offMusic.on('pointerdown', () => {
            this.toggleMusic(offMusic)
        })

        this.toggleBar = new InteractiveBtn(this.scene, toggleBarSprite, () => {
            // this.toggleSound();
        }, 0, true).setPosition(200, -120);

        const exitButtonSprites = [
            this.scene.textures.get('exitButton'),
            this.scene.textures.get('exitButtonPressed')
        ];
        this.settingClose = new InteractiveBtn(this.scene, exitButtonSprites, () => {
            infopopupContainer.destroy();
            settingblurGraphic.destroy();
            this.buttonMusic("buttonpressed")
        }, 0, true);
        this.settingClose.setScale(0.2)
        this.settingClose.setPosition(320, -250);

        popupBg.setOrigin(0.5);
        popupBg.setAlpha(1); // Set background transparency

        infopopupContainer.add([popupBg, this.settingClose, soundsImage, musicImage, this.toggleBar, onOff, toggleMusicBar, offMusic, settingText]);
    }

    toggleSound(onOff: any) {
        // Toggle sound state
        currentGameData.soundMode = !currentGameData.soundMode
        this.soundEnabled = !this.soundEnabled;
        if (this.soundEnabled) {
            onOff.setTexture('onButton');
            onOff.setPosition(240, -120); // Move position for 'On' state
            this.SoundManager.setSoundEnabled(this.soundEnabled)
        } else {
            onOff.setTexture('offButton');
            onOff.setPosition(160, -120); // Move position for 'Off' state
            this.SoundManager.setSoundEnabled(this.soundEnabled)
        }
    }

    toggleMusic(offMusic: any) {
        // Toggle sound state
        currentGameData.musicMode = !currentGameData.musicMode
        this.musicEnabled = !this.musicEnabled;
        if (this.musicEnabled) {
            offMusic.setTexture('onButton');
            offMusic.setPosition(240, 50); // Move position for 'On' state
            this.SoundManager.setMusicEnabled(this.musicEnabled)
        } else {
            offMusic.setTexture('offButton');
            this.SoundManager.setMusicEnabled(this.musicEnabled);
            offMusic.setPosition(160, 50); // Move position for 'Off' state;
        }
    }

    /**
     * @method openinfo
     */
        openInfoPopup() { 
            const inputOverlay = this.scene.add.rectangle(0, 0, this.scene.cameras.main.width, this.scene.cameras.main.height, 0x000000, 0.7)
            .setOrigin(0, 0)
            .setDepth(5)
            .setInteractive();

        inputOverlay.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            pointer.event.stopPropagation();
        });
        const popupContainer = this.scene.add.container(0, 0).setDepth(11); 
        const popupBackground = this.scene.add.sprite( gameConfig.scale.width / 2, gameConfig.scale.height / 2, "InfoPopupBg"); 
        const contentHeading = this.scene.add.image( gameConfig.scale.width / 2, gameConfig.scale.height * 0.19, 'payRules' ).setScale(0.6);
        popupContainer.add([popupBackground, contentHeading]); 
        const maskShape = this.scene.make.graphics().fillRect( 
                0, // Adjust X position to center 
                gameConfig.scale.height/2 - 300, // Adjust Y position 
                gameConfig.scale.width - 100, // Full width minus some padding 
                600 // Desired height of the scrollable area 
            ); 
            const mask = maskShape.createGeometryMask(); 
            // 6. Add the scrollable container to the popup container 
            const scrollContainer = this.scene.add.container(
                0, // Adjust X position to align with the mask
                gameConfig.scale.height / 2 - 300 // Adjust Y position
            );
            scrollContainer.setMask(mask); // Apply the mask to the scroll container 
            popupContainer.add(scrollContainer); 
            
            // 7. Add the content that will be scrolled 
            const contentHeight = 3400; // Example content height, adjust as needed 
            // const content = this.scene.add.image( gameConfig.scale.width / 2, 100, 'minorSymbolsHeading' ).setOrigin(0.5).setDepth(2); 
            const content = this.scene.add.text( gameConfig.scale.width / 2, 20, 'SPECIAL REEL', { fontSize: '50px', color: '#ff8001', align: "center", fontFamily: "Arial", fontStyle: "Bold", } ).setOrigin(0.5)
            const line1 = this.scene.add.text(gameConfig.scale.width * 0.25, 100, "The rightmost reel is a special reel, when the reels to its left makes a winning combination, you get extra bonuses based on the symbol of the special reel!",  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 1000, useAdvancedWrap: true }, } )
            const firstSymbol = this.scene.add.image(gameConfig.scale.width * 0.3, 330, "infoFirstIcon" ).setOrigin(0.5).setScale(0.8)
            const paragraphText = this.scene.add.text(gameConfig.scale.width * 0.38, 280, `All payout this round are multiplied by the corresponding multiplier`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: 'Arial',  wordWrap: { width: 770, useAdvancedWrap: true }})
            const secondSymbol = this.scene.add.image(gameConfig.scale.width * 0.3, 520, "secondIcon").setOrigin(0.5).setScale(0.8)
            const secondSymbolText = this.scene.add.text(gameConfig.scale.width * 0.38, 480,  `Win extra payout according to the player's bet amount`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: 'Arial',  wordWrap: { width: 770, useAdvancedWrap: true }})
            const thirdSymbol = this.scene.add.image(gameConfig.scale.width * 0.3, 710, "slots11_0").setOrigin(0.5).setScale(0.8)
            const thirdSymbolText = this.scene.add.text(gameConfig.scale.width * 0.38, 670, `Gain 3 to 5 respins randomly on the winning combination.`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: 'Arial',  wordWrap: { width: 770, useAdvancedWrap: true }})
            const payTableHeading = this.scene.add.text(gameConfig.scale.width /2, 850, 'PAY TABLE', { fontSize: '50px', color: '#ff8001', align: "center", fontFamily: "Arial", fontStyle: "Bold", } ).setOrigin(0.5)
            const symbolOne = this.scene.add.image(gameConfig.scale.width/2.2, 1040, "slots1_0").setScale(0.4)
            const symbolOneText = this.scene.add.text(gameConfig.scale.width/2, 1010, `3X`, { fontSize: '40px', color: '#ff8001', align: "center", fontFamily: "Arial", })
            const symbolOneTextAmount = this.scene.add.text(gameConfig.scale.width/1.88, 1010, ` 500`, { fontSize: '40px', color: '#ffffff', align: "center", fontFamily: "Arial" })
            const symboleTwo = this.scene.add.image(gameConfig.scale.width * 0.33, 1150, 'slots2_0').setScale(0.4)
            const symbolTwoText = this.scene.add.text(gameConfig.scale.width * 0.36, 1130, `3X`, {fontSize: "40px", color: '#ff8001', fontFamily:"Arial",})
            const symbolTwoTextAmount = this.scene.add.text(gameConfig.scale.width * 0.4, 1130, `100`, {fontSize: "40px", color: '#ffffff', fontFamily:"Arial"})
            const symbolThree = this.scene.add.image(gameConfig.scale.width * 0.62, 1150, "slots3_0").setScale(0.4)
            const symbolThreeText = this.scene.add.text(gameConfig.scale.width * 0.65, 1130, `3X`, {fontSize: "40px", color: '#ff8001', fontFamily:"Arial", })
            const symbolThreeTextAmount = this.scene.add.text(gameConfig.scale.width * 0.69, 1130, `50`, {fontSize: "40px", color: '#ffffff', fontFamily:"Arial", })
            const symbolFour = this.scene.add.image(gameConfig.scale.width * 0.33, 1300, "slots4_0").setScale(0.4)
            const symbolFourText =  this.scene.add.text(gameConfig.scale.width * 0.36, 1280, `3X`, {fontSize: "40px", color: '#ff8001', fontFamily:"Arial", })
            const symbolFourTextAmount = this.scene.add.text(gameConfig.scale.width * 0.4, 1280, `30`, {fontSize: "40px", color: '#ffffff', fontFamily:"Arial", })
            const symbolFive = this.scene.add.image(gameConfig.scale.width * 0.62, 1300, "slots5_0").setScale(0.4)
            const symbolFiveText = this.scene.add.text(gameConfig.scale.width * 0.655, 1280, `3X`, {fontSize: "40px", color: '#ff8001', fontFamily:"Arial", })
            const symbolFiveTextAmount = this.scene.add.text(gameConfig.scale.width * 0.695, 1280, `20`, {fontSize: "40px", color: '#ffffff', fontFamily:"Arial", })
            const symbolSix = this.scene.add.image(gameConfig.scale.width/2, 1450, "differentSeven").setOrigin(0.5)
            const symbolSixText = this.scene.add.text(gameConfig.scale.width/2.2, 1540, `Any`, {fontSize: "40px", color: '#ffffff',  fontFamily: "Arial", align:"Center"}).setOrigin(0.5);
            const threex = this.scene.add.text(gameConfig.scale.width * 0.5, 1540, `3X`, {fontSize: "40px", color: '#ff8001', fontFamily:"Arial",  align:"Center"}).setOrigin(0.5);
            const fiveHundredText = this.scene.add.text(gameConfig.scale.width * 0.54, 1540, `500`, {fontSize: "40px", color: '#ffffff', fontFamily:"Arial",  align:"Center"}).setOrigin(0.5);
            const mixedBar = this.scene.add.image(gameConfig.scale.width/2, 1690, "differentBar").setOrigin(0.5)
            const symbolSevenText = this.scene.add.text(gameConfig.scale.width/2.2, 1790, `Any`, {fontSize: "40px", color: '#ffffff',  fontFamily: "Arial", align:"Center"}).setOrigin(0.5);
            const threexsecond = this.scene.add.text(gameConfig.scale.width * 0.5, 1790, `3X`, {fontSize: "40px", color: '#ff8001', fontFamily:"Arial",  align:"Center"}).setOrigin(0.5);
            const thirtyText = this.scene.add.text(gameConfig.scale.width * 0.54, 1790, `30`, {fontSize: "40px", color: '#ffffff', fontFamily:"Arial",  align:"Center"}).setOrigin(0.5);
            const secondMixedBar = this.scene.add.image(gameConfig.scale.width * 0.42, 1900, "differentBar").setOrigin(0.5);
            const secondMixedSevern = this.scene.add.image(gameConfig.scale.width * 0.56, 1900, "differentSeven").setOrigin(0.5);
            const mixedAnyText = this.scene.add.text(gameConfig.scale.width/2.2, 2000, `Any`, {fontSize: "40px", color: '#ffffff',  fontFamily: "Arial", align:"Center"}).setOrigin(0.5);
            const mixedThreeX = this.scene.add.text(gameConfig.scale.width * 0.5, 2000, `3X`, {fontSize: "40px", color: '#ff8001', fontFamily:"Arial",  align:"Center"}).setOrigin(0.5);
            const mixed500 = this.scene.add.text(gameConfig.scale.width * 0.54, 2000, `500`, {fontSize: "40px", color: '#ffffff', fontFamily:"Arial",  align:"Center"}).setOrigin(0.5);
            const line2 = this.scene.add.text(gameConfig.scale.width * 0.25, 2050, "1. According to the combo settings, you only win a prize if three identical symbols appera from the left to right.",  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 1000, useAdvancedWrap: true }, } )
            const payLineImage = this.scene.add.image(gameConfig.scale.width/2, 2270, "payLineImage").setOrigin(0.5).setScale(0.8)
            const line3 = this.scene.add.text(gameConfig.scale.width * 0.25, 2400, "2. Winning = Pay X Bet/3",  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 1000, useAdvancedWrap: true }, } )
            const line4 = this.scene.add.text(gameConfig.scale.width * 0.25, 2450, `3. When"Special Reel Combination"appears, the payout this round gains an extra bonus based on the corresponding symbol!`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 1000, useAdvancedWrap: true }, } )
            const line5 = this.scene.add.text(gameConfig.scale.width * 0.25, 2600, `4. Malfunction voids all pays and plays. If any malfunction occurs during the feature game, the system will automatically complete the game and ensure the player receives their winnings. Where an interruption occurs after the operator receives notification of the customer's gamble and where the customer can have no further influence on the outcome of the event or gamble the results of gamble should stand.`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 1000, useAdvancedWrap: true }, } )
            const spinIcon = this.scene.add.image(gameConfig.scale.width * 0.28, 3000, "spinBtn").setOrigin(0.5).setScale(0.4)
            const spinText = this.scene.add.text(gameConfig.scale.width * 0.31, 2975, `Spin: Tap to start spinning based on the current bet.`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 1000, useAdvancedWrap: true }, } )
            const autospinIcon = this.scene.add.image(gameConfig.scale.width * 0.28, 3130, "autoSpin").setOrigin(0.5).setScale(0.8)
            const autospinText = this.scene.add.text(gameConfig.scale.width * 0.31, 3100, `Auto Spin: Tap to start the auto play, and click again to stop the auto spin`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 900, useAdvancedWrap: true }, } )
            const betIcon = this.scene.add.image(gameConfig.scale.width * 0.28, 3260, "betButton").setOrigin(0.5)
            const betText = this.scene.add.text(gameConfig.scale.width * 0.31, 3235, `Bet Select: Tap to adjust the bet.`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 900, useAdvancedWrap: true }, } )
            const turboIcon =  this.scene.add.image(gameConfig.scale.width * 0.28, 3390, "turboBtn").setOrigin(0.5).setScale(0.7)
            const turboText = this.scene.add.text(gameConfig.scale.width * 0.31, 3350, `Turbo Spin: Tap to enable or disable the Turbo Spin to adjust the speed of reel spins on the game`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 900, useAdvancedWrap: true }, } )
            const settingIcon =  this.scene.add.image(gameConfig.scale.width * 0.28, 3530, "MenuBtn").setOrigin(0.5).setScale(0.9)
            const settingText = this.scene.add.text(gameConfig.scale.width * 0.31, 3490, `Option: Tap to show the game instruction and sound button`,  { fontSize: '35px', fontStyle: "Bold", color: '#ffffff', align: "left", fontFamily: "Arial", wordWrap: { width: 900, useAdvancedWrap: true }, } )
            scrollContainer.add([content, line1, firstSymbol, paragraphText, secondSymbol, secondSymbolText, thirdSymbol, thirdSymbolText, payTableHeading, symbolOne, symbolOneText, symbolOneTextAmount, symboleTwo, symbolTwoText, symbolTwoTextAmount, symbolThree, symbolThreeText, symbolThreeTextAmount, symbolFour, symbolFourText, symbolFourTextAmount, symbolFive, symbolFiveText, symbolFiveTextAmount,
                symbolSix, symbolSixText, threex, fiveHundredText, mixedBar, symbolSevenText, threexsecond, thirtyText, secondMixedBar, secondMixedSevern, mixedAnyText, mixedThreeX, mixed500, line2, payLineImage, line3, line4, line5
                , spinIcon, spinText, autospinIcon, autospinText, betIcon, betText, turboIcon, turboText, settingIcon, settingText
            ]); 
            // 8. Scrollbar background 
            const scrollbarBg = this.scene.add.sprite( gameConfig.scale.width/1.28, // Positioned on the right side 
                gameConfig.scale.height / 1.9, 'scrollerViewBg' ).setOrigin(0.5).setDisplaySize(15, 600); // Adjust height as needed 
            popupContainer.add(scrollbarBg); 
            // 9. Roller image for the scrollbar 
            const roller = this.scene.add.image( gameConfig.scale.width/1.28, gameConfig.scale.height / 2 - 150, 'scrollerView' ).setOrigin(0.5).setInteractive({ draggable: true }); 
            popupContainer.add(roller); 

            const closeButton = this.scene.add.sprite(gameConfig.scale.width * 0.235, gameConfig.scale.height / 2 - 335, 'exitButton').setInteractive(); // Adjust y-position as needed
            closeButton.setScale(0.4)    
            closeButton.on('pointerdown', () => {
                    inputOverlay.destroy();
                    scrollContainer.destroy();  
                    popupContainer.destroy(); // Now destroys everything correctly
                });
                popupContainer.add(closeButton); 
                        // 10. Add drag event listener to the roller 
            this.scene.input.setDraggable(roller); 
            roller.on('drag', (pointer: any, dragX: number, dragY: number) => {
                // Keep the roller within the scrollbar bounds
                const minY = scrollbarBg.getTopCenter().y + roller.height / 2;
                const maxY = scrollbarBg.getBottomCenter().y - roller.height / 2;
                // Clamp roller position
                dragY = Phaser.Math.Clamp(dragY, minY, maxY);
                roller.y = dragY;
                // Calculate the scroll percentage (0 to 1)
                const scrollPercent = (dragY - minY) / (maxY - minY);
                // Map the scroll percentage to the content's Y position range
                const contentMaxY = 300; // The top position of content (relative to mask)
                const contentMinY = -(contentHeight - 600); // The bottom position of content relative to mask
                // Update scroll container's Y position based on scroll percentage
                scrollContainer.y = Phaser.Math.Interpolation.Linear([contentMaxY, contentMinY], scrollPercent);
            });

            let startY = 0;
            let currentY = 0;
            let isDragging = false;
        
            // Make the scroll container interactive
            scrollContainer.setInteractive(new Phaser.Geom.Rectangle(
                0,
                0,
                gameConfig.scale.width - 100, // Width of the scrollable area
                2900 // Height of the scrollable area
            ), Phaser.Geom.Rectangle.Contains);
        
            // Touch start
            scrollContainer.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
                isDragging = true;
                startY = pointer.y;
                currentY = scrollContainer.y;
            });
        
            // Touch move
            this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
                if (!isDragging) return;
                const deltaY = pointer.y - startY;
                const newY = currentY + deltaY;
                // Calculate bounds
                const maxY = 300; // Top bound
                const minY = -(contentHeight - 600); // Bottom bound
        
                // Clamp the scroll position
                scrollContainer.y = Phaser.Math.Clamp(newY, minY, maxY);
        
                // Update roller position
                const scrollPercent = (maxY - scrollContainer.y) / (maxY - minY);
                const rollerMinY = scrollbarBg.getTopCenter().y + roller.height / 2;
                const rollerMaxY = scrollbarBg.getBottomCenter().y - roller.height / 2;
                roller.y = Phaser.Math.Linear(rollerMinY, rollerMaxY, scrollPercent);
            });
        
            // Touch end
            this.scene.input.on('pointerup', () => {
                isDragging = false;
            });
        
            // Mouse wheel support for desktop
            this.scene.input.on('wheel', (pointer: any, gameObjects: any, deltaX: number, deltaY: number) => {
                const currentY = scrollContainer.y;
                const newY = currentY - deltaY;
                
                // Calculate bounds
                const maxY = 300; // Top bound
                const minY = -(contentHeight - 600); // Bottom bound
        
                // Clamp the scroll position
                scrollContainer.y = Phaser.Math.Clamp(newY, minY, maxY);
        
                // Update roller position
                const scrollPercent = (maxY - scrollContainer.y) / (maxY - minY);
                const rollerMinY = scrollbarBg.getTopCenter().y + roller.height / 2;
                const rollerMaxY = scrollbarBg.getBottomCenter().y - roller.height / 2;
                roller.y = Phaser.Math.Linear(rollerMinY, rollerMaxY, scrollPercent);
            });
        
            // Prevent default touch behavior
            // this.scene.input.on('gameobjectdown', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {
            //     pointer.event.preventDefault();
            // });
        
            // Optional: Add momentum scrolling
            let velocity = 0;
            let lastY = 0;
            let lastTime = 0;
        
            this.scene.time.addEvent({
                delay: 16,
                callback: () => {
                    if (!isDragging && Math.abs(velocity) > 0.1) {
                        const now = Date.now();
                        const deltaTime = now - lastTime;
                        lastTime = now;
        
                        const maxY = 300;
                        const minY = -(contentHeight - 600);
                        let newY = scrollContainer.y + velocity * deltaTime;
                        newY = Phaser.Math.Clamp(newY, minY, maxY);
                        
                        scrollContainer.y = newY;
                        velocity *= 0.95; // Apply friction
        
                        // Update roller position
                        const scrollPercent = (maxY - scrollContainer.y) / (maxY - minY);
                        const rollerMinY = scrollbarBg.getTopCenter().y + roller.height / 2;
                        const rollerMaxY = scrollbarBg.getBottomCenter().y - roller.height / 2;
                        roller.y = Phaser.Math.Linear(rollerMinY, rollerMaxY, scrollPercent);
                    }
                },
                loop: true
            });
        
            // Update velocity on pointer move
            this.scene.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
                // console.log("touc 5");
                if (isDragging) {
                    const now = Date.now();
                    const deltaTime = now - lastTime;
                    if (deltaTime > 0) {
                        velocity = (pointer.y - lastY) / deltaTime;
                    }
                    lastY = pointer.y;
                    lastTime = now;
                }
            });
        }

        parseText(text: string): { text: string, color: string }[] {
            const regex = /<color=(.*?)>(.*?)<\/color>/g;
            let result;
            let parts = [];
            let lastIndex = 0;
        
            while ((result = regex.exec(text)) !== null) {
                // Add the text before the color tag (default color if not colored text)
                if (lastIndex < result.index) {
                    parts.push({ text: text.substring(lastIndex, result.index), color: '#920000' }); // Default color
                }
        
                // Add the colored text
                parts.push({ text: result[2], color: result[1] });
        
                lastIndex = regex.lastIndex;
            }
        
            // Add any remaining text after the last color tag
            if (lastIndex < text.length) {
                parts.push({ text: text.substring(lastIndex), color: '#920000' }); // Default color
            }
        
            return parts;
        }

    buttonMusic(key: string){
        this.SoundManager.playSound(key)
    }

    /**
     * @method openLogoutPopup
     * @description creating an container for exitPopup 
     */
    openLogoutPopup() {
        // Create a semi-transparent background for the popup
        const blurGraphic = this.scene.add.graphics().setDepth(1); // Set depth lower than popup elements
        blurGraphic.fillStyle(0x000000, 0.5); // Black with 50% opacity
        blurGraphic.fillRect(0, 0, this.scene.scale.width, this.scene.scale.height); // Cover entire screen
        
        this.UiContainer.onSpin(true);
        // Create a container for the popup
        const popupContainer = this.scene.add.container(
            this.scene.scale.width / 2,
            this.scene.scale.height / 2
        ).setDepth(1); // Set depth higher than blurGraphic
    
        // Popup background image
        const popupBg = this.scene.add.image(0, 0, 'InfoPopupBg').setDepth(10);
        popupBg.setOrigin(0.5);
        popupBg.setDisplaySize(900, 580); // Set the size for your popup background
        popupBg.setAlpha(1); // Set background transparency
        this.exitBtn.disableInteractive();
        const quitHeading = this.scene.add.text(0, -260, "QUIT", {fontFamily:"Arial", fontSize:"35px", color:"#ffffff"}).setOrigin(0.5)
        // Add text to the popup
        const popupText = this.scene.add.text(0, -45, "Do you really want \n to quit?", {fontSize: "50px", fontFamily: "Arial", color: "#ffffff", align: "center"}).setOrigin(0.5);
        // Yes and No buttons
        const yesButtonSprite = [
            this.scene.textures.get("yesButton"),
            this.scene.textures.get("yesButtonHover")
        ];
        // Yes and No buttons
        const noButtonSprite = [
            this.scene.textures.get("noButton"),
            this.scene.textures.get("noButtonHover")
        ];
        const crossButton = new Phaser.GameObjects.Sprite(this.scene, -390, -258, "exitButton").setInteractive()
        crossButton.on('pointerdown', (pointerdown: Phaser.Input.Pointer)=>{
            this.UiContainer.onSpin(false);
            this.exitBtn.setInteractive()
            popupContainer.destroy();
            blurGraphic.destroy(); // Destroy blurGraphic when popup is close
        })
        crossButton.setScale(0.3)
        this.yesBtn = new InteractiveBtn(this.scene, yesButtonSprite, () => {
            this.UiContainer.onSpin(false);
            Globals.Socket?.socket.emit("EXIT", {});
            window.parent.postMessage("onExit", "*");   
            popupContainer.destroy();
            blurGraphic.destroy(); // Destroy blurGraphic when popup is closed
        }, 0, true);
    
        this.noBtn = new InteractiveBtn(this.scene, noButtonSprite, () => {
            
            this.UiContainer.onSpin(false);
            this.exitBtn.setInteractive()
            popupContainer.destroy();
        blurGraphic.destroy(); // Destroy blurGraphic when popup is closed
        }, 0, true);
       
        this.yesBtn.setPosition(-130, 200).setScale(0.8);
        this.noBtn.setPosition(130, 200).setScale(0.8);
        // Add all elements to popupContainer
        popupContainer.add([popupBg, quitHeading, popupText, this.yesBtn, this.noBtn, crossButton]);
        // Add popupContainer to the scene
        this.scene.add.existing(popupContainer);       
    }
    
    buttonInteraction(press: boolean){
        if(press){
            this.menuBtn.disableInteractive();
            this.settingBtn.disableInteractive()
            this.rulesBtn.disableInteractive();
        }
    }
}

class InteractiveBtn extends Phaser.GameObjects.Sprite {
    moveToPosition: number = -1;
    defaultTexture!: Phaser.Textures.Texture;
    hoverTexture!: Phaser.Textures.Texture

    constructor(scene: Phaser.Scene, textures: Phaser.Textures.Texture[], callback: () => void, endPos: number, visible: boolean) {
        super(scene, 0, 0, textures[0].key); // Use texture key
        this.defaultTexture = textures[0];
        this.hoverTexture = textures[1];        
        this.setOrigin(0.5);
        this.setInteractive();
        this.setVisible(visible);
        this.moveToPosition = endPos;
        this.on('pointerdown', () => {
            this.setTexture(this.hoverTexture.key)
            // this.setFrame(1);
            callback();
        });
        this.on('pointerup', () => {
            this.setTexture(this.defaultTexture.key)
        });
        this.on('pointerout', () => {
            this.setTexture(this.defaultTexture.key)
        });
        // Set up animations if necessary
        this.anims.create({
            key: 'hover',
            frames: this.anims.generateFrameNumbers(textures[1].key),
            frameRate: 10,
            repeat: -1
        });
    }
}