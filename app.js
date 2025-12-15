// Starter books for new users
const starterBooks = [
    {
        id: 'starter-1',
        title: "The Midnight Library",
        author: "Matt Haig",
        genres: ["Fiction", "Fantasy", "Philosophy"],
        description: "A dazzling novel about all the choices that go into a life well lived.",
        thumbnail: "http://books.google.com/books/content?id=1ZxRzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        publishedDate: "2020"
    },
    {
        id: 'starter-2',
        title: "Atomic Habits",
        author: "James Clear",
        genres: ["Self-Help", "Psychology", "Productivity"],
        description: "An easy and proven way to build good habits and break bad ones.",
        thumbnail: "http://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        publishedDate: "2018"
    },
    {
        id: 'starter-3',
        title: "Project Hail Mary",
        author: "Andy Weir",
        genres: ["Science Fiction", "Adventure", "Thriller"],
        description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller.",
        thumbnail: "http://books.google.com/books/content?id=G1lmEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        publishedDate: "2021"
    },
    {
        id: 'starter-4',
        title: "Educated",
        author: "Tara Westover",
        genres: ["Memoir", "Biography", "Non-Fiction"],
        description: "A memoir about a young girl who leaves her survivalist family and goes on to earn a PhD from Cambridge.",
        thumbnail: "http://books.google.com/books/content?id=2ObWDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        publishedDate: "2018"
    },
    {
        id: 'starter-5',
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genres: ["Fiction", "Historical", "Romance"],
        description: "Aging Hollywood icon Evelyn Hugo finally tells the story of her glamorous and scandalous life.",
        thumbnail: "http://books.google.com/books/content?id=y8pLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        publishedDate: "2017"
    }
];

// Pool of books for recommendations (not in user's library by default)
const recommendedBooksPool = [
    {
        id: 'rec-1',
        title: "The Alchemist",
        author: "Paulo Coelho",
        genres: ["Fiction", "Philosophy", "Adventure"],
        description: "A magical tale about following your dreams and listening to your heart.",
        thumbnail: "http://books.google.com/books/content?id=FzVjBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "1988"
    },
    {
        id: 'rec-2',
        title: "1984",
        author: "George Orwell",
        genres: ["Fiction", "Dystopian", "Classic"],
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "1949"
    },
    {
        id: 'rec-3',
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genres: ["Non-Fiction", "History", "Science"],
        description: "A brief history of humankind exploring how Homo sapiens came to dominate the world.",
        thumbnail: "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2011"
    },
    {
        id: 'rec-4',
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genres: ["Fiction", "Classic", "Romance"],
        description: "A portrait of the Jazz Age in all of its decadence and excess.",
        thumbnail: "http://books.google.com/books/content?id=iXn5U2IzVH0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "1925"
    },
    {
        id: 'rec-5',
        title: "Dune",
        author: "Frank Herbert",
        genres: ["Science Fiction", "Adventure", "Fantasy"],
        description: "Set in the distant future amidst a sprawling feudal interstellar empire.",
        thumbnail: "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "1965"
    },
    {
        id: 'rec-6',
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genres: ["Psychology", "Non-Fiction", "Science"],
        description: "A groundbreaking tour of the mind explaining the two systems that drive the way we think.",
        thumbnail: "http://books.google.com/books/content?id=ZuKTvERuPG8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2011"
    },
    {
        id: 'rec-7',
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genres: ["Fantasy", "Adventure", "Fiction"],
        description: "A timeless classic about the adventure of Bilbo Baggins.",
        thumbnail: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "1937"
    },
    {
        id: 'rec-8',
        title: "Becoming",
        author: "Michelle Obama",
        genres: ["Memoir", "Biography", "Non-Fiction"],
        description: "The memoir of former United States First Lady Michelle Obama.",
        thumbnail: "http://books.google.com/books/content?id=ov4vDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2018"
    },
    {
        id: 'rec-9',
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genres: ["Fiction", "Dystopian", "Adventure"],
        description: "In a dark vision of the near future, twelve boys and twelve girls are forced to appear in a live TV show called the Hunger Games.",
        thumbnail: "http://books.google.com/books/content?id=_zAHKFQeid8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2008"
    },
    {
        id: 'rec-10',
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genres: ["Self-Help", "Philosophy", "Spirituality"],
        description: "A guide to spiritual enlightenment and living in the present moment.",
        thumbnail: "http://books.google.com/books/content?id=b9jWtEDQp2gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "1997"
    },
    {
        id: 'rec-11',
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genres: ["Thriller", "Mystery", "Fiction"],
        description: "A mystery thriller that follows symbologist Robert Langdon as he investigates a murder in Paris.",
        thumbnail: "http://books.google.com/books/content?id=EjgZknNJLs0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2003"
    },
    {
        id: 'rec-12',
        title: "Born a Crime",
        author: "Trevor Noah",
        genres: ["Memoir", "Biography", "Comedy"],
        description: "Stories from a South African childhood by the host of The Daily Show.",
        thumbnail: "http://books.google.com/books/content?id=B7fZCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2016"
    },
    {
        id: 'rec-13',
        title: "The Martian",
        author: "Andy Weir",
        genres: ["Science Fiction", "Adventure", "Thriller"],
        description: "An astronaut becomes one of the first people to walk on Mars, and now he may be the first person to die there.",
        thumbnail: "http://books.google.com/books/content?id=EHJCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2011"
    },
    {
        id: 'rec-14',
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        genres: ["Fiction", "Mystery", "Romance"],
        description: "A coming-of-age story with a mystery at its heart in the marshlands of North Carolina.",
        thumbnail: "http://books.google.com/books/content?id=pZJZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        publishedDate: "2018"
    },
    {
        id: 'rec-15',
        title: "The 4-Hour Workweek",
        author: "Timothy Ferriss",
        genres: ["Self-Help", "Business", "Productivity"],
        description: "Escape 9-5, live anywhere, and join the new rich with lifestyle design strategies.",
        thumbnail: "http://books.google.com/books/content?id=ZuJZmwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2007"
    }
];

