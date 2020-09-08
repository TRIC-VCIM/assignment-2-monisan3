var firstName = prompt("What is your name?");

var birthMonth = prompt("What month were you born (full month name)?");

// var result = `${firstName}, your birth sign for the month of ${birthMonth} is probably ${zodiacSign}.`; 


 if(birthMonth.toUpperCase() === "JANUARY")
 { zodiacSign = "Capricorn";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
 else if (birthMonth.toUpperCase() === "FEBRUARY")
 { zodiacSign = "Aquarius";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
 else if (birthMonth.toUpperCase() === "MARCH")
 { zodiacSign = "Pisces";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
  else if (birthMonth.toUpperCase() === "APRIL")
 { zodiacSign = "Aries";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
  else if (birthMonth.toUpperCase() === "MAY")
 { zodiacSign = "Taurus";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
 else if (birthMonth.toUpperCase() === "JUNE")
 { zodiacSign = "Gemini";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
  else if (birthMonth.toUpperCase() === "JULY")
 { zodiacSign = "Cancer";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
  else if (birthMonth.toUpperCase() === "AUGUST")
 { zodiacSign = "Leo";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
 else if (birthMonth.toUpperCase() === "SEPTEMBER")
 { zodiacSign = "Virgo";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
  else if (birthMonth.toUpperCase() === "OCTOBER")
 { zodiacSign = "Libra";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
 else if (birthMonth.toUpperCase() === "NOVEMBER")
 { zodiacSign = "Scorpio";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}
 else if (birthMonth.toUpperCase() === "DECEMBER")
 { zodiacSign = "Sagittarius";
   document.querySelector(".result").innerHTML = `${firstName}, your birth sign for the month of <strong>${birthMonth}</strong> is probably <em>${zodiacSign}</em>.`;}

    else {
    zodiacSign = "unknown";
      document.querySelector(".result").innerHTML = `${firstName}, your birth sign is ${zodiacSign}.`;}
