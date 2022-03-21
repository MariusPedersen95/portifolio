<template>
  <div class="container">
    <HeroImage />
    <section id="projects" class="section">
      <ProjectCard
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :logo="project.logo"
        :title="project.title"
        :description="project.description"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    this.projects = await fetch('/projects.json').then((res) => res.json())
  },
}
</script>