// Application State
let userLibrary = JSON.parse(localStorage.getItem('userLibrary')) || [...starterBooks];
let ratings = JSON.parse(localStorage.getItem('bookRatings')) || {};
let currentFilter = '';
let currentGenreFilter = '';
let activeRecommendations = JSON.parse(localStorage.getItem('activeRecommendations')) || [];
let wantToReadShelf = JSON.parse(localStorage.getItem('wantToReadShelf')) || [];

// Save library to localStorage
function saveLibrary() {
    localStorage.setItem('userLibrary', JSON.stringify(userLibrary));
}

// Save ratings to localStorage
function saveRatings() {
    localStorage.setItem('bookRatings', JSON.stringify(ratings));
}

// Save active recommendations to localStorage
function saveActiveRecommendations() {
    localStorage.setItem('activeRecommendations', JSON.stringify(activeRecommendations));
}

// Save want to read shelf to localStorage
function saveWantToReadShelf() {
    localStorage.setItem('wantToReadShelf', JSON.stringify(wantToReadShelf));
}

// Initialize active recommendations with 10 books
function initializeRecommendations() {
    if (activeRecommendations.length === 0) {
        // Get books not in library
        const availableBooks = recommendedBooksPool.filter(book =>
            !userLibrary.find(libBook => libBook.id === book.id)
        );

        // Select first 10 available books
        activeRecommendations = availableBooks.slice(0, 10);
        saveActiveRecommendations();
    } else {
        // Clean up any books that are already in library
        activeRecommendations = activeRecommendations.filter(book =>
            !userLibrary.find(libBook => libBook.id === book.id)
        );

        // Refill to 10 if needed
        refillRecommendations();
    }
}

// Refill recommendations to maintain 10 books
function refillRecommendations() {
    const needed = 10 - activeRecommendations.length;

    if (needed > 0) {
        // Get book IDs already in use
        const usedIds = new Set([
            ...userLibrary.map(b => b.id),
            ...activeRecommendations.map(b => b.id)
        ]);

        // Find available books
        const availableBooks = recommendedBooksPool.filter(book =>
            !usedIds.has(book.id)
        );

        // Add books to fill the gap
        const booksToAdd = availableBooks.slice(0, needed);
        activeRecommendations.push(...booksToAdd);
        saveActiveRecommendations();
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeRecommendations();
    populateGenreFilter();
    setupGenreFilter();
    displayLibrary();
    setupLibrarySearch();
    setupAPISearch();
});

