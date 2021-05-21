<template>
    <div class="project-metadata">
        <div class="content-wrapper">
            <div class="image-wrapper">
                <img :src="src" alt="Project Image" class="image">
            </div>
            <div class="project-metadata">

                <div class="title">Project Details</div>
                <div class="metadata-wrapper">
                    <div class="context metadata-item">
                        <h3>Context</h3>
                        <p>{{ context }}</p>
                    </div>
                    <div class="technologies metadata-item">
                        <h3>Technologies</h3>
                        <p>{{ technologies }}</p>
                    </div>
                    <div class="roles metadata-item">
                        <h3>Roles</h3>
                        <p>{{ roles }}</p>
                    </div>
                    <div class="status metadata-item">
                        <h3>Status</h3>
                        <p>{{ status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import IconifyIcon from '@iconify/vue';
    import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';

    export default {
        data() {
            return {
                src: this.$cloudinary.image.url(
                    this.imageLink, {
                        // pass options for cloudinary image here
                    }
                )
            }
        }, 
        props: {
            imageLink: String,
            context: String, 
            technologies: String,
            roles: String,
            status: String
        },
        mounted() {
            this.initializeAnimation();
        },
        methods: {
            initializeAnimation() {
                this.$gsap.from('.image-wrapper', {
                    duration: 1,
                    opacity: 0,
                    y: 30
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .project-metadata {
        .content-wrapper {
            color: $bg-tertiary;
            .image-wrapper {
                height: auto;
                width: 100%;

                .image {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            }

            .project-metadata {
                background: #343434;
                padding: 10px;

                .title {
                    text-align: center;
                    font-size: 28px;
                    font-family: 'Red Hat Display', sans-serif;
                    font-weight: 700;
                    margin-bottom: 20px;
                }

                .metadata-wrapper {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .metadata-item {
                        padding: 20px;

                        h3 {
                            font-family: 'Red Hat Display', sans-serif;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 640px) {
        .title {
            font-size: 20px !important;
        }

        .metadata-item {
            h3 {
                font-size: 18px !important;
            }
        }
    }
</style>