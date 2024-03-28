const getReadBooks = () => {
  let blogs = [];
  const storedReadBooks = localStorage.getItem('readBooks');
  if (storedReadBooks) {
    blogs = JSON.parse(storedReadBooks);
    return blogs;
  }

  return blogs
};

const getWishlistBooks = () => {
  let wishList = [];
  const storedWishlistBooks = localStorage.getItem('wishlistBooks');
  if (storedWishlistBooks) {
    wishList = JSON.parse(storedWishlistBooks);
    return wishList;
  }

  return wishList;
};

const storedReadBooks = (id) => {
  let storedReadBooks = getReadBooks();
  const isExist = storedReadBooks.find(bookId => bookId === id);
  if (!isExist) {
    storedReadBooks.push(id);
    localStorage.setItem('readBooks', JSON.stringify(storedReadBooks));
    return {
      status:true,
      message:'Successfully read this book'
    };
  }

  return {
    status:false,
    message:'You have already read this book'
  };
};

const storedWishlistBooks = (id) => {
  let storedReadBooks = getReadBooks();
  let storedWishlistBooks = getWishlistBooks();
  const isExistReadBooks = storedReadBooks.find(bookId => bookId === id);
  const isExistWishlistBooks = storedWishlistBooks.find(bookId => bookId === id);
  if(isExistReadBooks) {
    return {
      status:false,
      message:'You have already read this book'
    };
  }
  if(isExistWishlistBooks){
    return {
      status:false,
      message:'You have already added this book to wishlist'
    };
  }
  
  storedWishlistBooks.push(id);
  localStorage.setItem('wishlistBooks', JSON.stringify(storedWishlistBooks));

  return {
    status: true,
    message:'Successfully added this book to wishlist'
  };
};

export {
  getReadBooks,
  getWishlistBooks,
  storedReadBooks,
  storedWishlistBooks
};

