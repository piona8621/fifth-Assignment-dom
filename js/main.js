// ! get value from User 

function getValueByIdFromInput(id){
  const getValueByInput = parseFloat(document.getElementById(id).value);
  return getValueByInput;
}

// ! get value from text 
function donationValueAmount(id){
  const getValueByText = parseFloat(document.getElementById(id).innerText);
  return getValueByText;
}

//! toggle 

function viewHideToggle (id){
  document.getElementById('history-data').classList.add('hidden')
  document.getElementById('card-section').classList.add('hidden')
  document.getElementById(id).classList.remove('hidden')
}