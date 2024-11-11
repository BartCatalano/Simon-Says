<!-- Descrizione -->
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

<!-- DESCRIZIONE SVOLGIMENTO IN LINGUA UMANA -->
1) creare la generazione di 5 numeri random interi

2) creare un conto alla rovascia da 0 a 30 

3)collegare un bottone che fa apparire i numeri e fa partire il conto

4) alla fine del conto nascondere i numeri e far comparire 5 celle compilative dove l'utente deve inserire i 5 numeri mostrati in precedenza

5) fare confronto tra i numeri apparsi e quelli inseriti 

6) dare un messaggio finale con i numeri indovinati.

<!-- SVOLGIMENTO CODICE -->
1)usare math.random per i numeri casuali

2)creare il conto con setTimeout con una var che aumenta ogni secondo

3) creare un bottone (form con submit?) che quando viene premuto   inizia il gioco con l'apparizione della pagina con numeri e conto alla rovescia usando la var display on e off sulla pagina dei numeri

4) dare nuovamente display off allo scadere del tempo alla pagina dei numeri e far apparire una pagina con celle compilative per utente e un bottone con funzione submit e form e dare nuovamente display off alla pagina del submit

5) fare operazione di confronco usando un array e il comando .includes per vedere se i numeri ci sono

6) far uscire un mex finale con risultato.
