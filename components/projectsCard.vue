<template>
  <div id="projectsCard">
    <img :src="require(`../assets/projects/${imgL}`)" alt="" />
    <div class="previewlink"><a :href="link">Preview</a></div>
    <h2>{{ namex }}</h2>
  </div>
</template>

<script>
export default {
  name: "projectsCard",
  props: ["namex", "imgL", "link"], 
   head(){
    return{
      meta:[
        {name:'keywords', content:'mohamed ifouloussene'}
      ]
    }
  },
};
</script>

<style lang="scss">
#projectsCard {
  position: relative;
  cursor: pointer;
  box-shadow: 1px 1px 20px rgb(231, 231, 231);
  background-color: white;
  margin: 1rem;
  img {
    position: relative;
    z-index: 1;
    width: 100%;
    transition: opacity 0.3s linear;
  }
  h2 {
    filter: drop-shadow(1px 0 3px rgb(216, 216, 216));
    padding: 1rem;
    font-size: 20px;
    text-align: center;
  }
  &:hover img {
    opacity: 0.4;
  }
  &:hover .previewlink {
    display: flex;
  }
  .previewlink {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    display: none;
    a {
      color: black;
      font-size: 20px;
      text-decoration: underline;
    }
  }
}
</style>
