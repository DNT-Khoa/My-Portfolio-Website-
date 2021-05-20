<template>
    <header class="header">
        <nav class="container">
            <div class="content-wrapper">
                <div class="logo">
                    <NuxtLink to="/">KH</NuxtLink>
                    <span></span>
                    <NuxtLink to="/">A</NuxtLink>
                </div>

                <ul class="nav-links">
                    <li class="nav-link"><NuxtLink to="/">.home()</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/projects">.projects()</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/about">.about()</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to="/contact">.contact()</NuxtLink></li>
                </ul>

                <Hamburger @hamburgerIsClicked="toggleHamburgerMenu" :isHamburgerOpen="isHamburgerOpen" />

                <MenuMobile :isHamburgerOpen="isHamburgerOpen" @isClicked="toggleHamburgerMenu" />
            </div>
            
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'NavBar',
        mounted() {
            this.initializeAnimation();
        },
        data() {
            return {
                isHamburgerOpen: false
            }
        }, 
        methods: {
            toggleHamburgerMenu() {
                this.isHamburgerOpen = !this.isHamburgerOpen;
            },
            initializeAnimation() {
                this.$gsap.from('.logo', {
                    duration: 1,
                    y: -30,
                    opacity: 0
                })

                this.$gsap.from('.nav-link', {
                    duration: 1,
                    y: -50,
                    opacity: 0,
                    stagger: 0.2
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        /* padding-top: 70px; */
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 150px;
        display: flex;
        align-items: flex-end;

        .content-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 25px;

            .logo {
                font-size: 1.8rem;
                text-decoration: none;
                font-weight: 800;
                color: $bg-secondary;

                span {
                    height: 16px;
                    width: 16px;
                    background: $text-primary;
                    border-radius: 100%;
                    display: inline-block;
                    position: relative;
                    bottom: 2px;
                }
            }

            .nav-links {
                display: flex;
                align-items: center;

                
                .nav-link {
                    margin-left: 40px;
                    color: $text-primary;
                    position: relative;
                    font-size: 1.1rem;

                    &::before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background-color: $text-primary;
                        top: 100%;
                        left: 0; 
                        transform-origin: 100% 50%;
                        transform: scale3d(0, 1, 1);
                        transition: transform .3s ease-out, background-color .3s ease-out;
                    }


                    &:hover::before
                    {
                        background-color: $text-primary;
                        transform-origin: 0% 50%;
                        transform: scale3d(1, 1, 1);
                    }

                }

                .nuxt-link-exact-active {
                    &::before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background-color: $text-primary;
                        top: 100%;
                        left: 0; 
                        transition: transform .3s ease-out, background-color .3s ease-out;
                    }
                }
            }
        }
    }

    @media (max-width: 640px) {
        .header {
            height: 100px;
            
            .content-wrapper {

                .nav-links {
                    display: none;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .header {
            .content-wrapper {
                .nav-link {
                    margin-left: 20px !important;
                }
            }
        }
     
    }
    @media (max-width: 1024px) {
      
    }
    @media (max-width: 1280px) {
        
    }
    
</style>