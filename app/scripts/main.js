$(document).ready(function() {
	$.get('questions.json', function(data) {

		for (var i = 0, len = data.questions.length;i<len; i++) {
			setQuestionDOM(data.questions[i]);
		};
	});
});

function setQuestionDOM(question){
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
		$(input).css('width', (answers[posAnswer].length+4)+"ex");
		if(questionSplited[i]!="" && i<questionSplited.length-1){
			$(divQuestion).append(questionSplited[i]);
			$(divQuestion).append(input);
		}
		else{
			$(divQuestion).append(input);
			$(divQuestion).append(questionSplited[i]);
		}


		input.onkeyup = function(){
			console.log(i);
			if(this.value.toLowerCase() === answers[this.iAnswer]){
				$(this).removeClass('wrong');
				$(this).addClass('correct');
			}
			else{
				$(this).removeClass('correct');
				$(this).addClass('wrong');
			}
			if(this.value==""){
				$(this).removeClass('wrong');
			}
		}


	}
	$(".question-container").append(divQuestion);

}
