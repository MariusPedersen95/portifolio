<template>
  <footer class="section section--none-mb section--none-pb section--none-pt">
    <div class="one-whole footer-container flex pt-40">
      <div class="two-thirds">
        <p>© 2022 Marius Pedersen</p>
      </div>
      <div class="one-third">
        <div class="footer-links center">
          <a
            class=""
            href="https://www.linkedin.com/in/marius-pedersen-997024156/"
            target="_blank"
            rel="noopener noreferrer"
            >Linkedin</a
          >
          <a
            class=""
            href="https://github.com/MariusPedersen95"
            target="_blank"
            rel="noopener noreferrer"
            >Github</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.logo-symbol-container {
  width: 100px;
}

.footer-container {
  border-top: 1px solid var(--c-white);
}

.footer-links {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  a + a {
    margin-left: 3rem;
  }
  @include media-breakpoint-up(sm) {
    justify-content: flex-end;
    width: 50%;
  }
}
.margin-tp {
  margin-top: 1.5em;
}

.pt-40 {
  padding: 40px 0 50px 0;
  display: flex;
  flex-direction: column;
  @include media-breakpoint-up(sm) {
    flex-direction: row;
  }

  p {
    font-size: 1em;
  }
}
</style>
