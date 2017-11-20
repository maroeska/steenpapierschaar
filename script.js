/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* Bron: JavaScript & Jquery Jon Duckett*/
/* Afbeeldingen steen, papier, schaar: http://www.cmcatering.com.au/2015/06/05/tvc-catering/paper-scissors-stone/ */
/* hulp van Tom Oversluizen, Desley Aalderink & Myhra Sandifort */

var scoreJij = 0; // var voor score die gebruiker heeft, start begint bij 0
var scoreComputer = 0; // var voor score die computer heeft, start begint bij 0
var hoeveelheidBeurten = 0; // beurten begint ook bij 0, vanaf daar beginnen we later te tellen
var maxScore = 3; // maximaal aantal is 3, diegene die 3 keer wint heeft gewonnen (komt later terug)

// vanuit html worden er id's gepakt, zodat het spel uitgevoerd kan worden. Ik geef ze een variable zodat ik er meer mee kan doen
var optiesSpel = document.getElementById("opties");
var uitslag = document.getElementById("uitslagspel");
var uitslagJij = document.getElementById("eigenpunten");
var uitslagComputer = document.getElementById("computerpunten");
var beurten = document.getElementById("hoeveelheidbeurten");
var opnieuwSpelen = document.getElementById("opnieuw");
var resultaatMelding = document.getElementById("resultaatmelding");
var resultaatEigenPunten = document.getElementById("resultaateigenpunten");
var resultaatComputerPunten = document.getElementById("resultaatcomputerpunten");

// functions om onderdelen zichtbaar te laten maken en onderdelen niet zichtbaar
function keuzesZien() {
	optiesSpel.style.display = "block"; // laat de afbeeldingen zien, verandert de style dus naar block
}

function keuzesVerbergen() {
	optiesSpel.style.display = "none"; // laat de afbeeldingen verbergen, verandert de style dus naar none
}

function opnieuwZien() {
	opnieuwSpelen.style.display = "block"; // laat de opnieuw spelen knop zien, verandert de style dus naar block
}

function opnieuwVerbergen() {
	opnieuwSpelen.style.display = "none"; // laat de opnieuw spelen knop verbergen, verandert de style dus naar none
}

// om het spel nieuw te beginnen, moet alles op 0 staan
function nieuwSpel () { // functie maken om nieuw spel te beginnen
	scoreJij = 0; // gebruiker score staat op 0
	scoreComputer = 0; // computer score staat op 0
	hoeveelheidBeurten = 0; // beurten start bij 0
	beurten.innerHTML = hoeveelheidBeurten; 
	uitslagJij.innerHTML = scoreJij;
	uitslagComputer.innerHTML = scoreComputer;
	uitslag.innerHTML = ""; // wordt later ingevuld
    resultaatMelding.innerHTML = ""; // wordt later ingevuld
    resultaatMelding.className = ""; // class wordt later ingevuld
    resultaatEigenPunten.innerHTML = ""; // wordt later ingevuld
    resultaatComputerPunten.innerHTML = ""; // wordt later ingevuld
	opnieuwVerbergen(); // bij een nieuw spel, moet 'opnieuw spelen' verborgen zijn tot er een winnaar bekend is
	keuzesZien(); // we willen het spel spelen, dus nu komen de afbeeldingen in beeld
}

function spelWinnaar(speler) { // parameter met 'speler' geef ik mee, zodat we hier een uitkomst aan kunnen geven wie het spel wint
	uitslag.innerHTML = speler + " wint!"; // we geven een string mee, zo verschijnt er tekst in beeld met de speler die wint

	if (speler === "Jij") { // if/else statement, wanneer de gebruiker wint komt de uitslag in groene kleur
		uitslag.style.color = "#45e834"; // groene kleur
	} else {
		uitslag.style.color = "#e8343d"; // uitslag wordt rood als de computer wint
        uitslag.innerHTML += " Jammer... volgende keer beter!"; // deze string wordt erachter geplakt
	}
	keuzesVerbergen(); // tijdens deze berichten wil ik dat de afbeeldingen niet zichtbaar zijn. Deze functie runnen we en deze is al eerder aangemaakt
	opnieuwZien(); // ik wil wel dat de gebruik de knop 'opniew spelen' kan zien. Deze functie is eerder aangemaakt
}

