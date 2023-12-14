const box = document.querySelector('.box');

async function getProduct() {
    try {
        let res = await fetch('https://dummyjson.com/products')
        let resolve = await res.json()
        // console.log(resolve);
        let products = resolve.products;
        // console.log(products);
        products.forEach(product => {
            console.log(product);
            const card = document.createElement('div')
            card.classList.add('card')
            // console.log(card);
            const img = document.createElement('img')
            img.classList.add('product__img');
            // console.log(img);
            const h2 = document.createElement('h2');
            h2.classList.add('product__name');
            // console.log(h2);
            const category = document.createElement('p');
            category.classList.add('product__category');
            const description = document.createElement('p')
            description.classList.add('product__description');
            const price = document.createElement('p');
            price.classList.add('product__price');
            const stock = document.createElement('p')
            stock.classList.add('product__stock')
            img.setAttribute('src', product.thumbnail)
            h2.innerHTML = ` ${product.title}`
            category.innerHTML = product.category;
            description.innerHTML = ` ${product.description}`;
            price.innerHTML = `${product.price} $`;
            stock.innerHTML = `${product.stock} ta qoldi`;
            card.append(img);
            card.append(h2)
            card.append(category)
            card.append(description)
            card.append(price)
            card.append(stock)
            box.append(card)
            card.addEventListener('mouseover', ()=>{
                card.style.transform = `scale(110%)`
                card.style.transition = `1s`
            })
            card.addEventListener('mouseout', ()=>{
                card.style.transform = `scale(100%)`
                card.style.transition = `1s`
            })
        })
    
        
        
    } catch (error) {
        
    }
}
getProduct()