(function($){
  $.fn.question = function(Q,parameters){
    var selectorContainerGaps = this.selector;
    var fatherGapsContainer = "."+this[0].parentNode.className;
    btn = $(selectorContainerGaps+">.btn.confirm");
    if(Q){
        for (var i = 0, len = Q.questions.length;i<len; i++) {
          setQuestionDOM(Q.questions[i],i,this.selector);
        };
    }else{
      $.get('questions.json', function(data) {
        for (var i = 0, len = data.questions.length;i<len; i++) {
          setQuestionDOM(data.questions[i],i);
        };
      });


    }
      $(fatherGapsContainer+">.btn.confirm").click(function(event){

      console.log(this.parentNode.getElementsByTagName("input"));
      //console.log("Correct answers: "+countCorrects($(this.selector +"input")));
      //console.log("Wrong answers: "+countWrongs($(this.selector+"input")));
      var questions = Q.questions;
      $(".message-box").addClass('active');

      $(this.parentNode.getElementsByTagName("input")).each(function(index, el) {
        //console.log(questions[this.iQuestion]);
        //console.log(questions[this.iQuestion].answers[this.iAnswer]);
        //console.log(this);
        var answers = questions[this.iQuestion].answers[this.iAnswer];
        if(answers.length>1){
           for (var i = 0; i < answers.length; i++) {
             console.log(this);
             if(compare(this,answers[i])){
               i = answers.length;
             }

           };

        }else{
          compare(this,answers[0]);

        }


      });
      //console.log($(selectorContainerGaps+ " input"));
      $(".message-box>.content").text("Correct answers: "+countCorrects(this.parentNode.getElementsByTagName("input"))+
      " Wrong answers: "+countWrongs(this.parentNode.getElementsByTagName("input")));
      $(".message-box").draggable();


      /**

        TODO:

        - Send result to anywhere

      **/

    });
    $(".btn.btn-cancel.act-cancel").click(function(event) {
      $(".message-box").removeClass('active');
    });

    $(".btn.btn-confirm.act-ok").click(function(event) {
      /* - Go to next slide */
      $(".message-box").removeClass('active');
    });

  };

})(jQuery)

function setQuestionDOM(question, iQuestion,selector){
  var questionSplited = question.question.split("[]");
  var answers = question.answers;
  var divQuestion = document.createElement("div");
  divQuestion.className='question';
  for (var i = 0; i < questionSplited.length; i++) {

    posAnswer = i;
    if(i==questionSplited.length-1){
      posAnswer = i-1;
    }else{
      var input = document.createElement("input");
    }
    input.iAnswer = posAnswer;
    input.iQuestion = iQuestion;
    $(input).css('width', (U.majorLengthString(answers[posAnswer])+4)+"ex");
    if(questionSplited[i]!="" && i<questionSplited.length-1){
      $(divQuestion).append(questionSplited[i]);
      $(divQuestion).append(input);
    }
    else{
      $(divQuestion).append(input);
      $(divQuestion).append(questionSplited[i]);
    }


    /*input.onkeyup = function(){
      if(answers[this.iAnswer].length>1){
         for (var i = 0; i < answers[this.iAnswer].length; i++) {
           if(compare(this,answers[this.iAnswer][i])){
             i = answers[this.iAnswer].length;
           }

         };

      }else{
        compare(this,answers[this.iAnswer][0]);

      }

    }*/



    // input.onkeyup = function(){
    // 	console.log(i);
    // 	if(this.value.toLowerCase() === answers[this.iAnswer].toLowerCase()){
    // 		$(this).removeClass('wrong');
    // 		$(this).addClass('correct');
    // 	}
    // 	else{
    // 		$(this).removeClass('correct');
    // 		$(this).addClass('wrong');
    // 	}
    // 	if(this.value==""){
    // 		$(this).removeClass('wrong');
    // 	}
    // }


  }
  $(selector).append(divQuestion);

}
//Compare the value of the element and the text are equals
function compare(elem, text){
        if(elem.value.toLowerCase() === text.toLowerCase()){
          $(elem).removeClass('wrong');
          $(elem).addClass('correct');
          elem.correct = true;
          return true;
        }else{
          $(elem).removeClass('correct');
          $(elem).addClass('wrong');
          elem.correct = false;
          return false;
        }
      if(elem.value==""){
        $(elem).removeClass('wrong');
        return false;
      }

}

function countCorrects(inputs){
  var count = 0;
  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].correct){
      count++;
    }
  };
  return count;
}
function countWrongs(inputs){
  var count = 0;
  for (var i = 0; i < inputs.length; i++) {
    if(!inputs[i].correct){
      count++;
    }
  };
  return count;
}
