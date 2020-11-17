<template>
  <div class="left__content">
    <div class="left__top">
      <span>08.11.2020</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      <span>08.11.2020</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      <span>08.11.2020</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
      <span>08.11.2020</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
    </div>
    <div class="left__bottom">
      <img src="../assets/images/Rectangle12.png" alt="">
      <b-form>
        <b-form-group>
          <b-form-input type="text" required placeholder="Name"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input type="text" required placeholder="Phone"></b-form-input>
        </b-form-group>
        <b-form-textarea placeholder="Comment" rows="8"></b-form-textarea>
        <b-button type="submit" variant="primary">Send</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "left-content",
        data() {
            return {}
        }
    }
</script>
