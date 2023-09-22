import prisma from "./../database/index";
import { books } from "@prisma/client";


export async function getBooks() {
  return prisma.books.findMany()
}

export async function getBook(id: number) {
  return prisma.books.findFirst({
    where: { id }
  })
}
export type CreateBook = Omit<books, "id" | "read" | "grade" | "review">

export async function createBook(book: CreateBook) {
  return prisma.books.create({
    data: book
  })
}

export type CreateReview = Omit<books, "id" | "title" | "author" | "publisher" | "purchaseDate" | "read">

export async function reviewBook(bookId: number, bookReview: CreateReview) {
  const { grade, review } = bookReview;
  const data = { grade, review, read: true }

  return prisma.books.update({
    data: data,
    where: { id: bookId }
  })
}