const toggleBtn = document.querySelector('.check');
const prices = document.querySelectorAll('.price');
const price1 = prices[0];
const price2 = prices[1];
const price3 = prices[2];
const checkBtn = document.querySelector(`input[type="checkbox"]`);

toggleBtn.addEventListener('click', (e)=>{
  if(!checkBtn.checked){
  textChanged(); 
  }
  else{
    initialText();
  }

})

function textChanged(){
  price1.innerHTML = `<span>$</span>199.99`;
  price2.innerHTML = `<span>$</span>249.99`;
  price3.innerHTML = `<span>$</span>399.99`;
}

function initialText(){
  price1.innerHTML = `<span>$</span>19.99`;
  price2.innerHTML = `<span>$</span>24.99`;
  price3.innerHTML = `<span>$</span>39.99`;
}