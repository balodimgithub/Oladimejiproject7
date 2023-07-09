   /* Assignment1*/
   const languages = 'chinese or mandarin';
  
  switch (languages) {
      case 'Chinese or mandarin':
      console.log("Most number of native speakers")
      break;
      case 'spanish':
      console.log("2nd pace in number of native speakers")
      case 'English':
      console.log('Number3');
      case 'hindi':
      console.log('Number4');
      case 'Arabic':
      console.log('Number5');
      case 'other languages':
      console.log('there are great languages too')
      
  };
   /* Assignment 2*/
    /* team1 */
   const firstTeam = 'dolphin';
  const  dolphinRound1 = 96 + 108 + 89;
   const dolphinRound2 = 97 + 112 + 101;
  const  dolphinRound3 = 97 + 112 + 101;
  const dolphinRoundsAddition = dolphinRound1 + dolphinRound2 + dolphinRound3;
  const dolphinAverageScore = dolphinRoundsAddition/3;
 const dolphinEligibility = dolphinAverageScore > 100;
  
    
 console.log(firstTeam);
console.log(dolphinRoundsAddition);
console.log(dolphinAverageScore);
console.log(dolphinEligibility);


 /* team2 */
 const secondTeam = 'Koalas';
  const  koalasRound1 = 88 + 91 + 110;
   const koalasRound2 = 109 + 95 + 123;
  const  koalasRound3 = 109 + 95 + 106;
  const koalasRoundsAddition = koalasRound1 + koalasRound2 + koalasRound3;
  const koalasAverageScore = koalasRoundsAddition/3;
  const koalasEligibility = koalasAverageScore >100;
 
  
console.log(secondTeam);
console.log(koalasRoundsAddition);
console.log(koalasAverageScore);
console.log(koalasEligibility);


   /* matchWinner */
    const dolphinWinner = dolphinAverageScore > koalasAverageScore;
const koalasWinner = koalasAverageScore > dolphinAverageScore;
console.log(dolphinWinner);
console.log(koalasWinner);

const equal = koalasAverageScore == dolphinAverageScore;
console.log(equal);
  
  
 
    if(dolphinWinner && dolphinEligibility) {
       console.log("dolphin is the winner of the tournament");
   }else if (koalasWinner && koalasEligibility ) {
       console.log("koalas is the winner of the tournament");
   }else if (equal) {
       console.log("The match has end in a draw")
   }else {
       console.log("There is not a match winner")
   }; 
   
   /* Assignment3 */
 const billingValue1 = 275;
 const billingPercent1 = 15/100;
 const tip1 = billingPercent1 * billingValue1;
 const totalvalue1 = billingValue1 + tip1
 console.log(billingValue1);
 console.log(tip1);
  console.log(totalvalue1);
  
  const sentence1 = `The bill was ${billingValue1}, the tip was ${tip1} and the total value is ${totalvalue1}`;
    console.log(sentence1);
    
    const billingValue2 = 40;
 const billingPercent2 = 20/100;
 const tip2 = billingPercent2 * billingValue2;
 const totalvalue2 = billingValue2 + tip2
 console.log(billingValue2);
 console.log(tip2);
  console.log(totalvalue2);
  
  const sentence2 = `The bill was ${billingValue2}, the tip was ${tip2} and the total value is ${totalvalue2}`;
    console.log(sentence2);
    
    const billingValue3 = 430;
 const billingPercent3 = 20/100;
 const tip3 = billingPercent3 * billingValue3;
 const totalvalue3 = billingValue3 + tip3
 console.log(billingValue3);
 console.log(tip3);
  console.log(totalvalue3);
  
  const sentence3 = `The bill was ${billingValue3}, the tip was ${tip3} and the total value is ${totalvalue3}`;
    console.log(sentence3);
    
    /* Assignment 4*/
    function describeCountry(country, population, capitalCity){
       const details = `${country} has ${population} people and its capital city is ${capitalCity}`
       return details;
    }
    const countryData1 = describeCountry("Finland","6million", "Helsinki");
    console.log(countryData1);
    
   const countryData2 = describeCountry("Nigeria","216 million", "Abuja");
   console.log(countryData2);
   
   const countryData3 = describeCountry("England", "69million", "London");
   console.log(countryData3);
   const countryData4 = describeCountry("brazil", "217million", "brasilia");
   console.log(countryData4);


/* Assignment5 */
/* number1 */
 const worldPopulation = 7900000000
function percentageOfCountry1(country){
const stat1 = `${country} is ${populationValue} in population so it's about ${populationPercentage1}% of the world population`
   return stat1;
}
 let populationValue = 217000000;
let populationPercentage1 = populationValue/worldPopulation*100;
 console.log(populationPercentage1);

const economyValue1 = percentageOfCountry1("Brazil");
console.log(economyValue1);

   /* number2 */
 populationValue = 4000000;
 populationPercentage1 = 2.7;
 const economy2 = percentageOfCountry1("Qatar");
 console.log(economy2);
 
 populationValue = 7000000;
 populationPercentage1 = 2.7;
 const economy3 = percentageOfCountry1("Bulgaria");
 
 console.log(economy3);
 populationValue = 375000;
 populationPercentage1 = 2.7;
 const economy4 = percentageOfCountry1("iceland");
 console.log(economy4);
   /* number3 */
 
function percentageOfCountry2(country2){
const stat2 = `${country2} is ${populationValue2} in population so it's about ${populationPercentage2}% of the world population`
   return stat2;
}
/* number1 */
let populationValue2 = 69000000;
let populationPercentage2 = populationValue2/worldPopulation *100;
console.log(populationPercentage2);
const economy5 = percentageOfCountry2("Britain");
console.log(economy5);
/* number2 */
populationValue2 = 68000000;
 populationPercentage2 = 0.7
console.log(populationPercentage2);
const economy6 = percentageOfCountry2("Canada");
console.log(economy6);

/* number3 */
 populationValue2 = 69000000;
 populationPercentage2 = 0.8
console.log(populationPercentage2);
const economy7 = percentageOfCountry2("Spain");
console.log(economy7);

populationValue2 = 69000000;
 populationPercentage2 = 0.8;

const economy8 = percentageOfCountry2("America");
console.log(economy8);

const populations1 = ['Finland', '6million', 'Helsinki', 2];
const population2 = ['Nigeria', '216million', 'Abuja', 3];
const population3 = ['England', '69million','London', 4];
const population4 = ['brazil', '217million', 'brasilua', 4];
console.log(populations1);
console.log(population2
    );
console.log(population3);
console.log(population4);
 
    
 
     
 




 
   
 
 
 
 
