<template>
  <div>
    <b-button v-b-toggle.sidebar-right class="mobile-menu__button">
      <img src="../assets/images/menu_burger.svg" alt="">
    </b-button>
    <b-sidebar id="sidebar-right" title="" right shadow>
      <ul class="mobile__nav">
        <li>
          <nuxt-link exact active-class="active" :to="localePath('/')">{{$t('header.main')}}</nuxt-link>
        </li>
        <li>
                  <nuxt-link active-class="active" :to="localePath('/dvv')">{{$t('header.dvv')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/projects')">{{$t('header.projects')}}</nuxt-link>
        </li>
        <li>
                  <nuxt-link active-class="active" :to="localePath('/news')">{{$t('header.news')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/compitition')">{{$t('header.compitition')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/guides')">{{$t('header.guides')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/gallery')">{{$t('header.gallery')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/training')">{{$t('header.training')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/archive')">{{$t('header.archive')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/contact')">{{$t('header.contact')}}</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" :to="localePath('/about')">{{$t('header.about')}}</nuxt-link>
        </li>
      </ul>
    </b-sidebar>
  </div>
</template>
