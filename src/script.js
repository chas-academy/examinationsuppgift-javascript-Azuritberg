


// Startvärdet för saldot är 0 och uppdateras när användaren lägger till inkomster eller utgifter.
let balance = 0;

// Hämtar HTML-element 
const descriptionInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceElement = document.getElementById("balance");


// Funktion som hanterar både inkomst och utgift beroende på vilken typ som skickas in ("income" eller "expense").
// Funktionen tar en parameter transactionType
// När funktionen anropas från knapparna skickar jag in olika argument, antingen "income" eller "expense".
function handleTransaction(transactionType) {

  // Hämtar värdena från input-fälten
  const description = descriptionInput.value.trim(); 
  const amountValue = amountInput.value.trim();

  // Validering: tomma fält - om beskrivning eller belopp är tomt, avbryt funktionen
  // Ger användaren en alert om att fylla i båda fälten
  if (description === "" || amountValue === "") {
    alert("Vänligen fyll i båda fälten");
    return;
  }

  // Validering: beloppet måste vara en giltig nummer/siffra, avbryts funktionen
  // Ger användaren en alert om att ange ett giltigt belopp med siffror
  const amount = Number(amountValue); 
  if (Number.isNaN(amount)) {
    alert("Vänligen ange ett giltigt belopp med siffror.");
    return;
  }

  // Skapar ett nytt list-element (<li>)
  const listItem = document.createElement("li");

  // Lägger till list-item i rätt lista och öka eller minska saldot beroende på transaktionstypen
  if (transactionType === "income") {
    listItem.textContent = `${description} - ${amountValue} kr (Inkomst)`; 
    incomeList.appendChild(listItem);
    
    balance += amount; // Ökar saldot med beloppet för en inkomst

  } else if (transactionType === "expense") { 
    listItem.textContent = `${description} - ${amountValue} kr (Utgift)`;
    expenseList.appendChild(listItem);
    
    balance -= amount; // Minskar saldot med beloppet för en utgift
  }

  // Uppdatera saldot i UI:t - användargränssnittet
  balanceElement.textContent = balance;

  // Tömmer input-fälten (UX) - efter lyckad transaktion
  descriptionInput.value = "";
  amountInput.value = "";
}

// Event listeners för knapparna som anropar handleTransaction med rätt typ av transaktion
incomeBtn.addEventListener("click", function () {
  handleTransaction("income");  // Anropar funktionen med argumentet "income" när inkomst-knappen klickas
});

expenseBtn.addEventListener("click", function () {
  handleTransaction("expense"); // Anropar funktionen med argumentet "expense" när utgifts-knappen klickas
});





// TODO: Uppgiftbeskrivning

// Du ska arbeta i filen src/script.js. Målet är att användaren ska kunna skriva in en beskrivning och ett belopp, och sedan klicka på antingen "Lägg till Inkomst" eller "Lägg till Utgift".

// Totalt kan du få 100 poäng på provet.

// Funktionella Krav
// För att klara uppgiften måste din kod uppfylla följande krav:
// 1. Hämta värden & Validering (20p)
// När användaren klickar på en knapp ska du hämta värdet från textfälten #desc och #amount.
//  (10p) Om något av fälten är tomt ska ingen transaktion läggas till.
//  (10p) Om beloppet inte är en siffra ska det hanteras snyggt (ingen transaktion läggs till).

// 2. Uppdatera listorna (30p)
// Beroende på vilken knapp som klickas ska en ny rad (<li>) läggas till i motsvarande lista (#incomeList eller #expenseList).
//  (10p) Klick på "Inkomst" lägger till rad i inkomstlistan.
//  (10p) Klick på "Utgift" lägger till rad i utgiftslistan.
//  (10p) Viktigt: Texten i listpunkten måste följa detta format exakt:   - För inkomst: Beskrivning - Belopp kr (Inkomst)   - För utgift: Beskrivning - Belopp kr (Utgift)

// 3. Beräkna Saldo (20p)
// Saldot (#balance) ska starta på 0.
//  (10p) Inkomster ska öka saldot och uppdatera siffran på skärmen.
//  (10p) Utgifter ska minska saldot och uppdatera siffran på skärmen.

// 4. UX - Användarupplevelse (10p)
//  (10p) Efter att en transaktion lagts till (och lyckats) ska båda inmatningsfälten tömmas automatiskt.

// 5. Inlämning & Video (20p)
// Förutom koden ska du spela in en kort skärminspelning där du demonstrerar din lösning.

// Spela in när du lägger till en inkomst, en utgift och visar att saldot ändras.
// Döp filen till exakt: videoprov.mp4.
// Lägg filen i rotmappen (samma ställe som denna README och package.json).
// OBS: Filen får inte vara större än 100MB.
