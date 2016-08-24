let _params = {};

const SearchStore = {
  setParam(key, value){
    _params[key] = value;
  },
  deleteParam(key){
    delete _params[key];
  },
  getParams(){
    return Object.assign({}, _params);
  },
  clearParams(){
    _params = {};
  }
};

export default SearchStore;
