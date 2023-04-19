const dataFileTxt = "../data/data.txt";
const dataFileCsv = "../data/MOCK_DATA.csv";

jQuery.extend({
    getData: function(url){

        $.ajax({
            type: "GET",
            docType: "text",
            async: false,
            url:  url,
            success: function(data){
                console.log(data);
                result = data;
            },
            error: function(xhr,status,error){
                console.log(error)
            }
        });
        return result;
    }
});
let doc = $.getData(dataFileCsv)