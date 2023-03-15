const loadPhone = async (searchValue)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    showPhone(data.data);
}

const showPhone = (phones)=>{
    const phoneContainer =  document.getElementById('phone-container');
    phoneContainer.innerText = '';
    phones = phones.slice(0,10);
    // Display show No Message

    const noMessage = document.getElementById('no-message');
    if(phones.length === 0){
        noMessage.classList.remove('d-none');
    }else{
        noMessage.classList.add('d-none');
    }

    // Display show all phone
    phones.forEach(phone=>{
        // console.log(phone);
        const div = document.createElement('col');
        const {image, phone_name}=phone
        div.innerHTML = `
        <div class="card h-100">
        <img src="${image}" class="card-img-top w-75 mx-auto my-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        
        `
        phoneContainer.appendChild(div);
    });
    // Stop Spinner
    loader(false)
}

document.getElementById('btn-search').addEventListener('click', function(){
    // Start Spinner 
    loader(true)

    // load all data to search field
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    loadPhone(searchValue);
    searchField.value = '';

});

// Load Spinner
const loader = isLoading =>{
    const spinner = document.getElementById('spinner');

        if(isLoading){
            spinner.classList.remove('d-none');
        }else{
            spinner.classList.add('d-none');
        }
}

// loadPhone();