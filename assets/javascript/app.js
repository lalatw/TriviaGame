
var myData = [ 
    {   question: "In The Little Mermaid, what is Ariel's father's name?", 
        answer1: "King Triton",
        answer2: "Poseidon",
        answer3: "King Atlantis",
        answer4: "Mr. Merman",
        correctAnswer: "King Triton"
    },
    {   question: "In The Little Mermaid, what does Ariel collect?", 
        answer1: "Seashells",
        answer2: "Human items",
        answer3: "Eels",
        answer4: "Seaweed",
        correctAnswer: "Human items"
    },
    {   question: "How many stepsisters does Cinderella have?", 
        answer1: "One",
        answer2: "Two",
        answer3: "Three",
        answer4: "Four",
        correctAnswer: "Two"
    },
    {   question: "What is the name of the mouse Cinderella rescues?", 
        answer1: "Gus",
        answer2: "Chad",
        answer3: "Vinny",
        answer4: "Jackie",
        correctAnswer: "Gus"
    },
    {   question: "In The Lion King, who is Simba’s mother?", 
        answer1: "Nala",
        answer2: "Sarabi",
        answer3: "Zazu",
        answer4: "Sarafina",
        correctAnswer: "Sarabi"
    },
    {   question: "Finish the Simba quote: Oh I just can’t wait to be _____", 
        answer1: "5 years old",
        answer2: "Me",
        answer3: "King",
        answer4: "A human",
        correctAnswer: "King"
    },
    {   question: "In Aladdin, what does Abu try to steal from the Cave of Wonders?", 
        answer1: "A hat",
        answer2: "A crown",
        answer3: "A carpet",
        answer4: "A ruby",
        correctAnswer: "A ruby"
    }



];

var timeNumber = 11;
var intervalID;
var currentQuestion = 0;
var correctCount = 0;
var incorrectCount = 0;
var unanswer = 0;


$(document).ready(function() {

    console.log (myData[0].question);

    $(".button").on("click", function() {
        console.log("hello")
        showQuestion();
        intervalID = setInterval(countDown, 1000);

    })

    function showQuestion () {
        $("#question").empty();       
        $(".form").empty();
        $("#question").text(myData[currentQuestion].question);
        $(".form").append('<button class="answer1">' + myData[currentQuestion].answer1 + '</button>');
        $(".form").append('<button class="answer2">' + myData[currentQuestion].answer2 + '</button>');
        $(".form").append('<button class="answer3">' + myData[currentQuestion].answer3 + '</button>');
        $(".form").append('<button class="answer4">' + myData[currentQuestion].answer4 + '</button>');
        
    }

    function countDown() {      
        timeNumber --;
        $("#countdown").text(timeNumber);
        if (timeNumber === 0) {
            clearInterval(intervalID);
            unanswer++;
            $("#message").text("Out of Time! The correct answer is :  " + myData[currentQuestion].correctAnswer);
            $(".form").empty();
            $("#myimage").append('<img src = "assets/images/nope.jpg">');
            setTimeout (resetQuestion , 5000);
        }
    }

    
    $(".form").on("click", ".answer1", function() {
        checkAnswer($(".answer1").text());
        
    })

    $(".form").on("click", ".answer2", function() {
        checkAnswer($(".answer2").text());
        
    })

    $(".form").on("click", ".answer3", function() {
        checkAnswer($(".answer3").text());
        
    })

    $(".form").on("click", ".answer4", function() {
        checkAnswer($(".answer4").text());
        
    })

    
    function checkAnswer(answer) {
        clearInterval(intervalID);
        console.log (answer);
        if (answer === myData[currentQuestion].correctAnswer) {
            $("#message").text("You are correct!");
            $(".form").empty();
            $("#myimage").append('<img src = "assets/images/correct.jpg">');
            setTimeout (resetQuestion , 5000);
            correctCount ++;
        }

        else {
            $("#message").text("Nope! The correct answer is :  " + myData[currentQuestion].correctAnswer);
            $(".form").empty();
            $("#myimage").append('<img src = "assets/images/nope.jpg">');
            setTimeout (resetQuestion , 5000);
            incorrectCount ++;
        }

    }
    

    function resetQuestion () {
        //clearInterval(intervalID);
        currentQuestion++;
        $("#myimage").empty();
        $("#message").empty();


        if (currentQuestion === myData.length) {
            clearInterval(intervalID);
            $(".form").empty();
            $("#question").empty();
            $("#result").append("Correct: " + correctCount + "<br>");
            $("#result").append("Incorrect: " + incorrectCount + "<br>");
            $("#result").append("Unanswer: " + unanswer + "<br>");
    
        }


        else {
            showQuestion();
            timeNumber = 11;
            intervalID = setInterval(countDown, 1000);

        }

    }





})





