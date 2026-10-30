const filter = document.getElementById("priceFilter");
const search = document.getElementById("breedSearch");
const cards = document.querySelectorAll(".dog__card");
const resetButton = document.getElementById("resetFilters");
    function filterDogs() {
        const searchTerm = search.value.toLowerCase();
        const selectedPrice = filter.value;

        cards.forEach((card) => {
            const dogName = card.querySelector("h3").textContent.toLowerCase();
            const price = Number(card.dataset.price);

            const matchesSearch = dogName.includes(searchTerm);

            let matchesPrice = true;

            if(selectedPrice !== "all") {
                const [min, max] = selectedPrice.split("-").map(Number);
                matchesPrice = price >= min && price <= max;
            }

            card.style.display = matchesSearch && matchesPrice ? "" : "none";
        });
    }


    search.addEventListener("input", filterDogs);
    filter.addEventListener("change", filterDogs);

    resetButton.addEventListener("click", () => {
        search.value = "";
        filter.value = "all";
        filterDogs();
    });
        const breedNames = {
            "german shepherd": "german/shepherd",
            "great dane": "dane/great",
            "toy poodle": "poodle/toy",
            "english bulldog": "bulldog/english",
            "cocker spaniel": "spaniel/cocker",
            "labrador retriever": "labrador",
        };
        async function  getDog(breed) {
         const apiBreed = breedNames[breed] || breed;
         
         const response = await fetch(
            `https://dog.ceo/api/breed/${apiBreed}/images/random/3`
         );
        
         const data = await response.json();
            
         const results = document.getElementById("dogResults");
        results.innerHTML = "";
         
         if (data.status !== "success") {
         results.textContent = "Breed not found. Please try another breed.";
        return;
    }
     
        data.message.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = breed;
        results.appendChild(img);
        
    });
}
    
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", () => {
        const breed = document
        .querySelector("#breedSearch")
        .value.trim().toLowerCase();
            
        console.log("Search button clicked");
        getDog(breed);
    });

    document.addEventListener("click", function (event) {
        const button = event.target.closest(".adopt-btn");

        if (!button) return;

        event.preventDefault();

    const breed = button.dataset.breed;
    const breedInput = document.getElementById("dogBreed");

        if (breedInput) {
            breedInput.value = breed || "";
        }

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
        
        
        
        
            
    
     



            
            
        
        