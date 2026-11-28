const judul = document.getElementById("judul");

judul.innerHTML = "di ubah";
judul.style.backgroundColor = "black";
judul.style.color = "green";
judul.style.fontFamily = "times new roman";
judul.style.fontStyle = "times new roman";

const p = document.getElementsByTagName("p");

p[0].style.backgroundColor = "yellow";
p[1].style.backgroundColor = "blue";
p[2].style.backgroundColor = "pink";
p[3].style.backgroundColor = "red";

for (let i = 0; i < p.length; i++) {
    p[i].style.color = "white";
    p[i].innerHTML = "paragraf diubah ke " + i;
    p[i].style.fontStyle = "italic";
    p[i].style.fontSize = "25px";
}

const l1 = document.getElementsByClassName("l1")[0];

l1.style.backgroundColor = "grey";
l1.innerHTML = "urutan ke - 1";

const l2 = document.getElementsByClassName("l2")[0];

l2.style.backgroundColor = "lightblue";

const l3 = document.getElementsByClassName("l3")[0];

l3.style.backgroundColor = "lightblue";

const sectionA = document.querySelector("section#a");
sectionA.style.backgroundColor = "lightblue";

const sectionB = document.querySelector("section#b");
sectionB.style.backgroundColor = "lightblue";

const link = document.getElementsByTagName("a")[0];
link.style.backgroundColor = "orange";

link.innerHTML = "link instagram";
link.style.textAlign = "center";
link.style.color = "white";
