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
                })
            .catch(err => {
                console.error(err);
            })
    }
}
</script>

<template>
    <div>
        <h1>ciao</h1>
        <p>{{ project.title }}</p>
    </div>
</template>
<style></style>