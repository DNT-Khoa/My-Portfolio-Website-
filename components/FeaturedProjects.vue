<template>
    <section class="featured-projects">
        <div class="container">
            <h2 class="title">.getProjects('featured')</h2>

            <FeaturedProject data-aos="fade-up" data-aos-delay="300"
                title="CineFlex" 
                timeframe="Sept 2020 - Jan 2021"
                description="A full-fledged movie streaming website 
                that helps users add and watch any movie in the film industry. 
                Other functions including news management and role-based access are also supported."
                slug="cineflex"
                imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621134679/Khoa%27s%20Portfolio%20/CineFlex/Featured_Image_yamp9q.png"
            />

            <FeaturedProject data-aos="fade-up" data-aos-delay="300"
                title="Mobeye App" 
                timeframe="Jan 2020 - June 2020"
                description="A cross-platform mobile application 
                used by customers of Mobeye company to control 
                their IoT devices and receive push notification on different alarming cases."
                slug="mobeye"
                isReversed="true"
                imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621171028/Khoa%27s%20Portfolio%20/Mobeye/mobye_feature_1_d2yetn.png"
            />

            <FeaturedProject data-aos="fade-up" data-aos-delay="300"
                title="MangaMe" 
                timeframe="Jan 2020 - Jun 2021"
                description="A full-fledge manga reading website for comic geeks to read and manage a variety of mangas and animes that they like."
                slug="mangame"
                imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621171486/Khoa%27s%20Portfolio%20/MangeMe/mangame_featured_image_zxkirs.png"
            />

            <div class="link-wrapper">
                <NuxtLink to="/projects" class="see-more-link"><span>.getProjects('all')</span><IconifyIcon :icon="icons.arrowRight" class="arrow-icon"/></NuxtLink>
            </div>
        </div>
    </section>
</template>

<script>
    import IconifyIcon from '@iconify/vue';
    import arrowRight from '@iconify/icons-cil/arrow-right';

    export default {
        name: 'FeaturedProjects',
        components: {
            IconifyIcon
        },
        data() {
            return {
                icons: {
                    arrowRight
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .featured-projects {
        padding: 50px 0;
        background-color: $bg-secondary;
        font-weight: 400;
        position: relative;
        font-family: 'Red Hat Display', sans-serif;

        .title {
            color: $text-primary;
            font-size: 38px;
            cursor: default;
            margin-bottom: 100px;
        }

        .link-wrapper {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;

            .see-more-link {
                font-weight: 700;
                font-size: 20px;
                margin-top: 20px;
                transition: all .3s ease-out;
                align-content: center;
                display: flex;
                align-items: center;
                margin: auto;
                color: $bg-tertiary;

                &:hover {
                    color: $text-primary;

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

    @media screen and (max-width: 764px) {
        .title {
            font-size: 30px !important;
        }

        .see-more-link {
            font-size: 16px !important;
        }
    }
    
</style>