import styles from "./Search.module.css"

const Search = ({ setSearch }) => {
  return (
    <form className={styles.form}>
      <input className={styles.searchBar} placeholder="Search..." type="text" onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
};

export default Search;
