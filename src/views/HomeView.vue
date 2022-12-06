<template>
  <div class="home">
    <FilterNav/>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project">
          <singleproject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import singleproject from '../components/singleproject.vue'

export default {
  name: 'HomeView',
  components:{ singleproject, FilterNav },
  data(){
    return{
      projects: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
  methods:{
    handleDelete(id){
      this.projects = this.projects.filter((project =>{
        return project.id !== id
      }))
    },
    handleComplete(id){
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  }
}
</script>
