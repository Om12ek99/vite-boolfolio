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
    <div class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.content }}</p>
    </div>


</template>
<style scoped="scss"></style>