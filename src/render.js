
var isCtrl = false;
window.addEventListener('load', function(){
    document.getElementById('notepad').addEventListener('keydown', function(e){
        if (e.keyCode == 17) {
            e.preventDefault();
            isCtrl = true;
        }


	if (e.keyCode == 83 && isCtrl){
           e.preventDefault();
           // your save logic goes here
        saveText();
	}
    });
});

function saveText() {
    var textcontent = document.getElementById("notepad").value;
    var textHeaderContent = document.getElementById("fileNameInput").value;

    const textDataBlob = new Blob([textHeaderContent], { type: "text/plain" });

    const downloadURL = window.URL.createObjectURL(textDataBlob);

    const downloadLink = document.createElement('a');

    downloadLink.download = textHeaderContent;

    downloadLink.href = downloadURL;

    downloadLink.click();

    console.log("Got to line 35");

    console.log(textcontent);
}