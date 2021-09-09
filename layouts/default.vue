<template>
  <div id="default" class="container">
    <headerr />
    <home />
    <about/>
    <projects/>
    <skills/>
    <footerr/>
    <div>
    <button id="topBtn" @click="topBtn">Top</button>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import footerr from '~/components/footerr.vue';
import Projects from '~/components/projects.vue';
export default {
  components: { footerr },
  methods:{
    topBtn(){
      window.scrollTo({
        top:0, 
        behavior:'smooth'
      });
    }
  }, 
  
};
</script>

<style lang="scss">

body {
  background-color: #F8F8F8;
  /*background-color: #fafafa;*/
}
#topBtn{
  position: fixed;
  z-index: 100;
  bottom: 3rem;
  right: 2rem;
  padding: 1.3rem .8rem;
  color: white;
  appearance: none;
  border: none;
  outline: none;
    background: linear-gradient(-45deg, #462222, #792727, #1d4757, #267461);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>