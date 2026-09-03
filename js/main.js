document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop() || "6_home.html";
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const currentUser = JSON.parse(localStorage.getItem('ceylon_user'));
    const authBox = document.getElementById('nav-auth-container');

    if (currentUser && authBox) {
        authBox.innerHTML = `
            <span style="color:#fff; margin-right:10px;">Hi, ${currentUser.name}</span>
            <button onclick="logout()" class="btn btn-outline">Logout</button>
        `;
    }
});

function logout() {
    localStorage.removeItem('ceylon_user');
    window.location.reload();
}