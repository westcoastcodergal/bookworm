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
    },
    {
        id: 'rec-16',
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genres: ["Fantasy", "Fiction", "Adventure"],
        description: "A young wizard begins his magical education at Hogwarts School of Witchcraft and Wizardry.",
        thumbnail: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1997"
    },
    {
        id: 'rec-17',
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["Fiction", "Classic", "Historical"],
        description: "A gripping tale of racial injustice and childhood innocence in the American South.",
        thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1960"
    },
    {
        id: 'rec-18',
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genres: ["Fiction", "Classic", "Contemporary"],
        description: "The story of teenage angst and alienation in post-war America.",
        thumbnail: "http://books.google.com/books/content?id=5wQnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1951"
    },
    {
        id: 'rec-19',
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genres: ["Romance", "Classic", "Fiction"],
        description: "A witty comedy of manners exploring marriage, morality, and misconceptions.",
        thumbnail: "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1813"
    },
    {
        id: 'rec-20',
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genres: ["Fantasy", "Adventure", "Fiction"],
        description: "An epic tale of good versus evil in Middle-earth.",
        thumbnail: "http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1954"
    },
    {
        id: 'rec-21',
        title: "Animal Farm",
        author: "George Orwell",
        genres: ["Fiction", "Classic", "Dystopian"],
        description: "A satirical allegory of totalitarianism told through farm animals.",
        thumbnail: "http://books.google.com/books/content?id=0PSRCgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1945"
    },
    {
        id: 'rec-22',
        title: "Brave New World",
        author: "Aldous Huxley",
        genres: ["Science Fiction", "Dystopian", "Classic"],
        description: "A dystopian vision of a future society obsessed with pleasure and conformity.",
        thumbnail: "http://books.google.com/books/content?id=LibH7jh7dNkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1932"
    },
    {
        id: 'rec-23',
        title: "The Book Thief",
        author: "Markus Zusak",
        genres: ["Historical", "Fiction", "War"],
        description: "Death tells the story of a girl who steals books in Nazi Germany.",
        thumbnail: "http://books.google.com/books/content?id=1f6suzKRS7sC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2005"
    },
    {
        id: 'rec-24',
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genres: ["Fiction", "Historical", "Drama"],
        description: "A powerful story of friendship and redemption set in Afghanistan.",
        thumbnail: "http://books.google.com/books/content?id=AdvW468RZBMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2003"
    },
    {
        id: 'rec-25',
        title: "Life of Pi",
        author: "Yann Martel",
        genres: ["Fiction", "Adventure", "Fantasy"],
        description: "A boy survives a shipwreck and shares a lifeboat with a Bengal tiger.",
        thumbnail: "http://books.google.com/books/content?id=e3nBE-_LNYIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2001"
    },
    {
        id: 'rec-26',
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        genres: ["Dystopian", "Science Fiction", "Fiction"],
        description: "A chilling dystopia about women's oppression in a theocratic society.",
        thumbnail: "http://books.google.com/books/content?id=N3KdRAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1985"
    },
    {
        id: 'rec-27',
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        genres: ["Fantasy", "Adventure", "Fiction"],
        description: "Children discover a magical land accessed through a wardrobe.",
        thumbnail: "http://books.google.com/books/content?id=p8bMZRqPXsEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1950"
    },
    {
        id: 'rec-28',
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        genres: ["Science Fiction", "Dystopian", "Classic"],
        description: "A future American society where books are outlawed and burned.",
        thumbnail: "http://books.google.com/books/content?id=fHjoRmV7cD4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1953"
    },
    {
        id: 'rec-29',
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genres: ["Mystery", "Thriller", "Crime"],
        description: "A journalist and a hacker investigate a decades-old disappearance.",
        thumbnail: "http://books.google.com/books/content?id=qgcm9v0dAuAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2005"
    },
    {
        id: 'rec-30',
        title: "Gone Girl",
        author: "Gillian Flynn",
        genres: ["Thriller", "Mystery", "Fiction"],
        description: "A wife disappears on her fifth wedding anniversary, and the husband becomes the prime suspect.",
        thumbnail: "http://books.google.com/books/content?id=hWwLqZsJKYAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2012"
    },
    {
        id: 'rec-31',
        title: "The Fault in Our Stars",
        author: "John Green",
        genres: ["Romance", "Fiction", "Contemporary"],
        description: "Two teens with cancer fall in love while confronting mortality.",
        thumbnail: "http://books.google.com/books/content?id=mJr5CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2012"
    },
    {
        id: 'rec-32',
        title: "The Road",
        author: "Cormac McCarthy",
        genres: ["Fiction", "Dystopian", "Adventure"],
        description: "A father and son journey through a post-apocalyptic America.",
        thumbnail: "http://books.google.com/books/content?id=HJIKAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2006"
    },
    {
        id: 'rec-33',
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genres: ["Fiction", "Classic", "Adventure"],
        description: "A young orphan discovers a magical garden that changes her life.",
        thumbnail: "http://books.google.com/books/content?id=IwCWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1911"
    },
    {
        id: 'rec-34',
        title: "Charlotte's Web",
        author: "E.B. White",
        genres: ["Fiction", "Adventure", "Classic"],
        description: "A spider saves a pig with her web-writing talents.",
        thumbnail: "http://books.google.com/books/content?id=t_1lDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1952"
    },
    {
        id: 'rec-35',
        title: "Ender's Game",
        author: "Orson Scott Card",
        genres: ["Science Fiction", "Adventure", "Fiction"],
        description: "A child prodigy is trained to fight an alien invasion.",
        thumbnail: "http://books.google.com/books/content?id=zaRODQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1985"
    },
    {
        id: 'rec-36',
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genres: ["Fantasy", "Fiction", "Adventure"],
        description: "Noble families fight for control of the Iron Throne.",
        thumbnail: "http://books.google.com/books/content?id=5NomkK4EV68C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1996"
    },
    {
        id: 'rec-37',
        title: "The Giver",
        author: "Lois Lowry",
        genres: ["Dystopian", "Fiction", "Science Fiction"],
        description: "A boy discovers the dark truth behind his seemingly perfect community.",
        thumbnail: "http://books.google.com/books/content?id=Mn0fPAZ4EQAC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1993"
    },
    {
        id: 'rec-38',
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        genres: ["Fiction", "Science Fiction", "Classic"],
        description: "A soldier becomes unstuck in time during World War II.",
        thumbnail: "http://books.google.com/books/content?id=NAXrZQHZ5LIC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1969"
    },
    {
        id: 'rec-39',
        title: "The Bell Jar",
        author: "Sylvia Plath",
        genres: ["Fiction", "Classic", "Contemporary"],
        description: "A brilliant student descends into mental illness in 1950s America.",
        thumbnail: "http://books.google.com/books/content?id=RKy0CgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1963"
    },
    {
        id: 'rec-40',
        title: "Little Women",
        author: "Louisa May Alcott",
        genres: ["Fiction", "Classic", "Historical"],
        description: "Four sisters grow up during the American Civil War.",
        thumbnail: "http://books.google.com/books/content?id=ZPAIDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1868"
    },
    {
        id: 'rec-41',
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        genres: ["Adventure", "Classic", "Fiction"],
        description: "An imprisoned sailor escapes and seeks revenge on those who betrayed him.",
        thumbnail: "http://books.google.com/books/content?id=FhGwcJLVT-oC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1844"
    },
    {
        id: 'rec-42',
        title: "Moby-Dick",
        author: "Herman Melville",
        genres: ["Adventure", "Classic", "Fiction"],
        description: "Captain Ahab's obsessive quest to kill a great white whale.",
        thumbnail: "http://books.google.com/books/content?id=y5y7BAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1851"
    },
    {
        id: 'rec-43',
        title: "Wuthering Heights",
        author: "Emily Brontë",
        genres: ["Romance", "Classic", "Fiction"],
        description: "A tale of passion and revenge on the Yorkshire moors.",
        thumbnail: "http://books.google.com/books/content?id=OG2XsgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1847"
    },
    {
        id: 'rec-44',
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        genres: ["Romance", "Classic", "Fiction"],
        description: "An orphaned governess falls in love with her mysterious employer.",
        thumbnail: "http://books.google.com/books/content?id=dXCJDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1847"
    },
    {
        id: 'rec-45',
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genres: ["Classic", "Fiction", "Philosophy"],
        description: "A poor student commits murder and wrestles with guilt and redemption.",
        thumbnail: "http://books.google.com/books/content?id=5A56J9IAmtEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1866"
    },
    {
        id: 'rec-46',
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        genres: ["Classic", "Fiction", "Philosophy"],
        description: "Three brothers grapple with faith, doubt, and morality in Imperial Russia.",
        thumbnail: "http://books.google.com/books/content?id=vg5FAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1880"
    },
    {
        id: 'rec-47',
        title: "War and Peace",
        author: "Leo Tolstoy",
        genres: ["Classic", "Historical", "Fiction"],
        description: "Russian families navigate love and war during Napoleon's invasion.",
        thumbnail: "http://books.google.com/books/content?id=mImFCgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1869"
    },
    {
        id: 'rec-48',
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genres: ["Classic", "Romance", "Fiction"],
        description: "A married aristocrat has an affair with devastating consequences.",
        thumbnail: "http://books.google.com/books/content?id=ZVGsDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1877"
    },
    {
        id: 'rec-49',
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        genres: ["Classic", "Fiction", "Philosophy"],
        description: "A man's portrait ages while he remains young and corrupt.",
        thumbnail: "http://books.google.com/books/content?id=vU5GAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1890"
    },
    {
        id: 'rec-50',
        title: "Dracula",
        author: "Bram Stoker",
        genres: ["Horror", "Classic", "Fiction"],
        description: "The classic tale of the vampire Count Dracula.",
        thumbnail: "http://books.google.com/books/content?id=qNHCAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1897"
    },
    {
        id: 'rec-51',
        title: "Frankenstein",
        author: "Mary Shelley",
        genres: ["Horror", "Science Fiction", "Classic"],
        description: "A scientist creates a monster with tragic consequences.",
        thumbnail: "http://books.google.com/books/content?id=dp0lDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1818"
    },
    {
        id: 'rec-52',
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        genres: ["Adventure", "Classic", "Fiction"],
        description: "A boy and a runaway slave journey down the Mississippi River.",
        thumbnail: "http://books.google.com/books/content?id=ZdlNk5NgDnkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1884"
    },
    {
        id: 'rec-53',
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        genres: ["Adventure", "Classic", "Fiction"],
        description: "A mischievous boy's adventures in a Mississippi River town.",
        thumbnail: "http://books.google.com/books/content?id=Nv8_AQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1876"
    },
    {
        id: 'rec-54',
        title: "The Odyssey",
        author: "Homer",
        genres: ["Classic", "Mythology", "Adventure"],
        description: "Odysseus's epic journey home after the Trojan War.",
        thumbnail: "http://books.google.com/books/content?id=pMmADwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "-800"
    },
    {
        id: 'rec-55',
        title: "The Iliad",
        author: "Homer",
        genres: ["Classic", "Mythology", "War"],
        description: "The legendary war between Greeks and Trojans.",
        thumbnail: "http://books.google.com/books/content?id=gZecDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "-762"
    },
    {
        id: 'rec-56',
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        genres: ["Classic", "Poetry", "Philosophy"],
        description: "Dante's journey through Hell, Purgatory, and Paradise.",
        thumbnail: "http://books.google.com/books/content?id=8UHuAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1320"
    },
    {
        id: 'rec-57',
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        genres: ["Classic", "Adventure", "Fiction"],
        description: "A delusional knight-errant tilts at windmills across Spain.",
        thumbnail: "http://books.google.com/books/content?id=p5EUAAAAQAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1605"
    },
    {
        id: 'rec-58',
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        genres: ["Fiction", "Classic", "Magical Realism"],
        description: "The multi-generational story of the Buendía family.",
        thumbnail: "http://books.google.com/books/content?id=3Qz_fw3aXZ0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1967"
    },
    {
        id: 'rec-59',
        title: "Love in the Time of Cholera",
        author: "Gabriel García Márquez",
        genres: ["Romance", "Fiction", "Classic"],
        description: "A man waits over fifty years for his lost love.",
        thumbnail: "http://books.google.com/books/content?id=CENEAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1985"
    },
    {
        id: 'rec-60',
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genres: ["Fantasy", "Adventure", "Fiction"],
        description: "A legendary wizard recounts his journey from gifted student to infamous figure.",
        thumbnail: "http://books.google.com/books/content?id=nNaCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        publishedDate: "2007"
    },
    {
        id: 'rec-61',
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        genres: ["Mystery", "Fiction", "Historical"],
        description: "A boy discovers a mysterious book that changes his life in post-war Barcelona.",
        thumbnail: "http://books.google.com/books/content?id=e88_AQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2001"
    },
    {
        id: 'rec-62',
        title: "The Pillars of the Earth",
        author: "Ken Follett",
        genres: ["Historical", "Fiction", "Adventure"],
        description: "The building of a cathedral in medieval England.",
        thumbnail: "http://books.google.com/books/content?id=axQLbwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1989"
    },
    {
        id: 'rec-63',
        title: "The Night Circus",
        author: "Erin Morgenstern",
        genres: ["Fantasy", "Romance", "Fiction"],
        description: "Two magicians duel in an enchanted circus that appears without warning.",
        thumbnail: "http://books.google.com/books/content?id=6F5JPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2011"
    },
    {
        id: 'rec-64',
        title: "The Time Traveler's Wife",
        author: "Audrey Niffenegger",
        genres: ["Romance", "Science Fiction", "Fiction"],
        description: "A love story complicated by involuntary time travel.",
        thumbnail: "http://books.google.com/books/content?id=0D28AAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2003"
    },
    {
        id: 'rec-65',
        title: "The Lovely Bones",
        author: "Alice Sebold",
        genres: ["Fiction", "Mystery", "Drama"],
        description: "A murdered girl watches from heaven as her family copes with loss.",
        thumbnail: "http://books.google.com/books/content?id=O1jjzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2002"
    },
    {
        id: 'rec-66',
        title: "The Curious Incident of the Dog in the Night-Time",
        author: "Mark Haddon",
        genres: ["Mystery", "Fiction", "Contemporary"],
        description: "An autistic teenager investigates the death of a neighbor's dog.",
        thumbnail: "http://books.google.com/books/content?id=e5Ui-7w5C_0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2003"
    },
    {
        id: 'rec-67',
        title: "The Help",
        author: "Kathryn Stockett",
        genres: ["Historical", "Fiction", "Drama"],
        description: "Black maids in 1960s Mississippi share their stories.",
        thumbnail: "http://books.google.com/books/content?id=kBZ8cRN2JFYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2009"
    },
    {
        id: 'rec-68',
        title: "The Shack",
        author: "William P. Young",
        genres: ["Fiction", "Spirituality", "Philosophy"],
        description: "A grieving father encounters God in an unexpected place.",
        thumbnail: "http://books.google.com/books/content?id=VB5rPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2007"
    },
    {
        id: 'rec-69',
        title: "The Five People You Meet in Heaven",
        author: "Mitch Albom",
        genres: ["Fiction", "Philosophy", "Spirituality"],
        description: "An amusement park worker learns life lessons in the afterlife.",
        thumbnail: "http://books.google.com/books/content?id=6a7RNNZXhJwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2003"
    },
    {
        id: 'rec-70',
        title: "Tuesdays with Morrie",
        author: "Mitch Albom",
        genres: ["Memoir", "Philosophy", "Non-Fiction"],
        description: "A student reconnects with his dying professor for life lessons.",
        thumbnail: "http://books.google.com/books/content?id=vN-LI48s_tsC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1997"
    },
    {
        id: 'rec-71',
        title: "The Last Lecture",
        author: "Randy Pausch",
        genres: ["Memoir", "Self-Help", "Non-Fiction"],
        description: "A dying professor's final lecture on achieving childhood dreams.",
        thumbnail: "http://books.google.com/books/content?id=CksKAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2008"
    },
    {
        id: 'rec-72',
        title: "Into the Wild",
        author: "Jon Krakauer",
        genres: ["Non-Fiction", "Biography", "Adventure"],
        description: "A young man abandons society to live in the Alaskan wilderness.",
        thumbnail: "http://books.google.com/books/content?id=sJQvDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1996"
    },
    {
        id: 'rec-73',
        title: "Into Thin Air",
        author: "Jon Krakauer",
        genres: ["Non-Fiction", "Adventure", "Biography"],
        description: "A firsthand account of the deadly 1996 Mount Everest disaster.",
        thumbnail: "http://books.google.com/books/content?id=gWb2DQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1997"
    },
    {
        id: 'rec-74',
        title: "Unbroken",
        author: "Laura Hillenbrand",
        genres: ["Biography", "Non-Fiction", "History"],
        description: "An Olympic runner's survival story as a WWII POW.",
        thumbnail: "http://books.google.com/books/content?id=8FjHf2kBJb8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2010"
    },
    {
        id: 'rec-75',
        title: "The Glass Castle",
        author: "Jeannette Walls",
        genres: ["Memoir", "Biography", "Non-Fiction"],
        description: "A journalist's unconventional upbringing in a dysfunctional family.",
        thumbnail: "http://books.google.com/books/content?id=Th3tDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2005"
    },
    {
        id: 'rec-76',
        title: "Wild",
        author: "Cheryl Strayed",
        genres: ["Memoir", "Biography", "Non-Fiction"],
        description: "A woman hikes the Pacific Crest Trail to find herself.",
        thumbnail: "http://books.google.com/books/content?id=SNMDAAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2012"
    },
    {
        id: 'rec-77',
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genres: ["Science", "Non-Fiction", "Physics"],
        description: "An accessible exploration of cosmology and the universe.",
        thumbnail: "http://books.google.com/books/content?id=JlT4Vr5bTOcC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1988"
    },
    {
        id: 'rec-78',
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        genres: ["Science", "Non-Fiction", "Biology"],
        description: "A gene-centered view of evolution and natural selection.",
        thumbnail: "http://books.google.com/books/content?id=WkHO9HI7koEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1976"
    },
    {
        id: 'rec-79',
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        genres: ["Non-Fiction", "Biography", "Science"],
        description: "The story behind the woman whose cells changed medicine forever.",
        thumbnail: "http://books.google.com/books/content?id=av3VZQjKA3IC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2010"
    },
    {
        id: 'rec-80',
        title: "Steve Jobs",
        author: "Walter Isaacson",
        genres: ["Biography", "Non-Fiction", "Business"],
        description: "The authorized biography of Apple's iconic co-founder.",
        thumbnail: "http://books.google.com/books/content?id=8U2oAAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2011"
    },
    {
        id: 'rec-81',
        title: "The Lean Startup",
        author: "Eric Ries",
        genres: ["Business", "Non-Fiction", "Productivity"],
        description: "How continuous innovation creates radically successful businesses.",
        thumbnail: "http://books.google.com/books/content?id=tvfyz-4JILwC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2011"
    },
    {
        id: 'rec-82',
        title: "Zero to One",
        author: "Peter Thiel",
        genres: ["Business", "Non-Fiction", "Productivity"],
        description: "Notes on startups and how to build the future.",
        thumbnail: "http://books.google.com/books/content?id=iXs5BAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2014"
    },
    {
        id: 'rec-83',
        title: "Thinking in Bets",
        author: "Annie Duke",
        genres: ["Psychology", "Business", "Non-Fiction"],
        description: "Making smarter decisions when you don't have all the facts.",
        thumbnail: "http://books.google.com/books/content?id=2W9kDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2018"
    },
    {
        id: 'rec-84',
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        genres: ["Self-Help", "Philosophy", "Psychology"],
        description: "A counterintuitive approach to living a good life.",
        thumbnail: "http://books.google.com/books/content?id=yng_CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2016"
    },
    {
        id: 'rec-85',
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        genres: ["Psychology", "Philosophy", "Memoir"],
        description: "A Holocaust survivor's insights on finding meaning in suffering.",
        thumbnail: "http://books.google.com/books/content?id=K2Uc6O85jCYC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1946"
    },
    {
        id: 'rec-86',
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        genres: ["Self-Help", "Business", "Productivity"],
        description: "Principles for personal and professional effectiveness.",
        thumbnail: "http://books.google.com/books/content?id=_xAMswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1989"
    },
    {
        id: 'rec-87',
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        genres: ["Self-Help", "Business", "Psychology"],
        description: "Timeless advice on building relationships and influencing others.",
        thumbnail: "http://books.google.com/books/content?id=1rW-QpIAs8UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1936"
    },
    {
        id: 'rec-88',
        title: "The Art of War",
        author: "Sun Tzu",
        genres: ["Philosophy", "Classic", "Strategy"],
        description: "Ancient Chinese military strategy applicable to modern life.",
        thumbnail: "http://books.google.com/books/content?id=VVgPAAAAQAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "-500"
    },
    {
        id: 'rec-89',
        title: "Meditations",
        author: "Marcus Aurelius",
        genres: ["Philosophy", "Classic", "Self-Help"],
        description: "Personal writings of a Roman Emperor on Stoic philosophy.",
        thumbnail: "http://books.google.com/books/content?id=AJR1CQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "180"
    },
    {
        id: 'rec-90',
        title: "The Republic",
        author: "Plato",
        genres: ["Philosophy", "Classic", "Politics"],
        description: "Socratic dialogue on justice, the ideal state, and the good life.",
        thumbnail: "http://books.google.com/books/content?id=VvUaAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "-380"
    },
    {
        id: 'rec-91',
        title: "The Prince",
        author: "Niccolò Machiavelli",
        genres: ["Philosophy", "Politics", "Classic"],
        description: "A political treatise on acquiring and maintaining power.",
        thumbnail: "http://books.google.com/books/content?id=pW8AAAAAQAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1532"
    },
    {
        id: 'rec-92',
        title: "Good to Great",
        author: "Jim Collins",
        genres: ["Business", "Non-Fiction", "Management"],
        description: "Why some companies make the leap and others don't.",
        thumbnail: "http://books.google.com/books/content?id=8nZZAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2001"
    },
    {
        id: 'rec-93',
        title: "The Innovator's Dilemma",
        author: "Clayton M. Christensen",
        genres: ["Business", "Non-Fiction", "Management"],
        description: "When new technologies cause great firms to fail.",
        thumbnail: "http://books.google.com/books/content?id=SIexi_qgq2gC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1997"
    },
    {
        id: 'rec-94',
        title: "The Hard Thing About Hard Things",
        author: "Ben Horowitz",
        genres: ["Business", "Non-Fiction", "Management"],
        description: "Building a business when there are no easy answers.",
        thumbnail: "http://books.google.com/books/content?id=kKbeCgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2014"
    },
    {
        id: 'rec-95',
        title: "Shoe Dog",
        author: "Phil Knight",
        genres: ["Memoir", "Business", "Biography"],
        description: "The founder of Nike's memoir about building an empire.",
        thumbnail: "http://books.google.com/books/content?id=6IIPCgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "2016"
    },
    {
        id: 'rec-96',
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        genres: ["Biography", "History", "Memoir"],
        description: "A Jewish girl's diary while hiding from the Nazis during WWII.",
        thumbnail: "http://books.google.com/books/content?id=VZOXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1947"
    },
    {
        id: 'rec-97',
        title: "The Color Purple",
        author: "Alice Walker",
        genres: ["Fiction", "Classic", "Historical"],
        description: "An African-American woman's journey to self-discovery in the early 20th century South.",
        thumbnail: "http://books.google.com/books/content?id=jSHLtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1982"
    },
    {
        id: 'rec-98',
        title: "Beloved",
        author: "Toni Morrison",
        genres: ["Fiction", "Historical", "Classic"],
        description: "A former slave is haunted by the ghost of her baby daughter.",
        thumbnail: "http://books.google.com/books/content?id=BXeCAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1987"
    },
    {
        id: 'rec-99',
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        genres: ["Fiction", "Classic", "Adventure"],
        description: "An aging fisherman's epic battle with a giant marlin.",
        thumbnail: "http://books.google.com/books/content?id=nA0TAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        publishedDate: "1952"
    }
];

