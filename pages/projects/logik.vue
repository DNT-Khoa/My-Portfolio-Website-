<template>
    <section class="project">
        <div class="container">
            <div class="title">
                LogiK
            </div>
            <div class="short-description">
                A software platform for electronics company to schedule and manage employees, stocks, orders and much more
            </div>
            <div class="timeframe">
                Jan 2020 - June 2020
            </div>

            <ProjectMetadata 
                imageLink='https://res.cloudinary.com/dkggp2lec/image/upload/v1621471942/Khoa%27s%20Portfolio%20/MediaBazaar/MediaBazaar_Feature_Image_iyzyz8.png'
                context='School Projects'
                technologies='PHP, C#, HTML, CSS, JavaScript'
                roles='Software developer'
                status='Finished'
            />

            <ParagraphWrapper 
                leftContent='Introduction'
                rightContent='This project is organized at the end of my second semester in my 
                first year at university. I worked full stack on the project website and the
                 backend for the windows form application. Me and the other three teammates were 
                 working together to help a virtual startup company called MediaBazaar establish its 
                 reputation in the city of Eindhoven. More details is included in the Project
                  Description in the documents folder!'
            />

            <ParagraphWrapper 
                leftContent='Challenges and Solutions'
                rightContent=''
            >
                <p>
                    At present, the newly founded Media Bazaar company for consumer 
                    electronics is trying to establish its reputation in the city of 
                    Eindhoven. As a consequence of their short presence in the market they 
                    lack the financial resources that are needed to get themselves up and running. 
                    Therefore, the funds are provided by their parent company Jupiter which will ensure 
                    that they thrive in the competitive environment of electronics retailers. In order
                     to achieve this goal the company wants to take advantage of the digital revolution 
                     and have their own internal management system. Consequently, they have started a 
                     competition for software companies to come up with a design and as a reward the 
                     company will give them a contract for the job. <br> <br>

                    Our company LogiK will strive to make a reliable, 
                    robust and user-friendly software for Media Bazaar 
                    in order to stand out from the crowd. Our goal is 
                    to develop a full-fledged application for the 
                    administration and an online employee dashboard 
                    for the employees. In addition, currently the company 
                    utilizes online calendars and excel sheets to manage all 
                    their resources which is quite laborious and time-consuming. 
                    Therefore, an automated and stable system is required to keep 
                    up with the ever-increasing pace of business. Also, it provides 
                    us with the opportunity to develop everything from scratch while 
                    following the highest standards.
                </p>
            </ParagraphWrapper>

            <div class="secondary-title" data-aos="fade-up" data-aos-delay="300">A powerful web application made for the employees</div>

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636978/Khoa%27s%20Portfolio%20/MediaBazaar/Website_Login_Screen_kh60fc.png" />

            <ParagraphWrapper 
                leftContent="Add schedule checking capability for employees" 
                rightContent="As an employee, users can check their work shift schedule. The schedule table is displayed as a 
                calendar based on an algorithm written in JavaScript to display the date correctly. You can also see the name of the employees that have same time slot. "
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636977/Khoa%27s%20Portfolio%20/MediaBazaar/Website_Schedule_Page_2_qyummy.png" />

            <ParagraphWrapper 
                leftContent="View statistical data" 
                rightContent="Employees can also view the stock item distibution by means of pie charts and the shifts they missed as bar charts."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636977/Khoa%27s%20Portfolio%20/MediaBazaar/Website_Statistic_Page_iny3d1.png" />
            
            <ParagraphWrapper 
                leftContent="Search and retrieve stock items" 
                rightContent="Employees can search for an stock items by their name or id. This will be useful when they want to checkout payment from the customers."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636977/Khoa%27s%20Portfolio%20/MediaBazaar/Website_Depot_Page_ekojux.png" />
            
            <ParagraphWrapper 
                leftContent="A powerful interal mailing system" 
                rightContent="This is one of the best feature I developed for this project. I implemented a working mailing system functioning just like Gmail. Users can 
                send, receive and delete their mails. They can also restore the deleted mails if they want. These mails will be stored in database and synchronized in real time 
                to the desktop application of administrators. Everything is implemented from scratch with the help of JavaScript, PHP and MySQL."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636977/Khoa%27s%20Portfolio%20/MediaBazaar/Website_Mailing_Page_rbmei6.png" />

            <ParagraphWrapper 
                leftContent="A profile page for employees" 
                rightContent="After successfully logging in, employees can change their profile details and even upload a profile image."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636977/Khoa%27s%20Portfolio%20/MediaBazaar/Website_Personal_Info_myxcei.png" />

            <div class="secondary-title" data-aos="fade-up" data-aos-delay="300">A Windows Form desktop application developed for administrators</div>

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636976/Khoa%27s%20Portfolio%20/MediaBazaar/App_Login_Page_urhodl.png" />


            <ParagraphWrapper 
                leftContent="Schedule work shifts for employees" 
                rightContent="Adminstrators are people with high authority and can perform CRUD operations on the company resources such as employees, stock items and schedules. The 
                first feature admins can do is schedule work shifts. Addtionally, we also design an algorithm in C# to generate schedules automatically for the incoming weeks.
                This can cut off the time admins need to manually assign work for the employees."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636976/Khoa%27s%20Portfolio%20/MediaBazaar/App_Schedule_t11oht.png" />

            <ParagraphWrapper 
                leftContent="Employees management" 
                rightContent="When a new employee join the company, he/she will be added to the company system by administrators. Of course, admins can also edit, delete and search for a particular employee available in the system."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636976/Khoa%27s%20Portfolio%20/MediaBazaar/App_Employee_anletn.png" />

             <ParagraphWrapper 
                leftContent="Stock management" 
                rightContent="Similarly with employee management section, admins can also perform CRUD operations on the stock items in the company."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636976/Khoa%27s%20Portfolio%20/MediaBazaar/App_Depot_ch7gx2.png" />

            <ParagraphWrapper 
                leftContent="Viewing statistical data" 
                rightContent="The windows form application also support viewing statistical data for admins just like in the web application for employees. 
                These data are displayed in different types of charts, such as pie and line chart"
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636976/Khoa%27s%20Portfolio%20/MediaBazaar/App_Statistic_fzkgay.png" />

            <ParagraphWrapper 
                leftContent="Internal mailing system for administrators" 
                rightContent="As mentioned previously in the employee application, administrators can receive and send emails to the employees. This process will be updated in real time with the 
                help of Ajax library. "
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636976/Khoa%27s%20Portfolio%20/MediaBazaar/App_Mail_fnyds1.png" />

            <ParagraphWrapper 
                leftContent="Ordering stocks from the other providers" 
                rightContent="The last functionality for admins is ordering stock items from the good distributors and sorting them by priority."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620636976/Khoa%27s%20Portfolio%20/MediaBazaar/App_Orders_eprwni.png" />

            <ParagraphWrapper 
                leftContent="Final Conclusion" 
                rightContent="This project is one of the most challenging project I have worked on in my first year. It involves a lot of thinking processes to think up 
                the algorithms for different functionalities. Nevertheless, it gave me a really solid foundation on 
                JavaScript, PHP and Database design. I collaborated with the other three students and it was a memorable experience for us. Although there was some small miscommunications 
                but in the end the project was quite successful."
            />

            <ParagraphWrapper 
                leftContent="Resources" 
                rightContent=""
            >
            Link to my GitHub repository: <b><a href="https://github.com/DNT-Khoa/MediaBazaar-software-solution" target="_blank">https://github.com/DNT-Khoa/MediaBazaar-software-solution</a></b> <br>
            </ParagraphWrapper>

           
        </div>

         <div class="next-project">
                <h3>Next Project</h3>
                <p><NuxtLink to="/projects/cineflex">CineFlex</NuxtLink></p>
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
        mounted() {
            this.initializeAnimation();
        },
        methods: {
            initializeAnimation() {
                 this.$gsap.from('.title', {
                    duration: 1,
                    opacity: 0,
                    y: 30
                })

                this.$gsap.from('.short-description', {
                    duration: 1,
                    opacity: 0,
                    y: 30
                })

                this.$gsap.from('.timeframe', {
                    duration: 1,
                    opacity: 0,
                    y: 30
                })
            }
           
        }
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