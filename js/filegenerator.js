function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function () {
    // Generate download of hello.txt file with some content
    var text = document.getElementById("text-val").value;
    var filename_array = text.split('\n');
    var filename_list = 'md "wybrane" \n\n';
    for (var n = 0; n < filename_array.length; n++) {
        filename_list += 'copy "' + filename_array[n] + '.*" ' + '"wybrane"' + '\n';
    }
    var nameoffile = "wybrane.bat";

    download(nameoffile, filename_list);
}, false);
