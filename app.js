// Starter books for new users
const starterBooks = [
    {
        id: 'starter-1',
        title: "The Midnight Library",
        author: "Matt Haig",
        genres: ["Fiction", "Fantasy", "Philosophy"],
        description: "A dazzling novel about all the choices that go into a life well lived.",
        thumbnail: "http://books.google.com/books/content?id=9HJpzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
    },
    {
        id: 'starter-2',
        title: "Atomic Habits",
        author: "James Clear",
        genres: ["Self-Help", "Psychology", "Productivity"],
        description: "An easy and proven way to build good habits and break bad ones.",
        thumbnail: "http://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
    {
        id: 'starter-3',
        title: "Project Hail Mary",
        author: "Andy Weir",
        genres: ["Science Fiction", "Adventure", "Thriller"],
        description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller.",
        thumbnail: "http://books.google.com/books/content?id=G1lmEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
    {
        id: 'starter-4',
        title: "Educated",
        author: "Tara Westover",
        genres: ["Memoir", "Biography", "Non-Fiction"],
        description: "A memoir about a young girl who leaves her survivalist family and goes on to earn a PhD from Cambridge.",
        thumbnail: "http://books.google.com/books/content?id=2ObWDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
    {
        id: 'starter-5',
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genres: ["Fiction", "Historical", "Romance"],
        description: "Aging Hollywood icon Evelyn Hugo finally tells the story of her glamorous and scandalous life.",
        thumbnail: "http://books.google.com/books/content?id=lVsDDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
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
        thumbnail: "http://books.google.com/books/content?id=FzVjBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-2',
        title: "1984",
        author: "George Orwell",
        genres: ["Fiction", "Dystopian", "Classic"],
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        thumbnail: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-3',
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genres: ["Non-Fiction", "History", "Science"],
        description: "A brief history of humankind exploring how Homo sapiens came to dominate the world.",
        thumbnail: "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-4',
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genres: ["Fiction", "Classic", "Romance"],
        description: "A portrait of the Jazz Age in all of its decadence and excess.",
        thumbnail: "http://books.google.com/books/content?id=iXn5U2IzVH0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-5',
        title: "Dune",
        author: "Frank Herbert",
        genres: ["Science Fiction", "Adventure", "Fantasy"],
        description: "Set in the distant future amidst a sprawling feudal interstellar empire.",
        thumbnail: "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-6',
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genres: ["Psychology", "Non-Fiction", "Science"],
        description: "A groundbreaking tour of the mind explaining the two systems that drive the way we think.",
        thumbnail: "http://books.google.com/books/content?id=ZuKTvERuPG8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-7',
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genres: ["Fantasy", "Adventure", "Fiction"],
        description: "A timeless classic about the adventure of Bilbo Baggins.",
        thumbnail: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-8',
        title: "Becoming",
        author: "Michelle Obama",
        genres: ["Memoir", "Biography", "Non-Fiction"],
        description: "The memoir of former United States First Lady Michelle Obama.",
        thumbnail: "http://books.google.com/books/content?id=ov4vDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-9',
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genres: ["Fiction", "Dystopian", "Adventure"],
        description: "In a dark vision of the near future, twelve boys and twelve girls are forced to appear in a live TV show called the Hunger Games.",
        thumbnail: "http://books.google.com/books/content?id=_zAHKFQeid8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-10',
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genres: ["Self-Help", "Philosophy", "Spirituality"],
        description: "A guide to spiritual enlightenment and living in the present moment.",
        thumbnail: "http://books.google.com/books/content?id=b9jWtEDQp2gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-11',
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genres: ["Thriller", "Mystery", "Fiction"],
        description: "A mystery thriller that follows symbologist Robert Langdon as he investigates a murder in Paris.",
        thumbnail: "http://books.google.com/books/content?id=EjgZknNJLs0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-12',
        title: "Born a Crime",
        author: "Trevor Noah",
        genres: ["Memoir", "Biography", "Comedy"],
        description: "Stories from a South African childhood by the host of The Daily Show.",
        thumbnail: "http://books.google.com/books/content?id=B7fZCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-13',
        title: "The Martian",
        author: "Andy Weir",
        genres: ["Science Fiction", "Adventure", "Thriller"],
        description: "An astronaut becomes one of the first people to walk on Mars, and now he may be the first person to die there.",
        thumbnail: "http://books.google.com/books/content?id=EHJCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-14',
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        genres: ["Fiction", "Mystery", "Romance"],
        description: "A coming-of-age story with a mystery at its heart in the marshlands of North Carolina.",
        thumbnail: "http://books.google.com/books/content?id=pZJZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        id: 'rec-15',
        title: "The 4-Hour Workweek",
        author: "Timothy Ferriss",
        genres: ["Self-Help", "Business", "Productivity"],
        description: "Escape 9-5, live anywhere, and join the new rich with lifestyle design strategies.",
        thumbnail: "http://books.google.com/books/content?id=ZuJZmwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    }
];

// Application State
let userLibrary = JSON.parse(localStorage.getItem('userLibrary')) || [...starterBooks];
let ratings = JSON.parse(localStorage.getItem('bookRatings')) || {};
let currentFilter = '';
let currentGenreFilter = '';
let activeRecommendations = JSON.parse(localStorage.getItem('activeRecommendations')) || [];

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

            // Load recommendations when switching to recommendations tab
            if (tabName === 'recommendations') {
                displayRecommendations();
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
            <span class="rating-stars">★ ${book.averageRating.toFixed(1)}</span>
            <span class="rating-count">(${book.ratingsCount.toLocaleString()} ratings)</span>
        </div>` : '';

    const thumbnailHTML = book.thumbnail ?
        `<img src="${book.thumbnail}" alt="${book.title}" class="book-cover">` : '';

    const addButtonHTML = isSearchResult ?
        `<button class="add-to-library-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>Add to Library</button>` :
        `<div class="rating-section">
            <div class="rating-label">Your Rating:</div>
            <div class="stars" data-book-id="${book.id}">
                ${stars}
            </div>
        </div>`;

    card.innerHTML = `
        ${thumbnailHTML}
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        <div class="book-genres">${genreTags}</div>
        <div class="book-description">${book.description}</div>
        ${popularityHTML}
        ${matchScoreHTML}
        ${addButtonHTML}
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
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20`);
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
                ratingsCount: volumeInfo.ratingsCount || null
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

        // Update status to show deduplicated count
        if (uniqueBooks.length < books.length) {
            searchStatus.textContent = `Found ${uniqueBooks.length} unique books (${books.length} total results)`;
        } else {
            searchStatus.textContent = `Found ${uniqueBooks.length} books`;
        }

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
