function createCard(img,pageLink, title, content) {
  
    let html = ` <section class="card">
                    <div class="image">
                        <img src="${img}">
                    </div>
                    <div class="project-text">
                         <a href="${pageLink}" target="_blank">${title}</a>
                        <p>
                           ${content}
                        </p>
                    </div>

                </section>`

    
    document.querySelector(".project-card").innerHTML = document.querySelector(".project-card").innerHTML + html;
}


createCard("images/vanlife.png", "https://vanlife-prime.netlify.app/", "Vanlife App", "Rent the perfect van to make your perfect road trip. You pay for the van depending on the number of days. There are many vans available on the webpage. You can select your favorite one, compare prices, check availability, view user reviews, and book instantly online.. ");

createCard("images/giftlink.png", "https://gift-seven-smoky.vercel.app/", "GiftLink: A Smart Gift Idea", "Gave gifts to your loved ones.It uses sentiment analysis to suggest personalized gift ideas based on the recipient's details.  It showcases my full-stack development skills and ability to create practical, user-friendly applications.");



// JavaScript for adding "active" class to menu items based on scroll position
const sections = document.querySelectorAll('.content-section');
const menuItems = document.querySelectorAll('.menu-item');

const observerOptions = {
  root: null, // Viewport
  threshold: 0.5, // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const menuItem = document.querySelector(`a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      menuItems.forEach((item) => item.classList.remove('active'));
      menuItem.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));


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