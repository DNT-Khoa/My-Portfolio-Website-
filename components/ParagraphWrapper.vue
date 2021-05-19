<template>
    <div class="paragraph-wrapper">
        <div class="left-side">
            {{ leftContent }}
        </div>
        <div class="right-side">
            <slot></slot>
            {{rightContent}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            leftContent: String,
            rightContent: String
        }
    }
</script>

<style lang="scss" scoped>
    .paragraph-wrapper {
        display: flex;
        margin: 100px 0;

        .left-side {
            font-family: 'Red Hat Display', sans-serif;
            font-weight: 500;
            color: $text-primary;   
            padding-right: 100px;
            font-size: 35px;
            width: 50%;
        }  

        .right-side {
            width: 50%;
            font-size: 15px;
            line-height: 28px;
        }
    }

    @media screen and (min-width: 640px) {
        
    }

    @media screen and (max-width: 768px) {
        .paragraph-wrapper {
            flex-direction: column;

            .left-side {
                width: 100%;
                padding: 0;
            }

            .right-side {
                width: 100%;
                margin-top: 20px;
            }
        }
    }

    @media screen and (min-width: 1024px) {
       
    }

    @media screen and (min-width: 1280px) {
        
    }
</style>