<script setup>
import Loader from "../components/Loader.vue";
</script>

<template>
  <main>
    <Loader class="flex items-center" v-if="isLoading" />
    <div v-else class="p-6 fromOpacity" :class="{ 'in-viewport': inViewport }">
      <h2 class="text-center font-sans text-2xl pb-10">Users Table</h2>
      <!--
      1. dohvati podatke sa https://api.infosit-zadatak.tk/api/entity kod učitavanja modula i dodaj te podatke u varijablu users
      2. prikaži podatke dobivene u varijabli users unutar tablice 
         - tablica mora sadržavati sljedeće stupace: avatar, ime, država, opis
         - slika u avataru treba biti dimenzija 50x50px
         - tablica treba biti stilizirana (po izboru odabrati boje, razmake, veličine itd.)
         - hendlati polja u tablici koja imaju puno teksta na način da se prikazuju uredno i da se ništa ne raspada (npr za „opis“)
         - ograničiti broj korisnika u tablici na 6 usera
         - * dodatni bodovi za korištenje tailwinda (https://tailwindcss.com/) kod kreiranja stila
     
       / AVATAR       / IME            / DRŽAVA       / OPIS
       / slika.jpg    / Marko Markić   / Maroko       / Lorem ipsum dolor sit amet...
       / slika.jpg    / Ana Anić       / Angolija     / Lorem ipsum dolor sit amet...
       ...
      3. Napraviti buttone za sort tablice po kolonama Ime i Država abecedno (buttoni mogu biti i izravno unutar header-a tablice za te dvije kolone)
     -->
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
              <table class="table-fixed min-w-[1000px]">
                <!-- ovdje napraviti tablicu -->
                <thead class="bg-blue-50 border-b-2">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Avatar
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div class="flex items-center">
                        Ime

                        <button class="p-2" @click="sortName()">
                          <img
                            src="../assets/down.svg"
                            class="h-100 transition ease-in-out duration-500"
                            :class="{ 'rotate-180': nameSort === 'Desc' }"
                            alt=""
                          />
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="min-w-fit px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div class="flex items-center">
                        Država

                        <button class="p-2" @click="sortCountry()">
                          <img
                            src="../assets/down.svg"
                            class="transition ease-in-out duration-500 max-w-none"
                            :class="{ 'rotate-180 ': countrySort === 'Desc' }"
                            alt=""
                          />
                        </button>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Opis
                    </th>
                  </tr>
                </thead>
                <tbody
                  v-for="user in users"
                  :key="user.id"
                  class="bg-white divide-y divide-gray-200 odd:bg-slate-300 even:bg-slate-100"
                >
                  <tr class="">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-[50px] w-[50px]">
                          <img
                            class="h-[50px] w-[50px] rounded-full"
                            :src="user.avatar"
                            alt=""
                          />
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">
                        {{ user.name }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">
                        {{ user.state }}
                      </div>
                    </td>
                    <td class="px-6 py-4 flex flex-wrap text-sm text-gray-500">
                      <div
                        class="text-sm font-medium text-gray-900"
                        v-html="user.body"
                      ></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import orderBy from "lodash/orderBy";
export default {
  name: "UserList",
  data() {
    return {
      users: [],
      isLoading: false,
      nameSort: "Asc",
      countrySort: "Asc",
      inViewport: false,
      showAll: false,
    };
  },
  async created() {
    this.isLoading = true;
    await axios.get("https://api.infosit-zadatak.tk/api/entity").then(
      (res) => {
        this.users = res.data.slice(0, 6);
        this.sortNameAsc();
        this.isLoading = false;
        setTimeout(() => {
          this.inViewport = true;
        }, 300);
      },
      (err) => {
        alert("Nešto je pošlo po zlu, pokušajte opet.");
        this.isLoading = false;
      }
    );
  },
  methods: {
    sortNameAsc() {
      this.users = orderBy(this.users, ["name"], ["asc"]);
      this.users.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortNameDesc() {
      this.users = orderBy(this.users, ["name"], ["desc"]);
      this.users.sort((a, b) => b.name.localeCompare(a.name));
    },
    sortCountryAsc() {
      this.users = orderBy(this.users, ["state"], ["asc"]);
    },
    sortCountryDesc() {
      this.users = orderBy(this.users, ["state"], ["desc"]);
    },
    sortName() {
      if (this.nameSort === "Asc") {
        this.sortNameDesc();
        this.nameSort = "Desc";
      } else {
        this.sortNameAsc();
        this.nameSort = "Asc";
      }
    },
    sortCountry() {
      if (this.countrySort === "Asc") {
        this.sortCountryDesc();
        this.countrySort = "Desc";
      } else {
        this.sortCountryAsc();
        this.countrySort = "Asc";
      }
    },
    getWord(desc) {
      if (this.showAll) return desc;

      let value = desc;
      let length = 30;
      if (value.length <= length) {
        return value;
      } else {
        return value.substring(0, length) + "...";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fromOpacity {
  opacity: 0;

  transition: all 1s ease-in-out;

  &.in-viewport {
    opacity: 1;
  }
}
</style>
