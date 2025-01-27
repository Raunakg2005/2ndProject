"use client"

import { motion } from "framer-motion"

interface PaginationProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  totalPosts: number
  postsPerPage: number
}

export default function Pagination({ currentPage, setCurrentPage, totalPosts, postsPerPage }: PaginationProps) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <motion.li key={number}>
            <motion.button
              className={`w-10 h-10 rounded-full ${
                currentPage === number ? "bg-blue-500 text-white" : "bg-white text-blue-500"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

