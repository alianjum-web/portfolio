function createCard(title, cName,  thumbnail) {
    // Finish this function
   
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div> 
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

/*

<body>
    <div class="container">
        <div class="card">
            <div class="image">
                <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
                    alt="">
                <div class="capsule">31:06</div>
            </div>
            <div class="text">
                <h1>Introduction to Backend | Sigma Web Dev video #2</h1>
                <p>CodeWithHarry . 727K views . 2 months ago</p>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>



 <div>
                        <h5>Giftlink App to Browse Gifts</h5>
                        <p>
                            Browse gifts, search by specific queries, and use authentication
                            functionality to ensure secure access for authenticated users.
                        </p>
                    </div>
                    <div>
                        <h5>Little Lemon Project</h5>
                        <p>
                            Order food from the restaurant, pay online, and have it delivered
                            to your address by a rider.
                        </p>
                    </div>
                </div>

*/