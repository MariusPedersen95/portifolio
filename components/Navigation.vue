<template>
  <div>
    <transition name="bounce" appear>
      <header>
        <div class="header-logo">
          <p>Marius Pedersen</p>
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
            <a class="nav-link" @click="goToByScroll('contact')">Contact</a>
          </div>
          <div class="shellHeader__burgerButton" :class="{ hidde: !mobileNav }">
            <button class="burgerMenu" @click="mobileNavShow = !mobileNavShow">
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
    <template v-if="mobileNavShow">
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
      mobileNav: false,
      mobileNavShow: false,
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.onresize = () => {
      this.windowWidth = window.innerWidth
      if (this.windowWidth < 850) {
        this.mobileNav = true
      } else {
        this.mobileNav = false
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition >= 15 || this.windowWidth < 850) {
        this.mobileNav = true
      } else {
        this.mobileNav = false
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
.header-logo {
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
}
header {
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
  a:hover {
    text-decoration: underline;
  }
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
  margin: 0px 21px;
  font-size: 1.25rem;
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
}
.header-container {
  display: flex;
  /* justify-content: flex-end; */
  /* justify-content: space-evenly; */
  right: 0px;
}

.bounce-enter-active {
  animation: fadeAndShow 3s ease;
}

@keyframes fadeAndShow {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 20%;
  }

  70% {
    opacity: 60%;
  }

  90% {
    opacity: 100%;
  }
}
</style>
