<template>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="primary-headline">
                    Hey! I’m Khoa Doan, a Vietnamese software engineering student, focused on creating impactful and highly scalable software products.
                </div>
                <div class="email"><a href="mailto:khoa.doan@student.fontys.nl">khoa.doan@student.fontys.nl</a></div>
                <lottie :options="defaultOptions" :height="500" :width="500" class="lottie" />
            </div>
        </div>
        <!-- <ScrollDownIcon /> -->
        <ScrollDownToContinue />
  </section>
</template>

<script>
    import Lottie from 'vue-lottie/src/lottie.vue';
    import * as animationData from '~/assets/lotties/cube.json';

    export default {
        name: 'Hero',
        components: {
            'lottie': Lottie
        },
        data() {
            return {
                defaultOptions: {animationData: animationData.default}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hero {
        height: calc(100vh - 150px);
        position: relative;

        .container {
            .hero-content {
                position: relative;
                margin-top: 170px; 

                .primary-headline {
                    font-family: 'Red Hat Display', sans-serif;
                    width: 70%;
                    font-size: 40px;
                    color: $bg-secondary;
                    line-height: 60px;
                    margin-bottom: 40px;
                    font-weight: 700;
                }

                .email {
                    font-family: 'Red Hat Display', sans-serif;
                    font-size: 28px;
                    text-decoration: underline;
                    font-weight: 400;
                }

                .lottie {
                    position: absolute;
                    top: -50%;
                    right: -10%;
                }
            }
        }

    }

    @media screen and (max-width: 640px) {
        .hero {
            height: calc(100vh - 100px);

            .container {
                .hero-content {
                    margin-top: 100px; 

                    .primary-headline {
                        font-size: 25px !important;
                        width: 100% !important;
                    }

                    .email {
                        font-size: 20px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        
    }
    @media screen and (max-width: 1024px) {
        .hero {
            .container {
                .hero-content {
                    .primary-headline {
                        width: 85%;
                        line-height: 40px !important;
                    }
                    .lottie {
                        display: none;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1280px) {
        .hero {
            .container {
                .hero-content {
                    .secondary-headline {
                        font-size: 15px;
                    }

                    .primary-headline {
                        font-size: 40px;
                        line-height: 50px;
                    }
                }
            }
        }
    }

</style>

