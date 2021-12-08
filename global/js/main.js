const socket = io();
const uploadFiles = document.getElementById("uploadFiles-form");

function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step 
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
  
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

socket.on('message', message =>{
    console.log(message)
});

uploadFiles.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const fileRoom = document.getElementById("formFileRoom");
    const fileLecture = document.getElementById("formFileLecture");
    console.log(fileRoom.files[0]);
    console.log(fileLecture.files[0]);
    const formData = new FormData();
    formData.append("files", fileRoom.files[0]);
    formData.append("files", fileLecture.files[0]);
    console.log("XXXXXXXXXXX Files sent",formData);
    
    body = {
        rooms_file : "TEsteastaetasfaf",
        lectures_file : 2
    }

    socket.emit('filesSent', body);
    /*const options = {
        method: 'post',
        body: formData
    }
    fetch('/', options)
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
    location.href = '/success';*/
}                                                                                                       

