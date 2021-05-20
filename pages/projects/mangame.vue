<template>
    <section class="project">
        <div class="container">
            <div class="title">
                MangMe
            </div>
            <div class="short-description">
                A full-stack web application for users to read japanese comics and allow admins to add them by using web crawler
            </div>
            <div class="timeframe">
                Jan 2020 - June 2020
            </div>

            <ProjectMetadata 
                imageLink='https://res.cloudinary.com/dkggp2lec/image/upload/v1620598833/Khoa%27s%20Portfolio%20/MangeMe/mangame-featured-image_wjkbc7.png'
                context='School Projects'
                technologies='HTML, CSS, JavaScript, PHP'
                roles='Software developers'
                status='Finished'
            />

            <ParagraphWrapper data-aos="fade-up" data-aos-delay="300"
                leftContent='Scope of the project'
                rightContent=''
            >
            <p>This project was organized during my second semester in my first year at university. I really like Japanese comics such as animes and mangas so I decided to choose this topic for my Web Development class!</p>
            </ParagraphWrapper>

            <div class="secondary-title" data-aos="fade-up" data-aos-delay="300">Mangas and Animes ? Hmm, nice ones!</div>

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637148/Khoa%27s%20Portfolio%20/MangeMe/Manga_Info_Page_fefzok.png" data-aos="fade-up" data-aos-delay="300"/>

            <ParagraphWrapper data-aos="fade-up" data-aos-delay="300"
                leftContent="Context and Information" 
                rightContent="MangaMe is a manga reading website inspired by many other similar 
                web pages such as Nettruyen, Truyenqq,...It provides everything a manga geeks need 
                from reading latest mangas, finding information about the manga itself, logging in 
                and registering as a new member for the website. It also gives admins CRUD ability 
                to create, read, update, edit or delete any manga, chapter and image. Admins can also 
                add a new admin if they want. Nevertheless, because of the scale of the project and my 
                limited time to do other class activities at school so the bookmark and rating system 
                have not been fully implemented. Still, this project can be considered as completed under
                 the requirements of my mentor."
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621472688/Khoa%27s%20Portfolio%20/MangeMe/Landing_Page_2_1_xxcj9a.png" data-aos="fade-up" data-aos-delay="300"/>

            <ParagraphWrapper data-aos="fade-up" data-aos-delay="300"
                leftContent="Fetching mangas from the other websites?" 
                rightContent="To fetch all the images of a manga chapter, 
                I used the simple_html_dom library, which is a simple web scraper 
                using PHP. I used it to collect the mangas that I want from other 
                websites and then save them to my MySQL database. In reality, many 
                websites have been using this trick to get contents from other websites 
                and this can be considered as illegal under The Creative Commons copyright 
                licenses or some other licenses. However, this website is created for 
                educational purpose and was apparently not public"
            />


            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637146/Khoa%27s%20Portfolio%20/MangeMe/Add_Manga_Page_1_hozntt.png" data-aos="fade-up" data-aos-delay="300"/>
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637146/Khoa%27s%20Portfolio%20/MangeMe/Add_Chapter_drhgvb.png" data-aos="fade-up" data-aos-delay="300"/>
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637146/Khoa%27s%20Portfolio%20/MangeMe/Add_Manga_Page_2_hl5ari.png" data-aos="fade-up" data-aos-delay="300"/>
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637146/Khoa%27s%20Portfolio%20/MangeMe/Add_Category_ufkf1r.png" data-aos="fade-up" data-aos-delay="300"/>
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637146/Khoa%27s%20Portfolio%20/MangeMe/Add_New_Image_2_nfslqt.png" data-aos="fade-up" data-aos-delay="300"/>
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637147/Khoa%27s%20Portfolio%20/MangeMe/Page_Content_1_ajgusp.png" data-aos="fade-up" data-aos-delay="300"/>

            <ParagraphWrapper data-aos="fade-up" data-aos-delay="300"
                leftContent="Final Conclusion" 
                rightContent="I deployed this website to my private web hosting belonging to my university 
                as a way to showcase what I have learnt to my mentor. Having completed this project, 
                I felt satisfied and happy that I can make a website to help me and possibly many other 'Wibu' to read their favorite mangas !
                This is also one of my first projects that gives me the interest to kick start my web development career."
            />

            <ParagraphWrapper data-aos="fade-up" data-aos-delay="300"
                leftContent="Resources" 
                rightContent=""
            >
            Link to my GitHub website: <b><a href="https://github.com/DNT-Khoa/MangaMe-manga-reading-website" target="_blank">https://github.com/DNT-Khoa/MangaMe-manga-reading-website</a></b> <br>
            </ParagraphWrapper>

           
        </div>

         <div class="next-project" data-aos="fade-up" data-aos-delay="300"> 
                <h3>Next Project</h3>
                <p><NuxtLink to="/projects/mangame">MangaMe</NuxtLink></p>
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