const inventory = [
    {
        title: "titanium white",
        id: 1,
        image: "images/products/020.jpg",
        opacity: 1,
        lightfast: 2,
        size: [small, large],
        code: "020"
    },
    {
        title: "buff titanium",
        id: 1,
        image: "images/products/028.jpg",
        opacity: 2,
        lightfast: 3,
        size: [small, large],
        code: "040"
    },
]


const printinventory = () => {
    inventory.map(item => {
        console.log(item.title)
    })
}
