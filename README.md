# book-catalog-server


# book routes 
    1.  router.post("/book/create", BookController.bookCreateController);
    2.  router.get("/book/:id", BookController.singleBookController);
    3.  router.patch("/book/:id", BookController.updateBookController);
    4.  router.delete("/book/:id", BookController.deleteBookController);
    5.  router.get("/books", BookController.allBooksController);
# review routes 
    1.   router.post("/review/create", ReviewController.reviewCreateController);
    2.   router.get("/review", ReviewController.reviewShowController);
    
