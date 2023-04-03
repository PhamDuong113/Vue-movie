<template>
  <div class="move-container" id="page-player">
    <div class="box-player" id="box-player">
      <div id="player">
        <div id="player-area" v-if="type == 'movie'">
          <!-- {infomove[1] == "movie" ? -->

          <iframe
            style="width: 100%; height: 82%"
            :src="PlayMovie"
            frameBorder="0"
            scrolling="no"
            allowFullScreen=""
            allow="autoplay"
          ></iframe>

          <div
            class="film-notes"
            style="margin-bottom: 20px; border: 1px solid #b8b612; padding: 5px"
          >
            Phim Xem tốt nhất trên trình duyệt Safari,FireFox hoặc Chrome. Đừng
            tiếc 1 comment bên dưới để đánh giá phim hoặc báo lỗi. Đổi server
            nếu lỗi, lag
          </div>
        </div>
        <div id="player-area" v-else>
          <iframe
            style="width: 100%; height: 65%"
            :src="PlayTv"
            frameBorder="0"
            scrolling="no"
            allowFullScreen=""
            allow="autoplay"
          ></iframe>

          <div
            class="film-note"
            style="margin-bottom: 20px; border: 1px solid #b8b612; padding: 5px"
          >
            Phim Xem tốt nhất trên trình duyệt Safari,FireFox hoặc Chrome. Đừng
            tiếc 1 comment bên dưới để đánh giá phim hoặc báo lỗi. Đổi server
            nếu lỗi, lag
          </div>

          <div class="list-server" id="list-server">
            <div class="server-group clearfix">
              <span><i class="fa fa-database"></i> Danh sách tập phim</span>
              <ul class="episodes">
                <li
                  v-for="(eps, index) in detailmovie.number_of_episodes"
                  :key="index"
                >
                  <a title="" class="" @click="ClickEps(index + 1)">{{
                    index + 1
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./MoviePlay"></script>
<style src="./MoviePlay.css"></style>
