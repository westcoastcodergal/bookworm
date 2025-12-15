// Book Database
const books = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        genres: ["Fiction", "Fantasy", "Philosophy"],
        description: "A dazzling novel about all the choices that go into a life well lived."
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genres: ["Self-Help", "Psychology", "Productivity"],
        description: "An easy and proven way to build good habits and break bad ones."
    },
    {
        id: 3,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        genres: ["Fiction", "Historical", "Romance", "Mythology"],
        description: "A tale of gods, kings, immortal fame and the human heart."
    },
    {
        id: 4,
        title: "Educated",
        author: "Tara Westover",
        genres: ["Memoir", "Biography", "Non-Fiction"],
        description: "A memoir about a young girl who leaves her survivalist family and goes on to earn a PhD from Cambridge."
    },
    {
        id: 5,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genres: ["Science Fiction", "Adventure", "Thriller"],
        description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller."
    },
    {
        id: 6,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genres: ["Fiction", "Historical", "Romance", "LGBTQ"],
        description: "Aging Hollywood icon Evelyn Hugo finally tells the story of her glamorous and scandalous life."
    },
    {
        id: 7,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genres: ["Psychology", "Non-Fiction", "Science"],
        description: "A groundbreaking tour of the mind explaining the two systems that drive the way we think."
    },
    {
        id: 8,
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        genres: ["Fantasy", "Fiction", "Romance", "Historical"],
        description: "A woman who makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets."
    },
    {
        id: 9,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genres: ["History", "Non-Fiction", "Science", "Philosophy"],
        description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world."
    },
    {
        id: 10,
        title: "Circe",
        author: "Madeline Miller",
        genres: ["Fiction", "Fantasy", "Mythology", "Historical"],
        description: "The story of the sorceress Circe and her journey of finding her own power."
    },
    {
        id: 11,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        genres: ["Fiction", "Mystery", "Romance"],
        description: "A coming-of-age story and murder mystery set in the marshlands of North Carolina."
    },
    {
        id: 12,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genres: ["Finance", "Non-Fiction", "Psychology"],
        description: "Timeless lessons on wealth, greed, and happiness."
    },
    {
        id: 13,
        title: "Anxious People",
        author: "Fredrik Backman",
        genres: ["Fiction", "Humor", "Contemporary"],
        description: "A poignant comedy about a crime that never took place, a would-be bank robber, and eight anxiety-ridden strangers."
    },
    {
        id: 14,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genres: ["Thriller", "Mystery", "Psychology"],
        description: "A woman shoots her husband and then never speaks another word."
    },
    {
        id: 15,
        title: "Dune",
        author: "Frank Herbert",
        genres: ["Science Fiction", "Adventure", "Fantasy"],
        description: "A stunning blend of adventure and mysticism set on the desert planet Arrakis."
    },
    {
        id: 16,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genres: ["Fiction", "Philosophy", "Adventure"],
        description: "A magical story about following your dreams and listening to your heart."
    },
    {
        id: 17,
        title: "Normal People",
        author: "Sally Rooney",
        genres: ["Fiction", "Romance", "Contemporary"],
        description: "A story of mutual fascination, friendship and love between two young people."
    },
    {
        id: 18,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genres: ["Self-Help", "Philosophy", "Spirituality"],
        description: "A guide to spiritual enlightenment and living in the present moment."
    },
    {
        id: 19,
        title: "1984",
        author: "George Orwell",
        genres: ["Fiction", "Dystopian", "Classic", "Science Fiction"],
        description: "A dystopian social science fiction novel and cautionary tale about totalitarianism."
    },
    {
        id: 20,
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        genres: ["Fantasy", "Fiction", "LGBTQ", "Romance"],
        description: "A magical tale about found family, second chances, and the power of love."
    }
];

// Application State
let ratings = JSON.parse(localStorage.getItem('bookRatings')) || {};
let currentFilter = '';
let currentGenreFilter = '';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    populateGenreFilter();
    displayBooks();
    setupSearch();
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
    books.forEach(book => {
        book.genres.forEach(genre => genres.add(genre));
    });

    const genreFilter = document.getElementById('genre-filter');
    Array.from(genres).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    genreFilter.addEventListener('change', (e) => {
        currentGenreFilter = e.target.value;
        displayBooks();
    });
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        currentFilter = e.target.value.toLowerCase();
        displayBooks();
    });
}

// Display Books
function displayBooks() {
    const booksGrid = document.getElementById('books-grid');
    const filteredBooks = books.filter(book => {
        const matchesSearch = !currentFilter ||
            book.title.toLowerCase().includes(currentFilter) ||
            book.author.toLowerCase().includes(currentFilter) ||
            book.genres.some(g => g.toLowerCase().includes(currentFilter));

        const matchesGenre = !currentGenreFilter ||
            book.genres.includes(currentGenreFilter);

        return matchesSearch && matchesGenre;
    });

    booksGrid.innerHTML = '';

    filteredBooks.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

// Create Book Card
function createBookCard(book, matchScore = null) {
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

    card.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        <div class="book-genres">${genreTags}</div>
        <div class="book-description">${book.description}</div>
        ${matchScoreHTML}
        <div class="rating-section">
            <div class="rating-label">Your Rating:</div>
            <div class="stars" data-book-id="${book.id}">
                ${stars}
            </div>
        </div>
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

// Event Delegation for Star Ratings
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
        const starsContainer = e.target.parentElement;
        const bookId = parseInt(starsContainer.dataset.bookId);
        const rating = parseInt(e.target.dataset.rating);

        // Update rating
        ratings[bookId] = rating;
        localStorage.setItem('bookRatings', JSON.stringify(ratings));

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
});

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

    // Get unrated books
    const unratedBooks = books.filter(book => !ratings[book.id]);

    // Score and sort recommendations
    const recommendations = unratedBooks.map(book => {
        const score = calculateMatchScore(book, preferences);
        return { book, score };
    }).filter(rec => rec.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    recommendationsGrid.innerHTML = '';

    if (recommendations.length === 0) {
        recommendationsGrid.innerHTML = '<p style="text-align: center; color: #666;">No recommendations available. Try rating more diverse books!</p>';
        return;
    }

    recommendations.forEach(({ book, score }) => {
        const bookCard = createBookCard(book, score);
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
        const book = books.find(b => b.id === parseInt(bookId));
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
