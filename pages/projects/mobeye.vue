<template>
    <section class="project">
        <div class="container">
            <div class="title">
                Mobeye
            </div>
            <div class="short-description">
                A cross-platform mobile application to help users manage their IoT devices and receive push notifications on alarming cases
            </div>
            <div class="timeframe">
                Sept 2020 - Jan 2021
            </div>

            <ProjectMetadata 
                imageLink='https://res.cloudinary.com/dkggp2lec/image/upload/v1621171028/Khoa%27s%20Portfolio%20/Mobeye/mobye_feature_1_d2yetn.png'
                context='School Projects'
                technologies='Angular, Spring Boot, Ionic, Mobeye API'
                roles='Software developers'
                status='Finished'
            />

            <ParagraphWrapper
                leftContent='Challenge and Scope'
                rightContent=''
            >
            <p>Mobeye is a manufacturer of surveillance and security products. Mobeye products focus
on your safety and comfort, by remotely monitoring property, belongings and devices. The
products have functions in the field of measuring, logging, controlling and reporting. They
specialize in innovative GSM / 3G / 4G / LoRa alarm and telemetry technology with a
focus on extremely low energy consumption. <br> <br>
The company needs a mobile application that is able to notify the user whenever a device
trigger an alarm. This alarm can be a temperature change, it can be movement on a
camera, it could be anything. Mobeye currently has an online portal where account users
can see their devices and the status. We as a software team, need to create a mobile
application that has basic portal functionalities. The most important aspect is that Mobeye
currently notifies the user using SMS or E-mail. Our goal is to create a mobile application

that sends push messages to the user. This is much more cheaper than using SMS ser-
vices. Additionally, for products called ”Call Key”, the app should offer a remote control so

that users can connect to these devices. If user already had an account in the Mobeye
portal, the app will also offer them an easy link from which they can access the portal
without manually entering their credentials in the browser. Users will be able to access
and be restricted to some app features depending on their role.</p>
            </ParagraphWrapper>

            <div class="secondary-title" data-aos="fade-up" data-aos-delay="300">How to help the company solve their problems ?</div>

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621470684/Khoa%27s%20Portfolio%20/Mobeye/Mobeye-Mock-Api-UML_a0oaf2.png" />

            <ParagraphWrapper 
                leftContent="Link to in-app browser" 
                rightContent="The first feature we offer through the app is in-app browser support. If the user has an
available Mobeye account and is successfully logged in, there will be an easy link helping
them to open the Mobeye portal from the app. Behind the scene, we will handle logging
them in automatically using their credentials. By this way, users won’t have to manually
open the default browser and enter their login details if they wish to access the Mobeye
portal on their mobile device."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621470167/Khoa%27s%20Portfolio%20/Mobeye/mobeye_image_1_q2rvbo.png" />

            <ParagraphWrapper 
                leftContent="Get alarm messages" 
                rightContent="Another feature that we offer is getting alarm or alert messages once an unfortunate event
happens. When a security device of users is triggered, the app should be effective in
notifying users in time and also be prepared if the message can not be delivered to them.
A solution for such case is giving feedback to the ”alarm program” so that other back-up
alarm channel like call or SMS can alternatively handle the alarm message and forward it
to relevant users.  "
            />

            <ParagraphWrapper 
                leftContent="Give alarm sound" 
                rightContent="When receiving an alarm/alert message, users should be able to identify the situation
not only by reading message but also by hearing alarm sound. Therefore, we will design
the app so that with different alarming situation, we will have different sound with varied
duration to clearly indicate the alarm severity.  "
            />

            <ParagraphWrapper 
                leftContent="Confirm alarm" 
                rightContent="When an alarm is triggered, our internal server will send a push message to the devices of
people in the contact list. These messages can be sent simultaneously or consecutively
depending on the situation. Once an alarm message reaches user’s phone device and
be displayed, user should be able to confirm or deny it. In case a user in the contact list
deny or does not respond to the alarm, our internal server should forward this message to
the next phone device in the list. This is called ”escalation”. Escalation might be chosen
as the main message sending method in case of alarm instead of alert since it requires
users to react as soon as possible in such case. "
            />

            <ParagraphWrapper 
                leftContent="Remote control" 
                rightContent="For security products called ”Call Key”, the app should offer a link from which the user can
connect to those devices and manipulate them such as opening door, e.g. "
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621470167/Khoa%27s%20Portfolio%20/Mobeye/mobeye-3_dtlkxw.png" />

            <ParagraphWrapper 
                leftContent="Final Conclusion" 
                rightContent="This is a group project of 5 members. I work on all aspects of the application in the development process. Although we had some problems
                regarding the team orchestration and communication but in the end, it can be considered as a successful project. I receive 'Outstanding' grade for this project
                with a contact from the company after the project finished"
            />

            <ParagraphWrapper 
                leftContent="Resources" 
                rightContent="Coming Soon!"
            >
            <!-- Link to my website: <b><a href="https://cineflex-online-movie-theater.herokuapp.com/home" target="_blank">https://cineflex-online-movie-theater.herokuapp.com</a></b> <br> -->
            <!-- Link to YouTube showreel: <b><a href="https://www.youtube.com/watch?v=DD16AzXKeNw" target="_blank">https://www.youtube.com/watch?v=DD16AzXKeNw</a></b> -->
            </ParagraphWrapper>

           
        </div>

         <div class="next-project">
                <h3>Next Project</h3>
                <p><NuxtLink to="/projects/sudoku">Sudoku Solver Visualizer</NuxtLink></p>
            </div>
    </section>
</template>

<script>
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
    }
</script>

<style lang="scss" scoped>
    .project {
        padding-top: 200px;
    
        .title {
            text-align: center;
            font-family: 'Red Hat Display', sans-serif;
            font-weight: 700;
            font-size: 60px;
            color: $text-primary;
            margin-bottom: 10px;
        }

        .short-description {
            font-size: 25px;
            font-weight: 700;
            text-align: center;
            margin-bottom: 10px;
        }

        .timeframe {
            font-size: 18px;
            font-weight: 700;
            color: $text-secondary;
            text-align: center;
            margin-bottom: 50px;
        }

        .secondary-title {
            font-size: 40px;
            text-align: center;
            color: $text-primary;
            font-family: 'Red Hat Display';
            font-weight: 400;
        }

        .next-project {
            background: $text-primary;
            padding: 50px 0 100px;

            h3 {
                text-align: center;
                font-family: 'Red Hat Display', sans-serif;
                color: $bg-tertiary;
                text-decoration: underline;
                margin-bottom: 20px;
            }

            p {
                font-weight: 700;
                text-align: center;
                font-size: 60px;
                color: $bg-tertiary;
                cursor: pointer;
                transition: all .5s ease-out;

                &:hover {
                    color: $bg-secondary;
                }
            }   

        }
    }

    @media screen and (max-width: 768px) {
        .title {
            font-size: 40px !important; 
        }

        .short-description {
            font-size: 20px !important;
        }

        .timeframe {
            font-size: 1rem !important;
        }

        .secondary-title {
            font-size: 30px !important;
        }
    }
</style>