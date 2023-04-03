<template>
  <!--
  - filter the loai
-->

  <div class="filter-bar">

    <div class="filter-dropdowns">
      <select name="typemoveid" class="genre" v-model="typemoveid">
        <option :value="gene.id" v-for="(gene, index) in genes" :key="index">
          {{ gene.name }}
        </option>
      </select>

      <!-- filter year -->

      <select name="year" class="year" v-model="year">
        <option
          :value="time.getFullYear() - index + 1"
          v-for="index in 10"
          :key="index"
        >
          Time-{{ time.getFullYear() - index + 1 }}
        </option>
      </select>
    </div>

    <!-- xem độ phổ biến  -->

    <div class="filter-radios">
      <input
        type="radio"
        name="grade"
        id="popular"
        value="popularity.desc"
        defaultChecked
      />
      <label For="popular" @click="popularity">Popular</label>

      <input
        type="radio"
        name="grade"
        id="featured"
        value="vote_average.desc"
      />
      <label For="featured" @click="vote_average">Rating</label>

      <input type="radio" name="grade" id="newest" value="release_date.desc" />
      <label For="newest" @click="release_date">Upcoming</label>

      <div class="checked-radio-bg"></div>
    </div>
  </div>
</template>
<script src="./FilterFilm"></script>
<style src="./FilterFilm.css"></style>
