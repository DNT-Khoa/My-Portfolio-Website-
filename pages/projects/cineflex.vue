<template>
    <section class="project">
        <div class="container">
            <div class="title">
                CineFlex
            </div>
            <div class="short-description">
                An online movie streaming website for movie geeks to watch, add, edit and delete thousands of different movies, news and much more.
            </div>
            <div class="timeframe">
                Sept 2020 - Jan 2021
            </div>

            <ProjectMetadata 
                imageLink='https://res.cloudinary.com/dkggp2lec/image/upload/v1621222093/Khoa%27s%20Portfolio%20/CineFlex/CineFlex_Header_Image_cdjbuh.png'
                context='School Projects'
                technologies='Angular, Spring Boot, MySQL, TMDB API'
                roles='Full-stack software developers'
                status='Finished'
            />

            <ParagraphWrapper
                leftContent='Film, the best form of entertainment'
                rightContent='The COVID-19 pandemic has had a substantial 
                impact on the film industry in 2020. Many theaters and festivals
                 have to be closed and postponed. Additionally, film releases have
                  been rescheduled and delayed infinitely. Nevertheless, this has 
                  given streaming services a lot of opportunities to shine. I, as a 
                  software developer, notices this potentials and wants to follow the 
                  trend by making a website to stream movies, series, etc. Users can get 
                  updates about upcoming trailers, news, etc. After watching movies, they 
                  can give a like and review. The website is named as CineFlex, which is 
                  the combination of the word “Cine” and “Flex”. “Cine” is a short form of 
                  “Cinema” and “Flex” is from “flexible”. From the brand name, I want to give 
                  the users a flexible, comfortable experience when using our web service, just l
                  ike they are going to the cinema to watch it.'
            />

            <div class="secondary-title">What features should a movie streaming website offer ?</div>

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621389686/Khoa%27s%20Portfolio%20/CineFlex/cineflex_another_wgnqsp.png" />

            <ParagraphWrapper 
                leftContent="A powerful dashboard for administrators" 
                rightContent="Admins can perform all CRUD operations on the website. 
                This includes adding,
editing, removing, getting films, news and new admin. These resources 
will be saved to the database for permanent storage. A third-party API called 
TMDB (The Movie Database) is also integrated to help admins get the details of 
any movie in the industry. This helps provide the profundity for movie resources. "
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621389747/Khoa%27s%20Portfolio%20/CineFlex/CineFlex_10_mqb3fd.png" />
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621389746/Khoa%27s%20Portfolio%20/CineFlex/CineFlex_11_z9bm6n.png" />
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621389746/Khoa%27s%20Portfolio%20/CineFlex/CineFlex_8_mlwucq.png" />

            <ParagraphWrapper 
                leftContent="Watching movies, that’s our main purpose" 
                rightContent="There are two types of normal users, 
                guest and registered users. As a guest, you can watch movies and 
                read news. However, you have to register an acccount if you want some 
                other advanced features, such as liking, commenting and rating movies. 
                Movies that user likes will be saved to their account so they can access 
                them more easily in their profile page.  "
            />

            
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621389749/Khoa%27s%20Portfolio%20/CineFlex/CineFlex_4_nif3jv.png" />
            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621389749/Khoa%27s%20Portfolio%20/CineFlex/CineFlex_1_wlxto0.png" />
            
            <ParagraphWrapper 
                leftContent="Responsive on any device" 
                rightContent="The website is totally responsive on 
                different viewport sizes or devices. Using TailwindCSS as a 
                CSS library, the development process has been optimized. On the 
                other hand, the library also helps keep the page consistent and 
                well-aligned. "
            />

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1621390630/Khoa%27s%20Portfolio%20/CineFlex/Group_37_ikjnxf.png" />

            <ParagraphWrapper 
                leftContent="Final Conclusion" 
                rightContent="Having completed this website, I learnt tons of useful things 
                about full-stack web development. Being responsible for implementing the RESTful 
                backend service and also the Single Page Application frontend, I fully understand 
                how they communicates with each other, how to build a database schema with complex 
                connected tables and lastly, how enjoyful it is to make a website that can be deployed and 
                used by many people."
            />

            <ParagraphWrapper 
                leftContent="Final Conclusion" 
                rightContent=""
            >
            Link to my website: <b><a href="https://cineflex-online-movie-theater.herokuapp.com/home" target="_blank">https://cineflex-online-movie-theater.herokuapp.com</a></b> <br>
            Link to YouTube showreel: <b><a href="https://www.youtube.com/watch?v=DD16AzXKeNw" target="_blank">https://www.youtube.com/watch?v=DD16AzXKeNw</a></b>
            </ParagraphWrapper>

           
        </div>

         <div class="next-project">
                <h3>Next Project</h3>
                <p>Mobeye App</p>
            </div>
    </section>
</template>

<script>
    export default {
        
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