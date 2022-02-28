<template>
  <div class="p-6">
    <h2 class="text-center font-sans text-2xl pb-10">Users Table</h2>
    <!--
      1. dohvati podatke sa https://api.infosit-zadatak.tk/api/entity kod učitavanja modula i dodaj te podatke u varijablu users
      2. prikaži podatke dobivene u varijabli users unutar tablice 
         - tablica mora sadržavati sljedeće stupace: avatar, ime, država, opis
         - slika u avataru treba biti dimenzija 50x50px
         - tablica treba biti stilizirana (po izboru odabrati boje, razmake, veličine itd.)
         - hendlati polja u tablici koja imaju puno teksta na način da se prikazuje uredno
         - ograničiti broj korisnika u tablici na 8 usera
         - * dodatni bodovi za korištenje tailwinda u stiliziranju tablice
     
       / AVATAR       / IME            / DRŽAVA       / OPIS
       / slika.jpg    / Marko Markić   / Maroko       / Lorem ipsum dolor sit amet...
       / slika.jpg    / Ana Anić       / Angolija     / Lorem ipsum dolor sit amet...
       ...
      3. Napraviti buttone za sort tablice po kolonama Ime i Država abecedno (buttoni mogu biti i izravno unutar header-a tablice za te dvije kolone)
     -->
    <table>
      <!-- ovdje napraviti tablicu -->
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
    };
  }
  //dohvati podatke sa https://api.infosit-zadatak.tk/api/entity kod učitavanja modula i dodaj te podatke u varijablu users
}
</script>

<style>
</style>
