function processingFunction () { 
    let input1 = parseFloat(document.getElementById("dataBox1").value); 
    let input2 = parseFloat(document.getElementById("dataBox2").value); 
    let outputArea = document.getElementById("outputArea");

    let result; 

    result = rollerVolume (input1, input2); 
    
    outputArea.innerHTML = result; 
}

function rollerVolume (semidiameter, height) { 
    let volume = 0; 
    volume = (semidiameter ** 2) * Math.PI * height; 
    let finalVolume = Number(volume.toFixed(2));
    return finalVolume; 
    }