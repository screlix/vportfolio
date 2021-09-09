<template>
  <div id="projects" ref="projectsref">
    <div class="row d-felx align-items-center justify-content-around">
      <div class="col-lg-6 col-12 projectscol2">
        <carousel
          :per-page="1"
          :mouse-drag="false"
          :paginationEnabled="false"
          ref="carousel"
        >
          <slide v-for="(el, index) in projectsArr" :key="index">
            <projectsCard :namex="el.namex" :imgL="el.imgL" :link="el.link" />
          </slide>
        </carousel>
        <div class="paginationCstm">
          <a @click.prevent="prevSlide"><i class="fal fa-chevron-left"></i></a>
          <a @click.prevent="nextSlide"><i class="fal fa-chevron-right"></i></a>
        </div>
      </div>
      <div class="col-lg-5 col-12 projectscol1">
        <h1>Projects...</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectsArr: [
        {
          namex: "Digital Agency Landing Page",
          imgL: "agencyapp.png",
          link: "https://digi-gency.netlify.app/"
        },
        {
          namex: "Movies Api App",
          imgL: "movieapp.png",
          link: "https://moviem.netlify.app/"
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        this.$refs["projectsref"].classList.add("projectsAnim");
      }
    });
    this.observer.observe(this.$refs.projectsref);
  }
};
</script>

<style lang="scss">
#projects {
  padding: 6rem 0;
  .projectscol1 {
    h1 {
      font-weight: bold;
      font-size: 90px;
    }
  }
  .projectscol2 {
    .paginationCstm {
      margin-top: 1.5rem;
      margin-left: 1rem;
      a {
        cursor: pointer;
        padding: 0.8rem 1.2rem;
        font-size: 16px;
        color: black;
        font-weight: bold;
        border-radius: 3rem;
        border: 1px solid black;
        margin: 0.3rem;
      }
    }
  }
}
.projectsAnim {
  animation: projectsAnim 1s linear;
}
@keyframes projectsAnim {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@media only screen and (max-width:576px){
    .projectscol1 {
    h1 {
      font-size: 60px !important;
    }
  }
.projectscol2 {
  margin-bottom: 3rem;
}
}
</style>
