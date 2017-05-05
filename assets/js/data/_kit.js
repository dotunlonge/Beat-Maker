/**
 * @author
 * Banjo Mofesola Paul
 * Chief Developer, Planet NEST
 * mofesolapaul@planetnest.org
 * Fri 5 May, 2017
 */

const KICK_PATH = "sounds/Kicks/";
const SNARE_PATH = "sounds/Snares/";
const HAT_PATH = "sounds/Hats/";
const PERC_PATH = "sounds/Percs/";

var _kit = {
    "default" : {
        "kick": KICK_PATH + "defaultKick.wav",
        "snare": SNARE_PATH + "defaultSnare.wav",
        "hat": HAT_PATH + "defaultHat.wav",
        "perc": PERC_PATH + "defaultPerc.wav"
    },
    "trap" : {
        "kick": KICK_PATH + "trapKick.wav",
        "snare": SNARE_PATH + "trapSnare.wav",
        "hat": HAT_PATH + "trapHat.wav",
        "perc": PERC_PATH + "trapPerc.wav"
    },
    "african" : {
        "kick": KICK_PATH + "afrKick.wav",
        "snare": SNARE_PATH + "afrSnare.wav",
        "hat": HAT_PATH + "afrHat.wav",
        "perc": PERC_PATH + "afrPerc.wav"
    }
};
