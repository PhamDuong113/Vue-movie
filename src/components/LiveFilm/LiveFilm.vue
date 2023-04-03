<template>
  <section class="live" id="live">
    <h2 class="section-heading">Live Tv Shows</h2>

    <div class="live-grid">
      <div
        class="live-card"
        v-show="Tv.backdrop_path"
        v-for="(Tv, index) in Tv"
        :key="index"
      >
        <div class="card-head" @click="HandleClickTV(Tv.id)">
          <img :src="backdrop(index)" alt="" class="card-img" />
          <div class="live-badge">TV SHOW</div>
          <div class="total-viewers">{{ Tv.popularity }}K viewers</div>
          <div class="play">
            <ion-icon name="play-circle-outline"></ion-icon>
          </div>
        </div>

        <div class="card-body">
          <img :src="posters(index)" alt="" class="avatar" />
          <h3 class="card-title">
            {{ Tv.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./LiveFilm"></script>
<style src="./LiveFilm.css"></style>
