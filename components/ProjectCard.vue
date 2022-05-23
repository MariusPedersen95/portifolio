<template>
  <div class="one-half mb-40">
    <div class="img-container">
      <img :src="require(`~/assets/logo/${logo}`)" :alt="title" />
    </div>
    <div class="one-whole flex mt-21">
      <div class="number-container">
        <p>{{ id }}</p>
      </div>
      <div class="text-container">
        <p>{{ title }}</p>
      </div>
      <div class="text-container">
        <p>
          {{ description }}
        </p>
      </div>
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
.number-container {
  display: flex;
  width: 15%;
}
.text-container {
  display: flex;
  width: 47.5%;
}
.mt-21 {
  margin-top: 21px;
}
.mb-40 {
  margin-bottom: 50px;
}
.card-number {
  font-size: 1.25rem;
}
.card-title {
  font-size: 1.25rem;
}
.card-description {
  font-size: 1.25rem;
}
.img-container {
  background-color: #18141f;
  box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);
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
  padding-bottom: 65%;
}
</style>
