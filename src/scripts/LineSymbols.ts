import Phaser from "phaser";
import { initData } from "./Globals";
import { gameConfig } from "./appconfig";
import { LineGenerator } from "./Lines";

export default class LineSymbols extends Phaser.GameObjects.Container{
    numberArr: Phaser.GameObjects.Container[] = [];
    linesGenerator!: LineGenerator; // Reference to LineGenerator
    numberContainers!: Phaser.GameObjects.Container
    circle!: Phaser.GameObjects.Sprite
    constructor(scene: Phaser.Scene, yOf: number, xOf: number, linesGenerator: LineGenerator) {
        // console.log(xOf, yOf);
        super(scene);
        this.linesGenerator = linesGenerator;
        // Create lines based on initData
        for (let i = 0; i < initData.gameData.Lines.length; i++) {
            let numberText = this.createNumber(scene, i);
            this.numberArr.push(numberText);
            this.add([numberText]);
        }

        this.setPosition(gameConfig.scale.width / 2, gameConfig.scale.height/2.9);
        // Add this Container to the scene
        scene.add.existing(this);
    }

    createNumber(scene: Phaser.Scene, index: number): Phaser.GameObjects.Container {
        const numberContainer = new Phaser.GameObjects.Container(scene);
        
        let xPosition;
        let yPosition = 0;
        
        // Determine x position based on even or odd index
        if (index % 2 === 0) {
            xPosition = -gameConfig.scale.width / 3.75;
            yPosition = (index / 2) * 60 - 150;  // Staggered downwards for each even number
        } else {
            xPosition = gameConfig.scale.width / 3.79;
            yPosition = ((index - 1) / 2) * 60 - 150;  // Staggered downwards for each odd number
        }
    
        // Add a background sprite behind the number
        let numberBg = scene.add.sprite(xPosition, yPosition, "lineButton")
            .setOrigin(0.5, 0.5)
            .setScale(0.8)
            .setDepth(0);  // Set depth lower than the text to make it behind
    
        // Create a text object for each number
        let numberText = scene.add.text(xPosition, yPosition, (index + 1).toString(), {
            font: "22px",
            color: "#ffffff",
            align: 'Center',            
        }).setOrigin(0.5, 0.5).setDepth(1);  // Text on top of the background
    
        // Add the sprite and text to the container
        numberContainer.add([numberBg, numberText]);
    
        // Enable input on the number text
        numberText.setInteractive({ useHandCursor: true });
    
        // Add hover event listeners
        numberText.on("pointerover", () => this.showLines(index));
        numberText.on("pointerout", () => this.hideLines());
    
        // Return the container which includes both the background and the number text
        return numberContainer;
    }
    
    
    showLines(index: number) {
        // Example: show lines related to the number
        this.linesGenerator.showLines([index]); // Adjust as needed
    }

    hideLines() {
        this.linesGenerator.hideLines();
    }
}