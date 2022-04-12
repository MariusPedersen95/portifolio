<template>
  <div>
    <transition name="bounce" appear>
      <header :class="show ? 'active' : ''">
        <div class="header-logo">
          <nuxt-link to="/">Marius Pedersen</nuxt-link>
        </div>
        <div class="header-right-nav">
          <div class="nav" :class="{ hidde: mobileNav }">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/marius-pedersen-997024156/"
              target="_blank"
              rel="noopener noreferrer"
              >Linkedin</a
            >
            <a
              class="nav-link"
              href="https://github.com/MariusPedersen95"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a
            >
            <span class="nav-link" @click="goToByScroll('contact')"
              >Contact</span
            >
          </div>
          <div class="shellHeader__burgerButton" :class="{ hidde: !mobileNav }">
            <button
              class="burgerMenu"
              @click="mobileNavActive = !mobileNavActive"
            >
              <div class="burgerMenu__overflow">
                <span class="burgerMenu__1"></span>
                <span class="burgerMenu__2"></span>
                <span class="burgerMenu__3"></span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </transition>
    <template v-if="mobileNavActive">
      <div class="shellMenu">
        <div class="shellMenu__container">
          <div class="shellNavigation shellMenu__navigation">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/marius-pedersen-997024156/"
              target="_blank"
              rel="noopener noreferrer"
              >Linkedin</a
            >
            <a
              class="nav-link"
              href="https://github.com/MariusPedersen95"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a
            >
            <span class="nav-link" @click="goToByScroll('contact')"
              >Contact</span
            >
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      mobileNav: false,
      mobileNavActive: false,
    }
  },
  mounted() {
    this.show = true
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition <= 15) {
        this.mobileNav = false
      } else {
        this.mobileNav = true
      }
    },
    goToByScroll(elementId) {
      const element = document.getElementById(elementId)
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss">
header {
  transform: translateY(-70%);
  left: 0px;
  top: 0px;
  overflow-y: hidden;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 26px;
  z-index: 15;
}

.active {
  transform: translate(0px);
}

.header-right-nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;
}

.nav {
  position: absolute;
  display: flex;
  right: 0px;
}
.shellHeader__burgerButton {
  position: absolute;
  right: 0px;
}
button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  border: medium none;
  padding: 0px;
  font: inherit;
  outline: inherit;
  cursor: pointer;
}
.burgerMenu {
  --width: 25px;
  --offset-middle: 7px;
  width: 60px;
  height: 60px;
  padding: calc((60px - var(--width) - var(--offset-middle)) / 2);
}
.burgerMenu__overflow {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.burgerMenu__1,
.burgerMenu__2,
.burgerMenu__3 {
  height: 2px;
  width: var(--width);
  background-color: var(--c-white);
  display: block;
}
.burgerMenu__2 {
  transform: translate(var(--offset-middle));
  transition: transform 0.5s cubic-bezier(0.53, 0.07, 0.23, 1.01);
}
.burgerMenu__2:before {
  content: '';
  display: block;
  height: 2px;
  width: var(--width);
  background-color: var(--c-white);
  transform: translate(calc(-240% + var(--offset-middle)));
}
.burgerMenu__1:before,
.burgerMenu__3:before {
  content: '';
  display: block;
  height: 2px;
  width: var(--width);
  background-color: var(--c-white);
  transform: translate(-240%);
}
.burgerMenu__1,
.burgerMenu__3 {
  transition: transform 0.5s 0.1s cubic-bezier(0.83, 0.12, 0.095, 0.95);
}
.burgerMenu__1 {
  margin-top: 10px;
}
.burgerMenu__2,
.burgerMenu__3 {
  margin-top: 4px;
}
.burgerMenu:hover .burgerMenu__2,
.burgerMenu:hover .burgerMenu__1,
.burgerMenu:hover .burgerMenu__3 {
  transform: translate(240%);
}

.shellMenu {
  width: 100vw;
  height: 150vh;
  top: 0px;
  background-color: var(--c-black);
  z-index: 14;
  position: fixed;
}
.shellMenu__container {
  display: flex;
  height: 100%;
  flex-direction: column;
  max-height: 100vh;
}

.shellNavigation {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
}

.shellMenu__navigation {
  margin-top: 20%;
  a:hover {
    border-bottom: 2px solid var(--c-white);
  }
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 21px;
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
}
.header-container {
  display: flex;
  /* justify-content: flex-end; */
  /* justify-content: space-evenly; */
  right: 0px;
}

.bounce-enter-active {
  animation: bounce-in 1s ease;
}

/* .bounce2 {
  animation: bounce2 2s ease infinite;
} */
@keyframes bounce-in {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(-70%);
  }
  70% {
    transform: translateY(0%);
  }
  80% {
    transform: translateY(-5%);
  }
  90% {
    transform: translateY(0%);
  }
  95% {
    transform: translateY(-5%);
  }
  97% {
    transform: translateY(0%);
  }
  99% {
    transform: translateY(-4%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
