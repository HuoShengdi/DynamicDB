const ApiUtils = {
  searchQuery(params, success){
    let queryString = "";
    if (params){
      queryString = "?";
      const paramArr = [];
      Object.keys(params).forEach((key)=>{
        paramArr.push(`search[${key}]=${params[key]}`);
      });
      queryString += paramArr.join("&");
    }
    $.ajax({
        url: "/customers" + queryString,
        type: "GET",
        success
    });
  },

  createCustomer(formData, success){
    $.ajax({
        url: "/customers/",
        type: "POST",
        data: formData,
        success
    });
  },

  updateCustomer(formData, success){
    $.ajax({
        url: "/customers/" + formData.id,
        type: "PATCH",
        data: formData,
        success
    });
  },

  getFields(success){
    $.ajax({
      url:'/fields',
      type: "GET",
      success
    });
  }
};

export default ApiUtils;
