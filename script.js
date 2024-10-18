const blog = document.querySelector(".blog");
const newPostButton = document.querySelector("#newPostButton");
const overlay = document.querySelector(".overlay");
const newPostModal = document.querySelector(".new-post-modal");
const newPostCloseButton = document.querySelector(".new-post-close-button");
const submitButton = document.querySelector(".submitButton");
const blogContainer = document.querySelector(".blog-container");
const newPostTitle = document.querySelector("#new-post-title");
const newPostContent = document.querySelector("#new-post-content");
const viewPage = document.querySelector(".view-page");
const viewTitle = document.querySelector(".view-title");
const viewContent = document.querySelector(".view-content");
const viewBackButton = document.querySelector(".view-back-button")

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
viewBackButton.addEventListener('click', ()=> {
    blog.style.display = "block"
    viewPage.style.display = "none"
    });


function createBlogTile(blogData) {
    const blogTile = document.createElement('div');
    const blogWriting = document.createElement('div');
    const blogTitle = document.createElement('h3');
    const blogContent = document.createElement('p');
    const blogButtons = document.createElement('div');
    const viewButton = document.createElement('button');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button')

    blogTile.classList.add('blog-tile');
    blogTitle.classList.add('blog-title');
    blogContent.classList.add('blog-content');
    blogButtons.classList.add('blog-buttons-container');
    viewButton.classList.add('blog-buttons');
    editButton.classList.add('blog-buttons');
    deleteButton.classList.add('blog-buttons');

    blogTitle.textContent = blogData.title;
    blogContent.textContent = blogData.content.slice(0, 50) + "...";
    viewButton.textContent =  "view";
    editButton.textContent =  "edit";
    deleteButton.textContent =  "delete";

    blogWriting.append(blogTitle, blogContent)
    blogButtons.append(viewButton, editButton, deleteButton)
    blogTile.append(blogWriting, blogButtons);
    blogContainer.appendChild(blogTile);

    viewButton.addEventListener('click',() => viewBlog(blogData));
};

function viewBlog(blogData) {
    viewTitle.textContent = blogData.title;
    viewContent.textContent = blogData.content;

    blog.style.display = "none";
    viewPage.style.display ="block";
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