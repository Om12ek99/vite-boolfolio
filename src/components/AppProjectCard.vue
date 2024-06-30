<script>
export default {
    name: "AppProjectCard",
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.content }}</p>
        </div>
    </div>
</template>

<style scoped="scss"></style>