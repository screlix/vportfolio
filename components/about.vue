<template>
  <div
    ref="aboutref"
    id="about"
    class="row d-flex flex-wrap justify-content-around align-items-center"
  >
    <div class="col-lg-5 col-12 aboutcol1" ref="aboutref1">
      About <br />
      <i class="far fa-horizontal-rule"></i> &nbsp;me
      <!--  <i class="fal fa-horizontal-rule"></i> -->
    </div>
    <div class="col-lg-5 col-10 aboutcol2" ref="aboutref2">
      <h2></h2>
      <p>
        Hi my name is Mohamed. I am originally from morocco, My hobbies are
        video games and watching movies. I became a developer as it so precious
        and joyful thing for me to create IT solutions to facilitate people's
        life. I believe in cooperation and Self-learning.
      </p>
      <ul>
        <li>
          <a href="https://github.com/screlix"><i class="fab fa-github"></i></a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/16374290/beee-vado"
            ><i class="fab fa-stack-overflow"></i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohamed-ifouloussene-b17a71190/"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        done
      </ul>
    </div>
    <h1 class="mohamedifouloussene">
      mohamed ifouloussene mohamed ifouloussene mohamed ifouloussene mohamed
      ifouloussene mohamed ifouloussene mohamed ifouloussene mohamed
      ifouloussene mohamed ifouloussene mohamed ifouloussene mohamed
      ifouloussene mohamed ifouloussene
    </h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [{ name: "keywords", content: "mohamed ifouloussene" }],
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        this.$refs["aboutref1"].classList.add("about1Anim");
        this.$refs["aboutref2"].classList.add("about2Anim");
      }
    });
    this.observer.observe(this.$refs.aboutref);
  },
};
</script>

<style lang="scss">
.mohamedifouloussene {
  display: none;
}
#about {
  font-family: Poppins;
  padding: 6rem 0;
  .aboutcol1 {
    line-height: 7.5rem;
    font-size: 120px;
    font-weight: bold;
    a {
      text-decoration: none;
    }
    i {
      font-size: 80px;
    }
  }
  .aboutcol2 {
    padding: 0;
    border-radius: 0 0 1rem 1rem;
    box-shadow: 1px 1px 30px rgb(241, 241, 241);
    background-color: white;
    p {
      padding: 1.5rem;
      font-size: 17px;
    }
    ul {
      width: 100%;
      padding: 0;
      cursor: pointer;
      display: table;
      table-layout: fixed;
      margin: 0;
      li {
        display: table-cell;
        width: auto;
        list-style-type: none;
        /*padding: .3rem 3rem;*/
        text-align: center;
        padding: 0.6rem 0;
        font-size: 22px;
        transition: transform 0.3s ease;
      }
      li:nth-of-type(1) {
        background-color: #000000;
        a {
          color: white;
        }
        border-radius: 0 0 0 1rem;
      }
      li:nth-of-type(2) {
        background-color: #ffffff;
        a {
          color: rgb(0, 0, 0);
        }
      }
      li:nth-of-type(3) {
        background-color: #000000;
        a {
          color: white;
        }
      }
      li:nth-of-type(4) {
        background-color: #ffffff;
        a {
          color: rgb(0, 0, 0);
        }
        border-radius: 0 0 1rem 0;
      }
    }
  }
}
.about1Anim {
  animation: about1Anim 1s linear;
}
@keyframes about1Anim {
  from {
    transform: translateY(-6rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
.about2Anim {
  animation: about2Anim 1s linear;
}
@keyframes about2Anim {
  from {
    transform: translateY(6rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
@media only screen and (max-width: 576px) {
  #about {
    font-family: Poppins;
    padding: 3rem 0;
    .aboutcol1 {
      margin-bottom: 3rem;
      line-height: 3rem;
      font-size: 80px;
      font-weight: bold;
      i {
        font-size: 80px;
      }
    }
    .aboutcol2 {
      padding: 0;
      border-radius: 0 0 1rem 1rem;
      box-shadow: 1px 1px 30px rgb(241, 241, 241);
      background-color: white;
      p {
        padding: 1rem;
        font-size: 13px;
      }
      ul {
        width: 100%;
        padding: 0;
        cursor: pointer;
        display: table;
        table-layout: fixed;
        margin: 0;
        li {
          display: table-cell;
          width: auto;
          list-style-type: none;
          /*padding: .3rem 3rem;*/
          text-align: center;
          padding: 0.4rem 0;
          font-size: 18px;
          transition: transform 0.3s ease;
        }
      }
    }
  }
}
</style>
