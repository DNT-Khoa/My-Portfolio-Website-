<template>
    <div class="menu-mobile" >
        <ul class="menu-links">
            <li class="menu-link" @click="emitClickEvent"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="menu-link" @click="emitClickEvent"><NuxtLink to="/projects">Projects</NuxtLink></li>
            <li class="menu-link" @click="emitClickEvent"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="menu-link" @click="emitClickEvent"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'MenuMobile',
        data() {
            return {
                tl: this.$gsap.timeline({paused: true})
            }
        },
        mounted() {
            this.initGsapAnimation();
        },
        props: {
            isHamburgerOpen: Boolean
        },
        watch: {
            'isHamburgerOpen': function() {
                this.toggleNavbarOpen();
            }
        },
        methods: {
            initGsapAnimation() {
                this.tl
                .to('.menu-mobile', {
                    duration: 1,
                    y: 0,
                    ease: 'power3.in'
                })
                .to('.menu-link', {
                    opacity: 1,
                    y: 0,
                    duration: .6, 
                    stagger: {
                        each: 0.2, 
                    }
                })

                this.tl.reverse();
            },
            toggleNavbarOpen() {
                if (this.isHamburgerOpen) {
                    this.tl.play();
                } else {
                    this.tl.reverse();
                }
            },
            emitClickEvent() {
                this.$emit('isClicked');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu-mobile {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $text-primary;
        transform: translateY(-100%);
        z-index: 1;

        .menu-links {
            position: fixed !important;
            top: 0;
            left: 0;
            top: 50%;
            left: 10%;
            transform: translate(0, -50%);

            .menu-link {
                font-family: 'Open Sans', sans-serif;
                font-size: 40px;
                font-weight: 600;
                margin-bottom: 50px;
                color: $bg-tertiary;
                opacity: 0;
                transform: translateY(-100%);
                transition: color .5s ease-out;
                
                &:hover, &:active {
                    color: $bg-secondary;
                }
            }
        }
}
</style>