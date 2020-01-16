document.addEventListener('DOMContentLoaded', function() {
  const search = document.querySelector('.search')
  const cartBtn = document.getElementById('cart')
  const wishBtn = document.getElementById('wishlist')
  const cart = document.querySelector('.cart')
  const cardWrapper = document.querySelector('.goods-wrapper')
  const cartClose = document.querySelector('.cart-close')

  const createCardGoods = (id, title, price, img) => {
    const card = document.createElement('div')
    card.className = 'card-wrapper col-12 cold-md-6 col-lg-4 col-xl-3 pb-3'
    card.innerHTML = `								
      <div class="card">
        <div class="card-img-wrapper">
          <img class="card-img-top" src="${img}" alt="">
          <button class="card-add-wishlist"
            data-card-id="${id}"></button>
        </div>
        <div class="card-body justify-content-between">
          <a href="#" class="card-title">${title}</a>
          <div class="card-price">${price} ₽</div>
          <div>
            <button class="card-add-cart"
              data-card-id="${id}">Добавить в корзину</button>
          </div>
        </div>
      </div>
    `
    return card
  }
  cardWrapper.appendChild(createCardGoods(1, 'Дартс', 2000, './img/temp/Archer.jpg'))
  cardWrapper.appendChild(createCardGoods(2, 'Фламинго', 3000, './img/temp/Flamingo.jpg'))
  cardWrapper.appendChild(createCardGoods(3, 'Носки', 5000, './img/temp/Socks.jpg'))

  const closeCart = (event) => {
    const target = event.target
    if(target === cart || target === cartClose) {
      cart.style.display = ''
    }
  }
  const openCart = (e) => {
    cart.style.display = 'flex'
    e.preventDefault()

  }

  const esc = (e) => {
    const key = e.key
    if(key === "Escape") {
      if(cart.style.display === 'flex') {
        cart.style.display = 'none'
      }
    }
  }

  cartBtn.addEventListener('click', openCart)
  cart.addEventListener('click', closeCart)
  window.addEventListener('keydown', esc)  
})