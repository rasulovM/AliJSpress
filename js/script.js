document.addEventListener('DOMContentLoaded', function() {
  const search = document.querySelector('.search')
  const cartBtn = document.getElementById('cart')
  const wishBtn = document.getElementById('wishlist')
  const cart = document.querySelector('.cart')
  const cardWrapper = document.querySelector('.goods-wrapper')
  const cartClose = document.querySelector('.cart-close')
  const category = document.querySelector('.category')
  
  const createCardProducts = (id, title, price, img) => {
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

  const createLoading = () => {
    const loading = document.createElement('div')
    loading.className = 'loadingio-spinner-double-ring-cd7z5ok85b loading'
    loading.innerHTML = `
      <div class="ldio-btjiv4plf2">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    `
    return loading
  }

  const getProducts = (item, filter) => { 
    setTimeout(() => fetch('db/db.json')
      .then(res => {
        return res.json()
      })
      .then(filter)
      .then(item), 1000
    )
  }

  const renderCard = (items) => {
    cardWrapper.textContent = ''
    items.forEach(({id, title, price, imgMin}) => {
        cardWrapper.append ( 
          createCardProducts(id, title, price, imgMin)
        )
    })
  }

  const closeCart = (event) => {
    const target = event.target
    if(target === cart || target === cartClose || event.keyCode === 27) {
      cart.style.display = ''
      window.removeEventListener('keyup', closeCart)
    }
  }

  const openCart = (e) => {
    cart.style.display = 'flex'
    e.preventDefault()
    window.addEventListener('keyup', closeCart)
  }

  const randomSort = (item) => {
    return item.sort(() => Math.random() - 0.5)
  }

  const changeCategory = (event) => {
    event.preventDefault()
    const target = event.target
    if(target.classList.contains('category-item')) {
      const category = target.dataset.category
      getProducts(renderCard, item => item.filter(i => i.category.includes(category)))
    }
  }
  
  cartBtn.addEventListener('click', openCart)
  cart.addEventListener('click', closeCart)
  category.addEventListener('click', changeCategory)
  cardWrapper.append(createLoading())
  getProducts(renderCard, randomSort)

})