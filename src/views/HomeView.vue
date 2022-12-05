<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project">
          <singleproject :project="project" @delete="handleDelete"/>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import singleproject from '../components/singleproject.vue'

export default {
  name: 'HomeView',
  components:{singleproject},
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
    }
  }
}
</script>
