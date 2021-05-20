<template>
    <section class="about">
        <div class="container">
            <div class="introduction">
                <div class="main-title">Hi there! <br> I'm Khoa Doan</div>
                <div class="image-wrapper">
                    <img :src="src1" alt="Avatar Image" class="avatar-image">
                </div>
            </div>

            <div class="description">
                <p class="inner-paragraph">I’m 20 years old and I grew up in a district called Cu Chi, 
                    which is located in the countryside of Ho Chi Minh city, Vietnam. I’m currently 
                    living in Eindhoven to pursue an ICT bachelor degree at Fontys Unverisity of Applied Sciences.</p>
                <p class="inner-paragraph">I joined the university a year and a 
                    half ago and just finished the third semester of the ICT & Software 
                    track as the main profile route. I’m an ambitious student who spends a majority of 
                    time programming and learning new technologies. I want to work on software-based projects 
                    like web, mobile development and Artificial Intelligence technologies. Most of the knowledge 
                    I have acquired so far is from self studying by researching online resources. Personally, I 
                    consider programming as important and necessary as daily activities like eating and sleeping . </p>
                <p class="inner-paragraph">Having completed different projects inside and outside of 
                    school, I acquired a very good knowledge about software development processes, 
                    including full-stack web development, UI / UX, system design and cross-platform mobile development. 
                    My strengths are speed learning and perseverance. I have a good knowledge of programming and 
                    problem-solving in general. I can also communicate well with my group members and be a responsible member. Besides programming, I usually listen to music and compose songs. Singing and playing football are also my favorite hobbies.</p>
                <p class="inner-paragraph">Being an aspiring and passionate student, 
                    my efforts have been recognized by getting selected to join the Delta 
                    excellence program at Fontys. This program aims to provide students with excellent 
                    learning performance the chance to work together as a startup on large-scale and 
                    highly practical projects. I am eager to learn new things and achieve a higher level of 
                    competency. You can check out my <span><a href="https://drive.google.com/file/d/18J_QYbA8MXM1XzHYM6kKCnUkcAJlmmWs/view?usp=sharing" target="_blank"></a></span> here.</p>
                <p class="inner-paragraph"><span>I’m current looking for an internship opportunities</span> so if you are interested, feel free to contact me!</p>
            </div>

            <div class="technical-skills section">
                <div class="section-title">Technical Skills</div>

                <div class="content">
                    <div class="skill-card">
                        <div class="title">
                            Frameworks
                        </div>
                        <div class="skill-list">
                            <div class="skill-item">Spring Boot</div>
                            <div class="skill-item">Angular</div>
                            <div class="skill-item">React</div>
                            <div class="skill-item">Vue</div>
                            <div class="skill-item">Nuxt.js</div>
                            <div class="skill-item">Next.js</div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="title">
                            Programming Languages
                        </div>
                        <div class="skill-list">
                            <div class="skill-item">Java</div>
                            <div class="skill-item">C#</div>
                            <div class="skill-item">JavaScript</div>
                            <div class="skill-item">Python</div>
                            <div class="skill-item">C++</div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="title">
                            Methodologies
                        </div>
                        <div class="skill-list">
                            <div class="skill-item">Agile/Scrum</div>
                            <div class="skill-item">Microservice Architecture</div>
                            <div class="skill-item">REST</div>
                            <div class="skill-item">Test Driven Development</div>
                        </div>
                    </div>

                    <div class="skill-card">
                        <div class="title">
                            Tools
                        </div>
                        <div class="skill-list">
                            <div class="skill-item">Figma</div>
                            <div class="skill-item">AdobeXD</div>
                            <div class="skill-item">AdobeIllustrator</div>
                            <div class="skill-item">Adobe Photoshop</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="education section">
                <div class="section-title">Education</div>
                <div class="content">
                    <div class="education-card">
                        <div class="education-info">
                            <div class="logo">
                                <img :src="src2" alt="fontys-logo" class="logo-image">
                            </div>
                            <div class="education-inner">
                                <div class="title">Fontys University of Applied Sciences</div>
                                <div class="location">Eindhoven, Netherlands</div>
                            </div>
                        </div>
                        <div class="education-timeframe">
                            <div class="duration">-</div>
                            <div class="timeframe">September 2019 - Present</div>
                        </div>
                    </div>

                    <div class="education-card">
                        <div class="education-info">
                            <div class="logo"><IconifyIcon :icon="icons.hatGraduation24Filled" class="icon"/></div>
                            <div class="education-inner">
                                <div class="title">Trung Phu High School</div>
                                <div class="location">Cu Chi, Vietnam</div>
                            </div>
                        </div>
                        <div class="education-timeframe">
                            <div class="duration">3 years</div>
                            <div class="timeframe">September 2015 - June 2019</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact-invitation">
                <div class="title">
                    that’s all for now! i will be very happy to have your company logo included above.<br/> let’s have a talk 
                </div>
                <div class="contact-btn">
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import IconifyIcon from '@iconify/vue';
    import hatGraduation24Filled from '@iconify/icons-fluent/hat-graduation-24-filled';

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
                src1: this.$cloudinary.image.url(
                    'https://res.cloudinary.com/dkggp2lec/image/upload/v1621213591/Khoa%27s%20Portfolio%20/avatar_official_mkt6tq.jpg', {
                        // Pass image options here
                    }
                ),
                src2: this.$cloudinary.image.url(
                    'https://res.cloudinary.com/dkggp2lec/image/upload/v1621216809/Khoa%27s%20Portfolio%20/115115_fullimage_fon525_00_sluimx.png', {
                        // Pass image options here
                    }
                ),
                icons: {
                    hatGraduation24Filled,
                },
            }
        },
        mounted() {
            this.initializeAnimation();
        },
        methods: {
            initializeAnimation() {
                this.$gsap.from('.image-wrapper', {
                    duration: 1,
                    rotation: 180,
                    x: 30,
                    y: -30
                });

                this.$gsap.from('.main-title', {
                    duration: 1,
                    x: -30,
                    opacity: 0
                });

                this.$gsap.from('.description', {
                    duration: 1,
                    y: 30,
                    opacity: 0,
                    delay: 1
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .about {
        margin-top: 50px;
        .introduction {
            display: flex;
            align-items: flex-end;
            justify-content: center;

            .main-title {
                font-family: 'Red Hat Display', sans-serif;
                font-size: 40px;
                font-weight: bold;
                color: $text-primary;
                line-height: 50px;
            }

            .image-wrapper {
                border-radius: 9999px;
                width: 200px;
                height: 200px;
                position: relative;
                overflow: hidden;

                .avatar-image {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    
                }
            }
        }

        .description {
            margin: 100px 0 50px;

            .inner-paragraph {
                margin: 20px 0;
                font-size: 15px;
                line-height: 30px;

                span {
                    font-weight: bold;
                }
            }
        }

        .section {
            margin-bottom: 70px;

            .section-title {
                font-family: 'Red Hat Display', sans-serif;
                color: $text-primary;
                font-size: 30px;
                font-weight: 500;
                margin-bottom: 30px;
            }
        }
        .technical-skills {
            .content {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .skill-card {
                    border-top: 1px solid $border-primary;
                    padding-top: 15px;
                    margin-top: 5px;

                    .title {
                        font-weight: 600;
                        margin-bottom: 15px;
                    }

                    .skill-list {
                        .skill-item {
                            margin: 5px;
                        }
                    }
                }
            }
        }

        .education {
            .content {
                .education-card {
                    display: flex;
                    justify-content: space-between;
                    padding: 15px;
                    border-top: 1px solid $border-primary;
                    font-size: 15px;

                    &:not(:first-child) {
                        border-bottom: 1px solid $border-primary;  
                    }

                    .education-info {
                        display: flex;

                        .logo {
                            height: 40px;
                            width: 40px;
                            position: relative;

                            .logo-image {
                                position: absolute;
                                widows: 100%;
                                height: 100%;
                            }

                            .icon {
                                position: absolute;
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .education-inner {
                            margin-left: 50px;

                            .title {
                                font-weight: 600;
                                color: $text-primary;
                            }

                            .location {

                            }
                        }
                    }

                    .education-timeframe {
                        font-weight: 600;
                        .duration {

                        }

                        .timeframe {
                            color: $text-secondary;
                        }
                    }
                }
            }
        }

        .contact-invitation {
            margin-top: 100px;

            .title {
                font-family: 'Read Hat Display', sans-serif;
                text-transform: uppercase;
                font-size: 23px;
                text-align: center;
                font-weight: 500;
            }

            .contact-btn {
                width: 120px;
                height: 120px;
                background: $bg-secondary;
                margin: 70px auto;
                border-radius: 9999px;
                display: flex;
                justify-content: center;
                align-items: center;

                a {
                    color: $bg-tertiary;
                }
            }
        }
    }

    @media screen and (max-width: 640px) {
        .introduction {
            flex-direction: column-reverse;
            align-items: center !important;
            justify-content: center;
        }

        .education-card {
            flex-direction: column;

            .education-timeframe {
                margin-top: 20px;
            }
        }

        .contact-invitation {
            .title {
                font-size: 18px !important;
            }

            .contact-btn {
                width: 100px !important;
                height: 100px !important;
            }
        }
    }
</style>