---
title: "Instalace Arch Linuxu"
date: 2023-10-21T13:19:37+02:00
draft: true
---

![full](arch_logo.png)

# Úvod

### Důvod vzniku tohoto návodu?
Za léta strávená za PC, jsme narazil na různé linuxové systémy, jako např. **Damn Small Linux, Slax, Ubuntu, Fedora, Suse, .... a Arch Linux**. Pro začátečníka se Arch Linux se zdá těžký a k nepochopení, ale mohu říct, že jsem o Linuxu řekl mnoho lidem – začátečníkům. Ano ze začátku bylo hodně pádů, chyb. Správného IT nadšence nezastaví ani tohle. Zkoušeli to opakovaně, až dosáhli cíle, a ještě se naučili pracovat se systém od začátku s **terminálem**.

Ovládat terminál je základ práce s Linuxem. Pokud se něco pokazí, tak skončíš právě v něm. V terminálu se snažíš příčinu najít a opravit.

S Arch Linuxem jsem se seznámil přes bratrance, který v něm pracoval. Mě ten systém nadrhl a začal jsem se s ním prodírat. Ano ze začátku se mi nedařilo uznávám. Po letech jsem se k němu vrátil díky **Arch Install Sciptu**, který instalací pro začátek usnadní a urychlí. Ale když máte kolem sebe komunitu Linuxáků, kteří sdílí stejné nadšení a máte možnost se něco nového naučit, předat své poznatky je super. A Díky nim přijdete na to že s Linuxem je ještě větší radost pracovat a hrát si s ním. Tímto návodem bych ukázal že nainstalovat Arch Linux není zas tak složíte, jak se může na první pohled zdát. Jen to chce chuť, čas a nebát se selhání z chyb.

### Co je to Arch Linux
Arch Linux je nezávislá linuxová distribuce vytvořená Juddem Vinetem, jenž se inspiroval distribucí CRUX Linux. Arch Linux je vyvíjen jako nenáročný, odlehčený a snadno přizpůsobitelný systém. (zdroj: wikipedia.org)

### Proč právě Arch Linux?
Jako balíčkovací systém používá pacman. Dále je pak k dispozici repozitář AUR (Arch User Repository), kam mohou vývojáři a uživatelé přidávat další software, jehož balíčky chybí v oficiálních zdrojích, a hlasovat o jejich zařazení do komunitního repozitáře. 

Doporučím doplnit repozitář [**Chaotic-AUR**](https://aur.chaotic.cx/), který automaticky předkompiluje balíčky z AUR, a ušetří se tak hromada času při instalaci programu.


# A hurá do instalace Arch Linuxu

V tomto návodě bude instalace probíhat s předpokladem že máme zařízení podporující/pracující s módem biosu v UEFI a s připojeným internetem.

Pro další nastavení v případě nejasností nebo doplnění navštivte [Wiki pro Arch Linux](https://wiki.archlinux.org/).

### Stáhneme si instalační médium
Na webových stránkách [**archlinux.org**](https://archlinux.org/download/) v sekci **Download** sjedeme níže, v seznamu zrcadel (mirrors) najdeme požadovanou zemi **Czechia** a klikneme na libovolný odkaz.
![full](mirrors.png)

V seznamu souborů stáhneme libovolný soubor s koncovkou ISO (obraz disku). A vyčkáme na jeho stažení.
![full](mirrors2.png)

Jakmile se nám soubor stáhne. Tak si soubor:
1) vypálíme na DVD
2) zapíšeme na flash - [Rufus](https://rufus.ie/), [Balena Etcher](https://etcher.balena.io/), DD, apod
3) vytvoříme Ventoy flash s funkcí čtení právě obrazů médií - [Ventoy](https://www.ventoy.net/) (Doporučuji) 


### Nabootojeme instalaci na PC nebo NTB
Flash zavedeme pomocí BIOS/UEFI a to buď změnou v BOOT ORDER, kdy dáme flash jako první a nebo v BOOT MENU, kde zvolíme flash pro zavedení. 

*Jak na to najdete v návodu svého PC(desky) nebo NTB(podle značky)*


### Uspěšné zavedení instalačního média

1) Uvodní menu po nabootování
V **GNU GRUB menu** zvolíme první volbu **Arch Linux install medium...**.
![full](1.png)

2) Závádění systému do paměti
![full](2.png)

3) Konzole úspěšně načtena
![full](3.png)

4) Ověříme nebo nastavíme připojení k internetu.
Instalace probíhá prostřednictvím internetu, kdy se stahují nejaktuálnější balíčky pro systém. Je tedy nutné zajistit stabilní připojení.

    a) Použijeme funkci **ping** na server google.com, kterým si ověříme zda komunikujeme s daným serverem, resp. jsme připojeni k internetu. Kombinací kláves **CTRL+C** proces ping ukončíme.
    ![full](4.png)

    > **ping google.com**

    b) Připojení k Wi-Fi nastavíme pomoci **iwctl** (více info [ZDE](https://wiki.archlinux.org/title/iwd)) Pro ověření provedeme krok opět ping.
    
5) Nastavíme si layout klávesnice pro pohodlnější psaní

    Pomocí příkazu **loadkeys** nastavíme české rozložení klávesnice.

    > **loadkeys cz**

6) Synchronizujeme si čas
    
    Pomocí příkazu **timedatectl** spustíme na pozadí se synchronizování času, ať zamezíme případnému budoucímu selhání stahování z důvodu nesouhlasu s časem.

    > **timedatectl set-ntp true**


