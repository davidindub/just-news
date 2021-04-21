const commentLinks = document.querySelectorAll(".interactions > a")

commentLinks.forEach(function(item) {
    item.classList.add("hideTheComments")
})

document.querySelector(".comments-count").classList.add("hideTheComments")
document.querySelector("#comments").classList.add("hideTheComments")
document.querySelector("#respond").classList.add("hideTheComments")