// Tab Functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;

            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update active tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabName}-tab`).classList.add('active');

            // Refresh content when switching tabs
            if (tabName === 'recommendations') {
                displayRecommendations();
            } else if (tabName === 'library') {
                displayLibrary();
            }
        });
    });
}

// Populate Genre Filter
function populateGenreFilter() {
    const genres = new Set();
    userLibrary.forEach(book => {
        book.genres.forEach(genre => genres.add(genre));
    });

    const genreFilter = document.getElementById('genre-filter');
    genreFilter.innerHTML = '<option value="">All Genres</option>';

    Array.from(genres).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

// Setup Genre Filter Event Listener
function setupGenreFilter() {
    const genreFilter = document.getElementById('genre-filter');
    genreFilter.addEventListener('change', (e) => {
        currentGenreFilter = e.target.value;
        displayLibrary();
    });
}

// Library Search Functionality
function setupLibrarySearch() {
    const searchInput = document.getElementById('library-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilter = e.target.value.toLowerCase();
            displayLibrary();
        });
    }
}

// Display User's Library
function displayLibrary() {
    // First display want to read shelf
    displayWantToReadShelf();

    const booksGrid = document.getElementById('books-grid');
    const filteredBooks = userLibrary.filter(book => {
        const matchesSearch = !currentFilter ||
            book.title.toLowerCase().includes(currentFilter) ||
            book.author.toLowerCase().includes(currentFilter) ||
            book.genres.some(g => g.toLowerCase().includes(currentFilter));

        const matchesGenre = !currentGenreFilter ||
            book.genres.includes(currentGenreFilter);

        return matchesSearch && matchesGenre;
    });

    // Sort books: rated books first, then by rating (highest first)
    filteredBooks.sort((a, b) => {
        const ratingA = ratings[a.id] || 0;
        const ratingB = ratings[b.id] || 0;

        // If one has a rating and the other doesn't, rated goes first
        if (ratingA > 0 && ratingB === 0) return -1;
        if (ratingA === 0 && ratingB > 0) return 1;

        // If both rated or both unrated, sort by rating value (highest first)
        return ratingB - ratingA;
    });

    booksGrid.innerHTML = '';

    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No books found. Try searching for books in the "Search Books" tab!</p>';
        return;
    }

    filteredBooks.forEach(book => {
        const bookCard = createBookCard(book, false);
        booksGrid.appendChild(bookCard);
    });
}

// Genre Color Mapping
const genreColorMap = {
    'Romance': 'coral',
    'LGBTQ': 'coral',
    'Memoir': 'coral',
    'Biography': 'coral',
    'Science Fiction': 'teal',
    'Science': 'teal',
    'Thriller': 'teal',
    'Mystery': 'teal',
    'Dystopian': 'teal',
    'Fantasy': 'purple',
    'Mythology': 'purple',
    'Self-Help': 'yellow',
    'Psychology': 'yellow',
    'Philosophy': 'yellow',
    'Spirituality': 'yellow',
    'Productivity': 'yellow',
    'Non-Fiction': 'green',
    'History': 'green',
    'Finance': 'green',
    'Classic': 'green',
    'Fiction': 'orange',
    'Adventure': 'orange',
    'Humor': 'orange',
    'Contemporary': 'orange',
    'Historical': 'orange'
};

// Get color based on primary genre
function getGenreColor(genres) {
    for (const genre of genres) {
        if (genreColorMap[genre]) {
            return genreColorMap[genre];
        }
    }
    return 'orange'; // default fallback
}

// Create Book Card
function createBookCard(book, isSearchResult = false, matchScore = null) {
    const card = document.createElement('div');
    card.className = 'book-card';

    // Add genre-based color
    const color = getGenreColor(book.genres);
    card.setAttribute('data-color', color);

    if (ratings[book.id]) {
        card.classList.add('rated');
    }

    if (matchScore !== null) {
        card.classList.add('recommended');
    }

    const genreTags = book.genres.map(genre =>
        `<span class="genre-tag">${genre}</span>`
    ).join('');

    const currentRating = ratings[book.id] || 0;
    const stars = createStars(book.id, currentRating);

    const matchScoreHTML = matchScore !== null ?
        `<div class="match-score">${matchScore}% Match</div>` : '';

    const popularityHTML = book.averageRating && book.ratingsCount ?
        `<div class="popularity-rating">
            <span class="rating-label-small">Google Books Rating:</span>
            <span class="rating-stars">★ ${book.averageRating.toFixed(1)}</span>
            <span class="rating-count">(${book.ratingsCount.toLocaleString()} ratings)</span>
        </div>` : '';

    const thumbnailHTML = book.thumbnail ?
        `<img src="${book.thumbnail}" alt="${book.title}" class="book-cover">` : '';

    const publishedDateHTML = book.publishedDate ?
        `<div class="book-published-date">published ${book.publishedDate}</div>` : '';

    // Check if book is already in want to read shelf
    const isInWantToRead = wantToReadShelf.find(b => b.id === book.id);

    // For recommendations, add a "want to read" button
    const wantToReadButtonHTML = matchScore !== null ?
        `<button class="want-to-read-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>${isInWantToRead ? 'Already on your want to read shelf' : '🐛 Want to Read'}</button>` : '';

    const isInLibrary = !isSearchResult && matchScore === null;

    const addButtonHTML = isSearchResult ?
        `<div class="search-result-buttons">
            <button class="add-to-library-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>Add to Library</button>
            <button class="want-to-read-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>${isInWantToRead ? 'Already on your want to read shelf' : '🐛 Want to Read'}</button>
        </div>` :
        `<div class="rating-section">
            <div class="rating-label">Your Rating:</div>
            <div class="stars" data-book-id="${book.id}">
                ${stars}
            </div>
        </div>`;

    const removeButtonHTML = isInLibrary ?
        `<button class="remove-from-library-btn" data-book-id="${book.id}">Remove from Library</button>` : '';

    card.innerHTML = `
        ${thumbnailHTML}
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        ${publishedDateHTML}
        <div class="book-genres">${genreTags}</div>
        <div class="book-description">${book.description}</div>
        ${popularityHTML}
        ${matchScoreHTML}
        ${wantToReadButtonHTML}
        ${addButtonHTML}
        ${removeButtonHTML}
    `;

    return card;
}

