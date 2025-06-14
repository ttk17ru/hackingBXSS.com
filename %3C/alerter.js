/*
alert("vuln found!! BXSS");
alert("Hacking for fun!! ( Ethical Hacking )");
*/

document.body.style.backgroundColor = "black";
document.body.style.color = "#66FF66";

let btn = document.createElement('button');
document.body.appendChild(btn);
btn.textContent = "TTK";
btn.style.width = "200px";
btn.style.position = "fixed";
btn.style.top = "80%";
btn.style.left = "50%";
btn.style.transform = "translate(-50%, -50%)";
btn.style.height = "100px";
btn.style.textAlign = "center";
btn.style.fontSize = "45px";
// btn.style.paddingBottom = "10px";
// btn.style.paddingTop = "10px";
// btn.style.paddingRight = "20px"
// btn.style.paddingLeft = "20px";
btn.style.display = "inline-block";
btn.style.color = "#66FF66";
btn.style.backgroundColor = "black";
btn.style.cursor = "pointer";
btn.style.borderRadius = "23px";
btn.style.letterSpacing = "4px";
btn.style.border = "none";
btn.style.boxShadow = "0 0 20px 20px #66FF66";

function btning() {
    alert("TTK Hacking!!");
    console.log("TTK is hacking this website!");
}

btn.onclick = btning;
