fetch('https://dummyjson.com/products')
.then(response=>response.json())
.then(data=>{
    let div= ""
    data.products.map(item=>{
        div+=`
        <div>
            <img src="${item.images[0]}" width="200px" height="200px" class="image"><br>
                <p class = "title">${item.title}</p><br>
                <p class = "desc">${item.description}</p><br>
                <p class = "price"><b>$${item.price}</b></p>
        </div>
        `;
    })
    document.querySelector(".products").innerHTML = div;
})