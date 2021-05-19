<template>
    <div :class="{'featured-project': true, 'reversed': isReversed}">
        <div class="left-content">
            <img :src="src" alt="Featured Image" class="featured-image">
        </div>
        <div class="right-content">
            <div class="title">{{ title }}</div>
            <div class="timeframe">{{ timeframe }}</div>
            <div class="description">{{ description }}</div>
            <NuxtLink :to="'/projects/' + slug" class="view-link">.viewUseCases()<IconifyIcon :icon="icons.arrowRight" class="arrow-icon" /></NuxtLink>
        </div>
    </div>
</template>

<script>
    import IconifyIcon from '@iconify/vue';
    import arrowRight from '@iconify/icons-cil/arrow-right';
    export default {
        name: "FeaturedProject",
        components: {
            IconifyIcon
        },
        props: {
            title: String,
            description: String,
            slug: String,
            timeframe: String,
            isReversed: false,
            imageUrl: String
        },
        data() {
            return {
                src: this.$cloudinary.image.url(
                    this.imageUrl, {
                        // pass options for cloudinary image here
                    }
                ),
                icons: {
                    arrowRight
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .featured-project {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 100px;
        color: $bg-tertiary;

        &.reversed {
            flex-direction: row-reverse;

            .left-content {
                width: 66.7%;
                overflow: hidden;

                .featured-image {
                    max-width: 100%;
                    height: auto;
                }
            }

            .right-content {
                text-align: right;
                padding-top: 30px;
                padding-right: 40px;
                word-wrap: break-word;
                width: 33.3%;

                .title {
                    font-size: 55px;
                }

                .description {
                    margin-top: 30px;
                    font-size: 15px;
                    font-weight: 300;
                }
            }
        }

        .left-content {
            width: 66.7%;
            overflow: hidden;

            .featured-image {
                max-width: 100%;
                height: auto;
            }
        }

        .right-content {
            padding-top: 30px;
            padding-left: 40px;
            word-wrap: break-word;
            width: 33.3%;

            .title {
                color: $text-primary;
                font-size: 55px;
                font-family: 'Red Hat Display', sans-serif;
                font-weight: 700;
            }

            .timeframe {
                text-transform: uppercase;
                font-size: 16px;
                font-weight: 500;
            }

            .description {
                margin-top: 30px;
                font-size: 15px;
                font-weight: 300;
                line-height: 21px;
            }

            .view-link {
                font-weight: 700;
                font-size: 14px;
                margin-top: 20px;
                display: inline-block;
                transition: all .3s ease-out;
                padding: 10px 15px;
                border: 1px solid $text-primary;
                border-radius: 50px;

                &:hover {
                    color: $bg-tertiary;
                    background: $text-primary;

                    .arrow-icon {
                        transform: rotate(-45deg);
                        background: $text-primary;
                        color: white;
                    }
                }

                .arrow-icon {
                    margin-left: 10px;
                    transition: all .3s ease-out;
                    border-radius: 100%;
                }
            }
        }
    }

    @media screen and (max-width: 640px) {
    
    }
    @media screen and (max-width: 768px) {
        .featured-project {

            &.featured-project.reversed {
                .left-content {
                    width: 100%;
                }

                .right-content {
                    width: 100%;
                    padding-right: 0 !important;
                    text-align: left;

                    .title {
                        margin-right: 0 !important;
                        font-size: 40px !important;
                    }

                    .description {
                        font-size: 14px;
                    }
                }

                
            }
            .left-content {
                width: 100%;

                .featured-image {
                
                }
            }

            .right-content {
                width: 100%;
                padding-left: 0 !important;

                .title {
                    margin-left: 0 !important;
                    font-size: 40px !important;
                }

                .description {
                }

                .view-link {
                
                    .arrow-icon {
                    }
                }
            }
        }   
    }
    @media screen and (max-width: 1024px) {
       .featured-project {

            &.featured-project.reversed {
                .right-content {
                    padding-right: 20px;

                    .title {
                        font-size: 50px;
                        margin-right: -50px;
                    }

                    .description {
                        font-size: 14px;
                    }
                }

                
            }

            .left-content {
                

                .featured-image {
                
                }
            }

            .right-content {
                padding-left: 20px;

                .title {
                    font-size: 50px;
                    margin-left: -50px;
                }

                .description {
                    font-size: 14px;
                }

                .view-link {
                
                    .arrow-icon {
                    }
                }
            }
        }   
    }
    @media screen and (max-width: 1280px) {
        
    }
</style>