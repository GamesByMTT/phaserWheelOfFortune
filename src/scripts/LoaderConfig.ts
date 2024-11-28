import { disconnect } from "process";

// import { Background } from './Background';
export const LoaderConfig = {
    Background:  "src/sprites/Background.jpg",
    spinBtn : "/src/sprites/ButtonSpin_1.png",
    spinBtnOnPressed :  "/src/sprites/ButtonSpinHover_1.png",
    // maxBetBtn :  "/src/sprites/ButtonMaxBet_1.png",
    // maxBetBtOnPressed :  "/src/sprites/ButtonMaxBetHover_1.png",
    autoSpin :  "/src/sprites/ButtonAutoSpin_1.png",
    autoSpinOnPressed :  "/src/sprites/ButtonAutoSpinHover_1.png",
    // BetPanel :  "/src/sprites/PanelTotalBet.png",
    pBtn  :  "/src/sprites/ButtonPlus.png",
    mBtn  :  "/src/sprites/mBtn.png",
    pBtnH  :  "/src/sprites/ButtonPlusHover.png",
    mBtnH  :  "/src/sprites/ButtonMinusHover.png",
    // lines :  "/src/sprites/PanelLines.png",
    // winPanel :  "/src/sprites/PanelWin.png",    
    // balancePanel :  "/src/sprites/PanelBalance.png",
    MenuBtn :  "/src/sprites/ButtonMenu.png",
    MenuBtnH :  "/src/sprites/ButtonMenuHover.png",
    // settingBtn :  "/src/sprites/ButtonSettings.png",
    // settingBtnH :  "/src/sprites/ButtonSettingsHover.png",
    infoBtn :  "/src/sprites/ButtonInfo.png",
    infoBtnH :  "/src/sprites/ButtonInfoHover.png",
    blackBox: "src/sprites/Blackbox.png",
    // rulesBtn :  "/src/sprites/ButtonRules.png",
    // rulesBtnH :  "/src/sprites/ButtonRulesHover.png",
    exitButton: "src/sprites/ExitButton.png",
    exitButtonPressed: "src/sprites/ExitButtonHover.png",
    // leftPlank: "src/sprites/leftPlank.png",
    // rightPlank: "src/sprites/rightPlank.png",
    // topPlank: "src/sprites/topPlank.png",
    // bottomPlank: "src/sprites/bottomPlank.png",
    // upPlnak: "src/sprites/Up.png",
    // leftLanterns: "src/sprites/leftLanterns.png",
    // rightLanterns: "src/sprites/rightLanterns.png",
    // messagePopupBgImage: "src/sprites/messagepopupImageBg.png",
    yesButton: "src/sprites/yesButton.png",
    yesButtonHover: "src/sprites/yesButtonHover.png",
    noButtonHover: "src/sprites/noButtonHover.png",
    noButton: "src/sprites/noButton.png",
    bigWinPopup: "src/sprites/BigWinPopup.png",
    hugeWinPopup:"src/sprites/HugeWinPopup.png",
    megaWinPopup: "src/sprites/MegaWinPopUpImage.png",
    winLine:"src/sprites/winLine.png",

    freeSpinPopup: "src/sprites/FreeSpinPopup.png",

    spinCircle: "src/sprites/SpinCircle.png",

    wheelBg: "src/sprites/WheelBg.png",
    assetsloader: "src/sprites/assetsLoader.png",
    loaderBg: "src/sprites/loaderBg.png",
    reelBg: "src/sprites/reelBg.png",   
    reelOuterBg: "src/sprites/reelOuterBg.png",

    scrollBg: "src/sprites/ScrollBar.png",

    gamelogo: "src/sprites/Logo.png",

    logoutBg: "src/sprites/logoutBg.png",
    InfoPopupBg: "src/sprites/infoBg.png",
    goldBar: "src/sprites/GoldBar.png",
    goldSpinText: "src/sprites/GoldSpinText.png",
    trippleText: "src/sprites/TRIPLEText.png",
    trippleTextGlow: "src/sprites/TripleTextGlow.png",
    goldenFrame: "src/sprites/GoldenFrame.png",
    blackandWhiteGoldSpin: "src/sprites/black&WhiteGoldSpin.png",
    blackandWhiteWheel: "src/sprites/black&WhiteWheelOfFortune.png",

    Wheelaward: "/src/sprites/Wheelaward.png",
    AmountBg: "src/sprites/AmountBg.png",
    fristFrameBg: "src/sprites/firstOuterFrame.png",
    differentSeven: "src/sprites/differentSeven.png", 
    differentBar: "src/sprites/differentBar.png",
    anyImage: "src/sprites/anyImage.png",
    seconOuterFrame: "src/sprites/seconOuterFrame.png",
    ReelFrame: "src/sprites/ReelFrame.png",
    smallBoxx: "src/sprites/smallBoxx.png",
    SmallBoxxReel: "src/sprites/SmallBoxxReel.jpg",
    goldenBar: "src/sprites/goldenBar.png",
    centerLine: "src/sprites/centerLine.png",
    redBox: "src/sprites/RedBox.png",
    redSmallBox: "src/sprites/redSmallBox.png",
    multiple: "src/sprites/multiple.png",
    getSprite: "src/sprites/get.png",
    respinSprite: "src/sprites/Respins.png",
    oneToFive: "src/sprites/OneToFive.png",
    volumneSpeaker: "src/sprites/volumneSpeaker.png",
    volumneSpeakerH: "src/sprites/volumneSpeakerHover.png",
    scrollerViewBg: "src/sprites/scrollerViewBg.png",
    scrollerView: "src/sprites/scrollerView.png",
    payRules: "src/sprites/payRules.png",
    infoFirstIcon: "src/sprites/infoFirstIcon.png",
    secondIcon: "src/sprites/secondIcon.png",
    payLineImage: "src/sprites/payLineImage.png",
    betButton: "src/sprites/betButton.png",
    betButtonH: "src/sprites/betButtonHover.png",
    turboBtn: "src/sprites/turboButton.png",
    turboBtnHover: "src/sprites/turboButtonHover.png",
    GameButtonsPanel: "src/sprites/GameButtonsPanel.png",
    betContainer: "src/sprites/betContainer.png",
    closeButton: "src/sprites/CloseButton.png",
    betContainerButon: "src/sprites/betContainerButon.png",
    betContainerHover: "src/sprites/betContainerHover.png",
    blueReelBg: "src/sprites/BlueBGBox.png",
    goldenRespin: "src/sprites/GoldenReelBox.png",
    settingBg : "src/sprites/settingBg.png",
    rightArrow: "src/sprites/rightArrow.png",
    rightArrowPressed: "src/sprites/rightArrowPressed.png",
    leftArrow: "src/sprites/leftArrow.png",
    leftArrowPressed: "src/sprites/leftArrowPressed.png",
    bonusScreenShot: "src/sprites/BonusScreen.jpg",
    firstAny: "src/sprites/firstAny.png",
    secondAny: "src/sprites/secondAny.png",
    thirdAny: "src/sprites/thirdAny.png",
    payTable:"src/sprites/payTable.png",

    lineBar0: "src/sprites/linebar0.png",
    lineBar1: "src/sprites/linebar1.png",
    lineBar2: "src/sprites/linebar2.png",
    lineBar3: "src/sprites/linebar3.png",
    lineBar4: "src/sprites/linebar4.png",
    lineBar5: "src/sprites/linebar5.png",
    lineBar6: "src/sprites/linebar6.png",
    lineBar7: "src/sprites/linebar7.png",
    lineBar8: "src/sprites/linebar8.png",
    lineBar9: "src/sprites/linebar9.png",
    lineBar10: "src/sprites/linebar10.png",
    lineBar11: "src/sprites/linebar11.png",
    lineBar12: "src/sprites/linebar12.png",
    lineBar13: "src/sprites/linebar13.png",
    lineBar14: "src/sprites/linebar14.png",
    lineBar15: "src/sprites/linebar15.png",
    lineBar16: "src/sprites/linebar16.png",
    lineBar17: "src/sprites/linebar17.png",
    lineBar18: "src/sprites/linebar18.png",
    lineBar19: "src/sprites/linebar19.png",
    lineBar20: "src/sprites/linebar20.png",
    lineBar21: "src/sprites/linebar21.png",
    lineBar22: "src/sprites/linebar22.png",
    lineBar23:"src/sprites/linebar23.png",


    slots1_0 :  "/src/sprites/Symbols/first/empty.png",
    // slots1_1 :  "/src/sprites/Symbols/777/slots7772.png",
    // slots1_2 :  "/src/sprites/Symbols/777/slots7773.png",
    // slots1_3 :  "/src/sprites/Symbols/777/slots7774.png",
    // slots1_4 :  "/src/sprites/Symbols/777/slots7775.png",
    // slots1_5 :  "/src/sprites/Symbols/777/slots7776.png",
    // slots1_6 :  "/src/sprites/Symbols/777/slots7777.png",
    // slots1_7 :  "/src/sprites/Symbols/777/slots7778.png",
    // slots1_8 :  "/src/sprites/Symbols/777/slots7779.png",
    // slots1_9 :  "/src/sprites/Symbols/777/slots77710.png",
    // slots1_10:  "/src/sprites/Symbols/777/slots77711.png",
    // slots1_11:  "/src/sprites/Symbols/777/slots77712.png",
    // slots1_12:  "/src/sprites/Symbols/777/slots77713.png",
    // slots1_13:  "/src/sprites/Symbols/777/slots77714.png",
    // slots1_14:  "/src/sprites/Symbols/777/slots77715.png",
    // slots1_15:  "/src/sprites/Symbols/777/slots77716.png",
    // slots1_16:  "/src/sprites/Symbols/777/slots77717.png",
    // slots1_17:  "/src/sprites/Symbols/777/slots77718.png",
    // slots1_18:  "/src/sprites/Symbols/777/slots77719.png",
    // slots1_19:  "/src/sprites/Symbols/777/slots77720.png",
    // slots1_20:  "/src/sprites/Symbols/777/slots77721.png",
    // slots1_21:  "/src/sprites/Symbols/777/slots77722.png",
    // slots1_22:  "/src/sprites/Symbols/777/slots77723.png",
    // slots1_23:  "/src/sprites/Symbols/777/slots77723.png",

    slots2_0 :  "/src/sprites/Symbols/777/777_0.png",
    slots2_1 :  "/src/sprites/Symbols/777/777_1.png",
    slots2_2 :  "/src/sprites/Symbols/777/777_2.png",
    slots2_3 :  "/src/sprites/Symbols/777/777_3.png",
    slots2_4 :  "/src/sprites/Symbols/777/777_4.png",
    slots2_5 :  "/src/sprites/Symbols/777/777_5.png",
    slots2_6 :  "/src/sprites/Symbols/777/777_6.png",
    slots2_7 :  "/src/sprites/Symbols/777/777_7.png",
    slots2_8 :  "/src/sprites/Symbols/777/777_8.png",
    slots2_9 :  "/src/sprites/Symbols/777/777_9.png",
    slots2_10:  "/src/sprites/Symbols/777/777_10.png",
    slots2_11:  "/src/sprites/Symbols/777/777_11.png",
    slots2_12:  "/src/sprites/Symbols/777/777_12.png",
    slots2_13:  "/src/sprites/Symbols/777/777_13.png",
    slots2_14:  "/src/sprites/Symbols/777/777_14.png",
    slots2_15:  "/src/sprites/Symbols/777/777_15.png",
    slots2_16:  "/src/sprites/Symbols/777/777_16.png",
    slots2_17:  "/src/sprites/Symbols/777/777_17.png",
    slots2_18:  "/src/sprites/Symbols/777/777_18.png",
    slots2_19:  "/src/sprites/Symbols/777/777_19.png",
    slots2_20:  "/src/sprites/Symbols/777/777_20.png",
    slots2_21:  "/src/sprites/Symbols/777/777_21.png",
    slots2_22:  "/src/sprites/Symbols/777/777_22.png",
    slots2_23:  "/src/sprites/Symbols/777/777_23.png",

    slots3_0 :  "/src/sprites/Symbols/77/77_0.png",
    slots3_1 :  "/src/sprites/Symbols/77/77_1.png",
    slots3_2 :  "/src/sprites/Symbols/77/77_2.png",
    slots3_3 :  "/src/sprites/Symbols/77/77_3.png",
    slots3_4 :  "/src/sprites/Symbols/77/77_4.png",
    slots3_5 :  "/src/sprites/Symbols/77/77_5.png",
    slots3_6 :  "/src/sprites/Symbols/77/77_6.png",
    slots3_7 :  "/src/sprites/Symbols/77/77_7.png",
    slots3_8 :  "/src/sprites/Symbols/77/77_8.png",
    slots3_9 :  "/src/sprites/Symbols/77/77_9.png",
    slots3_10:  "/src/sprites/Symbols/77/77_10.png",
    slots3_11:  "/src/sprites/Symbols/77/77_11.png",
    slots3_12:  "/src/sprites/Symbols/77/77_12.png",
    slots3_13:  "/src/sprites/Symbols/77/77_13.png",
    slots3_14:  "/src/sprites/Symbols/77/77_14.png",
    slots3_15:  "/src/sprites/Symbols/77/77_15.png",
    slots3_16:  "/src/sprites/Symbols/77/77_16.png",
    slots3_17:  "/src/sprites/Symbols/77/77_17.png",
    slots3_18:  "/src/sprites/Symbols/77/77_18.png",
    slots3_19:  "/src/sprites/Symbols/77/77_19.png",
    slots3_20:  "/src/sprites/Symbols/77/77_20.png",
    slots3_21:  "/src/sprites/Symbols/77/77_21.png",
    slots3_22:  "/src/sprites/Symbols/77/77_22.png",
    slots3_23:  "/src/sprites/Symbols/77/77_23.png",

    slots4_0 :  "/src/sprites/Symbols//7/7_0.png",
    slots4_1 :  "/src/sprites/Symbols//7/7_1.png",
    slots4_2 :  "/src/sprites/Symbols//7/7_2.png",
    slots4_3 :  "/src/sprites/Symbols//7/7_3.png",
    slots4_4 :  "/src/sprites/Symbols//7/7_4.png",
    slots4_5 :  "/src/sprites/Symbols//7/7_5.png",
    slots4_6 :  "/src/sprites/Symbols//7/7_6.png",
    slots4_7 :  "/src/sprites/Symbols//7/7_7.png",
    slots4_8 :  "/src/sprites/Symbols//7/7_8.png",
    slots4_9 :  "/src/sprites/Symbols//7/7_9.png",
    slots4_10:  "/src/sprites/Symbols//7/7_10.png",
    slots4_11:  "/src/sprites/Symbols//7/7_11.png",
    slots4_12:  "/src/sprites/Symbols//7/7_12.png",
    slots4_13:  "/src/sprites/Symbols//7/7_13.png",
    slots4_14:  "/src/sprites/Symbols//7/7_14.png",
    slots4_15:  "/src/sprites/Symbols//7/7_15.png",
    slots4_16:  "/src/sprites/Symbols//7/7_16.png",
    slots4_17:  "/src/sprites/Symbols//7/7_17.png",
    slots4_18:  "/src/sprites/Symbols//7/7_18.png",
    slots4_19:  "/src/sprites/Symbols//7/7_19.png",
    slots4_20:  "/src/sprites/Symbols//7/7_20.png",
    slots4_21:  "/src/sprites/Symbols//7/7_21.png",
    slots4_22:  "/src/sprites/Symbols//7/7_22.png",
    slots4_23:  "/src/sprites/Symbols//7/7_23.png",

    slots5_0 :  "/src/sprites/Symbols/5bar/5_bar_1.png",
    slots5_1 :  "/src/sprites/Symbols/5bar/5_bar_2.png",
    slots5_2 :  "/src/sprites/Symbols/5bar/5_bar_3.png",
    slots5_3 :  "/src/sprites/Symbols/5bar/5_bar_4.png",
    slots5_4 :  "/src/sprites/Symbols/5bar/5_bar_5.png",
    slots5_5 :  "/src/sprites/Symbols/5bar/5_bar_6.png",
    slots5_6 :  "/src/sprites/Symbols/5bar/5_bar_7.png",
    slots5_7 :  "/src/sprites/Symbols/5bar/5_bar_8.png",
    slots5_8 :  "/src/sprites/Symbols/5bar/5_bar_9.png",
    slots5_9 :  "/src/sprites/Symbols/5bar/5_bar_10.png",
    slots5_10:  "/src/sprites/Symbols/5bar/5_bar_11.png",
    slots5_11:  "/src/sprites/Symbols/5bar/5_bar_12.png",
    slots5_12:  "/src/sprites/Symbols/5bar/5_bar_13.png",
    slots5_13:  "/src/sprites/Symbols/5bar/5_bar_14.png",
    slots5_14:  "/src/sprites/Symbols/5bar/5_bar_15.png",
    slots5_15:  "/src/sprites/Symbols/5bar/5_bar_16.png",
    slots5_16:  "/src/sprites/Symbols/5bar/5_bar_17.png",
    slots5_17:  "/src/sprites/Symbols/5bar/5_bar_18.png",
    slots5_18:  "/src/sprites/Symbols/5bar/5_bar_19.png",
    slots5_19:  "/src/sprites/Symbols/5bar/5_bar_20.png",
    slots5_20:  "/src/sprites/Symbols/5bar/5_bar_21.png",
    slots5_21:  "/src/sprites/Symbols/5bar/5_bar_22.png",
    slots5_22:  "/src/sprites/Symbols/5bar/5_bar_23.png",
    slots5_23:  "/src/sprites/Symbols/5bar/5_bar_24.png",
    slots5_24:  "/src/sprites/Symbols/5bar/5_bar_25.png",
    slots5_25:  "/src/sprites/Symbols/5bar/5_bar_26.png",
    slots5_26:  "/src/sprites/Symbols/5bar/5_bar_27.png",
    slots5_27:  "/src/sprites/Symbols/5bar/5_bar_28.png",
    slots5_28:  "/src/sprites/Symbols/5bar/5_bar_29.png",
    slots5_29:  "/src/sprites/Symbols/5bar/5_bar_30.png",
    slots5_30:  "/src/sprites/Symbols/5bar/5_bar_31.png",
    slots5_31:  "/src/sprites/Symbols/5bar/5_bar_32.png",
    slots5_32:  "/src/sprites/Symbols/5bar/5_bar_33.png",
    slots5_33:  "/src/sprites/Symbols/5bar/5_bar_34.png",
    slots5_34:  "/src/sprites/Symbols/5bar/5_bar_35.png",
    slots5_35:  "/src/sprites/Symbols/5bar/5_bar_36.png",
    slots5_36:  "/src/sprites/Symbols/5bar/5_bar_37.png",
    slots5_37:  "/src/sprites/Symbols/5bar/5_bar_38.png",
    slots5_38:  "/src/sprites/Symbols/5bar/5_bar_39.png",
    slots5_39:  "/src/sprites/Symbols/5bar/5_bar_40.png",
    slots5_40:  "/src/sprites/Symbols/5bar/5_bar_41.png",
    slots5_41:  "/src/sprites/Symbols/5bar/5_bar_42.png",
    slots5_42:  "/src/sprites/Symbols/5bar/5_bar_43.png",
    slots5_43:  "/src/sprites/Symbols/5bar/5_bar_44.png",
    slots5_44:  "/src/sprites/Symbols/5bar/5_bar_45.png",
    slots5_45:  "/src/sprites/Symbols/5bar/5_bar_46.png",
    slots5_46:  "/src/sprites/Symbols/5bar/5_bar_47.png",

    slots6_0 :  "/src/sprites/Symbols/bar/bar_0.png",
    slots6_1 :  "/src/sprites/Symbols/bar/bar_1.png",
    slots6_2 :  "/src/sprites/Symbols/bar/bar_2.png",
    slots6_3 :  "/src/sprites/Symbols/bar/bar_3.png",
    slots6_4 :  "/src/sprites/Symbols/bar/bar_4.png",
    slots6_5 :  "/src/sprites/Symbols/bar/bar_5.png",
    slots6_6 :  "/src/sprites/Symbols/bar/bar_6.png",
    slots6_7 :  "/src/sprites/Symbols/bar/bar_7.png",
    slots6_8 :  "/src/sprites/Symbols/bar/bar_8.png",
    slots6_9 :  "/src/sprites/Symbols/bar/bar_9.png",
    slots6_10:  "/src/sprites/Symbols/bar/bar_10.png",
    slots6_11:  "/src/sprites/Symbols/bar/bar_11.png",
    slots6_12:  "/src/sprites/Symbols/bar/bar_12.png",
    slots6_13:  "/src/sprites/Symbols/bar/bar_13.png",
    slots6_14:  "/src/sprites/Symbols/bar/bar_14.png",
    slots6_15:  "/src/sprites/Symbols/bar/bar_15.png",
    slots6_16:  "/src/sprites/Symbols/bar/bar_16.png",
    slots6_17:  "/src/sprites/Symbols/bar/bar_17.png",
    slots6_18:  "/src/sprites/Symbols/bar/bar_18.png",
    slots6_19:  "/src/sprites/Symbols/bar/bar_19.png",
    slots6_20:  "/src/sprites/Symbols/bar/bar_20.png",
    slots6_21:  "/src/sprites/Symbols/bar/bar_21.png",
    slots6_22:  "/src/sprites/Symbols/bar/bar_22.png",
    slots6_23:  "/src/sprites/Symbols/bar/bar_23.png",

    slots7_0 :  "/src/sprites/Symbols/777T/777_T_0.png",
    slots7_1 :  "/src/sprites/Symbols/777T/777_T_1.png",
    slots7_2 :  "/src/sprites/Symbols/777T/777_T_2.png",
    slots7_3 :  "/src/sprites/Symbols/777T/777_T_3.png",
    slots7_4 :  "/src/sprites/Symbols/777T/777_T_4.png",
    slots7_5 :  "/src/sprites/Symbols/777T/777_T_5.png",
    slots7_6 :  "/src/sprites/Symbols/777T/777_T_6.png",
    slots7_7 :  "/src/sprites/Symbols/777T/777_T_7.png",
    slots7_8 :  "/src/sprites/Symbols/777T/777_T_8.png",
    slots7_9 :  "/src/sprites/Symbols/777T/777_T_9.png",
    slots7_10:  "/src/sprites/Symbols/777T/777_T_10.png",
    slots7_11:  "/src/sprites/Symbols/777T/777_T_11.png",
    slots7_12:  "/src/sprites/Symbols/777T/777_T_12.png",
    slots7_13:  "/src/sprites/Symbols/777T/777_T_13.png",
    slots7_14:  "/src/sprites/Symbols/777T/777_T_14.png",
    slots7_15:  "/src/sprites/Symbols/777T/777_T_15.png",
    slots7_16:  "/src/sprites/Symbols/777T/777_T_16.png",
    slots7_17:  "/src/sprites/Symbols/777T/777_T_17.png",
    slots7_18:  "/src/sprites/Symbols/777T/777_T_18.png",
    slots7_19:  "/src/sprites/Symbols/777T/777_T_19.png",
    slots7_20:  "/src/sprites/Symbols/777T/777_T_20.png",
    slots7_21:  "/src/sprites/Symbols/777T/777_T_21.png",

    slots8_0 :  "/src/sprites/Symbols/77T/77_T_0.png",
    slots8_1 :  "/src/sprites/Symbols/77T/77_T_1.png",
    slots8_2 :  "/src/sprites/Symbols/77T/77_T_2.png",
    slots8_3 :  "/src/sprites/Symbols/77T/77_T_3.png",
    slots8_4 :  "/src/sprites/Symbols/77T/77_T_4.png",
    slots8_5 :  "/src/sprites/Symbols/77T/77_T_5.png",
    slots8_6 :  "/src/sprites/Symbols/77T/77_T_6.png",
    slots8_7 :  "/src/sprites/Symbols/77T/77_T_7.png",
    slots8_8 :  "/src/sprites/Symbols/77T/77_T_8.png",
    slots8_9 :  "/src/sprites/Symbols/77T/77_T_9.png",
    slots8_10:  "/src/sprites/Symbols/77T/77_T_10.png",
    slots8_11:  "/src/sprites/Symbols/77T/77_T_11.png",
    slots8_12:  "/src/sprites/Symbols/77T/77_T_12.png",
    slots8_13:  "/src/sprites/Symbols/77T/77_T_13.png",
    slots8_14:  "/src/sprites/Symbols/77T/77_T_14.png",
    slots8_15:  "/src/sprites/Symbols/77T/77_T_15.png",
    slots8_16:  "/src/sprites/Symbols/77T/77_T_16.png",
    slots8_17:  "/src/sprites/Symbols/77T/77_T_17.png",
    slots8_18:  "/src/sprites/Symbols/77T/77_T_18.png",
    slots8_19:  "/src/sprites/Symbols/77T/77_T_19.png",
    slots8_20:  "/src/sprites/Symbols/77T/77_T_20.png",
    slots8_21:  "/src/sprites/Symbols/77T/77_T_21.png",

    
    slots9_0 :  "/src/sprites/Symbols/7T/7_T_0.png",
    slots9_1 :  "/src/sprites/Symbols/7T/7_T_1.png",
    slots9_2 :  "/src/sprites/Symbols/7T/7_T_2.png",
    slots9_3 :  "/src/sprites/Symbols/7T/7_T_3.png",
    slots9_4 :  "/src/sprites/Symbols/7T/7_T_4.png",
    slots9_5 :  "/src/sprites/Symbols/7T/7_T_5.png",
    slots9_6 :  "/src/sprites/Symbols/7T/7_T_6.png",
    slots9_7 :  "/src/sprites/Symbols/7T/7_T_7.png",
    slots9_8 :  "/src/sprites/Symbols/7T/7_T_8.png",
    slots9_9 :  "/src/sprites/Symbols/7T/7_T_9.png",
    slots9_10:  "/src/sprites/Symbols/7T/7_T_10.png",
    slots9_11:  "/src/sprites/Symbols/7T/7_T_11.png",
    slots9_12:  "/src/sprites/Symbols/7T/7_T_12.png",
    slots9_13:  "/src/sprites/Symbols/7T/7_T_13.png",
    slots9_14:  "/src/sprites/Symbols/7T/7_T_14.png",
    slots9_15:  "/src/sprites/Symbols/7T/7_T_15.png",
    slots9_16:  "/src/sprites/Symbols/7T/7_T_16.png",
    slots9_17:  "/src/sprites/Symbols/7T/7_T_17.png",
    slots9_18:  "/src/sprites/Symbols/7T/7_T_18.png",
    slots9_19:  "/src/sprites/Symbols/7T/7_T_19.png",
    slots9_20:  "/src/sprites/Symbols/7T/7_T_20.png",
    slots9_21:  "/src/sprites/Symbols/7T/7_T_21.png",
    slots9_22:  "/src/sprites/Symbols/7T/7_T_22.png",
    slots9_23:  "/src/sprites/Symbols/7T/7_T_23.png",
    slots9_24:  "/src/sprites/Symbols/7T/7_T_24.png",
    slots9_25:  "/src/sprites/Symbols/7T/7_T_25.png",
    slots9_26:  "/src/sprites/Symbols/7T/7_T_26.png",
    slots9_27:  "/src/sprites/Symbols/7T/7_T_27.png",
    slots9_28:  "/src/sprites/Symbols/7T/7_T_28.png",
    slots9_29:  "/src/sprites/Symbols/7T/7_T_29.png",
    slots9_30:  "/src/sprites/Symbols/7T/7_T_30.png",
    slots9_31:  "/src/sprites/Symbols/7T/7_T_31.png",

    slots10_0 :  "/src/sprites/Symbols/5barT/5_bar_T_0.png",
    slots10_1 :  "/src/sprites/Symbols/5barT/5_bar_T_1.png",
    slots10_2 :  "/src/sprites/Symbols/5barT/5_bar_T_2.png",
    slots10_3 :  "/src/sprites/Symbols/5barT/5_bar_T_3.png",
    slots10_4 :  "/src/sprites/Symbols/5barT/5_bar_T_4.png",
    slots10_5 :  "/src/sprites/Symbols/5barT/5_bar_T_5.png",
    slots10_6 :  "/src/sprites/Symbols/5barT/5_bar_T_6.png",
    slots10_7 :  "/src/sprites/Symbols/5barT/5_bar_T_7.png",
    slots10_8 :  "/src/sprites/Symbols/5barT/5_bar_T_8.png",
    slots10_9 :  "/src/sprites/Symbols/5barT/5_bar_T_9.png",
    slots10_10:  "/src/sprites/Symbols/5barT/5_bar_T_10.png",
    slots10_11:  "/src/sprites/Symbols/5barT/5_bar_T_11.png",
    slots10_12:  "/src/sprites/Symbols/5barT/5_bar_T_12.png",
    slots10_13:  "/src/sprites/Symbols/5barT/5_bar_T_13.png",
    slots10_14:  "/src/sprites/Symbols/5barT/5_bar_T_14.png",
    slots10_15:  "/src/sprites/Symbols/5barT/5_bar_T_15.png",
    slots10_16:  "/src/sprites/Symbols/5barT/5_bar_T_16.png",
    slots10_17:  "/src/sprites/Symbols/5barT/5_bar_T_17.png",
    slots10_18:  "/src/sprites/Symbols/5barT/5_bar_T_18.png",
    slots10_19:  "/src/sprites/Symbols/5barT/5_bar_T_19.png",
    slots10_20:  "/src/sprites/Symbols/5barT/5_bar_T_20.png",
    slots10_21:  "/src/sprites/Symbols/5barT/5_bar_T_21.png",
    slots10_22:  "/src/sprites/Symbols/5barT/5_bar_T_22.png",
    slots10_23:  "/src/sprites/Symbols/5barT/5_bar_T_23.png",
    slots10_24:  "/src/sprites/Symbols/5barT/5_bar_T_24.png",
    slots10_25:  "/src/sprites/Symbols/5barT/5_bar_T_25.png",
    slots10_26:  "/src/sprites/Symbols/5barT/5_bar_T_26.png",
    slots10_27:  "/src/sprites/Symbols/5barT/5_bar_T_27.png",

    slots11_0 :  "/src/sprites/Symbols/barT/bar_T_0.png",
    slots11_1 :  "/src/sprites/Symbols/barT/bar_T_1.png",
    slots11_2 :  "/src/sprites/Symbols/barT/bar_T_2.png",
    slots11_3 :  "/src/sprites/Symbols/barT/bar_T_3.png",
    slots11_4 :  "/src/sprites/Symbols/barT/bar_T_4.png",
    slots11_5 :  "/src/sprites/Symbols/barT/bar_T_5.png",
    slots11_6 :  "/src/sprites/Symbols/barT/bar_T_6.png",
    slots11_7 :  "/src/sprites/Symbols/barT/bar_T_7.png",
    slots11_8 :  "/src/sprites/Symbols/barT/bar_T_8.png",
    slots11_9 :  "/src/sprites/Symbols/barT/bar_T_9.png",
    slots11_10:  "/src/sprites/Symbols/barT/bar_T_10.png",
    slots11_11:  "/src/sprites/Symbols/barT/bar_T_11.png",
    slots11_12:  "/src/sprites/Symbols/barT/bar_T_12.png",
    slots11_13:  "/src/sprites/Symbols/barT/bar_T_13.png",
    slots11_14:  "/src/sprites/Symbols/barT/bar_T_14.png",
    slots11_15:  "/src/sprites/Symbols/barT/bar_T_15.png",
    slots11_16:  "/src/sprites/Symbols/barT/bar_T_16.png",
    slots11_17:  "/src/sprites/Symbols/barT/bar_T_17.png",
    slots11_18:  "/src/sprites/Symbols/barT/bar_T_18.png",
    slots11_19:  "/src/sprites/Symbols/barT/bar_T_19.png",

    slots12_0 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_0.png",
    slots12_1 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_1.png",
    slots12_2 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_2.png",
    slots12_3 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_3.png",
    slots12_4 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_4.png",
    slots12_5 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_5.png",
    slots12_6 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_6.png",
    slots12_7 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_7.png",
    slots12_8 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_8.png",
    slots12_9 :  "/src/sprites/Symbols/wheel/wheel-of-Fortune_9.png",
    slots12_10:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_10.png",
    slots12_11:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_11.png",
    slots12_12:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_12.png",
    slots12_13:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_13.png",
    slots12_14:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_14.png",
    slots12_15:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_15.png",
    slots12_16:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_16.png",
    slots12_17:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_17.png",
    slots12_18:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_18.png",
    slots12_19:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_19.png",
    slots12_20:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_20.png",
    slots12_21:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_21.png",
    slots12_22:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_22.png",
    slots12_23:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_23.png",
    slots12_24:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_24.png",
    slots12_25:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_25.png",
    slots12_26:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_26.png",
    slots12_27:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_27.png",
    slots12_28:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_28.png",
    slots12_29:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_29.png",
    slots12_30:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_30.png",
    slots12_31:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_31.png",
    slots12_32:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_32.png",
    slots12_33:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_33.png",
    slots12_34:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_34.png",
    slots12_35:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_35.png",
    slots12_36:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_36.png",
    slots12_37:  "/src/sprites/Symbols/wheel/wheel-of-Fortune_37.png",
   
    slots13_0: "/src/sprites/Symbols/goldSpin/GoldSpin_0.png",
    slots13_1: "/src/sprites/Symbols/goldSpin/GoldSpin_1.png",
    slots13_2: "/src/sprites/Symbols/goldSpin/GoldSpin_2.png",
    slots13_3: "/src/sprites/Symbols/goldSpin/GoldSpin_3.png",
    slots13_4: "/src/sprites/Symbols/goldSpin/GoldSpin_4.png",
    slots13_5: "/src/sprites/Symbols/goldSpin/GoldSpin_5.png",
    slots13_6: "/src/sprites/Symbols/goldSpin/GoldSpin_6.png",
    slots13_7: "/src/sprites/Symbols/goldSpin/GoldSpin_7.png",
    slots13_8: "/src/sprites/Symbols/goldSpin/GoldSpin_8.png",
    slots13_9: "/src/sprites/Symbols/goldSpin/GoldSpin_9.png",
    slots13_10: "/src/sprites/Symbols/goldSpin/GoldSpin_10.png",
    slots13_11: "/src/sprites/Symbols/goldSpin/GoldSpin_11.png",
    slots13_12: "/src/sprites/Symbols/goldSpin/GoldSpin_12.png",
    slots13_13: "/src/sprites/Symbols/goldSpin/GoldSpin_13.png",
    slots13_14: "/src/sprites/Symbols/goldSpin/GoldSpin_14.png",
    slots13_15: "/src/sprites/Symbols/goldSpin/GoldSpin_15.png",
    slots13_16: "/src/sprites/Symbols/goldSpin/GoldSpin_16.png",
    slots13_17: "/src/sprites/Symbols/goldSpin/GoldSpin_17.png",
    slots13_18: "/src/sprites/Symbols/goldSpin/GoldSpin_18.png",
    slots13_19: "/src/sprites/Symbols/goldSpin/GoldSpin_19.png",
    slots13_20: "/src/sprites/Symbols/goldSpin/GoldSpin_20.png",
    slots13_21: "/src/sprites/Symbols/goldSpin/GoldSpin_21.png",
    slots13_22: "/src/sprites/Symbols/goldSpin/GoldSpin_22.png",
    slots13_23: "/src/sprites/Symbols/goldSpin/GoldSpin_23.png",
    slots13_24: "/src/sprites/Symbols/goldSpin/GoldSpin_24.png",
    slots13_25: "/src/sprites/Symbols/goldSpin/GoldSpin_25.png",
    slots13_26: "/src/sprites/Symbols/goldSpin/GoldSpin_26.png",
    slots13_27: "/src/sprites/Symbols/goldSpin/GoldSpin_27.png",
    slots13_28: "/src/sprites/Symbols/goldSpin/GoldSpin_28.png",
    slots13_29: "/src/sprites/Symbols/goldSpin/GoldSpin_29.png",
    slots13_30: "/src/sprites/Symbols/goldSpin/GoldSpin_30.png",
    slots13_31: "/src/sprites/Symbols/goldSpin/GoldSpin_31.png",
    slots13_32: "/src/sprites/Symbols/goldSpin/GoldSpin_32.png",
    slots13_33: "/src/sprites/Symbols/goldSpin/GoldSpin_33.png",
    slots13_34: "/src/sprites/Symbols/goldSpin/GoldSpin_34.png",
    slots13_35: "/src/sprites/Symbols/goldSpin/GoldSpin_35.png",
    slots13_36: "/src/sprites/Symbols/goldSpin/GoldSpin_36.png",
    slots13_37: "/src/sprites/Symbols/goldSpin/GoldSpin_37.png",
    slots13_38: "/src/sprites/Symbols/goldSpin/GoldSpin_38.png",
    slots13_39: "/src/sprites/Symbols/goldSpin/GoldSpin_39.png",
    slots13_40: "/src/sprites/Symbols/goldSpin/GoldSpin_40.png",
    slots13_41: "/src/sprites/Symbols/goldSpin/GoldSpin_41.png",
    slots13_42: "/src/sprites/Symbols/goldSpin/GoldSpin_42.png",
    slots13_43: "/src/sprites/Symbols/goldSpin/GoldSpin_43.png",
    slots13_44: "/src/sprites/Symbols/goldSpin/GoldSpin_44.png",
}



export const staticData = {
    Background:  "src/sprites/Background.jpg",
};

export const fontData = ["Montserrat"];



export const LoaderSoundConfig: any = {
        backgroundMusic: "src/sounds/Teaser.mp3",
        // onSpin :  "/src/sounds/slot-machine-loop.mp3",
        spinButton: "src/sounds/spin.mp3",
        winMusic: "src/sounds/JackpotWinner.mp3",
        buttonpressed: "src/sounds/Game-Button.wav",
 
};

export const preloaderConfig = {
    // startLogo:  "/src/sprites/Logo.png")
}