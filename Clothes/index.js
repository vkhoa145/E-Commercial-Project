const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar');
const close = document.getElementById('close');
const header = document.getElementById('header');
const modal = document.getElementById('modal');



if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
};


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};


// MODAL
// Open modal 
function openModal() {
    modal.style.display = 'block';
};
// Close modal 
function closeModal() {
    modal.style.display = 'none';
};

// PRODUCTS 
const products = [
    featureProduct = [
        { name: 'Oxford', id: 1, price: 78, img: 'img/f1.jpg' , type:'shirt'},
        { name: 'Lebron', id: 1, price: 100, img: 'img/f2.jpg', type:'paint' },
        { name: 'David', id: 1, price: 140, img: 'img/f3.jpg', type:'shirt' },
        { name: 'Cambrigde', id: 1, price: 55, img: 'img/f4.jpg', type:'shorts' },
        { name: 'Nike', id: 1, price: 65, img: 'img/f5.jpg', type:'shirt' },
        { name: 'Adidas', id: 1, price: 90, img: 'img/f6.jpg', type:'shorts' },
        { name: 'Puma', id: 1, price: 84, img: 'img/f7.jpg', type:'paint' },
        { name: 'Oakley', id: 1, price: 99, img: 'img/f8.jpg', type:'shirt' },
    ],
    newArrival = [
        { name: 'Off White', id: 1, price: 99, img: 'img/n1.jpg',type:'paint' },
        { name: 'Jordan', id: 1, price: 99, img: 'img/n2.jpg',type:'shirt'  },
        { name: 'Bentley', id: 1, price: 99, img: 'img/n3.jpg',type:'shorts'  },
        { name: 'Audi', id: 1, price: 99, img: 'img/n4.jpg',type:'shirt'  },
        { name: 'Mercedes', id: 1, price: 99, img: 'img/n5.jpg',type:'paint'  },
        { name: 'Rayban', id: 1, price: 99, img: 'img/n6.jpg',type:'shirt'  },
        { name: 'Daniel', id: 1, price: 99, img: 'img/n7.jpg',type:'shirt'  },
        { name: 'Ferrari', id: 1, price: 99, img: 'img/n8.jpg',type:'shorts'  },
    ]

];
featureProduct = [
    { name: 'Oxford', id: 1, price: 78, img: 'img/products/f1.jpg' , type:'shirt'},
    { name: 'Lebron', id: 1, price: 100, img: 'img/products/f2.jpg', type:'paint' },
    { name: 'David', id: 1, price: 140, img: 'img/products/f3.jpg', type:'shirt' },
    { name: 'Cambrigde', id: 1, price: 55, img: 'img/products/f4.jpg', type:'shorts' },
    { name: 'Nike', id: 1, price: 65, img: 'img/products/f5.jpg', type:'shirt' },
    { name: 'Adidas', id: 1, price: 90, img: 'img/products/f6.jpg', type:'shorts' },
    { name: 'Puma', id: 1, price: 84, img: 'img/products/f7.jpg', type:'paint' },
    { name: 'Oakley', id: 1, price: 99, img: 'img/products/f8.jpg', type:'shirt' },
];

console.log(featureProduct[0].name)
// Render Products
let html = ''
const renderProducts =featureProduct.reduce(function(product){
    
    return html = (
    `
    <div class="pro">
        <img src=${product[0].img} alt=${product[0].name}>
        <div class="des">
            <span>${product[0].type}</span>
            <h5>${product[0].name}</h5>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                
                
            </div>
            <h4>${product[0].price}</h4>
        </div>
        <a href="#">
            <i class="fa-solid fa-cart-plus cart"></i>
        </a>
    </div>
    `
    
    );
    
    
},'')
document.getElementById('pro-container').innerHTML = html;
console.log(renderProducts)