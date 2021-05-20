<template>
    <div class="image-wrapper" data-aos="fade-up" data-aos-delay="300">
        <img :src="src" />
    </div>
</template>

<script>
    export default {
        props: {
            imageUrl: String
        },
        data() {
            return {
                src: this.$cloudinary.image.url(
                    this.imageUrl, {
                        // pass options for cloudinary image here
                    }
                ),
            }
        }
    }
</script>

<style lang="scss" scoped>
    .image-wrapper {
        margin: 50px 0;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
</style>