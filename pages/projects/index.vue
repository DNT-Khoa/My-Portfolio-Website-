<template>
    <section class="projects">
        <div class="container">
            <ul class="project-list">
                <li class="project-item" 
                    v-for="p in this.projects" 
                    :key="p.id"><NuxtLink 
                    :to="'/projects/' + p.slug"
                    :event="p.isAvailable ? 'click': ''"
                ><span 
                    @mouseover="updateCurrentSelectedLink($event, p.actualLink)" 
                >{{ p.name }}</span></NuxtLink>
                </li>
            </ul>

            <div class="image-wrapper">
                <transition name="slide-fade" mode="out-in">
                    <img :key="currentSelectedLink" :src="currentSelectedLink" alt="Featured Image" class="image" />
                </transition>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        transition: {
        name: "fade",
        mode: "out-in",
        css: false,

        beforeEnter(el) {
            this.$gsap.set(el, {
            opacity: 0,
            top: "-100%",
            });
        },

        enter(el, done) {
            this.$gsap.to(el, {
            opacity: 1,
            top: 0,
            duration: .5,
            ease: "power2.inOut",
            onComplete: done,
            });
        },

        leave(el, done) {
            this.$gsap.to(el, {
            opacity: 0,
            top: "100%",
            duration: .5,
            ease: "power2.inOut",
            onComplete: done,
            });
        },
        },
        data() {
            return {
                projects: [
                {
                    id: '01', 
                    name: 'LazzyRoom',
                    actualLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1620637684/Khoa%27s%20Portfolio%20/coming-soon-store-placeholder-image_fpwzjg.gif',
                    slug: 'lazzyroom',
                    isAvailable: false
                },
                {
                    id: '02', 
                    name: 'Rubric Canvas Creator',
                    actualLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1620637684/Khoa%27s%20Portfolio%20/coming-soon-store-placeholder-image_fpwzjg.gif',
                    slug: 'rubriccanvas',
                    isAvailable: false
                },
                {
                    id: '03', 
                    name: 'CineFlex',
                    actualLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1620598833/Khoa%27s%20Portfolio%20/CineFlex/cineflex_image_2_cfosv9.png',
                    slug: 'cineflex',
                    isAvailable: true
                },
                {
                    id: '04', 
                    name: 'Mobeye',
                    actualLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1620636482/Khoa%27s%20Portfolio%20/Mobeye/Mobeye_Background_j0rgte.png',
                    slug: 'mobeye',
                    isAvailable: true
                },
                {
                    id: '05', 
                    name: 'Sudoku Solver Visualizer',
                    actualLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1620637359/Khoa%27s%20Portfolio%20/Sudoku%20Solver/sudoku2_fhrwh0.png',
                    slug: 'sudoku',
                    isAvailable: true
                },
                {
                    id: '06', 
                    name: 'MangaMe',
                    actualLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1620598834/Khoa%27s%20Portfolio%20/MangeMe/Landing_Page_rwifxm.png',
                    slug: 'mangame',
                    isAvailable: true
                },
                {
                    id: '07', 
                    name: 'MediaBazaar',
                    actualLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1620636978/Khoa%27s%20Portfolio%20/MediaBazaar/Website_Schedule_Page_qgsjqk.png',
                    slug: 'mediabazaar',
                    isAvailable: true
                }
                ],

                currentSelectedLink: 'https://res.cloudinary.com/dkggp2lec/image/upload/v1621211075/Khoa%27s%20Portfolio%20/projects_jqwbpv.png',

                imagePosition: {
                    left: 0,
                    top: 0
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
            this.$nuxt.$loading.start()

            setTimeout(() => this.$nuxt.$loading.finish(), 500)
            })
        },
        methods: {
            updateCurrentSelectedLink(e, link) {
                if (link === this.currentSelectedLink) 
                    return

                this.currentSelectedLink = link;
            },
            updateMousePosition(e) {
                this.imagePosition = {
                    left: e.pageX,
                    top: e.pageY
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .projects {
        padding: 30px 0;
        min-height: calc(100vh - 200px);
        position: relative;

        .container {
            display: flex;
            justify-content: space-between;

            .project-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
                .project-item {
                    font-size: 40px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 700;
                    margin: 10px 0;
                    transition: all .3s ease-out;

                    &:hover {
                        color: $text-primary;
                    }
                }
            
            }

            .image-wrapper {
                    position: relative;
                    width: 500px;
                    height: 250px;
                    margin-left: 30px;
                    align-self: center;

                    .image {
                        position: absolute;
                        pointer-events: none;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: all .5s ease-out;
                        pointer-events: none;
                        opacity: 1;
                    }
                }
        }
        
    }

    .slide-fade-enter-active {
        transition: all .8s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s ease-out;
    }
    
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;
    }

    @media screen and (max-width: 640px) {
        .projects {
           .project-list {
               .project-item {
                   font-size: 30px !important;
               }
           }
       }
    }

    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 1024px) {
       .projects {
           .project-list {
               .project-item {
                   font-size: 35px;
               }
           }

           .image-wrapper {
               display: none;
           }
       }
    }

    @media screen and (max-width: 1280px) {
        
    }
</style>