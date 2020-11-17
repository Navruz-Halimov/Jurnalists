<template>
  <div>
    <b-button v-b-toggle.sidebar-right class="mobile-menu__button">
      <img src="../assets/images/menu_burger.svg" alt="">
    </b-button>
    <b-sidebar id="sidebar-right" title="" right shadow>
      <ul class="mobile__nav">
        <li>
          <nuxt-link exact active-class="active" to="/">Asosiy</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/loyihalar">Loyihalar</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/tanlovlar">Tanlovlar</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/qo’llanmalar">Qo’llanmalar</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/galeriya">Galeriya</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/treninglar">Treninglar</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/arxiv">Arxiv</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/aloqa">Aloqa</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/biz-haqimizda">Biz haqimizda</nuxt-link>
        </li>
      </ul>
    </b-sidebar>
  </div>
</template>
