<template>
  <nav aria-label="Page navigation example" class="pagination">
    <ul class="pagination">
      <li class="page-item" @click="Pre_page">
        <div class="page-link">Previous</div>
      </li>
      <li
        class="page-item"
        :class="{ active: page.IsPageChoose }"
        v-for="(page, index) in total_page"
        :key="index"
        @click="Pagination(page.pageid)"
      >
        <div class="page-link">{{ page.pageid }}</div>
      </li>

      <li class="page-item" @click="Next_page">
        <div class="page-link">Next</div>
      </li>
    </ul>
  </nav>
</template>

<script src="./PaginationMovie"></script>
<style src="./PaginationMovie.css"></style>
