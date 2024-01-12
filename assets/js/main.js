document.addEventListener('DOMContentLoaded',()=>{
    let category = document.getElementById("text");
    fetch('../../data.json').then((response)=>{
        response.json().then((data)=>{
            data.forEach(element => {
                category.innerHTML += `
                <div class="record ${element.category}">
                    <figure>
                        <img src=${element.icon} alt="loading"/>
                        <span>${element.category}</span>
                    </figure>
                    <p class="marks">${element.score} <span class="text-gray">/100</span></p>
                </div>
                `;
            });
        }).catch((error)=>{
            console.log(error);
        });
    });
})