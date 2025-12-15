// Starter books for new users
const starterBooks = [
    {
        id: 'starter-1',
        title: "The Midnight Library",
        author: "Matt Haig",
        genres: ["Fiction", "Fantasy", "Philosophy"],
        description: "A dazzling novel about all the choices that go into a life well lived.",
        thumbnail: "http://books.google.com/books/content?id=1ZxRzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
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
        thumbnail: "http://books.google.com/books/content?id=y8pLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    }
];

// Application State
let userLibrary = JSON.parse(localStorage.getItem('userLibrary')) || [...starterBooks];
let ratings = JSON.parse(localStorage.getItem('bookRatings')) || {};
let currentFilter = '';
let currentGenreFilter = '';

// Save library to localStorage
function saveLibrary() {
    localStorage.setItem('userLibrary', JSON.stringify(userLibrary));
}

// Save ratings to localStorage
function saveRatings() {
    localStorage.setItem('bookRatings', JSON.stringify(ratings));
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    populateGenreFilter();
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

    genreFilter.addEventListener('change', (e) => {
        currentGenreFilter = e.target.value;
        displayLibrary();
    });
}

// Library Search Functionality
function setupLibrarySearch() {
    const searchInput = document.getElementById('library-search-input');
    searchInput.addEventListener('input', (e) => {
        currentFilter = e.target.value.toLowerCase();
        displayLibrary();
    });
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

// Create Book Card
function createBookCard(book, isSearchResult = false, matchScore = null) {
    const card = document.createElement('div');
    card.className = 'book-card';

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

        // Update rating
        ratings[bookId] = rating;
        saveRatings();

        // Update star display
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

        searchStatus.textContent = `Found ${data.items.length} books`;

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
                thumbnail: thumbnail
            };
        });

        books.forEach(book => {
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

    const ratedBooks = Object.entries(ratings).filter(([_, rating]) => rating >= 3);

    if (ratedBooks.length === 0) {
        recDescription.textContent = 'Rate some books with 3+ stars to get personalized recommendations!';
        recommendationsGrid.innerHTML = '';
        return;
    }

    recDescription.textContent = `Based on ${ratedBooks.length} book${ratedBooks.length > 1 ? 's' : ''} you loved:`;

    // Get user preferences
    const preferences = analyzePreferences(ratedBooks);

    // Get unrated books from library
    const unratedBooks = userLibrary.filter(book => !ratings[book.id]);

    // Score and sort recommendations
    const recommendations = unratedBooks.map(book => {
        const score = calculateMatchScore(book, preferences);
        return { book, score };
    }).filter(rec => rec.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    recommendationsGrid.innerHTML = '';

    if (recommendations.length === 0) {
        recommendationsGrid.innerHTML = '<p style="text-align: center; color: #666;">No recommendations available. Try rating more books or adding more books to your library!</p>';
        return;
    }

    recommendations.forEach(({ book, score }) => {
        const bookCard = createBookCard(book, false, score);
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

    // Genre matching (70% of score)
    const genreWeight = 70;
    book.genres.forEach(genre => {
        if (preferences.genres[genre]) {
            score += preferences.genres[genre] * genreWeight;
        }
    });

    const maxGenreScore = Math.max(...Object.values(preferences.genres)) * book.genres.length * genreWeight;
    maxScore += maxGenreScore;

    // Author matching (30% of score)
    const authorWeight = 30;
    if (preferences.authors[book.author]) {
        score += preferences.authors[book.author] * authorWeight;
    }

    const maxAuthorScore = Math.max(...Object.values(preferences.authors || {1: 1})) * authorWeight;
    maxScore += maxAuthorScore;

    // Convert to percentage
    const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

    return Math.min(percentage, 99);
}
