<template>
    <footer class="footer" data-aos="fade-up" data-aos-delay="300">
        <div class="container">
            <div class="left-content">
                Designed and developed with <IconifyIcon :icon="icons.redHeart" /> by Khoa Doan
            </div>
            <div class="right-content">
                All copyrights reserved | 2021
            </div>
        </div>
    </footer>
</template>

<script>
    import IconifyIcon from '@iconify/vue';
    import redHeart from '@iconify/icons-emojione/red-heart';

    export default {
        name: 'Footer',
        components: {
            IconifyIcon,
        },
        data() {
            return {
                icons: {
                    redHeart,
                },
            };
        },
    }
</script>

<style lang="scss" scoped>
    .footer {
        padding: 20px 0;
        border-top: 1px solid $border-primary;
        height: 100px;

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;

            .left-content {
                font-size: 15px;
                font-weight: 400;
                text-align: center;
            }

            .right-content {
                font-size: 15px;
                font-weight: 400;
            }
        }
    }
    
    @media screen and (max-width: 640px){
        .container {
            flex-direction: column;
        }
    }
</style>