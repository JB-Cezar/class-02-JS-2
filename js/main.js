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

function splitRow(bigString){
    let row = bigString.split("\n");
    for (let j = 1; j < row.length-1; j++){
        let col = row[j].split(",");
        let user = new User(
            col[0],
            col[1],
            col[2],
            col[3],
            col[4],
            col[5]
        )
        userList.set()
    }
}