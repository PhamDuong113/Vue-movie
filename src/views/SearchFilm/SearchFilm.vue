<template>
  <section class="movies">
    {{ searchmovies }}
    <div>
      <div v-if="!isProcessing" class="filter-bar">
        <div v-if="movieSearchs.length > 0" class="filter-dropdowns">
          Result Found: {{ keymove }}
        </div>
        <div v-else class="filter-dropdowns">
          Result Found: {{ keymove }} not found
        </div>
      </div>
    </div>

    <div class="movies-grid" v-if="movieSearchs.length > 0 && !isProcessing">
      <div
        v-show="moviesearch.poster_path"
        class="movie-card"
        v-for="(moviesearch, index) in movieSearchs"
        :key="index"
        @click="ClickDetailMovieSSearch(moviesearch.id, moviesearch.media_type)"
      >
        <div class="card-head">
          <img :src="poster(index)" alt="" class="card-img" />

          <div class="card-overlay">
            <div class="bookmark">
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <div class="rating">
              <ion-icon name="star-outline"></ion-icon>
              <span>{{ moviesearch.vote_average }}</span>
            </div>

            <div class="play">
              <ion-icon name="play-circle-outline"></ion-icon>
            </div>
          </div>
        </div>

        <div class="card-body">
          <h3 class="card-title">
            {{ moviesearch.title || moviesearch.name }}
          </h3>

          <div class="card-info">
            <span class="genre">{{ moviesearch.media_type }}</span>
            <span class="year">{{
              moviesearch.release_date || moviesearch.first_air_date
            }}</span>
          </div>
        </div>
      </div>

      <pagination-movie
        :total_page="total_page"
        @Pagination_change="Pagination_change"
        @Pre_page="Pre_page"
        @Next_page="Next_page"
      ></pagination-movie>
    </div>
    <div v-else-if="isProcessing"></div>
    <NotFound v-else />

    <!-- 
{numOfPages > 1 && (
    <CustomPagination setPage={setpage} numOfPages={numOfPages} />
)} -->
  </section>
</template>
<script src="./SearchFilm"></script>
<style src="./SearchFilm.css"></style>
