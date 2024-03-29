import '../assets/styles/SearchBox.css'

const SearchBox = (props) => {

    const { value, placeholder, onChange, className } = props

    return <div className={`SearchBox-container ${className}`}>
        <input value={value} onChange={onChange} className="search-field-input" type="text" id="SearchBox" required/>
        <label className="search-field-label" htmlFor="SearchBox">{placeholder}</label>
    </div>
}

export default SearchBox