6) Připravíme disk a jeho oddíly

    a) Jaký disk je ten správný?
    
    Identifikujeme označení disku na který budeme chtít systém nainstalovat. Pomocí příkazu **lsblk** si vypíšeme seznam bloku - oddílu (disku). V našem případě se jedná o disk o kapacitě 120gb s označením **sda**.
    ![full](5.png)

    b) Jak nastavíme oddíly?
    
    V případě UEFI nebo povinného oddílu EFI pro zavaděč systému jsou nutné minimálně 2-3 oddíly. Proč 2 nebo 3. To proto jestli budeme využívat SWAP oddíl – nebo-li oddíl pro ukládání dat pro případ malé nebo nedostačující paměti RAM.

    Kdy je dobré tento oddíl vytvořit? Swap oddíl se doporučuje vytvořit při maximální kapacitě paměti RAM < 8GB. Kdy optimální velikost SWAP oddílu je uřčena výpočtem [KAPACITA RAM] x 2, tj. 4GB*2= 8GB. Pokud máte 8GB a více RAM, je vytvoření SWAP oddílu na vás. Pokud máte dostatek kapacity, tak proč ho neudělat. Nikdy nevíte, kdy se hodí.

    V našem návodu si tento SWAP oddíl vytvoříme.
    
    | Oddíl | Formát | Kapacita | Popis |
    |-------|--------|----------|-------|
    | sda1 | fat23 | 512MB | Boot - Grub |
    | sda2 | - | 16 GB | SWAP |
    | sda3 | ext4 | zbytek | Root - systém |

    Pro správu disku - smazaní a vytvoření nových oddílů využijeme **cfdisk**. Pro zobrazení tabulky oddílů našeho disku **sda** (umístění: **/dev/sda**) použijeme příkaz: **cfdisk /dev/sda**.

    V něm nejprve odstraníme (DELETE) existující oddíly.
    ![full](6.png)
    ![full](7.png)

    Následně pak vytvoříme jednotlivé oddíly dle tabulky nahoře.
    - zvolíme **New**
    - partition size: **512MB**
    - šipkama přejde na **Free Space** a dáme opět **New**
    - partition size: **16GB**
    - šipkama přejde na **Free Space** a dáme opět **New**
    - partition size: **Necháme předvyplněnou hodnotu - využijeme zbytek**

    Výsledná tabulka po změnách:
    ![full](8.png)

    Provedené změny zapíšeme zvolením **Write** a napsáním potvrzovacího **yes**. Program ukončíme volnou **Quit**.


    c) Nově vytvořené oddíly naformátujeme a nastavíme

    Oddíl **sda1** (512MB) bude určený pro uložení GRUBu a zavádění systémů z UEFI:
    
    > **mkfs.fat -F 23 /dev/sda1**

    Oddíl 2 **sda2** (16GB) bude určený pro SWAP:
    
    > **mkswap /dev/sda2**
    
    > **swapon /dev/sda2**

    Oddíl 3 **sda3** (104GB) bude root (prostor pro system). Pokud bude vyžadováno potvrzení, tak potvrdíme **y**.

    > **mkfs.ext4 /dev/sda3**


    d) Připojíme oddíly do dočasné složky
    
    Nově vytvořené a naformátované oddíly připojíme do dočasné složky a provedeme jejich propojení.

    > **mount /dev/sda3 /mnt/**

    Vstoupíme do připojené složky **/mnt**

    > **cd /mnt**

    Vytvoříme složku **boot**, do které připojíme boot oddil **sda1**.

    > **mkdir boot**

    > **mount /dev/sda1 boot/**

    Správnost připojení si ověříme pomocí příkazu **lsblk**.
    ![full](9.png)

### Instalace základního systému

1) aktualizace zrcadel v mirrorlistu

    > **reflector -c Czechia > /etc/pacman.d/mirrorlist**

2) Instalace základních součástí systému pro správný běh
    ![full](10.png)
    ![full](11.png)

    > **pacstrap -K /mnt base base-devel linux linux-firmware linux-headers nano git grub efibootmgr**

3) Zapsat strukturu oddilu do souboru Fstab

    > **genfstab -U /mnt >> /mnt/etc/fstab**

4) Napojení na nově nainstalovaný system
    
    Tímto příkazem se přepnete do terminálu nově nainstalovaného systému.

    > **arch-chroot /mnt**


### Finální nastavení nového systému

1) Nastavení časové zóny a systémového času

    > **ln -sf /usr/share/zoneinfo/Europe/Prague /etc/localtime**

    > **hwclock \-\-systohc**

2) Nastavení lokalizace

    Upravíme soubor **/etc/locale.gen**

    > **nano /etc/locale.gen**

    kde odkomentujeme/odstraníme #

    z:

    > **#cs_CZ.UTF-8 UTF-8**
    
    na:

    > **cs_CZ.UTF-8 UTF-8**

    změny uložíme **CTRL+S**, ukončíme **CTRL+X** a spustíme generování:

    > **locale-gen**
    
3) Nastavení sítě

    Nastavíme jméno počítače

    > **echo "navod" > /etc/hostname**

4) Vytvoření Initramfs

    > **mkinitcpio -P**

5) Nastavení hesla pro správce (root) uživatele

    POZOR při zadávání není heslo vidět!
    
    > **passwd**

    ![full](12.png)

6) Instalace GRUB

    > **grub-install --target=x86_64-efi --efi-directory=/boot/**

    > **grub-mkconfig -o /boot/grub/grub.cfg**


7) Ukončení relace v **arch-chroot**

    > exit


### Po instalaci a nastavení

1) Odpojení připojených oddílů

    V případě problému s odpojením restartujte.

    > **umount /mnt/boot**

    > **umount /mnt/**

2) Restartování

    > **reboot**



### První spustění nově nainstalovaného systému

![full](13.png)


# Návod se průběžně doplňuje

Průběžně budu doplňovat a přidávat další kroky.
