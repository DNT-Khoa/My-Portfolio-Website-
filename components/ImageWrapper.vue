<template>
    <div class="image-wrapper">
        <img :src="src"/>
    </div>
</template>

<script>
    export default {
        props: {
            imageUrl: String,
            isFull: {
                type: Boolean,
                default: false
            }
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
            max-width: 100%;
            height: auto;
            object-fit: cover;
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
</style>