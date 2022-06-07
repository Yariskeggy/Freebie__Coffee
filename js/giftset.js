const giftset = () => {
    const giftsetBtn = document.querySelectorAll('.cards__button_but')
    const main = document.querySelector('.giftset')
    const cardsTitle = main.querySelector('.cards__title')

    console.log(cardsTitle)


    const changeContent = (index) => {
        cardsTitle.textContent = `${tabsOptions[index].name}`
        // tabsPrice.textContent = `${tabsOptions[index].price}₽`
        // tabsMainTitle.textContent = tabsOptions[index].name

        // tabsImage.setAttribute('src', tabsOptions[index].image)
    }

    const tabsOptions = [{
            name: 'Giftset "coffee phin, Vietnam"',
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Giftset "coffee, Africa"',
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Giftset "coffee revo India"',
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp'
        }
    ]

    const changeActiveTabs = (indexClickedTab) => {
        giftsetBtn.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })
        changeContent(indexClickedTab)
    }

    giftsetBtn.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index)
        })
    })
}

giftset()