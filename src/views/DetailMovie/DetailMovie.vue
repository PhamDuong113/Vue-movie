<template>
  <div>
    <article>
      <section
        class="movie-detail"
 
      >
        <div class="container">
          <figure class="movie-detail-banner" @click="MoviePlay">
            <img :src="poster" :alt="detailmovie.name" />

            <button class="play-btn">
              <ion-icon name="play-circle-outline"></ion-icon>
            </button>
          </figure>

          <div class="movie-detail-content">
            <p class="detail-subtitle">New Episodes</p>

            <h1 class="h1 detail-title">{{ detailmovie.title }}</h1>

            <div class="meta-wrapper">
              <div class="badge-wrapper">
                <div class="badge badge-fill">PG 13</div>

                <div class="badge badge-outline">HD</div>
              </div>

              <div class="ganre-wrapper">
                <span
                  v-for="(genres, index) in detailmovie.genres"
                  :key="index"
                  >{{ genres.name }}</span
                >
              </div>

              <div class="date-time">
                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time dateTime="2021">{{ detailmovie.release_date }}</time>
                </div>

                <div>
                  <ion-icon name="time-outline"></ion-icon>

                  <time dateTime="PT115M">{{ detailmovie.runtime }} min</time>
                </div>
              </div>
            </div>

            <p class="storyline">{{ detailmovie.overview }}</p>

            <div class="details-actions">
              <button class="share">
                <ion-icon name="share-social"></ion-icon>

                <span>Share</span>
              </button>

              <div class="title-wrapper">
                <p class="title">Prime Video</p>

                <p class="text">Streaming Channels</p>
              </div>

              <button class="btn btn-primary" @click="MoviePlay">
                <ion-icon name="play"></ion-icon>

                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>

    <MoviePlay v-show="active" :detailmovie="detailmovie" />
  </div>
</template>

<script src="./DetailMovie"></script>
<style src="./DetailMovie.css"></style>
