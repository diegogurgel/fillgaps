
/*=============================================
= List of questions with gaps - JSON format   =
=============================================*/


// The gaps are represented by brackets []
// Each gap has one or more answers ["word 1", "word2", word3"]
window.onload = function(){

/*Q = {

  "Title": "Activity",
  "correctanswers":0,
  "questions": [
    {
      "question": "It's a simple [].",
      "answers": [["question","mult","tree"]]
    },
    {
      "question": "Its a [] with 2 [].",
      "answers": [[
          "multiplexx"
        ],
        [
          "gaps"
        ]
      ]
    }
  ]

}*/


$(".questas").question({
  "Title": "Activity",
  "correctanswers":0,
  "questions": [
    {
      "question": "It's a simple [].",
      "answers": [["question","mult","tree"]]
    },
    {
      "question": "Its a [] with 2 [].",
      "answers": [["multiplexx"],["gaps"]]
    }
  ]
});


$(".questas-slide2").question({
  "Title": "Activity",
  "correctanswers":0,
  "questions": [
    {
      "question": "It is a simple [].",
      "answers": [["question","mult","tree"]]
    },
    {
      "question": "Its a [] with 2 [].",
      "answers": [["multiplexx"],["gaps"]]
    }
  ]
});
};
