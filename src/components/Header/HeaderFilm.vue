<template>
  <div>
    <header :class="{ active: shownavbar }">
      <div class="navbar">
        <!--
          - menu button for small screen
        -->

        <button
          class="navbar-menu-btn"
          :class="{ active: shownavbar }"
          @click="onchange"
        >
          <span class="one"></span>
          <span class="two"></span>
          <span class="three"></span>
        </button>

        <a to="/" class="navbar-brand">
          <img src="../../assets/image/logo.png" alt="" />
        </a>

        <!--
          - navbar navigation
        -->

        <nav :class="{ active: shownavbar }">
          <ul class="navbar-nav">
            <li><span class="navbar-link" @click="handlehome">Home</span></li>
            <li><div class="navbar-link" @click="handlemove">MOVE</div></li>
            <li>
              <div class="navbar-link indicator" @click="handleTv">TV Show</div>
            </li>
          </ul>
        </nav>

        <!--
          - search and sign-in
        -->

        <div class="navbar-actions">
          <form action="#" class="navbar-form" :class="{ active: searchshow }">
            <input
              type="text"
              name="search"
              placeholder="I'm looking for..."
              value=""
              class="navbar-form-search"
              v-model="keysearch"
            />
            <div class="navbar-form-btn" @click="handlesearch">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <div class="navbar-form-close" @click="handlebuttonsearch">
              <ion-icon name="close-circle-outline"></ion-icon>
            </div>
          </form>
          <!--
            - search button for small screen
          -->
          <button class="navbar-search-btn" @click="handlebuttonsearch">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <!-- 
          <div class="navbar-signin">
            <span>Sign in</span>
            <ion-icon name="log-in-outline"></ion-icon>
          </div> -->
        </div>
      </div>
    </header>
  </div>
</template>
<script src="./HeaderFilm"></script>
<style src="./HeaderFilm.css"></style>
