<template>
  <header class="header">
    <b-container fluid>
      <b-row class="header__top">
        <b-container>
          <div class="col-6 p-0">
            <b-form class="header__form">
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="Qidiruv..."
                >
                </b-form-input>
                <b-button type="submit"></b-button>
              </b-form-group>
            </b-form>
          </div>
          <div class="col-6 p-0">
            <ul class="header__lang">
              <li>
                <nuxt-link exact active-class="active" to="/">UZ</nuxt-link>
              </li>
              <li>
                <nuxt-link active-class="active" to="/">RU</nuxt-link>
              </li>
            </ul>
          </div>
        </b-container>        
      </b-row>
      <b-row class="header__bottom">
        <b-container>
          <b-row>
            <b-col cols="3" class="header__logo">
              <nuxt-link to="/">
                <img src="../assets/images/logo.png" alt="logo">
              </nuxt-link>
            </b-col>
            <b-col cols="9">
              <ul class="header__nav">
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
            </b-col>
          </b-row>
        </b-container>
      </b-row>
    </b-container>
  </header>
</template>