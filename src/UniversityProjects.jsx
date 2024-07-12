import { limitText } from "./utils";

function UniversityProjects({ renderAsPage }) {
    console.log(renderAsPage);
    return (
        <div className={`projects-section ${renderAsPage ? "body-section" : ""}`}>
            <a name="UniProjects"></a>
            <div className="projects-section-title">
                <span></span>
                <h6>University Projects</h6>
            </div>
            
            {
                Object.keys(universityProjects).map((project_key) => {
                    const project = universityProjects[project_key];
                    const project_url = `/university-projects/${project_key}`;
                    return (
                        <a key={project_key} href={project_url}>
                            <div className="projects-section-block">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{limitText(project.description, 200)}</p>
                            </div>
                        </a>
                    )
                })
                    
            }  
        </div>
    );
}

export default UniversityProjects;

export const universityProjects = {
    robot_arm: {
        title: "Robotic Arm",
        description: "Designed a framework for programming robots using demonstrations, gestures, and natural language, integrating YOLOv5 for object recognition and GPT-3.5 for natural language processing to simplify robot interactions and task execution.",
        about: "The project \"Robot Programming through Demonstrations, Gestures, and Natural Language\" aims to revolutionize the way robots are programmed by making the process more intuitive and accessible. By integrating 3D cameras, natural language processing (NLP), and a robotic arm, the system allows users to instruct robots through demonstrations and refine their commands using conversational agents. A user study validated the effectiveness of this approach, showing that even individuals without extensive programming experience could successfully instruct robots. The project leverages the YOLOv5 model for object recognition and employs the GPT-3.5-Turbo model for natural language interactions, ensuring precise task execution and user-friendly programming.",
        technologies: [
            "robot programming",
            "demonstrations",
            "gestures",
            "natural language processing",
            "object recognition",
            "3D cameras",
            "robotic arm",
            "YOLOv5",
            "GPT-3.5-Turbo",
            "user interface",
            "human-robot interaction"
          ],
        links: {
            github: "",
            link: "",
        },
        headerImg: {
            file: "/robotic-arm/arm.jpg",
            objectPosition: "bottom"
        },
        pictures: [
            {
                caption: "Robotic Arm",
                url: "/robotic-arm/robot_arm.png"
            },
            {
                caption: "YOLO Image detection on a cup object",
                url: "/robotic-arm/cup.jpg"
            },
            {
                caption: "Camera-Robot calibration using a checkerboard",
                url: "/robotic-arm/checkerboard.jpg"
            },
        ]
    },
    chatbot: {
        title: "Chatbot",
        description: "Developed an interactive text-based digital assistant for faculty students, integrating facial recognition for user identification, spelling checkers for typo correction, and advanced parsing techniques like the CKY algorithm and cosine similarity to accurately interpret and respond to scheduling and academic queries.al assistant for faculty students, integrating facial recognition, spelling checkers, and advanced parsing techniques to enhance functionality and user experience.",
        about: "This project involves the creation of a multi-modal digital assistant designed to support faculty students in their daily routines. The assistant incorporates technologies such as facial recognition, spelling correction, and natural language processing (NLP) algorithms. It uses the Cocke-Kasami-Younger (CKY) algorithm for parsing user inputs and the cosine similarity technique to understand and respond to a variety of user queries. The chatbot also includes an auto-completion feature using N-grams to predict and suggest the next word in the user’s input. Additionally, TAPAS-based multi-turn dialogue capabilities allow the assistant to handle complex conversational interactions related to tabular data, such as schedules and timetables. The system also integrates facial recognition to personalize interactions and ensure secure usage.",
        technologies: [
            "digital assistant",
            "facial recognition",
            "spelling checker",
            "natural language processing",
            "CKY algorithm",
            "cosine similarity",
            "N-grams",
            "TAPAS",
            "multi-turn dialogue",
            "user interface",
          ],
        links: {
            github: "",
            link: "",
        },
    },
    hex: {
        title: "Board Game: Hex",
        description: "Developed a 3-player version of the strategy game Hex, and implemented adversarial search algorithms like Minimax and Monte Carlo Tree Search (MCTS) and hybrid AI methods such as AlphaZero and NEAT as AI agents to play against human players.",
        about: "This project extends the classic two-player strategy game Hex to a three-player format, implementing advanced AI techniques to manage the increased complexity. We developed and compared various AI methods, including Minimax with alpha-beta pruning, Monte Carlo Tree Search (MCTS), and hybrid approaches like AlphaZero and NEAT (NeuroEvolution of Augmenting Topologies). The AI algorithms were tested for their effectiveness in making strategic decisions, with MCTS and Minimax showing varying strengths depending on the game's phase. AlphaZero, combining MCTS with neural networks, demonstrated significant potential, particularly when trained extensively. The project also includes a comprehensive user interface created using the libGDX engine, allowing users to interact with the game and configure settings such as board size and player types.",
        technologies: [
            "Hex game",
            "3-player Hex",
            "Minimax algorithm",
            "alpha-beta pruning",
            "Monte Carlo Tree Search (MCTS)",
            "AlphaZero",
            "NEAT",
            "neural networks",
            "libGDX engine",
            "adversarial search",
            "genetic algorithms"
          ],
        links: {
            github: "",
            link: "",
        },
    },
    golf: {
        title: "3D Golf Game",
        description: "Developed 3D golf game in Java and AI agents to play it, using physics solvers such as Euler, Midpoint, Ralston, and Runge-Kutta algorithms, with a focus on optimizing ball placement and handling game physics.",
        about: "This project focused on developing an AI bot for a simulated 3D golf game (developped from scratch in Java).The aim was to create a bot that could accurately place the ball in the hole using the least number of strokes. We implemented and compared four main solver methods—Euler, Midpoint, Ralston, and Runge-Kutta 4—to find the most effective algorithm for our needs. The project features both a basic bot, which simply hits the ball towards the hole, and an intelligent bot, which optimizes its shots using an improved Hill Climbing algorithm. This intelligent bot takes environmental factors into account to calculate the most optimal shot, aiming for either a hole-in-one or the minimum strokes possible. The project also tested the bot's performance in handling noise and different physics engines, providing a comprehensive analysis of accuracy and runtime complexity.",
        technologies: [
            "golf simulation",
            "Euler method",
            "Midpoint method",
            "Ralston method",
            "Runge-Kutta method",
            "Hill Climbing algorithm",
            "physics engine",
            "noise handling",
            "game optimization"
        ],
        links: {
            github: "",
            link: "",
        },
    },
    pentominos: {
        title: "Pentominos",
        description: "Developed AI algorithms to solve the 3D-Knapsack and Exact Cover problems, using methods like Greedy, Value Filler, and Dancing Links, and implemented a Genetic Algorithm to train a bot for the game Tetris.",
        about: "This project aimed to solve the 3D-Knapsack and Exact Cover problems by implementing various algorithms, including a recursive Greedy Algorithm, a heuristic-based Value Filler, and Dancing Links for exact cover solutions. We also developed a Genetic Algorithm to train a Tetris-playing bot, optimizing its performance to clear as many lines as possible. The project involved extensive experimentation to compare the efficiency and effectiveness of these algorithms. For the 3D-Knapsack problem, our methods focused on maximizing the packed value within a given cargo space, while for Tetris, the Genetic Algorithm used evolutionary strategies to enhance the bot's gameplay.",
        technologies: [
            "3D-Knapsack problem",
            "Exact Cover problem",
            "Greedy Algorithm",
            "Value Filler",
            "Dancing Links",
            "Genetic Algorithm",
            "Tetris bot",
            "algorithm optimization",
            "heuristic methods",
            "evolutionary strategies"
        ],
        links: {
            github: "",
            link: "",
        },
    },
}