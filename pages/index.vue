<template>
  <div class="welcome-page">
    <div>
      <img class="welcome-page__logo"
           src="~/assets/images/tylko-logo.svg"
           svg-inline
      >

      <h1 class="bold-32 md:bold-72 text-white my-40">
        Shelves that fit every home
      </h1>
      <div class="row">
        <a
          href="https://docs.google.com/document/d/19DMdkIsiqxsZTsZ5RxQNtPI1XpWCdAabrqdEbm4vl-g/edit"
          target="_blank"
          rel="noopener noreferrer"
          class="welcome-page__button"
        >
          Design system
        </a>
        <a
          href="https://www.figma.com/file/4I9prCmnLdCNHaClurysFg/Zadanie-rekrutacyjne-Tylko?node-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
          class="welcome-page__button welcome-page__button--secondary"
        >
          Figma
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$transition: 0.2s ease-in-out;

.welcome-page {
  background: url("~assets/images/welcome-hero_s.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @include tablet-min {
    background-image: url("~assets/images/welcome-hero_l.jpg");
  }

  @include desktop-xl2 {
    background-image: url("~assets/images/welcome-hero_xl.jpg");
  }

  &__logo {
    height: 60px;
  }

  &__button {
    border-radius: 50px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: background-color $transition, border-color $transition;
    text-decoration: none;

    &:hover, &:focus, &:active {
        text-decoration: none;
        background-color: $ds-orange-900;
        border: 1px solid $ds-orange-900;
        outline: none;
    }
  }
}

</style>
