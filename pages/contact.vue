<template>
    <section class="contact">
        <div class="container">
            <div class="email"><a href="mailto:khoa.doan@student.fontys.nl">khoa.doan@student.fontys.nl</a></div>

            <div class="title">You can also contact me though the links below</div>

            <div class="contact-links">

                <div class="contact-link">
                    <IconifyIcon :icon="icons.linkedinOutlined" class="icon" />
                    <span>
                        <a href="https://www.linkedin.com/in/khoa-doan-19b618155/" target="_blank">Khoa Doan</a>
                    </span>
                </div>

                 <div class="contact-link">
                    <IconifyIcon :icon="icons.whatsappFill" class="icon" />
                    <span>+31 685 564 248</span>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import IconifyIcon from '@iconify/vue';
    import linkedinOutlined from '@iconify/icons-ant-design/linkedin-outlined';
    import whatsappFill from '@iconify/icons-akar-icons/whatsapp-fill';

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
        components: {
            IconifyIcon,
        },
        data() {
            return {
                icons: {
                    linkedinOutlined,
                    whatsappFill
                },
            };
        },
    }
</script>

<style lang="scss" scoped>
    .contact {
        text-align: center;
        margin-top: 70px;
        min-height: calc(100vh - 400px);

        .email {
            font-size: 50px;
            font-weight: 600;
            text-decoration: underline;
        }

        .title {
            font-size: 25px;
            margin-top: 50px;
        }

        .contact-links {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .contact-link {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 30px;

                .icon {
                    height: 30px;
                    width: 30px;
                }

                span {
                    margin-left: 5px;
                    font-size: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 640px){
        .contact {
            min-height: calc(100vh - 300px);

            .email {
                font-size: 23px;
            }

            .title {
                font-size: 18px;
            }
        }
    }
</style>