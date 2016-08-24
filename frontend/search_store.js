let _params = {};

const SearchStore = {
  setParam(key, value){
    _params[key] = value;
  },
  deleteParam(key){
    delete _params[key];
    console.log(_params);
  },
  getParams(){
    return Object.assign({}, _params);
  },
  clearParams(){
    _params = {};
  }
};

export default SearchStore;
