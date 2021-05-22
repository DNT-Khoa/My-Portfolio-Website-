<template>
    <section class="project">
        <div class="container">
            <div class="title">
                Sudoku Solver Visualizer
            </div>
            <div class="short-description">
                Simple application to visualize the mechanism of backtracking algorithm in solving Sudoku puzzles.
            </div>
            <div class="timeframe">
                July 2020 (2 days)
            </div>

            <ProjectMetadata 
                imageLink='https://res.cloudinary.com/dkggp2lec/image/upload/v1620637359/Khoa%27s%20Portfolio%20/Sudoku%20Solver/sudoku2_fhrwh0.png'
                context='Personal Projects'
                technologies='Python, Eel library, HTML, CSS, JavaScript'
                roles='Software developers'
                status='Finished'
            />

            <ParagraphWrapper 
                leftContent='General Information'
                rightContent=''
            >
            <p>This project is finished in one or two days during my 2020 summer. 
                I was learning to implement the backtracking algorithm, which leverages 
                the power of recursion technique in enumerating and testing all possible 
                solutions before choosing the correct one. After understanding how backtracking works, 
                I decided to visualize it by making an application, preferably a desktop app. 
                The main backtracking algorithms is implemented using Python behind the scenes and 
                HTML, CSS and JavaScript will be on the frontend. To connect the two sides, I use a 
                Python library called <b><a href="https://pypi.org/project/Eel/" target="_blank">Eel</a></b>. You can read about it using the link I provided. In this 
                repository, I have explained everything you need to know before using the application.</p>
            </ParagraphWrapper>

            <div class="secondary-title">Backtracking algorithm, love it!</div>

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637360/Khoa%27s%20Portfolio%20/Sudoku%20Solver/ezgif.com-video-to-gif_jckoey.gif"/>

            <ParagraphWrapper
                leftContent="Mechanism" 
                rightContent=""
            >
                In this section, I will not go in details about how backtracking algorithm works but I want to elaborate more on the structure of the program and how I visualized it. I also assume that you know the mechanism of Sudoku game. Let's go! <br> <br>

Firstly, I want to give a brief overview to our main connector, Eel library. According 
to its documentation, Eel is a little Python library for making simple Electron-like offline 
HTML/JS GUI apps, with full access to Python capabilities and libraries. Eel hosts a local webserver, 
then lets you annotate functions in Python so that they can be called from Javascript, and vice versa. <br> <br>

In the root directory, I created a main.py file that containing implementation for backtracking 
algorithms and some required functions that are exposed to other JS files through the library. 
As the same folder hierarchy with the main python file, I created a folder called public containing 
all the HTML/JS files which are responsible for visualizing the algorithm. <br> <br>

In the main.py file, there is a default board of default level easy, which is a 2 dimensional list. 
On application starting up, the JS file will call a function in Python file to output to the screen 
a square for every element in the list, which are 9x9 squares in total. The solve function will be 
the main function implementing the algorithm. For every square in the board, the algorithm will test
 a value range from 1 to 9. If the value is valid, it will temporarily put the number to that square 
 and do same thing to the next empty square. So every time it found a presumably valid value for the 
 square, it will change the background color of that square to green. Similaryly, if there is a case 
 when there is no valid value for that square, the background color will be red. During this process, 
 you won't be able to do some tasks such as generating a new board because it might crash the system. 
 I also created three default sudoku boards of level easy, medium and hard. You can choose which level
  you want the application to solve. Additionally, you can also change the speed at which the algorithm 
  is visualized, which basically changes the number of seconds the program will delay for every trying-out-and-assigning-value step. <br><br>

Because the application is using a local host on port 2000 on your computer so during its runtime, you cannot start 
up a new application using the same port. Given a test case that you generate a hard sudoku puzzle and set the 
visualization speed to slow then you will have to wait for it to finish visualizing the solution before start it 
up again, even if you are able to close it. Closing the application with the solver still visualizing underground 
will make a crash on your next app startup since the port is being allocated for the unfinished app task. Of course, 
this needs to be improved but I want to make this simple and showcase what I have learnt. <br> <br>

I also included a Windows executable file to help you test it out. Feel free to download and try it yourself. Cheers !
            </ParagraphWrapper>

            <ImageWrapper imageUrl="https://res.cloudinary.com/dkggp2lec/image/upload/v1620637361/Khoa%27s%20Portfolio%20/Sudoku%20Solver/sudoku-gif-1_uynajk.gif" />

            <ParagraphWrapper
                leftContent="Final Conclusion" 
                rightContent="This project is pretty fun and informative. I learnt and implemented the whole application in around 2 or 3 days during my summer vacation. By making something useful after learning an algorithm, 
                I can remember the algorithm easily and effectively."
            />

            <ParagraphWrapper
                leftContent="Resources" 
                rightContent=""
            >
            Link to my GitHub website: <b><a href="https://github.com/DNT-Khoa/Sudoku-solver-visualizer" target="_blank">https://github.com/DNT-Khoa/MangaMe-manga-reading-website</a></b> <br>
            You can also download the application <b><a href="https://github.com/DNT-Khoa/Sudoku-solver-visualizer/raw/master/dist/main.exe" target="_blank">here</a></b>.
            </ParagraphWrapper>

           
        </div>

         <div class="next-project"> 
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

        .next-project {
            p {
                font-size: 40px !important;
            }
        }
    }
</style>