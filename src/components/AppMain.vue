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
            console.log(resp);
        })
    },
}
</script>
<template>
        <h2>ciao</h2>
</template>
<style>
</style>