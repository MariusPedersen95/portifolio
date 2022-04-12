<template>
  <div class="container">
    <HeroImage />
    <section id="skills" class="section">
      <Skills />
    </section>
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
    <section id="contact" class="section">
      <div class="two-thirds center">
        <ContactForm />
      </div>
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
