const ApiUtils = {
  searchQuery(params, success){
    let queryString = "";
    if (params){
      queryString = "?";
      Object.keys(params).forEach((key)=>{
        queryString += `search[${key}]=${params[key]}`;
      });
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
