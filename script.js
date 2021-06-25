// Generating a random number
const randomNumber = (number) => {
    let randomNo = Math.floor(Math.random() * number)
    return randomNo;
}

// Variable Containing Options
const starSigns = {
     zodiacSign : ['Aquarius', 'Aries', 'Cancer', 'Capricorn', 'Gemini', 'Leo', 'Libra', 'Pisces', 'Sagittarius', 'Scorpio', 'Taurus', 'Virgo'],
     prediction : ['You are in luck', 'I have bad news', 'Consider...'],
     guidance : ['Reflect on yourself', 'Giving more time to your loved ones', 'Do not make decisions whilst angry', 'Be more optimistic']
};

// Dates for each Star Sign
const dateBorn = {
    Aries: 'March 21 – April 20',
    Taurus: 'April 21 – May 20',
    Gemini: 'May 21 – June 21',
    Cancer: 'June 22 – July 22',
    Leo: 'July 23 – August 22',
    Virgo: 'August 23 – September 21',
    Libra: 'September 22 – October 22',
    Scorpio: 'November 23 – December 21',
    Capricorn: 'December 22 – January 20',
    Aquarius: 'January 21 – February 19',
    Pisces: 'February 20 – March 20',
};

//Serves the purpose of storing the data
let msgData = [];
for(let prop in starSigns) {
    let keyVal = starSigns[prop];
    let randomInd = randomNumber(keyVal.length);
    msgData.push(keyVal[randomInd]);
};

//Function that logs message on display
const zodiacMsg = (Array) => {
    let displayMsg = [];
    let dateOfBirth = Array[0];
    displayMsg.push(` Your zodiac sign is : "${Array[0]}" as, you were born in ${dateBorn[dateOfBirth]}"`);
    displayMsg.push(`${Array[1]}`);
    displayMsg.push(`${Array[2]}`);
    const msgString = displayMsg.join('\n');
    console.log(msgString);
};

zodiacMsg(msgData);


