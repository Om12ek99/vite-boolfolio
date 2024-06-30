<script>
import axios from "axios";
import ProjectCard from "./AppProjectCard.vue";
import AppProjectCard from "./AppProjectCard.vue";
export  default{
    components: {
        AppProjectCard,
    },
    data() {
        return {
            //array vuoto inizializato
            projects: [],
        };
    },
    created() {
        axios.get("http://127.0.0.1:8000/api/projects").then((resp)=> {
            this.projects = resp.data.results;
        });
    },
}
</script>
<template>
    <div>
      <h2>Progetti</h2>
      <div v-if="projects.length">
        <AppProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
      <div v-else>
        <p>Non ci sono progetti da visualizzare.</p>
      </div>
    </div>
  </template>
<style>
</style>