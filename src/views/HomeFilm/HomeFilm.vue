<template>
  <div>
    <!-- Banner phim -->

    <BannerFilm />
    <!-- phần lọc phim -->
    <section class="movies">
      <FilterFilm
        @Geneid="Geneid($event)"
        @filteryear="filteryear($event)"
        @rankmovie="(rank) => filterrankmovie(rank)"
      />
      <!-- movie -->
      <MoveFilm
        :typemoveid="typemoveid"
        :year="year"
        :rankmove="rankmove"
      ></MoveFilm>
    </section>

    <LiveFilm />
  </div>
</template>
<script src="./HomeFilm"></script>
<style></style>
