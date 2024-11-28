import Phaser, { Scene } from "phaser";
import { Globals, initData, ResultData } from "./Globals";
import { gameConfig } from "./appconfig";

export default class InfoScene extends Scene{
    pageviewContainer!: Phaser.GameObjects.Container;
    popupBackground!: Phaser.GameObjects.Sprite
    SceneBg!: Phaser.GameObjects.Sprite
    Symbol1!: Phaser.GameObjects.Sprite
    leftArrow!: Phaser.GameObjects.Sprite
    rightArrow!: Phaser.GameObjects.Sprite
    infoCross!: Phaser.GameObjects.Sprite
    currentPageIndex: number = 0;
    pages: Phaser.GameObjects.Container[] = [];
    constructor(){
        super({key: 'InfoScene'})
    }
    create(){
        const {width, height} =  this.cameras.main
        this.SceneBg = new Phaser.GameObjects.Sprite(this, width / 2, height / 2, 'Background')
        .setDisplaySize(width, height)
        .setDepth(11)
        .setInteractive();
        this.SceneBg.on('pointerdown', (pointer:Phaser.Input.Pointer)=>{
            pointer.event.stopPropagation();
        })
        this.pageviewContainer = this.add.container();
        this.popupBackground = new Phaser.GameObjects.Sprite(this, gameConfig.scale.width/2, gameConfig.scale.height/2, "settingBg")
        const inputOverlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0.7)
            .setOrigin(0, 0)
            .setDepth(16)
            .setInteractive();
    
