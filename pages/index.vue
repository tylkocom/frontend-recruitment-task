<template>
    <section class="welcome-page">
        <div class="container-cstm-fluid py-48 md:py-96">
            <img class="welcome-page__logo"
                 src="~/assets/images/tylko-logo.svg"
                 svg-inline
            >
            <div class="row">
                <h1 class="col-xs-8 col-md-6 col-lg-5 col-xl-4 bold-32 md:bold-72 text-white mt-8 mb-16 md:my-40">
                    Shelves that fit every home
                </h1>
            </div>
            <div class="flex">
                <a href="https://docs.google.com/document/d/19DMdkIsiqxsZTsZ5RxQNtPI1XpWCdAabrqdEbm4vl-g/edit"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="button"
                >
                    Design system
                </a>
                <a href="https://www.figma.com/file/4I9prCmnLdCNHaClurysFg/Zadanie-rekrutacyjne-Tylko?node-id=0%3A1"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="button button--light ml-24"
                >
                    Figma
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .welcome-page {
        background: url("~assets/images/welcome-hero_s.jpg") right top no-repeat;
        background-size: cover;
        height: 100vh;

        @include tablet-min {
            background-image: url("~assets/images/welcome-hero_l.jpg");
            background-position: center center;
            justify-content: center;
        }

        @include desktop-xl2 {
            background-image: url("~assets/images/welcome-hero_xl.jpg");
        }

        &__logo {
            height: 29px;
            width: 81px;

            @include tablet-min {
                height: 58px;
                width: 162px;
            }
        }
    }

</style>
