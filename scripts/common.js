// Header Template starts here

header.innerHTML = `
            <div class="header">
            <a href="index.html" id="logo-a"><img id="logo" src="assests/images/logo.png" alt="logo"></a>
            <button type="button" id="loginButton" onclick="logout()" class="btn btn-light btn-sm" data-backdrop="false" data-toggle="modal" data-target="#loginModal">LOGIN</button> 
            </div>
            
            <!-- Login Modal starts here -->

            <div class="modal" tabindex="-1" id="loginModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title">Please Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body" style="margin: 5%;">
                        <form>
                            <div class="form-group d-flex">
                            <label for="username" class="col-form-label" style="margin: 0 30px;">Username:</label>
                            <input type="text" required placeholder="Enter Username" class="form-control" id="username">
                            </div>
                            <br>
                            <div class="form-group d-flex">
                            <label for="password" class="col-form-label" style="margin: 0 30px;">Password:</label>
                            <input type="password" required placeholder="Enter Password" class="form-control" id="password"></textarea>
                            </div>
                        </form>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="login()">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Login Modal ends here -->`;

// Header Template ends here

// Footer Template starts here

footer.innerHTML = `
            <div class="footer">

                <!-- Contact Us -->
                <section id="contactUs">
                    <button type="button" class="btn btn-info btn-sm" data-backdrop="false" data-toggle="modal" data-target="#contactModal">Contact Us</button>
                </section>

                <!-- Copyright -->
                <section id="copyright">
                    <span>&copy; 2020 ROOM SEARCH PVT. LTD.</span>
                </section>

                <!-- Social media links -->
                <section id="socialMedia">
                    <a href="https://www.facebook.com" target="_blank">
                        <img class="socialMediaImage" src="assests/images/facebook.png" alt="facebook-logo">
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <img class="socialMediaImage" src="assests/images/instagram.png" alt="instagram-logo">
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <img class="socialMediaImage" src="assests/images/twitter.png" alt="twitter-logo">
                    </a>
                </section>

            </div>
            
            <!-- Contact Us Modal starts here -->

            <div class="modal" tabindex="-1" id="contactModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                        <p>Thanks you for reaching out!!! <br>
                            Please enter your email and we will get back to you.
                        </p>
                        <form>
                            <div class="form-group d-flex display-inline">
                            <label for="recipient-name" class="col-form-label">Email:</label>
                            <input type="email" required placeholder="Enter your email id" class="form-control" id="recipient-name" style="max-width: 50%;">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>
                </div>
            </div>

            <!-- Contact Us Modal ends here -->`;

// Footer Template ends here


// Login Function
let login = (e) => {

    let btn = document.getElementById("loginButton");

    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");

    localStorage.setItem("isLogin", "false");

    // e.preventDefault();

    let uname = document.getElementById("username");
    let pswrd = document.getElementById("password");

    if(
        uname.value === localStorage.getItem("username") && pswrd.value === localStorage.getItem("password")
    ) {
        localStorage.setItem("isLogin", "true");
        alert("Successfully logged in!");

        btn.dataset.target = '';
        btn.innerText = "LOGOUT";

        document.getElementById('payNowButton').disabled = false;
        console.log("Inside logout function");
    } else {
        alert("Enter valid credentials...");

        uname.value = '';
        pswrd.value = '';
    }
};

function logout() {
    let btn = document.getElementById("loginButton");
    btn.innerText = "LOGIN";
    document.getElementById('payNowButton').disabled = true;
}
