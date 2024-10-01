let questions = [
    {
        que : "What is string?",
        options : [
            { optionValue : "Lorem ipsum dolor sit amet", correct : false },
            { optionValue : "Array of Char..", correct : true },
            { optionValue : "consectetur adipisicing elit", correct : false },
            { optionValue : "Deserunt, perferendis.", correct : false },
        ]
    },
    {
        que : "What is Array?",
        options : [
            { optionValue : "nobis ipsam.", correct : false },
            { optionValue : "Collection of multiple values...", correct : true },
            { optionValue : "Accusamus neque voluptatum", correct : false },
            { optionValue : "ratione unde aperiam commodi", correct : false },
        ]
    },
    {
        que : "What is dfghfdg?",
        options : [
            { optionValue : "nobis hdfghdh ipsam.", correct : false },
            { optionValue : "Collection of dh multiple values...", correct : false },
            { optionValue : "111 Accusamus neque  dh voluptatum", correct : true },
            { optionValue : "ratione unde aperiam commodi", correct : false },
        ]
    },
    {
        que : "What is 2345456?",
        options : [
            { optionValue : "nobis ipsam.", correct : false },
            { optionValue : "Collection of multiple values...", correct : false },
            { optionValue : "Accusamus neque voluptatum", correct : false },
            { optionValue : "345 ratione unde aperiam commodi3456 ", correct : true },
        ]
    }
]

let currentQuestion = {};

let questionElement = document.getElementById('question');
let allOptions = document.getElementsByClassName('option');
let correct = document.getElementById('correct');
let incorrect = document.getElementById('incorrect');


const saveOption = () => {
    let ansOption = document.querySelector('.option:checked')
    if(ansOption){
        let value = ansOption.value;
        // for(let i=0; i< currentQuestion.options.length; i++){
        //     let option = currentQuestion.options[i];
        //     if(option.correct && option.optionValue == value){
        //         correct.style.display = 'block';
        //         incorrect.style.display = 'none';
        //         break;
        //     }else{
        //         correct.style.display = 'none';
        //         incorrect.style.display = 'block';
        //     }
        // }

        let option = currentQuestion.options.find(x => x.correct)
        if(option && option.optionValue == value){
            correct.style.display = 'block';
            incorrect.style.display = 'none';
        }else{
            correct.style.display = 'none';
            incorrect.style.display = 'block';
        }
    }
    // setTimeout(() => {
    //     generate();
    // }, 5000);
}


const generate = () => {
    let randomNumber = Math.floor((Math.random() * questions.length))
    currentQuestion = questions[randomNumber];
    for(let i = 0; i < allOptions.length; i++){
        allOptions[i].value = currentQuestion.options[i].optionValue;
        allOptions[i].nextElementSibling.innerHTML = currentQuestion.options[i].optionValue;
    }
    questionElement.innerHTML = currentQuestion.que;
    correct.style.display = 'none';
    incorrect.style.display = 'none';
    let ansOption = document.querySelector('.option:checked');
    if(ansOption){
        ansOption.checked = false;
    }
}
generate();