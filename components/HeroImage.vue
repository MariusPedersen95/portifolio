<template>
  <section class="section center">
    <h1 class="hero">
      Marius Pedersen <span class="dark">is a</span><br />
      <span class="dark">Norwegian</span> Frontend developer<br />
      <span class="dark">with more then</span> three+ years of<br />
      experience.
    </h1>
    <div
      id="draggable-container"
      ref="draggableContainer"
      @mousedown="dragMouseDown"
    >
      <div id="draggable-header" @mousedown="dragMouseDown"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DraggableDiv',
  data() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    }
  },
  methods: {
    dragMouseDown(event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag(event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        'px'
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        'px'
    },
    closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    },
  },
}
</script>

<style scoped>
.hero {
  color: #f2f2f2;
  font-size: 90px;
  font-weight: 400;
  line-height: 100px;
}

.dark {
  color: #191c24;
  position: relative;
  z-index: 10;
}

.center {
  align-items: center;
  height: 100vh;
}

#draggable-container {
  mix-blend-mode: difference;
  background: #f2f2f2;
  height: 500px;
  width: 500px;
  position: absolute;
  z-index: 9;
  border-radius: 50%;
  top: 387px;
  left: -62px;
  cursor: grab;
}

#draggable-header {
  z-index: 10;
}
</style>
