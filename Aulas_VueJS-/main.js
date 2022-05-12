const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

function mostradiv(div){

	if(div == 'teste'){
		document.getElementById('teste').style.display = 'block';
		document.getElementById('teste2').style.display = 'none';

	}

	else{
		document.getElementById('teste').style.display = 'none';
		document.getElementById('teste2').style.display = 'block';
	}

}


function mostradiv(div) {
  if (div == "teste") {
    document.getElementById("teste").style.display = "block";
    document.getElementById("teste2").style.display = "none";
  } else {
    document.getElementById("teste").style.display = "none";
    document.getElementById("teste2").style.display = "block";
  }
}