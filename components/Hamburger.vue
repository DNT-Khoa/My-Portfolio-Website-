<template>
    <div :class="{'hamburger': true, 'hide': isHamburgerOpen}" @click="triggerToggleEvent">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: 'Hamburger',
        props: {
            isHamburgerOpen: Boolean
        },
        

        methods: {
            triggerToggleEvent() {
                this.$emit('hamburgerIsClicked');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hamburger {
        height: 18px;
        width: 25px;
        position: relative;
        cursor: pointer;
        display: none;
        z-index: 10;

        &.hide {
            span {
                position: absolute;
                top: 0;
                left: 0;
                width: 100% !important;
                height: 4px;
                background: $bg-secondary;
                transition: all .3s ease-in;
                transform-origin: left;
        
                &:nth-child(1) {
                    top: 0;
                    transform: rotate(45deg);
                }
        
                &:nth-child(2) {
                    top: 50%;
                    opacity: 0;
                }
        
                &:nth-child(3) {
                    top: 100%;
                    transform: rotate(-45deg);
                }
            }
        }

        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: $bg-secondary;
            transition: all .3s ease-in;
            transform-origin: left;

            &:nth-child(1) {
                top: 0;
            }

            &:nth-child(2) {
                top: 50%;
                transform: translateY(-50%);
                width: 70%;
                opacity: 1;
            }

            &:nth-child(3) {
                top: 100%;
                transform: translateY(-100%);
                width: 30%;
            }
        }
    }

    @media screen and (max-width: 640px) {
        .hamburger, .hamburger.hide {
            display: block;
        }
    }
</style>