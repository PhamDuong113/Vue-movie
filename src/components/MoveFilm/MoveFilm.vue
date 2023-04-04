<template>
  <div class="movies-grid">
    <div
      v-show="move.poster_path"
      class="movie-card"
      v-for="(move, index) in Moves"
      :key="index"
      @click="HandleClickMovie(move.id)"
    >
      <div class="card-head">
        <img :src="posters(index)" alt="" class="card-img" />

        <div class="card-overlay">
          <div class="bookmark">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>

          <div class="rating">
            <ion-icon name="star-outline"></ion-icon>
            <span>{{ move.vote_average }}</span>
          </div>

          <div class="play">
            <ion-icon name="play-circle-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div class="card-body">
        <h3 class="card-title">{{ move.title }}</h3>

        <div class="card-info">
          <span class="genre">MOVE</span>
          <span class="year">{{ move.release_date }}</span>
        </div>
      </div>
    </div>

    <!-- phân trang -->
    <pagination-movie
      :total_page="total_page"
      @Pagination_change="Pagination_change"
      @Next_page="Next_page"
      @Pre_page="Pre_page"
    ></pagination-movie>
  </div>
</template>
\
<script src="./MoveFilm"></script>
<style src="./MoveFilm.css"></style>
