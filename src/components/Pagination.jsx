function Pagination({

  totalCats,
  catsPerPage,
  currentPage,
  setCurrentPage

}) {

  const totalPages =
    Math.ceil(totalCats / catsPerPage)

  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (

    <div className="pagination">

      {pages.map((page) => (

        <button
          key={page}

          onClick={() =>
            setCurrentPage(page)
          }

          className={
            page === currentPage
              ? "active-page"
              : ""
          }
        >
          {page}
        </button>

      ))}

    </div>
  )
}

export default Pagination