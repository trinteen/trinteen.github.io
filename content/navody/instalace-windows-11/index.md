---
title: "Instalace Windows 11"
date: 2023-07-25T14:15:39+02:00
draft: true
---

![full](1.png)


*A) Vytvoření instalačního média*
1. Stažení programu k vytvoření instalačního media ze stránek MS = Media creation tool.
![full](2.png)

2. Po kliknutí na ikonku aplikace se se zobrazí okno s: "Chcete této aplikaci povolit, aby prováděla na vašem zařízení změny?". Zvolíme možnost ANO.
![full](3.png)

3. Potvrdíme příslušná sdělení a licenční podmínky zvolením tlačítka Příjmout
![full](4.png)

4. Vybereme jazyk a edici. Pokud nechceme měnit, tak necháme zaškrtlé Použít doporučené možnosti pro tento počítač.
![full](5.png)

5. Zvolení typu media k vytvoření.
Vytvoření USB flash disku - pokračujte bodem 6.
Vytvoření ISO souboru - pokračujte bodem 7.
![full](6.png)

6. Zvolení typu media k vytvoření.
Vytvoření USB flash disku
![full](7.png)
![full](8.png)
![full](9.png)

7. Zvolení typu media k vytvoření.
Soubor ISO
![full](10.png)
Vyberte lokaci pro uložení ISO souboru a jeho jméno.
![full](11.png)
![full](12.png)
![full](13.png)
![full](14.png)

*B) Načtení instalace z vytvořené flash*
Flash vytvořena pomocí bodu 6. Flash vytvořena pomocí zápisu z ISO souboru z bodu 7. A to pomocí programů jako Rufus, Balena Etcher, Ventoy apod.
Flash zavedeme pomocí funkce boot menu nebo úpravou pořadí zavedení disku tj. boot order v rámci BIOSu.

*C) Průběh instalace Windows 11*
1. Potvrzení zavedení z flash
Press any key to boot from CD or DVD = Stiskem libovolné klávesy budete zavádět z CD nebo DVD
![full](15.png)

2. Klikneme na tlačítko Další
![full](16.png)

3. Klikneme na tlačítko Nainstalovat
![full](17.png)

4. Zadáme licenční klíč, který jsme zakoupili. Pokud je klíč uložen v BIOSu, nebude toto okno zobrazeno.
POZOR: Pro aktivaci lze použít licenční klíč z Windows 10
Klíč je možné zadat i později pomocí možnosti Nemám kód Product Key ('Postup v ad D)1.)
![full](18.png)
a vybereme edici, kterou chceme nainstalovat a později aktivovat.
![full](19.png)

5. Potvrdíme zaškrtnutím políčka Příslušná sdělení a licenční podmínky a pokračujeme kliknutím na tlačítko Další
![full](20.png)

6. Zvolíme možnost: Vlastní: Jenom nainstalovat Windows (pokročilé)
Nainstalujeme úplně čistý systém. Vyhneme se tak případným problémům s migrací. Důsledkem poškození souborů systému a následně k jeho nefunkčnosti (použitelnosti).
![full](21.png)

7. Na jaký disk nainstalovat?
Doporučení: Pokud máme v PC/Notebooku více disků. Je lepší nechat zapojený jen systémový a ostatní odpojit. Zabrání se tak ovlivnění dat na ostatních discích.
![full](22.png) 
V případě reinstalace systému je nutné pro optimální fungování odstranit všechny oddíly systémového disku.
![full](23.png)
![full](24.png)

8. Instalujeme systém Windows
![full](25.png)
![full](26.png)

9. Opravíme pořadí disků
Pokud jsme v BIOSu nastavovali boot order nastavíme zpět systémový disk jako první.

10. Nastavení země nebo oblasti
![full](27.png)

11. Nastavení klávesnice a rozložení
![full](28.png)
![full](29.png)

12. Pojďme se připojit
Pokud máme internet, tak přejdeme k bodu 15.
![full](30.png)
Pokud nastane situace, že se nemůžete připojit k internetu.
Otevřeme si příkazový řádek klávesovou zkratka SHIFT+F10. Napíšeme příkaz: *OOBE\BYPASSNRO*.
![full](31.png)
Instalátor se restartuje a povolí se možnost Nemám internet.
![full](32.png)
Klikneme na Pokračovat s omezenou instalací
![full](33.png)

13. Pojmenování zařízeni
![full](34.png)

14. Nastavení zařízení
![full](35.png)

15. Přihlášení (vytvoření účtu)
![full](36.png)
Účet MS nechceme používat. Aktivujeme si tedy offilne účet!
Uživatelské jméno: admin
![full](37.png)
Heslo: password
![full](38.png)
následně nám to vyhodí chybu. Pokračujeme tlačítkem další
![full](39.png)
Zvolíme si jméno uživatele. Např.: uzivatel
![full](40.png)
Heslo necháme prázdné = Automatické přihlášení na plochu
![full](41.png)

16. Povolení sběru dat pro MS
![full](42.png)
![full](43.png)
![full](44.png)
![full](45.png)
![full](46.png)
![full](47.png)

17. Poslední nastavení a hurá na plochu
![full](48.png)
![full](49.png)
![full](50.png)
![full](51.png)
![full](52.png)
![full](53.png)

*D) Aktivace, aktualizace a ovladače*
1. Zkontrolujeme jestli se Windows aktivoval
![full](54.png)
Najdeme v Nastavení -> Aktivace
a pokud  jsme neaktivovali, tak klič zadáme pomocí tlačítka Změnit 
![full](55.png)

2. Vyhledáme a nainstalujeme aktualizace systému přes Windows Update
Doporučení: Tento krok opakujte tak dlouho, dokud se systém neřekne, že vše vyhledal a je aktuální
![full](56.png)
![full](57.png)

3. Nainstalování chybějících ovladačů
Potřebné ovladače najdete na stránkách výrobců základních desek, grafik a dalších rozšiřujících karet atd.
Při hledání konkrétního ovladače může pomoct i správce zařízení a Hardware ID, které zadáme o vyhledávače a najdeme tak název zařízení, pro který ovladač hledáme.
![full](58.png)
![full](59.png)
![full](60.png)
![full](61.png)