const newPostButton = document.querySelector("#newPostButton");
const overlay = document.querySelector(".overlay");
const newPostModal = document.querySelector(".new-post-modal");
const newPostCloseButton = document.querySelector(".new-post-close-button");
const submitButton = document.querySelector(".submitButton");
const blogContainer = document.querySelector(".blog-container");
const newPostTitle = document.querySelector("#new-post-title");
const newPostContent = document.querySelector("#new-post-content");

let currentBlogData = null;

function openModal() {
    newPostModal.style.display = "block";
    overlay.style.display = "block";
};

function closeModal() {
    newPostModal.style.display = "none";
    overlay.style.display = "none";
};

newPostButton.addEventListener("click", openModal);
newPostCloseButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function createBlogTile(blogData) {
    const blogTile = document.createElement('div');
    const blogTitle = document.createElement('h3');
    const blogContent = document.createElement('p');

    blogTile.classList.add('blog-tile');
    blogTitle.classList.add('blog-title');
    blogContent.classList.add('blog-content');

    blogTitle.textContent = blogData.title;
    blogContent.textContent = blogData.content.slice(0, 30) + "...";

    blogTile.append(blogTitle, blogContent);
    blogContainer.appendChild(blogTile);
};

function storeData(blogData) {
    currentBlogData = blogData;
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push(blogData);
    localStorage.setItem('blogs', JSON.stringify(blogs))
};

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); 

    const blogData = {title : newPostTitle.value, content: newPostContent.value};
    createBlogTile(blogData);
    storeData(blogData);

    closeModal();

    newPostTitle.value ="";
    newPostContent.value = "";
});

function loadBlogs() {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogContainer.innerHTML = "";

    blogs.forEach(blog => createBlogTile(blog));
};

window.addEventListener('load', loadBlogs);