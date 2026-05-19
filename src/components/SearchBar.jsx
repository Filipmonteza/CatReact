import { Form, InputGroup } from "react-bootstrap"
import { Search } from "lucide-react"

function SearchBar({ search, setSearch }) {
  return (
    <InputGroup className="mb-4 mx-auto" style={{ maxWidth: "500px" }}>

      <InputGroup.Text>
        <Search size={16} />
      </InputGroup.Text>

      <Form.Control
        type="text"
        placeholder="Search for a cat breed..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </InputGroup>
  )
}

export default SearchBar