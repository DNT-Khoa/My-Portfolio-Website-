<template>
    <div class="work-headline">
        <div class="container">
            <div class="title">.getContacts()</div>
            <div class="tagline">thank you for visiting my website. 
                I hope you are also interested for a collaboration. 
                feel free to contact me and make something great together!</div>
            <p class="email">
                <a href="mailto:khoa.doan@student.fontys.nl">khoa.doan@student.fontys.nl</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WorkHeadline'
    }
</script>

<style lang="scss" scoped>
    .work-headline {
        padding: 20px 0 70px;

        .title {
            color: $text-primary;
            font-size: 38px;
            cursor: default;
            margin-bottom: 40px;
            font-weight: bold;
        }

        .tagline {
            text-transform: uppercase;
            font-size: 23px;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 70px;
        }

        .email {
            font-family: 'Open Sans', sans-serif;
            text-align: center;
            font-weight: 600;
            font-size: 25px;
            text-decoration: underline;
        }
    }

     @media screen and (max-width: 764px) {
        .title {
            font-size: 30px !important;
            margin-bottom: 30px !important;
        }

        .tagline {
            font-size: 19px !important;
            margin-bottom: 40px !important;
        }

        .email {
            font-size: 20px !important;
        }
    }
</style>