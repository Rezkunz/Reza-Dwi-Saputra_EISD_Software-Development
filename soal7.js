function decryptMessage(encryptedText, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const currentChar = encryptedText[i];

        if (alphabet.includes(currentChar)) {
            let currentIndex = alphabet.indexOf(currentChar);
            let newIndex = (currentIndex + shift) % alphabet.length;
            decryptedText += alphabet[newIndex];
        } else {
            decryptedText += currentChar;
        }
    }

    return decryptedText;
}

const encryptedMessages = [
    "xfqfr bfmdz", 
    "gjxtp lzj rfz ifkyfw jxi snm", 
    "gwt, gjxtp qz rfz rfpfs in bfwlty lfp?", 
    "fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz", 
    "dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"
];

const shift = 5;

encryptedMessages.forEach((message, index) => {
    const decryptedMessage = decryptMessage(message, shift);
    console.log(`Pesan ${index + 1}: ${decryptedMessage}`);
});
