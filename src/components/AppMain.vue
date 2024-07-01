<script>
import axios from "axios";
import ProjectCard from "./AppProjectCard.vue";
import AppProjectCard from "./AppProjectCard.vue";
export default {
    components: {
        AppProjectCard,
    },
    data() {
        return {
            //array vuoto inizializato
            projects: [],
            lastPage: 0,
            curPage: 1,
        };
    },
    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects", {
                params : {
                    page: this.curPage,
                },
            })
            .then((resp) => {
                this.projects = resp.data.results.data;
                this.lastPage =resp.data.results.last_page
            });
        }
    }
}
</script>
<template>
    <div class="p-5">
        <h2>Progetti</h2>
        <div v-if="projects.length" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col" v-for="project in projects" :key="project.id">
                <AppProjectCard :project="project" />
            </div>
        </div>
        <div v-else>
            <p>Non ci sono progetti da visualizzare.</p>
        </div>
    </div>
</template>

<style></style>