// Create Star Rating
function createStars(bookId, rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        const filled = i <= rating ? 'filled' : 'empty';
        starsHTML += `<span class="star ${filled}" data-rating="${i}">★</span>`;
    }
    return starsHTML;
}

// Event Delegation for Star Ratings and Add to Library
document.addEventListener('click', (e) => {
    // Star rating
    if (e.target.classList.contains('star')) {
        const starsContainer = e.target.parentElement;
        const bookId = starsContainer.dataset.bookId;
        const rating = parseInt(e.target.dataset.rating);

        // Check if this book is in the recommendations tab
        const recommendationsTab = document.getElementById('recommendations-tab');
        const isInRecommendations = recommendationsTab.classList.contains('active');
        const bookInRecommendations = activeRecommendations.find(b => b.id === bookId);

        // Update rating
        ratings[bookId] = rating;
        saveRatings();

        // If rating a recommended book, move it to library
        if (isInRecommendations && bookInRecommendations) {
            // Add to library if not already there
            const exists = userLibrary.find(b => b.id === bookId);
            if (!exists) {
                userLibrary.push(bookInRecommendations);
                saveLibrary();
                populateGenreFilter();
            }

            // Remove from active recommendations
            activeRecommendations = activeRecommendations.filter(b => b.id !== bookId);

            // Refill recommendations to maintain 10 books
            refillRecommendations();

            // Refresh the recommendations display
            displayRecommendations();
            return;
        }

        // Update star display for library books
        const stars = starsContainer.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('empty');
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
                star.classList.add('empty');
            }
        });

        // Update card appearance
        const bookCard = starsContainer.closest('.book-card');
        bookCard.classList.add('rated');

        // Auto-resort library when rating changes
        const libraryTab = document.getElementById('library-tab');
        if (libraryTab.classList.contains('active')) {
            displayLibrary();
        }
    }

    // Add to library button
    if (e.target.classList.contains('add-to-library-btn')) {
        const button = e.target;
        const bookData = JSON.parse(button.dataset.book.replace(/&apos;/g, "'"));

        // Check if already in library
        const exists = userLibrary.find(b => b.id === bookData.id);
        if (exists) {
            button.textContent = 'Already in Library';
            button.disabled = true;
            return;
        }

        // Add to library
        userLibrary.push(bookData);
        saveLibrary();
        populateGenreFilter();

        // Update button
        button.textContent = 'Added to Library!';
        button.classList.add('added');
        button.disabled = true;
    }

    // Want to read button
    if (e.target.classList.contains('want-to-read-btn')) {
        const button = e.target;
        const bookData = JSON.parse(button.dataset.book.replace(/&apos;/g, "'"));

        // Check if already in want to read shelf
        const exists = wantToReadShelf.find(b => b.id === bookData.id);
        if (exists) {
            button.textContent = '✓ Already Added';
            button.disabled = true;
            return;
        }

        // Add to want to read shelf
        wantToReadShelf.push(bookData);
        saveWantToReadShelf();

        // Update button
        button.textContent = '✓ Added to Shelf!';
        button.classList.add('added');
        button.disabled = true;

        // Show a quick visual feedback
        setTimeout(() => {
            button.textContent = '🐛 On Your Shelf';
        }, 1500);
    }

    // Remove from library button
    if (e.target.classList.contains('remove-from-library-btn')) {
        const button = e.target;
        const bookId = button.dataset.bookId;
        const book = userLibrary.find(b => b.id === bookId);

        if (book && confirm(`Remove "${book.title}" from your library?`)) {
            userLibrary = userLibrary.filter(b => b.id !== bookId);
            saveLibrary();
            populateGenreFilter();
            displayLibrary();
        }
    }
});

