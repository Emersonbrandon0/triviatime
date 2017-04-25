$('document').ready(function(){
	fetchApi();

	$('#answer').addClass("hidden");
	$('#submitButton').click(function(){
		$('#answer').removeClass("hidden");
	});
	$('#newQuestion').click(function(){
		$('#answer').addClass("hidden");
		fetchApi();
	});
	
	function fetchApi(){
		fetch("http://jservice.io/api/random")
		.then((resp)=>resp.json())
		.then(function(data){
			console.log(data[0].value);
			console.log(data[0].question);
			console.log(data[0].answer);
			console.log(data[0].category.title);

			var difficulty=data[0].value;
			var question=data[0].question;
			var answer=data[0].answer;
			var category=data[0].category.title;

			var questionNode=document.getElementById('question'),
				categoryNode=document.getElementById('category'),
				answerNode=document.getElementById('answer');


			questionNode.innerHTML="<span class='italic'>Question:</span> "+question;
			categoryNode.innerHTML="<span class='italic'>Category:</span> "+category + "<br><span class='italic'>Points:</span> "+ difficulty;
			answerNode.innerHTML="<span class='italic'>Answer:</span> "+answer;
		});
	}


});