// Application State
let userLibrary = JSON.parse(localStorage.getItem('userLibrary')) || [...starterBooks];
let ratings = JSON.parse(localStorage.getItem('bookRatings')) || {};
let currentFilter = '';
let currentGenreFilter = '';
let currentRatingFilter = '';
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

// Initialize active recommendations with 99 books
function initializeRecommendations() {
    if (activeRecommendations.length === 0) {
        // Get books not in library or want-to-read shelf
        const usedIds = new Set([
            ...userLibrary.map(b => b.id),
            ...wantToReadShelf.map(b => b.id)
        ]);
        const availableBooks = recommendedBooksPool.filter(book =>
            !usedIds.has(book.id)
        );

        // Select first 99 available books
        activeRecommendations = availableBooks.slice(0, 99);
        saveActiveRecommendations();
    } else {
        // Clean up any books that are already in library or want-to-read shelf
        const usedIds = new Set([
            ...userLibrary.map(b => b.id),
            ...wantToReadShelf.map(b => b.id)
        ]);
        activeRecommendations = activeRecommendations.filter(book =>
            !usedIds.has(book.id)
        );

        // Refill to 99 if needed
        refillRecommendations();
    }
}

// Refill recommendations to maintain 99 books
function refillRecommendations() {
    const needed = 99 - activeRecommendations.length;

    if (needed > 0) {
        // Get book IDs already in use (library, want-to-read, and active recommendations)
        const usedIds = new Set([
            ...userLibrary.map(b => b.id),
            ...wantToReadShelf.map(b => b.id),
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
document.addEventListener('DOMContentLoaded', async () => {
    initializeTabs();
    initializeRecommendations();

    // Enhance book covers for all books without images
    const booksToEnhance = [...userLibrary, ...wantToReadShelf, ...activeRecommendations]
        .filter(book => !book.thumbnail || book.thumbnail.includes('zoom=1'));

    for (const book of booksToEnhance) {
        await enhanceBookCover(book);
    }

    // Save enhanced library
    if (booksToEnhance.some(b => userLibrary.includes(b))) {
        saveLibrary();
    }

    populateGenreFilter();
    setupGenreFilter();
    setupRatingFilter();
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

// Enhance book covers with higher resolution images from public sources
async function enhanceBookCover(book) {
    // If book already has a high-res thumbnail, ensure it's maximum quality
    if (book.thumbnail) {
        // Upgrade Google Books thumbnails to highest resolution
        if (book.thumbnail.includes('books.google.com')) {
            book.thumbnail = book.thumbnail.replace('zoom=1', 'zoom=5').replace('zoom=2', 'zoom=5').replace('zoom=3', 'zoom=5');
        }
        return book.thumbnail;
    }

    // Try to fetch from Open Library API
    try {
        const title = encodeURIComponent(book.title);
        const author = encodeURIComponent(book.author);

        // Try Open Library Search API
        const response = await fetch(`https://openlibrary.org/search.json?title=${title}&author=${author}&limit=1`);
        const data = await response.json();

        if (data.docs && data.docs.length > 0) {
            const doc = data.docs[0];

            // Open Library provides cover IDs, fetch the large version
            if (doc.cover_i) {
                book.thumbnail = `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
                return book.thumbnail;
            }

            // Try ISBN if available
            if (doc.isbn && doc.isbn.length > 0) {
                book.thumbnail = `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-L.jpg`;
                return book.thumbnail;
            }
        }
    } catch (error) {
        console.log('Could not fetch cover from Open Library:', error);
    }

    return null;
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

// Setup Rating Filter Event Listener
function setupRatingFilter() {
    const ratingFilter = document.getElementById('rating-filter');
    if (ratingFilter) {
        ratingFilter.addEventListener('change', (e) => {
            currentRatingFilter = e.target.value;
            displayLibrary();
        });
    }
}

// Display User's Library
function displayLibrary() {
    // First display library shelf
    displayLibraryShelf();

    // Ensure all want-to-read books are also in the library
    const libraryIds = new Set(userLibrary.map(b => b.id));
    wantToReadShelf.forEach(book => {
        if (!libraryIds.has(book.id)) {
            userLibrary.push(book);
        }
    });
    saveLibrary();

    // Hide the want-to-read section since books are now in the main library
    const wtrSection = document.getElementById('want-to-read-section');
    if (wtrSection) {
        wtrSection.style.display = 'none';
    }

    const booksGrid = document.getElementById('books-grid');
    const filteredBooks = userLibrary.filter(book => {
        const matchesSearch = !currentFilter ||
            book.title.toLowerCase().includes(currentFilter) ||
            book.author.toLowerCase().includes(currentFilter) ||
            book.genres.some(g => g.toLowerCase().includes(currentFilter));

        const matchesGenre = !currentGenreFilter ||
            book.genres.includes(currentGenreFilter);

        // Rating filter: check if book meets minimum rating requirement
        const bookRating = ratings[book.id] || 0;
        const matchesRating = !currentRatingFilter ||
            (currentRatingFilter === '5' && bookRating === 5) ||
            (currentRatingFilter === '4+' && bookRating >= 4) ||
            (currentRatingFilter === '3+' && bookRating >= 3) ||
            (currentRatingFilter === '2+' && bookRating >= 2) ||
            (currentRatingFilter === '1+' && bookRating >= 1) ||
            (currentRatingFilter === 'unrated' && bookRating === 0);

        return matchesSearch && matchesGenre && matchesRating;
    });

    // Sort books: rated books first (by rating), then unrated books
    filteredBooks.sort((a, b) => {
        const ratingA = ratings[a.id] || 0;
        const ratingB = ratings[b.id] || 0;

        // Rated books come first
        if (ratingA > 0 && ratingB === 0) return -1;
        if (ratingA === 0 && ratingB > 0) return 1;

        // If both rated, sort by rating (highest first)
        if (ratingA > 0 && ratingB > 0) {
            return ratingB - ratingA;
        }

        // Both unrated, maintain order
        return 0;
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

    // Add click handler to open book details popup
    card.addEventListener('click', (e) => {
        // Don't open popup if clicking on interactive elements
        if (e.target.classList.contains('star') ||
            e.target.classList.contains('add-to-library-btn') ||
            e.target.classList.contains('want-to-read-btn') ||
            e.target.classList.contains('remove-from-library-btn')) {
            return;
        }
        showBookDetailsPopup(book, isSearchResult, matchScore);
    });

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
        `<div class="book-published-date">${book.publishedDate}</div>` : '';

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
        `<button class="remove-from-library-btn-x" data-book-id="${book.id}" title="Remove from library">&times;</button>` : '';

    // For recommendations, add a remove button
    const removeRecommendationHTML = matchScore !== null ?
        `<button class="remove-recommendation-btn-x" data-book-id="${book.id}" title="Not interested">&times;</button>` : '';

    // Add "want to read" badge if book is in want-to-read shelf
    const wantToReadBadgeHTML = isInWantToRead ?
        `<div class="want-to-read-badge">🐛 Want to Read</div>` : '';

    card.innerHTML = `
        ${thumbnailHTML}
        ${removeButtonHTML}
        ${removeRecommendationHTML}
        ${wantToReadBadgeHTML}
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        ${publishedDateHTML}
        <div class="book-genres">${genreTags}</div>
        <div class="book-description">${book.description}</div>
        ${popularityHTML}
        ${matchScoreHTML}
        ${wantToReadButtonHTML}
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
        const currentRating = ratings[bookId] || 0;

        // If clicking the same star, remove the rating
        if (currentRating === rating) {
            delete ratings[bookId];
            saveRatings();

            // Update star display to show no rating
            const stars = starsContainer.querySelectorAll('.star');
            stars.forEach(star => {
                star.classList.remove('filled');
                star.classList.add('empty');
            });

            // Update card appearance
            const bookCard = starsContainer.closest('.book-card');
            bookCard.classList.remove('rated');

            // Auto-resort library when rating changes
            const libraryTab = document.getElementById('library-tab');
            if (libraryTab.classList.contains('active')) {
                displayLibrary();
            }
            return;
        }

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

        // Show rating modal
        showRatingModal(bookData, button);
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

        // Also add to library (since all want-to-read books should be in library)
        if (!userLibrary.find(b => b.id === bookData.id)) {
            userLibrary.push(bookData);
            saveLibrary();
            populateGenreFilter();
        }

        // Remove from active recommendations if present
        activeRecommendations = activeRecommendations.filter(b => b.id !== bookData.id);
        saveActiveRecommendations();
        refillRecommendations();

        // Refresh recommendations display if on recommendations tab
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab && activeTab.dataset.tab === 'recommendations') {
            displayRecommendations();
        }

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
    if (e.target.classList.contains('remove-from-library-btn-x')) {
        const button = e.target;
        const bookId = button.dataset.bookId;
        const book = userLibrary.find(b => b.id === bookId);

        if (book) {
            userLibrary = userLibrary.filter(b => b.id !== bookId);
            saveLibrary();

            // Also remove from want-to-read shelf
            wantToReadShelf = wantToReadShelf.filter(b => b.id !== bookId);
            saveWantToReadShelf();

            // Remove rating
            if (ratings[bookId]) {
                delete ratings[bookId];
                saveRatings();
            }

            populateGenreFilter();
            displayLibrary();
        }
    }

    // Remove from recommendations button
    if (e.target.classList.contains('remove-recommendation-btn-x')) {
        const button = e.target;
        const bookId = button.dataset.bookId;
        const book = activeRecommendations.find(b => b.id === bookId);

        if (book && confirm(`Remove "${book.title}" from recommendations?`)) {
            activeRecommendations = activeRecommendations.filter(b => b.id !== bookId);
            refillRecommendations();
            saveActiveRecommendations();
            displayRecommendations();
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
        // But first prioritize author matches if the search query matches an author
        uniqueBooks.sort((a, b) => {
            const queryLower = query.toLowerCase();
            const aAuthorMatch = a.author.toLowerCase().includes(queryLower);
            const bAuthorMatch = b.author.toLowerCase().includes(queryLower);

            // If one matches author and other doesn't, author match goes first
            if (aAuthorMatch && !bAuthorMatch) return -1;
            if (!aAuthorMatch && bAuthorMatch) return 1;

            // Both match author or both don't - sort by popularity
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

    // Filter out books that have been rated or are in want-to-read shelf
    const wantToReadIds = new Set(wantToReadShelf.map(b => b.id));
    const unratedRecommendations = activeRecommendations.filter(book =>
        !ratings[book.id] && !wantToReadIds.has(book.id)
    );

    // Calculate match scores and prepare for sorting
    const libraryGenres = new Set();
    userLibrary.forEach(libBook => {
        libBook.genres.forEach(genre => libraryGenres.add(genre));
    });

    const booksWithScores = unratedRecommendations.map(book => {
        // Calculate a simple match score based on genre overlap with library
        let matchScore = 50; // Base score

        const matchingGenres = book.genres.filter(genre => libraryGenres.has(genre)).length;
        matchScore += matchingGenres * 10;
        matchScore = Math.min(matchScore, 99);

        return { book, matchScore };
    });

    // Sort by match score in descending order
    booksWithScores.sort((a, b) => b.matchScore - a.matchScore);

    // Display sorted recommendations
    booksWithScores.forEach(({ book, matchScore }) => {
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

// Display Library Shelf
function displayLibraryShelf() {
    const shelfContainer = document.getElementById('library-shelf');
    const librarySection = document.getElementById('library-shelf-section');

    shelfContainer.innerHTML = '';

    if (userLibrary.length === 0) {
        // Hide the entire section if empty
        librarySection.style.display = 'none';
        return;
    }

    // Show the section
    librarySection.style.display = 'block';

    // Create shelves (group books in rows of up to 8)
    const booksPerShelf = 8;
    const numShelves = Math.ceil(userLibrary.length / booksPerShelf);

    for (let shelfNum = 0; shelfNum < numShelves; shelfNum++) {
        const shelfDiv = document.createElement('div');
        shelfDiv.className = 'shelf-row';

        const booksDiv = document.createElement('div');
        booksDiv.className = 'shelf-books';

        const startIdx = shelfNum * booksPerShelf;
        const endIdx = Math.min(startIdx + booksPerShelf, userLibrary.length);
        const booksOnThisShelf = userLibrary.slice(startIdx, endIdx);

        booksOnThisShelf.forEach(book => {
            const bookSpine = document.createElement('div');
            bookSpine.className = 'book-spine';

            // Get color based on genre
            const color = getGenreColor(book.genres);
            bookSpine.setAttribute('data-color', color);

            // Add random width and height variations with wider range
            const baseWidth = 60;
            const baseHeight = 220;
            // Vary widths more: from 35px (skinny) to 95px (thick)
            const widthVariation = Math.random() * 60 - 25; // -25 to +35px
            // Vary heights more for better visual variety
            const heightVariation = Math.random() * 80 - 20; // -20 to +60px
            bookSpine.style.width = `${baseWidth + widthVariation}px`;
            bookSpine.style.height = `${baseHeight + heightVariation}px`;

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
                showBookDetailsPopup(book, false, null);
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

            // Add random width and height variations with wider range
            const baseWidth = 60;
            const baseHeight = 220;
            // Vary widths more: from 35px (skinny) to 95px (thick)
            const widthVariation = Math.random() * 60 - 25; // -25 to +35px
            // Vary heights more for better visual variety
            const heightVariation = Math.random() * 80 - 20; // -20 to +60px
            bookSpine.style.width = `${baseWidth + widthVariation}px`;
            bookSpine.style.height = `${baseHeight + heightVariation}px`;

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
function showBookDetailsPopup(book, isSearchResult = false, matchScore = null) {
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
        `<div class="book-published-date">${book.publishedDate}</div>` : '';

    const popularityHTML = book.averageRating && book.ratingsCount ?
        `<div class="popularity-rating">
            <span class="rating-label-small">Google Books Rating:</span>
            <span class="rating-stars">★ ${book.averageRating.toFixed(1)}</span>
            <span class="rating-count">(${book.ratingsCount.toLocaleString()} ratings)</span>
        </div>` : '';

    const matchScoreHTML = matchScore !== null ?
        `<div class="match-score">${matchScore}% Match</div>` : '';

    // Check if book is in library, want to read shelf, or recommendations
    const isInLibrary = userLibrary.find(b => b.id === book.id);
    const isInWantToRead = wantToReadShelf.find(b => b.id === book.id);
    const isRecommendation = matchScore !== null;

    // Build action buttons based on book status
    let actionButtons = '';

    if (isInWantToRead) {
        actionButtons = `
            <button class="add-to-library-btn popup-action-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>Add to Library</button>
            <button class="remove-from-wtr-btn popup-action-btn" data-book-id="${book.id}">Remove from Want to Read</button>
        `;
    } else if (isInLibrary) {
        const currentRating = ratings[book.id] || 0;
        const stars = createStars(book.id, currentRating);
        actionButtons = `
            <div class="rating-section">
                <div class="rating-label">Your Rating:</div>
                <div class="stars" data-book-id="${book.id}">
                    ${stars}
                </div>
            </div>
            <button class="remove-from-library-btn popup-action-btn" data-book-id="${book.id}">Remove from Library</button>
        `;
    } else if (isSearchResult) {
        actionButtons = `
            <button class="add-to-library-btn popup-action-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>Add to Library</button>
            <button class="want-to-read-btn popup-action-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>🐛 Want to Read</button>
        `;
    } else if (isRecommendation) {
        actionButtons = `
            <button class="want-to-read-btn popup-action-btn" data-book='${JSON.stringify(book).replace(/'/g, "&apos;")}'>🐛 Want to Read</button>
        `;
    }

    popup.innerHTML = `
        <button class="popup-close">&times;</button>
        ${thumbnailHTML}
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        ${publishedDateHTML}
        <div class="book-genres">${genreTags}</div>
        <div class="book-description">${book.description}</div>
        ${popularityHTML}
        ${matchScoreHTML}
        ${actionButtons}
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
    const removeWtrBtn = popup.querySelector('.remove-from-wtr-btn');
    if (removeWtrBtn) {
        removeWtrBtn.addEventListener('click', () => {
            if (confirm(`Remove "${book.title}" from your Want to Read shelf?`)) {
                wantToReadShelf = wantToReadShelf.filter(b => b.id !== book.id);
                saveWantToReadShelf();
                displayLibrary();
                document.body.removeChild(overlay);
            }
        });
    }
}

// Show rating modal when adding book to library
function showRatingModal(book, button) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'rating-modal';

    modal.innerHTML = `
        <h3>Rate "${book.title}"</h3>
        <p>Give this book a star rating to add it to your library:</p>
        <div class="modal-stars" id="modal-stars">
            <span class="modal-star" data-rating="1">★</span>
            <span class="modal-star" data-rating="2">★</span>
            <span class="modal-star" data-rating="3">★</span>
            <span class="modal-star" data-rating="4">★</span>
            <span class="modal-star" data-rating="5">★</span>
        </div>
        <div class="modal-buttons">
            <button class="modal-cancel">Cancel</button>
            <button class="modal-skip">Add Without Rating</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Handle star clicks
    const modalStars = modal.querySelectorAll('.modal-star');
    modalStars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            modalStars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            addBookToLibrary(book, rating, button);
            document.body.removeChild(overlay);
        });
    });

    modal.addEventListener('mouseleave', () => {
        modalStars.forEach(s => s.classList.remove('hover'));
    });

    // Handle cancel
    modal.querySelector('.modal-cancel').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    // Handle skip (add as want to read instead)
    modal.querySelector('.modal-skip').addEventListener('click', () => {
        addBookToLibrary(book, null, button);
        document.body.removeChild(overlay);
    });

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

// Add book to library with optional rating
function addBookToLibrary(book, rating, button) {
    // Add to library
    userLibrary.push(book);
    saveLibrary();
    populateGenreFilter();

    // Save rating if provided
    if (rating !== null) {
        ratings[book.id] = rating;
        saveRatings();
    } else {
        // If no rating, add to want to read
        if (!wantToReadShelf.find(b => b.id === book.id)) {
            wantToReadShelf.push(book);
            saveWantToReadShelf();
        }
    }

    // Update button if it exists
    if (button) {
        button.textContent = 'Added to Library!';
        button.classList.add('added');
        button.disabled = true;
    }

    // Refresh library if on that tab
    const libraryTab = document.getElementById('library-tab');
    if (libraryTab && libraryTab.classList.contains('active')) {
        displayLibrary();
    }
}
