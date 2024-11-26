import Phaser from "phaser";
import { Globals } from "./Globals";
export default class MyEmitter {
    // private mainscene : MainScene;
    constructor(){
       
    }
    Call(msgType: string, msgParams = {}) {
        if (msgType != "timer" && msgType != "turnTimer"){
            Globals.SceneHandler?.recievedMessage(msgType, msgParams)
        }
    }
}