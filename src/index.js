fetch ('http://localhost:3000/ramens')
.then (res => res.json())
.then (data => {
    data.forEach(ramen => {
        const div =  document.querySelector("#ramen-menu")
        const img = document.createElement("img")
        img.src = ramen.image
        div.append(img)

        img.addEventListener("click", e => {
            const ramenDetail = document.querySelector("#ramen-detail")
            const ramenImage = document.querySelector(".detail-image")
            ramenImage.src = ramen.image

            const name = document.querySelector(".name")
            name.textContent = ramen.name

            const restaurant = document.querySelector(".restaurant")
            restaurant.textContent = ramen.restaurant

            ramenDetail.append(ramenImage, name, restaurant)

            const rating = document.querySelector("#rating-display")
            rating.textContent = ramen.rating

            const comment = document.querySelector("#comment-display")
            comment.textContent = ramen.comment

const form = document.querySelector("#new-ramen")
form.addEventListener("submit", e => {
    e.preventDefault()

    const inputName = document.querySelector("#new-name").value
    const inputRestaurant = document.querySelector("#new-restaurant").value
    const inputImage = document.querySelector("#new-image").value
    const inputRating = document.querySelector("#new-rating").value
    const inputComment = document.querySelector("#new-comment").value
    
    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
            },
        body: JSON.stringify({
            name: inputName,
            restaurant: inputRestaurant,
            image: inputImage,
            rating: inputRating,
            comment: inputComment
        })
        }
    )
})
})
})
})
