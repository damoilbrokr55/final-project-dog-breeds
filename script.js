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
        async function  getDog(breed) {
         const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random)`);
    
        const data = await response.json();
        console.log(data.message) }
        const searchBtn = document.getElementById("searchBtn");
        searchBtn.addEventListener("click", () => {
        const breed = document.querySelector("#breedSearch").value.trim().toLowerCase();
        getDog(breed);
    });



            
            
        
        