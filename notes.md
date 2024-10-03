Zakladne prikazy

$npx create-next-app@latest - vytvorit next.js aplikaciou - 

$npm run dev – runne aplikaciu v dev mode (ohlasuje errory)

$npm run build – zkompiluje aplikaciu pre production

$npm run start – runne zbuildenu aplikaciou (v production)

Vyhradene nazvy suborov:
	- page.tsx
	- layout.tsx
	- not-found.tsx

!!subory sa takto musia volat!! ak sa volaju inak next.js ich nenajde

app adresar – router

app
|- (home) 
|
| - o-mne
|
| - podmienky

kazdy subor ma vlastny komponent
!! komponenty sa nesmu volat rovnako !!
subory v zatvorkach ignoruje, cize (home) sa nachadza na roote

http:///<adresa>/ -> root component
http:///<adresa>/o-mne -> o-mne component
...

kazda podstranka ma vlastny page, layout, not-found .tsx

misc

export const metadata = { title: `404 | ZoskaSnap` }; - metadata dolezite pre search engine

GIT

$ git init -> inicializacia gitu
$ git branch -m main -> premenuje master branch na main
$ git config –global user.name „username“ -> nastavi meno git pouzivatela
$ git config –global user.email „name@mail.com“ -> nastavi mail git pouzivatela
$ git remote add origin https://github.com/samuelC42/snap-zoska.git -> prida github link ako origin
$ git remote -v -> na kontrolu remote originov
$ git add . -> prida directory do gitu

comittovat cez vscode source control


Vercel – free production hostovanie next.js aplikacii
moja domena -> https://snap-zoska-lyart.vercel.app/



prikaz na vypisanie file structure -> $find . -not -path "./node_modules/*" -not -path "./.*" | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"