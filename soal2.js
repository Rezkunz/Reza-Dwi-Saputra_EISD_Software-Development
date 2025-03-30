function sukaBlyat(inputan){
    inputan = inputan.toLowerCase()
    inputanReverse = inputan.split('').reverse().join('')
    if (inputan == inputanReverse){
        console.log("eureeka!")
    }else{
        console.log("suka blyat")
    }
}

sukaBlyat("Angsa")
sukaBlyat("KataK")
sukaBlyat("Aku Suka Kamu")
sukaBlyat("Ibu Ratna antar ubi")