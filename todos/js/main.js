var elInput = document.querySelector('#input-text');
var itemsleft = document.querySelector('#items-left');
var elFilter = [];
var count = 0;

//добавляем и удаляем задачи

document.addEventListener("keydown", function addElement(event) {
  	if(event.which === 13 && elInput.value !== ''){
  		var list = document.querySelector('#list');
  		var inputText = elInput.value;

  		var elList = document.createElement('li');
  		elList.classList.add('nav-li');

  		elList.innerHTML = '<span class="icons add" ><i class=" fas fa-check"></i></span>'+ '<div class = "nav-item"><p>' + inputText + '</p></div>' + '<span class="icons cancel" ><i class="fas fa-times"></i></span>';
  		list.append(elList);
  		var elCancel = document.querySelectorAll('.cancel');
  		for (var i = 0; i < elCancel.length; i++) {
  			elCancel[i].addEventListener('click',function removeEl(remove){
  				var el = remove.target.closest('li');;
  				el.remove();
            console.log(elCancel.length);
  			})
   		}

   		var elAdd = document.querySelectorAll('.add');
      var addIndex = [];
  		for (var i = 0; i < elAdd.length; i++) {
  			elAdd[i].addEventListener('click',function addEl(add){
  				var el = add.target;
  				var elParent = el.closest('li');
  				var elAdd = el.closest('i');
  				elParent.style.textDecoration = 'line-through';
  				elParent.style.color = 'gray';
          elParent.classList.add('complete');
  				elAdd.classList.add('visible');

  			})
   		}	

	   	elFilter.push(elList);
  		elInput.value = '';
  	}
})

var links = document.querySelectorAll('.filter-link');
var btnClear = document.querySelector('#clear');
var linkIndex = [];

//Фильтруем задачи

for (var i = 0; i < links.length; i++) {
  linkIndex.push(links[i]);
  links[i].addEventListener('click',filterList,false)
}

function filterList(e){
  e.preventDefault();
  var el = e.target;
  var index = linkIndex.indexOf(el);
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  this.classList.add('active');

  if( index  == 0){
    for (var i = 0; i < elFilter.length; i++) {
        elFilter[i].style.display = 'flex';
    }
    console.log('all');
  }else if( index  == 1){
    for (var i = 0; i < elFilter.length; i++) {
      if(elFilter[i].classList.contains('complete')){
        elFilter[i].style.display = 'none';
      }else{
        elFilter[i].style.display = 'flex';

      }
    }
    console.log('active');
  }else{
    for (var i = 0; i < elFilter.length; i++) {
      if(!elFilter[i].classList.contains('complete')){
        elFilter[i].style.display = 'none';
      }else{
        {
        elFilter[i].style.display = 'flex';
        }
      }
    }
    console.log('completed');
  }
}

btnClear.addEventListener('click',function clear(){
   for (var i = 0; i < elFilter.length; i++) {
      if(elFilter[i].classList.contains('complete')){
      elFilter[i].remove();
      }
    }
})
