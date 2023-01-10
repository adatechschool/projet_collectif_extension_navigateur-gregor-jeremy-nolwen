let timeBeforeBigBreak = 0 ;

function timer(temps){ //  get worktime(change to 25) value by listenening event in html // get break time end of the funvtion
    const smallBreakTime = 1 ; // change to 5 at end of testing
    const bigBreakTime = 2; // change to 30 at end of testing
    
    if (timeBeforeBigBreak == 2.8){
        timeBeforeBigBreak = 0 ;
    }else {
        timeBeforeBigBreak += temps
    } 
    
    temps*=60
    const timerElement = document.getElementById("timer")

    setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes

        timerElement.innerText = `${minutes}:${secondes}`
        temps = temps <= 0 ? 0 : temps - 1
    }, 1000)

    console.log(timeBeforeBigBreak)
     if (temps == 0) {
            switch (timeBeforeBigBreak) {
                case 1 :// change to 25 at end of testing
                case 1.6 :// change to 55 at end of testing
                case 2.2 :// change to 85 at end of testing
                    timer(smallBreakTime) ;
                break ;
                case 2.8 : // change to 115 at end of testing
                    timer(bigBreakTime)
            }
        }  
         
}


