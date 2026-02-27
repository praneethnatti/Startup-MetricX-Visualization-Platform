// Home Page Button
function learnMore() {
    alert("Welcome to Startup Metrics Visualization Platform 🚀");
}

// Toggle Login/Register
function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
}

function showRegister() {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function() {

    // LOGIN FORM
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Login Successful 🚀");
            window.location.href = "startup-onboarding.html";
        });
    }

    // REGISTER FORM
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Registration Successful 🎉 Please Login");
            showLogin();
        });
    }

    // STARTUP FORM (FIXED)
    const startupForm = document.getElementById("startupForm");

    if (startupForm) {
        startupForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const inputs = startupForm.querySelectorAll("input");
            const select = startupForm.querySelector("select");

            const companyName = inputs[0].value;
            const revenue = inputs[1].value;
            const customers = inputs[2].value;
            const employees = inputs[3].value;
            const industry = select.value;

            // Save to localStorage
            localStorage.setItem("companyName", companyName);
            localStorage.setItem("industry", industry);
            localStorage.setItem("revenue", revenue);
            localStorage.setItem("customers", customers);
            localStorage.setItem("employees", employees);

            alert("Startup Details Submitted Successfully 📊");

            window.location.href = "analytics-dashboard.html";
        });
    }

    // DASHBOARD DATA LOAD (NEW ADDITION)
    const revenueDisplay = document.getElementById("revenueDisplay");

    if (revenueDisplay) {

        const revenue = localStorage.getItem("revenue") || 0;
        const customers = localStorage.getItem("customers") || 0;
        const employees = localStorage.getItem("employees") || 0;

        document.getElementById("revenueDisplay").innerText = "$" + revenue;
        document.getElementById("customersDisplay").innerText = customers;
        document.getElementById("employeesDisplay").innerText = employees;

        // Revenue Chart
        new Chart(document.getElementById("revenueChart"), {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Revenue Growth",
                    data: [
                        revenue * 0.5,
                        revenue * 0.7,
                        revenue * 0.8,
                        revenue * 0.9,
                        revenue,
                        revenue * 1.2
                    ],
                    borderColor: "#00c3ff",
                    backgroundColor: "rgba(0,195,255,0.2)",
                    fill: true
                }]
            }
        });

        // Customer Chart
        new Chart(document.getElementById("customerChart"), {
            type: "bar",
            data: {
                labels: ["Customers", "Employees"],
                datasets: [{
                    label: "Business Overview",
                    data: [customers, employees],
                    backgroundColor: ["#2c5364", "#00c3ff"]
                }]
            }
        });
    }

});
function showSection(sectionId) {

    // Hide all sections
    document.querySelectorAll(".section-page").forEach(section => {
        section.style.display = "none";
    });

    // Show selected section
    document.getElementById(sectionId).style.display = "block";

    // Remove active class from all nav items
    document.querySelectorAll(".sidebar ul li").forEach(item => {
        item.classList.remove("active");
    });

    // Add active class to clicked item
    document.getElementById("nav-" + sectionId).classList.add("active");
}
setInterval(() => {

    let currentRevenue = parseFloat(localStorage.getItem("revenue")) || 10000;
    let newRevenue = currentRevenue + Math.floor(Math.random() * 500);

    localStorage.setItem("revenue", newRevenue);

    document.getElementById("revenueDisplay").innerText = "$" + newRevenue;

}, 5000);