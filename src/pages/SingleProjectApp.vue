<script>
import axios from "axios";
export default {
    data() {
        return {
            project: null,
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
            .then(
                (resp) => {
                    this.project = resp.data.results;
                    console.log(resp.data.results);
                })
            .catch(err => {
                console.error(err);
            })
    }
}
</script>

<template>
    <div class="container mt-5">
        <div v-if="project" class="card">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.content }}</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Tipologia del Progetto:</strong> {{ project.type_id }}</li>
                    <li class="list-group-item" >
                        <strong>Tecnologia Usata:</strong> 
                        <ul>
                            <span class="badge mx-1 text-dark" :style="{backgroundColor: tech.description}" v-for="tech in project.technologies">{{ tech.project_tech }}</span>                            
                        </ul>                        
                    </li>
                </ul>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>
<style></style>