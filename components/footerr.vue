<template>
  <div id="footerr">
        <hr style="width:100%"/>
    <div class="row" ref="rowfooter1">
      <div class="col-lg-7">
         <span>
          <i class="fas fa-map-marker-alt"></i> &nbsp;Morocco, Agadir
        </span>
      </div>
      <div class="col-lg-5">
        <ul>
          <li><strong><i class="fas fa-at"></i> Email</strong> : <a href="mailto:mohamed.devx@gmail.com">mohamed.devx@gmail.com</a></li>
          <li><strong><i class="fas fa-phone"></i> Tel</strong> : <a href="tel:0604357828">+212 604-357828</a></li>
        </ul>
      </div>
    </div>
   
    <div class="row mt-5 footerbtm" ref="rowfooter2">
      <div class="col-lg-12 text-center font-weight-bold">
        Thank You!😊
      </div>
    </div>
  </div>
</template>

<script>
export default {
mounted(){
  this.observer = new IntersectionObserver((entries)=>{
    if(entries[0].intersectionRatio>0){
      this.$refs['rowfooter1'].classList.add('rowfooter1');
      this.$refs['rowfooter2'].classList.add('rowfooter2');
    }
  });
  this.observer.observe(this.$refs.rowfooter1);
 }
}
</script>
<style lang="scss">
#footerr{
  hr{
    border-color: rgb(150, 150, 150);
    border-width: 1.5px;
  }
  font-size: 18px;
  color: rgb(68, 68, 68);
  ul{
    list-style-type: none;
    a{
      text-decoration: none;
      color:black;

    }
  }
  .footerbtm{
    background-color: black;
    color:white;
    padding: .5rem;
  }
}
.rowfooter1{
  animation: rowfooter1An .8s linear;
}
@keyframes rowfooter1An{
  from{
    transform: translateY(2rem);
    opacity: 0;
  }
  to{
    transform: translateY(0rem);
    opacity: 1;
  }
}
.rowfooter2{
  background: linear-gradient(-45deg, #000000, #501313, #10262e, #1e6151);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}
@keyframes rowfooter2An{
  /*from{
        transition: all 1s linear;

    background: linear-gradient(to right,black, white);
  }
  to{
        transition: all 1s linear;

    background: linear-gradient(to right,white, black);
  }*/
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