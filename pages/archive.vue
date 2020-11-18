<template>
  <div class="archive-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <div class="link">
              <a href="#">Asosiy</a> / <span>Arxiv</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row class="mobile__view">
        <b-col class="pl-0" lg="3">
          <left-content />
        </b-col>
        <b-col lg="9">
          <b-row>
            <div class="col-12">
              <h1 class="archive-page__title">Arxiv</h1>
            </div>
          </b-row>
          <b-row class="archive-page__list">
            <b-col md="6" class="archive-page__item">
              <nuxt-link to="/archiveitem" class="archive-page__img">
                <img src="../assets/images/archive_page1.png" alt="">
              </nuxt-link>
              <nuxt-link to="/archiveitem" class="archive-page__subtitle">Mavzu (title)</nuxt-link>
              <div class="archive-page__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. </div>
            </b-col>
            <b-col md="6" class="archive-page__item">
              <nuxt-link to="" class="archive-page__img">
                <img src="../assets/images/archive_page1.png" alt="">
              </nuxt-link>
              <nuxt-link to="" class="archive-page__subtitle">Mavzu (title)</nuxt-link>
              <div class="archive-page__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. </div>
            </b-col>
            <b-col md="6" class="archive-page__item">
              <nuxt-link to="" class="archive-page__img">
                <img src="../assets/images/archive_page1.png" alt="">
              </nuxt-link>
              <nuxt-link to="" class="archive-page__subtitle">Mavzu (title)</nuxt-link>
              <div class="archive-page__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. </div>
            </b-col>
            <b-col md="6" class="archive-page__item">
              <nuxt-link to="" class="archive-page__img">
                <img src="../assets/images/archive_page1.png" alt="">
              </nuxt-link>
              <nuxt-link to="" class="archive-page__subtitle">Mavzu (title)</nuxt-link>
              <div class="archive-page__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>