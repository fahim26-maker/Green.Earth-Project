const categoryContainer = document.getElementById
("categoryContainer");
const newsContainer = document.getElementById
('newsContainer')
const bookMarkContainer = document.getElementById
('bookMarkContainer')
// let bookMarks = []

const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then ((data) => {
        // console.log(data.categories);
        const categories = data.categories
        showcategory(categories)
    })
    .catch((err) => {
        console.log(err);
    });
};

const showcategory = (categories) => {
    categories.forEach(cat => {
        categoryContainer.innerHTML += `
        <li id ="${cat.id}" class="hover:bg-[#15803D] w-45 cursor-pointer p-1 hover:text-white rounded-sm">${cat.category_name}</li>
        `
        });
        categoryContainer.addEventListener('click', (e) => {
            const allLi = document.querySelectorAll('li')
            allLi.forEach(li =>{
                li.classList.remove('bg-[#15803D]')
            })
            if(e.target.localName === 'li') {
                // console.log(e.target.id)
                e.target.classList.add('bg-[#15803D]')
                loadNewsByCategory(e.target.id)
            }
        });
};

const spinner = document.getElementById('loadingSpinner');

const loadNewsByCategory = (categoryId) => {
    // console.log(categoryId)
    // Show spinner
    spinner.classList.remove('hidden');
    newsContainer.innerHTML = ""; // Clear previous cards

    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data.plants)
        showNewsByCategories(data.plants)
                // spinner.classList.add('hidden'); // Hide spinner after success 
    })
    .catch(err => {
        console.error("Error loading category:",err);
             spinner.classList.add('hidden'); // Hide spinner
    });
};

const loadAllTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            const allPlants = data.plants;
            showNewsByCategories(allPlants);
        })
        .catch(err => {
            console.log("Error loading all trees:", err);
        });
};

const showNewsByCategories = (plants) => {
    console.log(plants)
    newsContainer.innerHTML = ""
    plants.forEach(plants => {
        newsContainer.innerHTML += `
        <section class="h-100 w-75 p-3 bg-white ">
        <div class="space-y-2" id="${plants.id}">
        <div><img src="${plants.image}" class="h-40 w-70"/></div>
        <p class="font-semibold tree-name" data-id="${plants.id}">${plants.name}</p>
        <p class="text-gray-500 text-sm">${plants.description}</p>
        <div class="justify-between flex">
        <button class="bg-[#DCFCE7] text-[#15803D] rounded-lg p-1 text-sm">${plants.category}</button>
        <p>${plants.price}</p>
        </div>
        <button class="bg-[#15803D] w-70 rounded-xl p-1.5 text-white">Add to Cart</button>
        </div>
        </section>
        `
    });
    spinner.classList.add('hidden');
};

// newsContainer.addEventListener('click', (e) => {
//     if(e.target.innerText === 'Add to Cart') {
//         handleBookMarks(e)
//     }
// })

// const handleBookMarks = (e) => {
//     console.log("Add to Cart button clicked")
//         const title = (e.target.parentNode.children[0].innerText)
//         const id = e.target.parentNode.id
//         console.log(id)

//         bookMarks.push({
//             title: title,
//             id: id,
//         });
//         showBookmarks(bookMarks);
// };

// const showBookmarks = (bookMarks) => {
//     bookMarkContainer.innerHTML = ""
//     bookMarks.forEach(bookMark => {
//         bookMarkContainer.innerHTML += `
//         <div class="">
//         <p>${plants.name}</p>
//         </div>
//         `
//     })
// }

loadCategory();
loadAllTrees('')
