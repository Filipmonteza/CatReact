import { Pagination } from "react-bootstrap"

function PaginationComp({
  totalCats,
  catsPerPage,
  currentPage,
  setCurrentPage
}) {

  const totalPages = Math.ceil(totalCats / catsPerPage)

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <Pagination className="justify-content-center mt-4">

      <Pagination.Prev
        onClick={() => setCurrentPage(p => p - 1)}
        disabled={currentPage === 1}
      />

      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => setCurrentPage(p => p + 1)}
        disabled={currentPage === totalPages}
      />

    </Pagination>
  )
}

export default PaginationComp