_vars.characters = {
	sister: {
		name: "SisterName",
		trust: 5,
		questions:[
            {question: "Where were you at the time of the murder?", visible: true, function: whereWasSister},
            {question: "Do you have any clues who the murder may be?", visible: true, function: anyCluesSister},
            {question: "It is so tragic?", visible: true, function: tragicSister}
        ],
        itemRes:[
            {name: "Pamphlet", res: "I knew about that and he can do what he wants"},
            {name: "Gun Case", res: "He usually has a gun there"},
            {name: "RSVPS", res: "Yes, I did write that"},
            {name: "Poison Bottle", res:"Maybe ask the butler"}
        ]
	},
	
	politician: {
		name: "PoliticianName",
        trust: 2,
        questions: [
            {question: "Where were you at the time of the murder?", visible: true, function: whereWasPol},
            {question: "That’s not what Victor said, he said the two of you where having a drink", visible: false, function: wereYouDrinkingPol}, //TODO
            {question: "What were you drinking?", visible: false, function: whatDrinkingPol}, //TODO after above
            {question: "Do you have any clues who the murderer may be?", visible: true, function: anyCluePolitiction}, 
            {question: "And what do you make of the death ?", visible: true, function: makeOfDeathPol}
        ],
        itemRes:[
            {name: "Pamphlet", res: "That proves it was the sister"},
            {name: "Threatening Letter", res: "Claim to have never seen it"},
            {name: "RSVPS", res: "Yes, I did write that"}
        ]			
	},

	butler: {
		name: "ButlerName",
		trust: 5,
		questions:[
            {question: "Where were you at the time of the murder?", visible: true, function: whereWasButler},
            {question: "Do you have any clues who the murderer may be?", visible: true, function: anyCluesButler},
            {question: "How do you feel about his death?", visible: true, function: feelAboutDeathButler},
            {question: "Are there any problems with the house?", visible: true, function: problemsWithHouse}
            
		],
		itemRes:[
            {name: "Bloody Knife", res: "Shows recent knife injury"},
            {name: "Used Cup", res: "Yes it is Albert's cup"},
            {name: "Posion Bottle", res: "Rat Problem"},
            {name: "Ledger", res: "We are no longer partners"},
            {name: "Mangled Toaster", res: "Now I have to buy a new toaster. I just bought that"}
		]
	},
	
	rival: {
		name: "Victor",
		trust: 3,
		questions:[
            {question: "Where were you at the time of the murder?", visible: true, function: whereWasRival},
            {question: "Your story does not fully add up Francis didn’t mention this at all?", visible: false, function: storyDoesntMatchRival}, //TODO
            {question: "And what drink do the two of you enjoy?", visible: false, function: whatDrinkRival},
            {question: "Do you have any clues who the murder may be?", visible: true, function: anyClueRival},
            {question: "How do you feel about it all?", visible: true, function: feelAboutDeathRival},
        ],
        itemRes:[
            {name: "Mangled Toaster", res: "Broke it because I don’t like him"},
            {name: "Ledger", res: "We are no longer partners"},
            {name: "RSVPS", res: "Yes, I did write that"}
		]
    },
    
	policeman: {
		name: "Officer",
		trust: 10,
		questions:[
			{question: "What happened?", visible: true, function: whatHappend}
        ],
        itemRes:[
            {name:"Poison Bottle", res: "That could be a murder weapon, but it does have legit uses"},
            {name: "Threatening Letter", res: "That’s an obvious piece of evidence"},
            {name: "Bloody Knife", res: "That could be a murder weapon, but it does have legit uses"}
        ]
    },
    
	deadman: {
		name: "Mr. Callaway",
		trust: 10,
		questions:[
			{question: "Why did you invite me?", visible: true, function: whyAmIHere}
		]
	}
}