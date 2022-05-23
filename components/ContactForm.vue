<template>
  <form method="post" class="checkout-form" @submit.prevent="sendMail()">
    <div class="one-whole">
      <div class="inner one-whole">
        <div class="floating-label-group one-whole">
          <input
            v-model="email"
            class="one-whole"
            type="email"
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
            name="email"
            placeholder=""
            required
          />
          <label class="floating-label">Your email</label>
        </div>
        <div class="floating-label-group one-whole">
          <input
            v-model="emne"
            class="one-whole"
            type="text"
            name="Emne"
            placeholder=""
            required
          />
          <label class="floating-label">Emne</label>
        </div>
        <div class="floating-label-group one-whole">
          <textarea
            v-model="message"
            class="one-whole"
            type="text"
            name="Message"
            required
          />
          <label class="floating-label">Message</label>
        </div>
      </div>
    </div>
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emne: '',
      message: '',
    }
  },
  methods: {
    sendMail() {
      this.$axios.$post('/mail/send', {
        from: this.email,
        subject: this.emne,
        text: this.message,
      })
    },
  },
}
</script>

<style lang="scss">
input,
textarea {
  background-color: var(--c-black);
  color: var(--c-white);
  border-radius: 0;
  -webkit-appearance: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  padding: 13px 19px 13px 19px;
  border: solid 2px var(--c-white);
  background: transparent;
  margin-bottom: 25px;
  text-align: left;
  font-size: 1.2em;
}
input[type='submit'] {
  height: 60px;
  padding: 0px 56px 0px 40px;
  background-color: var(--c-white);
  background-image: url('./static/sumbit-arrow.svg');
  background-size: 20px 20px;
  background-position: 123px 50%;
  background-repeat: no-repeat;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  color: var(--c-black);
  font-size: 1.4em;
  line-height: 40px;
  font-weight: 600;
  margin: 10px auto;
  display: block;
  text-decoration: none;
  cursor: pointer;
  border: none;
}

input[type='submit']:hover,
input[type='submit']:focus,
input[type='submit']:active {
  background: var(--c-yellow);
  background-color: var(--c-yellow);
  color: var(--c-black);
  background-image: url('./static/sumbit-arrow.svg');
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 128px 50%;
  transform: scale(1.04);
}
.floating-label-group {
  position: relative;
  .floating-label {
    color: var(--c-white);
    font-size: 1.2em;
    position: absolute;
    pointer-events: none;
    top: 0px;
    left: 0px;
    transition: all 0.1s ease;
    padding: 13px 19px 13px 19px;
  }

  input:focus ~ .floating-label,
  input:not(:focus):valid ~ .floating-label,
  input:not(:placeholder-shown) ~ .floating-label,
  textarea:focus ~ .floating-label,
  textarea:not(:focus):valid ~ .floating-label {
    display: inline-block;
    top: -0.8em;
    // font-size: 0.9em;
    left: 1em;
    color: var(--c-yellow);
    background: var(--c-black) none repeat scroll 0% 0%;
    padding: 0px 0.5em;
  }
}
.form-section {
  border: 2px solid #def2f1;
  border-radius: 16px;
  .inner {
    padding: 41px;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
}
.checkout-form {
  width: 80%;
  margin: auto;

  .ml {
    margin-left: 1.5em;
  }
}
</style>
