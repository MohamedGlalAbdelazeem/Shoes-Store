let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 51}%`;
});

function Login(event) {
  event.preventDefault();
  let userInput = document.getElementById('user-input').value;
  let userPassword = document.getElementById('password-input').value;

  if (userInput.length === 0 && userPassword.length === 0) {
    alert("You must enter your data");
  } else if (userInput.length === 0) {
    alert("You must enter a username");
  } else if (userPassword.length === 0) {
    alert("You must enter a password");
  } else {
    localStorage.setItem("user", userInput)
    window.location = 'index.html'
    updateButtonVisibility()
  }
}

function Regestration() {
  event.preventDefault();
  let userName = document.getElementById('username-input').value.trim();
  let email = document.getElementById('email-input').value.trim();
  let phoneNumber = document.getElementById('phone-input').value.trim();
  let newPassword = document.getElementById('newpassword-input').value.trim();
  let confirmPassword = document.getElementById('confirmpassword-input').value.trim();

  if (!userName || !email || !phoneNumber || !newPassword || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match!!!");
    return;
  }

  // Store user data in localStorage
  const user = {
    userName: userName,
    email: email,
    phoneNumber: phoneNumber
  };
  localStorage.setItem("user", JSON.stringify(user));

  // Redirect to login page
  window.location.href = 'login.html';
}
function updateButtonVisibility() {
  let regestrationBtn = document.getElementById("regester");
  let logoutBtn = document.getElementById("logout");

  if (localStorage.getItem("user")) {
    regestrationBtn.style.visibility = "hidden";
    logoutBtn.style.visibility = "visible";
  } else {
    regestrationBtn.style.visibility = "visible";
    logoutBtn.style.visibility = "hidden";
  }
  
}
updateButtonVisibility()


function Logout(event) {
  event.preventDefault();
  localStorage.clear(); 
  window.location.href = 'login.html';
  updateButtonVisibility()
}

function addProduct(event) {
  event.preventDefault();
  if (!localStorage.getItem("user")) {
    window.location="login.html"
  }
}
// start products section 
let productsBox = document.getElementById("boxes");
let products = [
  {
    id:1,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes1.png",
    price: "$100.99",
  },
  {
    id:2,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes2.png",
    price: "$99",
  },
  {
    id:3,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes3.png",
    price: "$105",
  },
  {
    id:4,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes4.png",
    price: "$200",
  },
  {
    id:5,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes5.png",
    price: "$105",
  },
  {
    id:6,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes6.png",
    price: "$300",
  },
  {
    id:7,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes7.png",
    price: "$105",
  },
  {
    id:8,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes8.png",
    price: "$450",
  },
  {
    id:9,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes1.png",
    price: "$150",
  },
  {
    id:10,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes2.png",
    price: "$1005",
  },
  {
    id:11,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes3.png",
    price: "$68",
  },
  {
    id:12,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes4.png",
    price: "$400",
  },
  {
    id:13,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes5.png",
    price: "$190",
  },
  {
    id:14,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes6.png",
    price: "$656",
  },
  {
    id:15,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes7.png",
    price: "$105",
  },
  {
    id:16,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    urlImage:"./image/shoes8.png",
    price: "$105",
  },
]
function productsFuc() {
  let productsList  = products.map((product)=>{
  return `
      <div class="box">
      <div class="icons">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-cart-arrow-down"></i>
      </div>
      <div class="image">
          <img src="${product.urlImage}" alt="shoes">
      </div>
      <div class="text">
          <h1>NIKE</h1>
          <p>${product.body}</p>
          <h3>${product.price}</h3>
      </div>
      <div class="stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
      </div>
      <a href="#" onclick="addProduct(event)">Add To Cart</a>
    </div>
  `;
  });
  productsBox.innerHTML = productsList; 
}
productsFuc();


// start Review section
let contentBox = document.getElementById('reviewContent');
let comments =[
  {
    urlImage:"./image/man_dp1.jpg",
    name:"ali ahmed",
  },
  {
    urlImage:"./image/man_dp1.jpg",
    name:"mohamed ahmed",
  },
  {
    urlImage:"./image/man_dp1.jpg",
    name:"moaz ahmed",
  },
  {
    urlImage:"./image/man_dp1.jpg",
    name:"ali glal",
  },
  {
    urlImage:"./image/man_dp1.jpg",
    name:"ali mosuafu",
  },
  {
    urlImage:"./image/man_dp1.jpg",
    name:"medo ahmed",
  },

]
function reviewFunc() {
  let commentssList  = comments.map((comment)=>{
  return `
  <div class="box">
  <span>
      <img src="${comment.urlImage}">  
  </span>
  <div class="profile">
      <div class="name">
          <h3>${comment.name}</h3>
      </div>
      <div class="icons">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
      </div>
  </div>
 <p> Hello man my namei is lai a a and a for mLorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi at laborum similique molestias quaerat culpa molestiae quisquam officiis in accusamus.</p>
</div>
  `;
  });
  contentBox.innerHTML = commentssList; 
}
reviewFunc();

