<template>
  <div class="one-half">
    <div class="img-container bg-black">
      <img :src="require(`~/assets/logo/${logo}`)" alt="test" />
    </div>
    <div class="one-whole flex">
      <div class="one-third">{{ id }}</div>
      <div class="one-third">{{ title }}</div>
      <div class="one-third">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    logo: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-black {
  background-color: #18141f;
  box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);
}
.img-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: 70px;
  }
}

.img-container:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
</style>