        inputOverlay.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            pointer.event.stopPropagation();
        });
        this.pageviewContainer.add([inputOverlay, this.popupBackground])
        this.leftArrow = new Phaser.GameObjects.Sprite(this, gameConfig.scale.width * 0.125, gameConfig.scale.height * 0.5, "leftArrow").setInteractive().setScale(0.7);
        this.rightArrow = new Phaser.GameObjects.Sprite(this, gameConfig.scale.width * 0.875, gameConfig.scale.height * 0.5, "rightArrow").setInteractive().setScale(0.7);
        this.infoCross = new Phaser.GameObjects.Sprite(this, gameConfig.scale.width * 0.82, gameConfig.scale.height * 0.23, "exitButton").setInteractive().setScale(0.5)
        this.infoCross.on('pointerdown', ()=>{
            if(Globals.SceneHandler?.getScene("InfoScene")){
                Globals.SceneHandler.removeScene("InfoScene")
            }
        });
        this.leftArrow.on('pointerdown', ()=>{
            this.goToPreviousPage();
        })
        this.rightArrow.on('pointerdown', ()=>{
            this.goToNextPage()
        })
        this.pageviewContainer.add([this.leftArrow, this.rightArrow, this.infoCross])
        this.pages = []
        this.createPages()

    }
    createPages() {
        // Create pages and add content
        this.pages[1] = this.add.container(0, 0);
        
        const Heading = this.add.text(960, 330, "SYMBOLS", {fontFamily:"Nunito", color:"#ffffff", fontSize:"50px"}).setOrigin(0.5)

        const tripple7 = this.add.sprite(550, 450, "slots2_0").setOrigin(0.5).setScale(0.8)
        const tripple7StaticText = this.add.text(500, 520, `3X`, {fontFamily:"Nunito", fontSize:"40px", color: "#FFFF00", wordWrap:{ width: 300, useAdvancedWrap: true }}).setOrigin(0.5)
        const tripple7Text = this.add.text(570, 520, ` ${initData.UIData.symbols[1].payout}`, {fontFamily:"Nunito", fontSize:"40px", color: "#ffffff", wordWrap:{ width: 300, useAdvancedWrap: true }}).setOrigin(0.5)
        const  double7 = this.add.sprite(960, 450, "slots3_0").setOrigin(0.5).setScale(0.8);
        const double7StaticText = this.add.text(920, 520, `3X`, {fontFamily: "Nunito", fontSize: "40px", color:"#FFFF00"}).setOrigin(0.5);
        const double7Text = this.add.text(990, 520, ` ${initData.UIData.symbols[2].payout}`, {fontFamily:"Nunito", fontSize:"40px", color: "#ffffff", wordWrap:{ width: 300, useAdvancedWrap: true }}).setOrigin(0.5)
        const singleSeven = this.add.sprite(1370, 450, "slots4_0").setOrigin(0.5).setScale(0.8);
        const singleSevenStaticText = this.add.text(1340, 520, `3X`, {fontFamily: "Nunito", fontSize: "40px", color:"#FFFF00"}).setOrigin(0.5);
        const singleSevenText = this.add.text(1390, 520, ` ${initData.UIData.symbols[3].payout}`, {fontFamily: "Nunito", fontSize:"40px", color:"#ffffff"}).setOrigin(0.5);
        const fiveBar = this.add.sprite(550, 680, "slots5_0").setOrigin(0.5).setScale(0.8)
        const fiveBarStaticText = this.add.text(520, 780, `3X`, {fontFamily: "Nunito", fontSize: "40px", color:"#FFFF00"}).setOrigin(0.5);
        const fiveBarText = this.add.text(570, 780, ` ${initData.UIData.symbols[4].payout}`, {fontFamily: "Nunito", fontSize:"40px", color:"#ffffff"}).setOrigin(0.5)
        const bar = this.add.sprite(960, 680, "slots6_0").setOrigin(0.5).setScale(0.8)
        const barStaticText = this.add.text(930, 780, `3X`, {fontFamily:"Nunito", fontSize:"40px", color:"#FFFF00"}).setOrigin(0.5);
        const barText = this.add.text(980, 780, ` ${initData.UIData.symbols[5].payout}`,{fontFamily:"Nunito", fontSize:"40px", color:"#ffffff"}).setOrigin(0.5)
        const wheelSeven = this.add.sprite(1370, 680, "slots12_0").setOrigin(0.5).setScale(0.8)
        const wheelSevenStaticText = this.add.text(1320, 780, `3X`, {fontFamily: "Nunito", fontSize: "40px", color:"#ffff00"}).setOrigin(0.5);
        const wheelSevenText = this.add.text(1390, 780, ` ${initData.UIData.symbols[11].payout}`, {fontFamily:"Nunito", fontSize:"40px", color:"#ffffff"}).setOrigin(0.5)

        this.pages[1].add([Heading, tripple7, tripple7StaticText, tripple7Text, double7, double7StaticText, double7Text, singleSeven, singleSevenStaticText, singleSevenText, fiveBar, fiveBarStaticText, fiveBarText, bar, barStaticText, barText, wheelSeven, wheelSevenStaticText, wheelSevenText])
        this.pageviewContainer.add(this.pages[1]);

        this.pages[2] = this.add.container(0, 0);  // Position off-screen initially
        const specialHeading = this.add.text(this.scale.width/2, 320, "Special Symbols", {fontFamily:"Nunito", color: "#ffffff", fontSize: "50px"}).setOrigin(0.5)
        const goldSprite = this.add.sprite(650, 450, "slots13_0").setOrigin(0.5).setScale(0.8)
        const bonusText = this.add.text(650, 600, `Any 2X - triggers bonus game. Tap the spin button to spin the wheel and get exciting reward`, {fontFamily:"Nunito", fontSize:"35px", color: "#FFFF00", wordWrap:{ width: 350, useAdvancedWrap: true }}).setOrigin(0.5)
        const bonusScene = this.add.sprite(1200, 550, "bonusScreenShot").setScale(0.35).setOrigin(0.5)
       
        this.pages[2].add([specialHeading, goldSprite, bonusText, bonusScene]);
        this.pageviewContainer.add(this.pages[2]);
       

        this.pages[3] = this.add.container(0, 0);  // Position off-screen initially
        
        const payTableImage = this.add.text(gameConfig.scale.width/2, 320, "Payout", {fontFamily:"Nunito", color: "#ffffff", fontSize: "50px"}).setOrigin(0.5)
        const firstAnySprite = this.add.sprite(720, 450, "firstAny").setScale(0.6).setOrigin(0.5);
        const firstAnyStatic =  this.add.text(650, 520, "Any 3X - ", {fontFamily: "Nunito", fontSize: "40px", color:"#FFFF00"}).setOrigin(0.5)
        const firstAnyText =  this.add.text(760, 520, "12X", {fontFamily: "Nunito", fontSize: "40px", color:"#ffffff"}).setOrigin(0.5)
        const secondAnySprite = this.add.sprite(1300, 450, "secondAny").setScale(0.6).setOrigin(0.5)
        const secondAnyStatic = this.add.text(1250, 520, "Any 3X - ", {fontFamily: "Nunito", fontSize: "40px", color:"#FFFF00"}).setOrigin(0.5);
        const secondAnyText = this.add.text(1355, 520, "8X", {fontFamily: "Nunito", fontSize: "40px", color:"#ffffff"}).setOrigin(0.5);

        const thirdAnySprite = this.add.sprite(gameConfig.scale.width/2, 680, "thirdAny").setScale(0.65).setOrigin(0.5);
        const thirdAnyStatic = this.add.text(900, 780, "Any 3X - ", {fontFamily: "Nunito", fontSize: "40px", color:"#FFFF00"}).setOrigin(0.5);
        const thirdAnyText = this.add.text(1010, 780, "10X", {fontFamily: "Nunito", fontSize: "40px", color:"#ffffff"}).setOrigin(0.5);

        this.pages[3].add([ payTableImage, firstAnySprite, secondAnySprite, thirdAnySprite, firstAnyStatic, firstAnyText, secondAnyStatic, secondAnyText, thirdAnyStatic, thirdAnyText]);
        this.pageviewContainer.add(this.pages[3]);

        this.pages[4] = this.add.container(0, 0);

        const freeSpinHeading = this.add.text(this.scale.width/2, 320, "Paytable", {fontFamily:"Nunito", color: "#ffffff", fontSize: "60px"}).setOrigin(0.5)
        const payTableSprite = this.add.sprite(this.scale.width/2, this.scale.height/2, "payTable").setOrigin(0.5).setScale(0.6)
        // const freeSpinDescription = this.add.text(this.scale.width/2, 450, "During Free Spins, the bet per line and the active payline remain the same as the spin that triggered the feature", {fontFamily:"RobotoCondensed", color: "#000000", fontSize: "50px", wordWrap:{ width: 1100, useAdvancedWrap: true }}).setOrigin(0.5)
        // const freeSpinDescription2 = this.add.text(this.scale.width/2, 700, `4 or more consecutive cascades trigger the free spins \n 4 consecutive cascades awards 3 free plays \n 5 consecutive cascades awards 5 free plays \n 6 consecutive cascades awards 7 free plays \n 7 consecutive cascades awards 10 free plays \n 8 consecutive cascades awards 25 free plays`, {fontFamily:"RobotoCondensed", color: "#000000", fontSize: "40px", wordWrap:{ width: 1000, useAdvancedWrap: true }}).setOrigin(0.5)
        
        this.pages[4].add([freeSpinHeading, payTableSprite])

        this.pages[5] = this.add.container(0, 0);
        const rulesHeading = this.add.text(this.scale.width/2, 320, "Rules", {fontFamily:"Nunito", fontSize: "50px", color: "#ffffff"}).setOrigin(0.5);
        const rulesDescription = this.add.text(this.scale.width/2, 570, `${initData.UIData.symbols[13].description}`, {fontFamily:"Nunito", color: "#ffffff", fontSize: "40px", wordWrap:{ width: 1100, useAdvancedWrap: true }}).setOrigin(0.5)
        
        this.pages[5].add([rulesHeading, rulesDescription])

        this.pages = [this.pages[1], this.pages[2], this.pages[3], this.pages[4], this.pages[5]];
        this.currentPageIndex = 0;
        
        // Set initial visibility 
        this.pages.forEach((page, index) => {
            page.setVisible(index === this.currentPageIndex);
        });
    }

    goToNextPage() {
        if (this.currentPageIndex < this.pages.length - 1) {
            this.pages[this.currentPageIndex].setVisible(false);
            this.currentPageIndex++;
            this.pages[this.currentPageIndex].setVisible(true);
        }
    }

    goToPreviousPage() {
        if (this.currentPageIndex > 0) {
            this.pages[this.currentPageIndex].setVisible(false);
            this.currentPageIndex--;
            this.pages[this.currentPageIndex].setVisible(true);
        }
    }
}