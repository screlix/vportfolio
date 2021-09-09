<template lang="pug">
<div id="header" ref="header">
  <div class="headerUl">
    <ul>
      <!--li  <button class="type3">MOHAMED IFOULOUSSENE</button>-->
      li  <button  v-on:click="menuLCli('header')" class="type3">Home</button>
      li  <button  v-on:click="menuLCli('about')" class="type3">About me</button>
      li  <button  v-on:click="menuLCli('projects')" class="type3">Projects</button>
      li  <button  v-on:click="menuLCli('skills')" class="type3">Skills</button>
      li <button  v-on:click="menuLCli('footerr')" class="type3">Contact me</button>
    </ul>
</div>
</div>
</template>

<script>
export default {
  methods: {
    menuLCli(e) {
      var element = document.getElementById(e);
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  mounted() {
    var ty = this.$refs["header"].classList.add("headerAnim");
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway");
$color: black;
$body-color: #ecf0f1;
$color1: #566473;
$color2: #16a085;
$color3: #435a6b;
$color4: red;

#header {
  margin-bottom: 5.5rem;
  padding-top: 1rem;
  padding-bottom: 0px !important;
  ul {
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 3px solid rgb(0, 0, 0);
    padding-bottom: 1.2rem;
    padding-top: 0.3rem;
    margin: 0;
    li {
      margin: 0 0.7rem;
      display: inline;
      list-style-type: none;
      button {
        font-weight: bold;
        font-size: 14px;
        appearance: none;
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
        position: relative;
        padding: 0.7em 1em;
        background-color: transparent;
        //Effect
        &.type3::after,
        &.type3::before {
          content: "";
          display: block;
          position: absolute;
          width: 20%;
          height: 20%;
          border: 2px solid;
          transition: all 0.6s ease;
          border-radius: 2px;
        }
        &.type3::after {
          bottom: 0;
          right: 0;
          border-top-color: transparent;
          border-left-color: transparent;
          border-bottom-color: $color3;
          border-right-color: $color3;
        }
        &.type3::before {
          top: 0;
          left: 0;
          border-bottom-color: transparent;
          border-right-color: transparent;
          border-top-color: $color3;
          border-left-color: $color3;
        }
        &.type3:hover:after,
        &.type3:hover:before {
          border-bottom-color: $color3;
          border-right-color: $color3;
          border-top-color: $color3;
          border-left-color: $color3;
          width: 100%;
          height: 100%;
        }
      }
      &:first-child {
        flex: 1 !important;
        margin-left: 0px !important;
        button {
          background: black;
          color: white !important;
        }
      }
      &:last-child {
        margin-right: 2px;
      }
    }
  }
}
.headerAnim {
  animation: fadein 1s linear;
}
@keyframes fadein {
  from {
    transform: translateY(-3rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
@media only screen and (max-width: 576px) {
  body {
    width: 100vw !important;
  }
  #header {
    ul {
      justify-content: center;
      li {
        margin: 1rem;
        &:first-child {
          flex: 1 !important;
        }
      }
    }
  }
}
</style>
