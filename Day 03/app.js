function rolldice(){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let rand = alphabets[Math.floor(Math.random() * alphabets.length)  ]
    console.log(rand);
    
}

rolldice()