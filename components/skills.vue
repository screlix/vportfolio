<template>
  <div id="skills" ref="skillsref">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10 col-12 skillscol1 text-center mb-5" ref="skills1">
        <span>Skills</span>
        <hr />
      </div>
      <div class="col-lg-10 col-10 skillscol2 d-flex flex-wrap justify-content-center">
        <div
          class="skillsCa"
          v-for="(el, index) in skillsArr"
          :key="index"
          v-tooltip="el.tl"
          :style="{
            backgroundColor: el.clr,
            color: el.clr == 'black' ? 'white' : 'black'
          }"
        >
          <i :class="el.cls"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsArr: [
        { cls: "fab fa-html5", tl: "HTML", clr: "black" },
        { cls: "fab fa-css3-alt", tl: "CSS", clr: "white" },
        { cls: "fab fa-sass", tl: "SASS", clr: "black" },
        { cls: "fab fa-bootstrap", tl: "Bootstrap", clr: "white" },
        { cls: "fab fa-js", tl: "Javascript", clr: "black" },
        { cls: "fab fa-vuejs", tl: "VUEjs", clr: "white" }
      ],
      clrr: "black"
    };
  },
  computed: {
    clrCheck(v) {
      return v == "black" ? "white" : "black";
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entites => {
      if (entites[0].intersectionRatio > 0) {
        this.$refs["skills1"].classList.add("skills1");
      }
    });
    this.observer.observe(this.$refs.skillsref);
  }
};
</script>

<style lang="scss">
#skills {
  padding: 6rem 0;
  .skillscol1 {
    span {
      padding: 0.2rem 3rem;
      position: relative;
      font-size: 40px;
      font-weight: bold;
      display: inline-block;
      background: linear-gradient(to right, #f8f8f8 50%, rgb(0, 0, 0) 50%)
          bottom,
        linear-gradient(to right, rgb(0, 0, 0) 50%, #f8f8f8 50%) top;
      background-repeat: no-repeat;
      background-size: 100% 2px;
    }

    hr {
      width: 50%;
      border-width: 2px;
      border-color: black;
      display: none;
    }
  }
  .skillscol2 {
    flex-wrap: wrap;
    .skillsCa {
      text-align: center;
      vertical-align: middle;
      padding: 5rem 0;
      width: 280px;
      cursor: pointer;
      i {
        font-size: 80px;
      }
    }
  }
}
.skills1 {
  animation: skills1Anim 1s ease-out;
}
@keyframes skills1Anim {
  from {
    transform: translateX(20rem);
    opacity: 0;
  }
  to {
    transform: translateX(0rem);
    opacity: 1;
  }
}
</style>
