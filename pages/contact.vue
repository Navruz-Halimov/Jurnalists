<template>
  <div class="contact-page">
    <b-container class="links p-0 mb-5" fluid="fluid">
      <b-container>
        <b-row>
          <b-col class="p-0" lg="12">
            <!-- <div class="link">
              <a href="#">Asosiy</a> / <span>Aloqa</span>
            </div> -->
            <Breadcrumb/>
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
              <h1 class="contact-page__title">Kontaktlar</h1>
            </div>
          </b-row>
          <b-row class="contact-page__info">
            <b-col md="4"  class="contact-page__item">
              <div class="contact-page__icon">
                <img src="../assets/images/address.svg" alt="">
              </div>
              <div class="contact-page__info-title">Adress</div>
              <div class="contact-page__body">700000, Uzbekistan, Tashkent sh. Sergili rayon, Lev Tolstoy ko’chasi, 64 uy</div>
            </b-col>
            <b-col md="4"  class="contact-page__item">
              <div class="contact-page__icon">
                <img src="../assets/images/phone.svg" alt="">
              </div>
              <div class="contact-page__info-title">Telefon</div>
              <div class="contact-page__body">
                <a href="tel:+998916036765">+998 91 603 67 65</a>
                <a href="tel:+998916036765">+998 91 603 67 65</a>
              </div>
            </b-col>
            <b-col md="4"  class="contact-page__item">
              <div class="contact-page__icon">
                <img src="../assets/images/email.svg" alt="">
              </div>
              <div class="contact-page__info-title">E-mail</div>
              <div class="contact-page__body">
                <a href="mailto:test@unsuportmail.ru">test@unsuportmail.ru</a>
              </div>
            </b-col>
          </b-row>
          <b-row class="contact-page__map">
            <b-col cols="12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383839.0816026483!2d69.00569993118535!3d41.27093513250947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd038c8c86def6e!2sGreatSoft%20Company!5e0!3m2!1sru!2s!4v1605677189746!5m2!1sru!2s" 
                width="auto" 
                height="400" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="" 
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>    
  </div>
</template>