<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{text}}
    {{text1}}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @bbc="bb" @aa="bb1"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  text:string="123"
  text1:string="123"
  bb(n){
    this.text=n
    console.log(999)
  }
  bb1(n){
    this.text1=n
    console.log(999)
  }
}
</script>