// API Search Setup
function setupAPISearch() {
    const searchInput = document.getElementById('api-search-input');
    const searchButton = document.getElementById('search-btn');

    if (!searchInput || !searchButton) {
        console.error('Search elements not found');
        return;
    }

    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            searchBooks(query);
        }
    };

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Search Books using Google Books API
async function searchBooks(query) {
    const searchStatus = document.getElementById('search-status');
    const resultsGrid = document.getElementById('search-results-grid');

    searchStatus.textContent = 'Searching...';
    resultsGrid.innerHTML = '';

    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20&langRestrict=en`);
        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            searchStatus.textContent = 'No books found. Try a different search term.';
            return;
        }

        const books = data.items.map(item => {
            const volumeInfo = item.volumeInfo;
            // Get higher resolution thumbnail by replacing zoom=1 with zoom=5
            let thumbnail = volumeInfo.imageLinks?.thumbnail || null;
            if (thumbnail) {
                thumbnail = thumbnail.replace('zoom=1', 'zoom=5');
            }
            // Extract year only from published date
            let publishedYear = null;
            if (volumeInfo.publishedDate) {
                publishedYear = volumeInfo.publishedDate.substring(0, 4);
            }

            return {
                id: item.id,
                title: volumeInfo.title || 'Unknown Title',
                author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author',
                genres: volumeInfo.categories || ['General'],
                description: volumeInfo.description ?
                    (volumeInfo.description.length > 200 ?
                        volumeInfo.description.substring(0, 200) + '...' :
                        volumeInfo.description) :
                    'No description available.',
                thumbnail: thumbnail,
                averageRating: volumeInfo.averageRating || null,
                ratingsCount: volumeInfo.ratingsCount || null,
                publishedDate: publishedYear
            };
        });

        // Deduplicate books by title and author pair
        const uniqueBooks = [];
        const seenPairs = new Map();

        books.forEach(book => {
            // Create a normalized key for book/author pair
            const key = `${book.title.toLowerCase()}||${book.author.toLowerCase()}`;

            if (!seenPairs.has(key)) {
                seenPairs.set(key, true);
                uniqueBooks.push(book);
            }
        });

        if (uniqueBooks.length === 0) {
            searchStatus.textContent = 'No books found. Try a different search term.';
            return;
        }

        // Sort by popularity (combination of rating and number of ratings)
        uniqueBooks.sort((a, b) => {
            // Handle books without ratings - push them to the end
            const hasRatingsA = a.averageRating && a.ratingsCount;
            const hasRatingsB = b.averageRating && b.ratingsCount;

            if (!hasRatingsA && !hasRatingsB) return 0;
            if (!hasRatingsA) return 1;  // a goes to end
            if (!hasRatingsB) return -1; // b goes to end

            // For books with ratings, combine rating quality and review count
            const popularityA = a.averageRating * Math.log(a.ratingsCount + 1);
            const popularityB = b.averageRating * Math.log(b.ratingsCount + 1);
            return popularityB - popularityA; // Sort descending (most popular first)
        });

        // Update status to show count
        searchStatus.textContent = `Found ${uniqueBooks.length} book${uniqueBooks.length !== 1 ? 's' : ''}`;

        uniqueBooks.forEach(book => {
            const bookCard = createBookCard(book, true);
            resultsGrid.appendChild(bookCard);
        });

    } catch (error) {
        searchStatus.textContent = 'Error searching books. Please try again.';
        console.error('Search error:', error);
    }
}

// Recommendation Algorithm
function displayRecommendations() {
    const recommendationsGrid = document.getElementById('recommendations-grid');
    const recDescription = document.getElementById('rec-description');

    // Initialize recommendations if needed
    if (activeRecommendations.length === 0) {
        initializeRecommendations();
    }

    recDescription.textContent = `Discover your next great read:`;

    recommendationsGrid.innerHTML = '';

    if (activeRecommendations.length === 0) {
        recommendationsGrid.innerHTML = '<p style="text-align: center; color: #666;">No more recommendations available at this time.</p>';
        return;
    }

    // Display all active recommendations
    activeRecommendations.forEach(book => {
        // Calculate a simple match score based on genre overlap with library
        let matchScore = 50; // Base score

        // Boost score if genres match books in user's library
        const libraryGenres = new Set();
        userLibrary.forEach(libBook => {
            libBook.genres.forEach(genre => libraryGenres.add(genre));
        });

        const matchingGenres = book.genres.filter(genre => libraryGenres.has(genre)).length;
        matchScore += matchingGenres * 10;
        matchScore = Math.min(matchScore, 99);

        const bookCard = createBookCard(book, false, matchScore);
        recommendationsGrid.appendChild(bookCard);
    });
}

// Analyze User Preferences
function analyzePreferences(ratedBooks) {
    const preferences = {
        genres: {},
        authors: {},
        totalRating: 0,
        count: 0
    };

    ratedBooks.forEach(([bookId, rating]) => {
        const book = userLibrary.find(b => b.id === bookId);
        if (!book) return;

        // Weight by rating
        const weight = rating;

        // Analyze genres
        book.genres.forEach(genre => {
            preferences.genres[genre] = (preferences.genres[genre] || 0) + weight;
        });

        // Analyze authors
        preferences.authors[book.author] = (preferences.authors[book.author] || 0) + weight;

        preferences.totalRating += rating;
        preferences.count++;
    });

    return preferences;
}

// Calculate Match Score
function calculateMatchScore(book, preferences) {
    let score = 0;
    let maxScore = 0;

    // Genre matching (60% of score)
    const genreWeight = 60;
    book.genres.forEach(genre => {
        if (preferences.genres[genre]) {
            score += preferences.genres[genre] * genreWeight;
        }
    });

    const maxGenreScore = Math.max(...Object.values(preferences.genres)) * book.genres.length * genreWeight;
    maxScore += maxGenreScore;

    // Author matching (25% of score)
    const authorWeight = 25;
    if (preferences.authors[book.author]) {
        score += preferences.authors[book.author] * authorWeight;
    }

    const maxAuthorScore = Math.max(...Object.values(preferences.authors || {1: 1})) * authorWeight;
    maxScore += maxAuthorScore;

    // Popularity boost (15% of score)
    const popularityWeight = 15;
    let popularityScore = 0;

    if (book.averageRating && book.ratingsCount) {
        // Rating component: Books rated 4+ stars get higher scores
        // Scale: 0-5 stars -> 0-1
        const ratingScore = book.averageRating / 5;

        // Ratings count component: More ratings = more popular
        // Use logarithmic scale so 10,000 ratings isn't 100x better than 100
        // Scale caps around 10,000+ ratings
        const countScore = Math.min(Math.log10(book.ratingsCount + 1) / 4, 1);

        // Combine both (60% weight on rating quality, 40% on popularity)
        popularityScore = (ratingScore * 0.6 + countScore * 0.4) * 5 * popularityWeight;
    }

    score += popularityScore;
    maxScore += 5 * popularityWeight; // Max possible popularity score

    // Convert to percentage
    const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

    return Math.min(percentage, 99);
}

// Display Want to Read Shelf
function displayWantToReadShelf() {
    const shelfContainer = document.getElementById('want-to-read-shelf');
    const wtrSection = document.getElementById('want-to-read-section');

    shelfContainer.innerHTML = '';

    if (wantToReadShelf.length === 0) {
        // Hide the entire section if empty
        wtrSection.style.display = 'none';
        return;
    }

    // Show the section
    wtrSection.style.display = 'block';

    // Create shelves (group books in rows of up to 8)
    const booksPerShelf = 8;
    const numShelves = Math.ceil(wantToReadShelf.length / booksPerShelf);

    for (let shelfNum = 0; shelfNum < numShelves; shelfNum++) {
        const shelfDiv = document.createElement('div');
        shelfDiv.className = 'shelf-row';

        const booksDiv = document.createElement('div');
        booksDiv.className = 'shelf-books';

        const startIdx = shelfNum * booksPerShelf;
        const endIdx = Math.min(startIdx + booksPerShelf, wantToReadShelf.length);
        const booksOnThisShelf = wantToReadShelf.slice(startIdx, endIdx);

        booksOnThisShelf.forEach(book => {
            const bookSpine = document.createElement('div');
            bookSpine.className = 'book-spine';

            // Get color based on genre
            const color = getGenreColor(book.genres);
            bookSpine.setAttribute('data-color', color);

            const titleDiv = document.createElement('div');
            titleDiv.className = 'spine-title';
            titleDiv.textContent = book.title;

            const authorDiv = document.createElement('div');
            authorDiv.className = 'spine-author';
            authorDiv.textContent = book.author;

            bookSpine.appendChild(titleDiv);
            bookSpine.appendChild(authorDiv);

            // Add click handler to show book details popup
            bookSpine.addEventListener('click', () => {
                showBookDetailsPopup(book);
            });

            booksDiv.appendChild(bookSpine);
        });

        const shelfBoard = document.createElement('div');
        shelfBoard.className = 'shelf-board';

        shelfDiv.appendChild(booksDiv);
        shelfDiv.appendChild(shelfBoard);
        shelfContainer.appendChild(shelfDiv);
    }
}

// Show book details popup
function showBookDetailsPopup(book) {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    // Create popup content
    const popup = document.createElement('div');
    popup.className = 'popup-content';

    const color = getGenreColor(book.genres);
    popup.setAttribute('data-color', color);

    const genreTags = book.genres.map(genre =>
        `<span class="genre-tag">${genre}</span>`
    ).join('');

    const thumbnailHTML = book.thumbnail ?
        `<img src="${book.thumbnail}" alt="${book.title}" class="book-cover">` : '';

    const publishedDateHTML = book.publishedDate ?
        `<div class="book-published-date">published ${book.publishedDate}</div>` : '';

    const popularityHTML = book.averageRating && book.ratingsCount ?
        `<div class="popularity-rating">
            <span class="rating-label-small">Google Books Rating:</span>
            <span class="rating-stars">★ ${book.averageRating.toFixed(1)}</span>
            <span class="rating-count">(${book.ratingsCount.toLocaleString()} ratings)</span>
        </div>` : '';

    popup.innerHTML = `
        <button class="popup-close">&times;</button>
        ${thumbnailHTML}
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        ${publishedDateHTML}
        <div class="book-genres">${genreTags}</div>
        <div class="book-description">${book.description}</div>
        ${popularityHTML}
        <button class="add-to-library-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>Add to Library</button>
        <button class="remove-from-wtr-btn" data-book-id="${book.id}">Remove from Want to Read</button>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Close popup when clicking overlay or close button
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.classList.contains('popup-close')) {
            document.body.removeChild(overlay);
        }
    });

    // Handle remove from want to read button
    const removeBtn = popup.querySelector('.remove-from-wtr-btn');
    removeBtn.addEventListener('click', () => {
        if (confirm(`Remove "${book.title}" from your Want to Read shelf?`)) {
            wantToReadShelf = wantToReadShelf.filter(b => b.id !== book.id);
            saveWantToReadShelf();
            displayLibrary();
            document.body.removeChild(overlay);
        }
    });
}
