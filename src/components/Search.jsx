import "../scss/Search.scss";

function Search() {
  return (
    <div className="search-bar-menu">
      <div className="content-container">
        <div className="content">
          <div className="logo">
            <img
              src={
                "https://shopo.quomodothemes.website/assets/images/logo-5.svg"
              }
              alt=""
            />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Product..." />
            <select name="" id="">
              <option value="">All Categories</option>
            </select>
            <button>Search</button>
          </div>
          <div className="menu-icons">
            <i className="bi bi-arrow-repeat"></i>
            <i className="bi bi-heart"></i>
            <i className="bi bi-bag"></i>
            <i className="bi bi-person"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
