class Api::BooksController < ApplicationController
  def index
    @books = Book.all
    render json: {books: @books}
  end

  def create
    book = Book.create(
      title: params[:title],
      author: params[:author],
      replace: params[:replace]
    )
    render json: {book: book}
  end
end
