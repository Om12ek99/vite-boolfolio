<script>
export default {
    name: "AppProjectCard",
    props: {
        project: {
            type: Object,
            required: true
        },
        image: String,
    },
    data() {
        return {
            imageBaseUrl: 'http://127.0.0.1:8000/storage'
        }
    }
}
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <img class="card-image img-fluid " :src="project.cover_image
                    ? `${imageBaseUrl}/${project.cover_image}`
                    : `https://placehold.co/500x300?text=immagine+non+disponibile`" alt="cover_image">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.content }}</p>
        </div>
    </div>
</template>

<style scoped="scss"></style>