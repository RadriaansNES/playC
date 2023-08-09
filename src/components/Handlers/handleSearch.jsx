const handleSearch = () => {
    if (searchQuery !== '') {
      Search(searchQuery, accessToken, setReturnedInfo);
      setSearchQuery("");
    }
  };

  export default handleSearch;