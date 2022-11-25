const API = "27512711";

const SEARCH_INPUT = document.querySelector('.input-search');
const SEARCH_BTN = document.querySelector('.btn-search-icon');

const WRAPPER_MOVIES_LIST = document.querySelector('.wrapper-results');

const RESULT_OF_SEARCH = document.querySelector('.list-movies');
const ADDITIONAL_INFO_MOVIE = document.querySelector('.movies-detais');
const PAGINATION = document.querySelector('.pages');

const STATUS = document.createElement("span");
STATUS.classList.add("status-data");
WRAPPER_MOVIES_LIST.prepend(STATUS);

const NEXT_PAGE = document.createElement("button");
NEXT_PAGE.classList.add("next-page");

const PREVIOUS_PAGE = document.createElement("button");
PREVIOUS_PAGE.classList.add("previous-page");

let currentPage = 1;

function getMoviesBySearch() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API}&s=${SEARCH_INPUT.value}`)
        .then((res) => res.json())
        .then(showMoviesListBySearch);

    PAGINATION.innerHTML = "";
}

SEARCH_BTN.addEventListener("click", getMoviesBySearch);

function showMoviesListBySearch(result, pageID) {
    if (result.Responce === "False") {
        RESULT_OF_SEARCH.innerHTML = "";

        STATUS.innerHTML = "";
        STATUS.classList.add("error");
        STATUS.innerHTML = `${result.Error}`;
    } else {
        let arrayOfMovies = result.Search;
        STATUS.innerHTML = "";
        STATUS.classList.remove("error");
        STATUS.innerHTML = `${result.totalResults} items was found for ${SEARCH_INPUT.value}`;
        const totalAmountOfPages = Math.ceil(result.totalResults / 10);

        if (String(totalAmountOfPages?.length) && !pageID) {
            showPages(totalAmountOfPages);
        }

        RESULT_OF_SEARCH.innerHTML = "";

            arrayOfMovies.forEach((elem) => {
            const MOVIE_INFO = RESULT_OF_SEARCH.appendChild(document.createElement("div"));
            MOVIE_INFO.classList.add("movies-appearance");

            const MOVIE_ELEMENT = MOVIE_INFO.appendChild(document.createElement("div"));
            MOVIE_ELEMENT.classList.add("movie-el");

            const POSTER = MOVIE_ELEMENT.appendChild(document.createElement("img"));
            POSTER.classList.add("poster-to-movie");

            const MOVIE_TITLE = MOVIE_ELEMENT.appendChild(document.createElement("span"));
            MOVIE_TITLE.classList.add("movie-title");

            const BTN_TO_OPEN_DETAILS = MOVIE_INFO.appendChild(document.createElement("button"));
            BTN_TO_OPEN_DETAILS.classList.add("btn-for-details");

            POSTER.src = elem.Poster;
            MOVIE_TITLE.innerHTML = elem.Title;
            BTN_TO_OPEN_DETAILS.innerHTML = "more";
            
            function getMovieId() {
                fetch(`http://www.omdbapi.com/?apikey=${API}&i=${elem.imdbID}`)
                .then((res) => res.json())
                .then(showMoreInfo);
        
                ADDITIONAL_INFO_MOVIE.innerHTML = "";
            }
            BTN_TO_OPEN_DETAILS.addEventListener("click", getMovieId);
        });
    }
}

function getPage(page) {
    fetch(`http://www.omdbapi.com/?apikey=${API}&s=${SEARCH_INPUT.value}&page=${page}`)
    .then((res) => res.json())
    .then((res) => showMoviesListBySearch(res, page));
}

function showMoreInfo(res) {
    let fieldAbout = Object.entries(res);
    fieldAbout.forEach((elem) => {
        const MOVIE_ITEM = ADDITIONAL_INFO_MOVIE.appendChild(document.createElement("div"));
        MOVIE_ITEM.classList.add("details-movieItem");

        if (elem[0] === "RATINGS") {
            elem[1].forEach((rateItem) => {
                const RATE = document.createElement("span");
                RATE.innerHTML = `<span class="item-key">${rateItem.Source}</span>: <span>${rateItem.Value}</span>`;
                MOVIE_ITEM.appendChild(RATE);
            });
        } else if (elem[0] === "Poster") {
            const POSTER_IMG = document.createElement("img");
            POSTER_IMG.classList.add("poster-for-movie");
            POSTER_IMG.setAttribute("src", elem[1]);
            MOVIE_ITEM.appendChild(POSTER_IMG);
            MOVIE_ITEM.classList.add("order");
        } else {
            MOVIE_ITEM.innerHTML = `<span class="item-key">${elem[0]}:</span><span>${elem[1]}</span>`;
        }
    });
}

function showPages(totalAmountOfPages) {
    if (totalAmountOfPages === 1) return;
    const PAGES_QUANTITY = totalAmountOfPages > 100 ? 100 : totalAmountOfPages;
    const PAGES_ARRAY = [];

    for (let i = 1; i <= PAGES_QUANTITY; i++) {
        PAGES_ARRAY.push(i);
    }

    const ARRAY_LENGTH = PAGES_ARRAY.slice(0, 10);
    ARRAY_LENGTH.map((page) => {
        const PAGE_ITEM = document.createElement("span");
        PAGE_ITEM.classList.add("page");
        PAGE_ITEM.setAttribute("id", page);
        PAGE_ITEM.innerHTML = page;
        PAGINATION.appendChild(PAGE_ITEM);
    });
    PAGINATION.addEventListener("click", (elem) => {
        if (elem.target.id === "next" && +currentPage === ARRAY_LENGTH.length) {
            return;
        } else if (elem.target.id === "next") {
            currentPage++;
            getPage(currentPage);
        } else if (elem.target.id === "prev" && +currentPage === 1) {
            return;
        } else if (elem.target.id === "neprevxt") {
            currentPage--;
            getPage(currentPage);
    } else {
        currentPage = elem.target.id;
        getPage(elem.target.id);
    }
});
}

NEXT_PAGE.innerHTML = "<";
PREVIOUS_PAGE.innerHTML = ">";

PAGINATION.append(PREVIOUS_PAGE);
PAGINATION.prepend(NEXT_PAGE);
