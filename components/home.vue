<template>
  <div id="home">
    <div class="row d-flex align-items-center justify-content-around">
      <div class="col-lg-5 col-md-4 col-10 col1home mb-4" ref="homeref">
        <h1 class="mb-2">MOHAMED IFOULOUSSENE</h1>
        <div class="typewriter mb-5">
          <p>&lt; Junior Front End Developer. /&gt;</p>
        </div>
        <div class="moreinfo" @click="moreCli">More...</div>
      </div>
      <div class="col-lg-5 col-md-4 col-9 col2home" ref="home2ref">
        <div id="maincontent"></div>
        <img src="../assets/devo.jpg" alt="" style="width: 100%;" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/headerr.vue";
export default {
  head() {
    return {
      meta: [
        { name: "keywords", content: "mohamed ifouloussene" },
        {
          name: "google-site-verification",
          content: "vw6HDZ35LiGY8zf1WbUlz1lo3d4SUh8EeSubOqPO_Jw"
        }
      ]
    };
  },
  mounted() {
    this.$refs["homeref"].classList.add("homeAnim");
    this.$refs["home2ref"].classList.add("homeAnim2");
    document
      .querySelector("head")
      .insertAdjacentHTML(
        '<meta name="google-site-verification" content="vw6HDZ35LiGY8zf1WbUlz1lo3d4SUh8EeSubOqPO_Jw" />'
      );
  },
  methods: {
    moreCli() {
      document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss">
#home {
  margin-bottom: 10rem;
  .col1home {
    margin-right: 2rem;
    h1 {
      font-family: "DM Sans";
      font-size: 60px;
      font-weight: 600;
    }
    p {
      font-family: Poppins;
      font-weight: 400;
      font-size: 20px;
    }
    .typewriter p {
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: 0.15em solid orange; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: 0.15em; /* Adjust as needed */
      animation: typing 3s steps(40, end), blink-caret 0.9s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: rgb(0, 0, 0);
      }
    }
    .moreinfo {
      font-family: Poppins;
      font-weight: 300;
      border-radius: 4rem;
      padding: 1rem;
      padding-right: 3rem;
      cursor: pointer;
      color: rgb(255, 255, 255);
      text-align: center;
      width: 45%;
      font-size: 23px;
      transition: all 0.3s linear;
      background-color: black;

      &:hover {
        background-color: transparent;
        color: black;
        border: 1px solid black;
      }
    }
  }
  .col2home {
    img {
      position: relative;
      z-index: 2;
    }
    #maincontent {
      transform: translate(-1.2rem, 2.5rem);
      border: 4px solid black;
      position: absolute;
      z-index: 1;
      width: 95%;
      height: 95%;
    }
  }
}
.homeAnim {
  animation: homeAnim 0.6s linear;
}
@keyframes homeAnim {
  from {
    opacity: 0;
    transform: translateX(-10rem);
  }
  to {
    opacity: 1;
    transform: translateX(0rem);
  }
}
.homeAnim2 {
  animation: homeAnim2 0.6s linear;
}
@keyframes homeAnim2 {
  from {
    opacity: 0;
    transform: translateX(10rem);
  }
  to {
    opacity: 1;
    transform: translateX(0rem);
  }
}
@media only screen and (max-width: 576px) {
  .col1home {
    margin-bottom: 3rem !important;
    margin-right: 2rem;
    h1 {
      font-size: 40px !important;
    }
    p {
      font-size: 11px !important;
    }
  }
}
</style>
