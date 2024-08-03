const productImg = document.querySelectorAll('.slide')
const activeImg = document.getElementById('active-productImg')


 


function openSlide() {
    const imgBtn = document.querySelectorAll('.non-slide')
    const slide = document.getElementsByClassName('slide-wrapper')[0]
    imgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            slide.classList.toggle('hide')
        })    
    });

    productImg.forEach(images => {
        images.addEventListener('click', () => {
            activeImg.src = images.value;
        })
    });

}

function controlSlide() {
    const next = document.getElementsByClassName('next')[0]
    const prev = document.getElementsByClassName('prev')[0]
    const mobileNext = document.getElementsByClassName('nexter')[0]
    const mobilePrev = document.getElementsByClassName('prever')[0]
    const mobileActiveImg = document.getElementsByClassName('activeImg')[0]
    let i = 0
    next.addEventListener('click', () => {
        i = (i + 1) % images.length
        activeImg.src = images[i].image
    })
    prev.addEventListener('click', () => {
        i = (i - 1 + images.length) % images.length
        activeImg.src = images[i].image
    })
    mobileNext.addEventListener('click', () => {
        i = (i + 1) % images.length
        mobileActiveImg.src = images[i].image
    })
    mobilePrev.addEventListener('click', () => {
        i = (i - 1 + images.length) % images.length
        mobileActiveImg.src = images[i].image
    })
      
}
controlSlide()

function productQuantity() {
    const add = document.getElementById('plus')
    const subtract = document.getElementById('minus')
    let quantity = document.getElementsByClassName('quantity')[0]
    let quantityValue = Number(quantity.textContent)
    subtract.addEventListener('click', () => {
        if (quantityValue > 1) {
            quantity.value = --quantityValue
        }
    })
    add.addEventListener('click', () => {
        if (quantityValue < 100) {
            quantity.value = ++quantityValue
        }
    })
    
     
}
 
let itemsBought = []

function cartItems() {
    
    const addToCart = document.querySelector('.cart-btn')
    const price = Number(document.getElementById('newer-price').innerText)    
    const productName = document.getElementsByClassName('name')[0]
    

    addToCart.addEventListener('click', () => {
        const purchases = document.getElementsByClassName('purchases')[0]
        const goods = document.createElement('div')
        let productPhoto = document.createElement('img')
        let purchaseInfo = document.createElement('div')
        let purchaseName = document.createElement('p')
        let purchasePrice = document.createElement('p')
        let totalProductPrice = document.createElement('span')
        let quantity = Number(document.getElementsByClassName('quantity')[0].value)
        let deletePurchase = document.createElement('button')



        purchases.append(goods)

        goods.classList.add('goods')
        goods.append(productPhoto)
        goods.append(purchaseInfo)
        goods.append(deletePurchase)

        
        productPhoto.src = activeImg.src

        
        purchaseInfo.classList.add('purchase-info')
        purchaseInfo.append(purchaseName)
        purchaseInfo.append(purchasePrice)

        
        purchaseName.classList.add('purchase-name')
        purchaseName.textContent = productName.textContent

        
        purchasePrice.classList.add('purchase-price')
        purchasePrice.textContent = `$${price} x ${quantity}`
        purchasePrice.append(totalProductPrice)
        
        totalProductPrice.classList.add('total')
        totalProductPrice.textContent = '$' + price * quantity + '.00'
        itemsBought.push(quantity)

        deletePurchase.classList.add('delete-purchase')
        deletePurchase.innerHTML = '<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>'
        
        deletePurchase.addEventListener('click', () => {
            deletePurchase.parentElement.remove()
        })
        quantityPopup()
        
    })

    function checkCartedItems() {
        const cartedBtn = document.getElementById('carted')
        const purchases = document.getElementsByClassName('items-bought')[0]
        cartedBtn.addEventListener('click', () => {purchases.classList.toggle('hide')})
    }
    checkCartedItems()
    
}   
cartItems()

function quantityPopup() {
    let quantity = Number(document.getElementsByClassName('quantity')[0].value)
    const popup = document.getElementsByTagName('sup')[0]    
    let total = quantity
    popup.textContent = total
}


productQuantity()



function closeSlide() {
    const closeBtn = document.getElementsByClassName('close-btn')[0]
    const closeTab = document.getElementsByClassName('second-close')[0]
    const tabBtn = document.getElementsByClassName('tab')[0]
    const slide = document.getElementsByClassName('slide-wrapper')[0]
    const tab = document.getElementsByTagName('ul')[0]
    const overlay = document.getElementsByClassName('overlay')[0]
    closeBtn.addEventListener('click', () => {
        slide.classList.toggle('hide')
    })
    closeTab.addEventListener('click', () => {
        tab.classList.add('hidden')
        overlay.classList.toggle('hide')
    })
    tabBtn.addEventListener('click', () => {
        tab.classList.toggle('hidden')
        overlay.classList.toggle('hide')
    })
}
closeSlide()
openSlide()









let images = [
    {
        name: 'Fall Limited Edition Sneakers',
        image: './images/image-product-1.jpg',
        price: 125

    },
    {
        name: 'image-2',
        thumbnail: '.\images\image-product-2-thumbnail.jpg',
        image: './images/image-product-2.jpg'
    },
    {
        name: 'image-3',
        thumbnail: '.\images\image-product-3-thumbnail.jpg',
        image: './images/image-product-3.jpg'
    },
    {
        name: 'image-4',
        thumbnail: '.\images\image-product-4-thumbnail.jpg',
        image: './images/image-product-4.jpg'
    }
]
