<template>
  <div class="BoardComponent col-4">
    <router-link class="text-dark link" :to="{name: 'BoardDetails', params: {id: boardProp.id}}">
      <div class="card mt-5">
        <div class="card-body text-center">
          <h4 class="card-title mt-2">
            {{ boardProp.title }}
          </h4>
        </div>
      </div>
    </router-link>
    <span class="text-right"></span>
  </div>
</template>

<script>
export default {
  name: 'BoardComponent',
  props: { boardProp: { type: Object, required: true } },
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.card{
  width: 30rem;
  height: 6rem;
   border-radius: 4px;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
}
.card:hover{
  border-color: #39ff14;
  border-width:thick;
  transform: scale(1.05);
box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);

}

.link{
  text-decoration: none;
}

</style>