// computer keuzes worden aangemaakt met het resultaat
function spel() { // het spel begint, hier wordt een functie aangemaakt
	var keuze = this.id; // het antwoord wordt hier uit gehaald die de speler heeft aangeklikt
	var computer = Math.floor(Math.random() * 3 + 1); // geeft een willekeurig getal
	var keuzeComputer = ""; // is nog niks ingevuld, komt later

	hoeveelheidBeurten++; // er komt 1 bij, de beurten gaan dus met 1 omhoog

	// keuze voor computer wordt nu bepaald
	if (computer === 1) { // de afbeeldingen krijgen een getal mee, deze is in een if/else if statement gezet
		keuzeComputer = "steen";
	} else if (computer === 2 ) {
		keuzeComputer = "schaar";
	} else {
		keuzeComputer = "papier";
	}
    
	// er worden vergelijkingen gemaakt en verschillende afbeeldingen gecombineerd om de juiste combinaties te krijgen
	if (keuzeComputer === keuze) { // wanneer de computer zijn keuze gelijk is aan de gebruiker, is het gelijkspel.
        resultaatMelding.innerHTML = 'Oef...gelijk spel!'; // zin wordt in de html gemaakt
        resultaatMelding.className = 'oranje'; // class van oranje wordt gepakt, de tekst wordt nu oranje
        resultaatEigenPunten.innerHTML = keuzeComputer; 
        resultaatComputerPunten.innerHTML = keuze;
	} else if (keuzeComputer === "schaar" && keuze == "papier") {
        resultaatMelding.innerHTML = 'Helaas... de computer wint!';
        resultaatMelding.className = 'rood'; // tekst wordt rood
        resultaatEigenPunten.innerHTML = keuzeComputer;
        resultaatComputerPunten.innerHTML = keuze;
		scoreComputer++; // computer wint, dus we tellen 1 punt bij de score van de computer op
	} else if (keuzeComputer === "schaar" && keuze == "steen") {
        resultaatMelding.innerHTML = 'Jij wint!';
        resultaatMelding.className = 'groen';
        resultaatEigenPunten.innerHTML = keuzeComputer;
        resultaatComputerPunten.innerHTML = keuze;
		scoreJij++; // de gebruiker wint, dus we tellen 1 punt bij de score van de gebruiker op
	} else if (keuzeComputer === "steen" && keuze == "papier") {
        resultaatMelding.innerHTML = 'Jij wint!';
        resultaatMelding.className = 'groen';
        resultaatEigenPunten.innerHTML = keuzeComputer;
        resultaatComputerPunten.innerHTML = keuze;
		scoreJij++;
	} else if (keuzeComputer === "steen" && keuze == "schaar") {
        resultaatMelding.innerHTML = 'Helaas... de computer wint!';
        resultaatMelding.className = 'rood';
        resultaatEigenPunten.innerHTML = keuzeComputer;
        resultaatComputerPunten.innerHTML = keuze;
		scoreComputer++;
	} else if (keuzeComputer === "papier" && keuze == "steen") {
        resultaatMelding.innerHTML = 'Helaas... de computer wint!';
        resultaatMelding.className = 'rood';
        resultaatEigenPunten.innerHTML = keuzeComputer;
        resultaatComputerPunten.innerHTML = keuze;
		scoreComputer++;
	} else if (keuzeComputer === "papier" && keuze == "schaar") {
        resultaatMelding.innerHTML = 'Jij wint!';
        resultaatMelding.className = 'groen';
        resultaatEigenPunten.innerHTML = keuzeComputer;
        resultaatComputerPunten.innerHTML = keuze;
		scoreJij++;
	}

	// scores worden aangevuld

	var scores = [scoreJij, scoreComputer]; // nieuwe variable met een array van de gebruiker zijn score en de score van de computer

	uitslagJij.innerHTML = scores[0]; // pakt score van de gebruiker en zet dit als tekst in de HTML
	uitslagComputer.innerHTML = scores[1]; // pakt score van de computer en zet dit als tekst in de HTML

	beurten.innerHTML = hoeveelheidBeurten; // +1 in de HTML 

	// wanneer de gebruiker zijn score gelijk is aan maxScore, wint hij
	if (scoreJij >= maxScore) { // wanneer de gebruiker zijn score groter is of gelijk is aan maxScore, is hij de winnaar
		spelWinnaar("Jij");
	}

	// wanneer de computer zijn score gelijk is aan maxScore, wint hij
	if (scoreComputer >= maxScore) { //  wanneer de computer zijn score groter is of gelijk is aan maxScore, is hij de winnaar
		spelWinnaar("Computer");
	}
}
	
	// de loop pakt de afbeelding en geeft hem een klik mee
	var i; // variable voor de loop
	var kliks = document.querySelectorAll("img"); // nieuwe variable en alle afbeeldingen worden gepakt met een queryselector

	for (i = 0; i < kliks.length; i++) { // de loop start bij 0, voor elke afbeelding in de array gaat hij iets doen
		kliks[i].addEventListener("click", spel); // er wordt een click event toegevoegd, de functie 'spel' wordt geactiveerd
	}

	// spel opnieuw spelen

	opnieuwSpelen.addEventListener("click", function () { // zet een eventlistener met een paramater 'click' op de knop 'Opnieuw spelen'
		nieuwSpel(); // na de click start het spel opnieuw en wordt het spel opnieuw uitgevoerd
	});
