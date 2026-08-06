const reactions = {
    Ken: [
        "Ken.gif"
    ],
    "Michael-Scott": [
        "Michael-Scott.gif"
    ],
    Cat: [
        "Cat.png",
        "Cat.jpg"
    ],
    "Genuine-Memes": [
        "Genuine-Memes.png",
        "Genuine-Memes.jpg"
    ],
    "Just-A-Girl": [
        "Just-A-Girl.png",
        "Just-A-Girl.jpg"
    ],
    "Midevil-Cat": [
        "Midevil-Cat.png",
        "Midevil-Cat.jpg"
    ],
    "Weird-Drawings": [
        "Weird-Drawings.png",
        "Weird-Drawings.jpg"
    ]
};

function loadImages(folder, galleryID) {
    const gallery = document.getElementById(galleryID);
    if (!gallery) {
        console.log("Missing Gallery:", galleryID);
        return;
    }

    const folderImages = reactions[folder];
    if (!folderImages) {
        console.log("Missing folder:", folder);
        return;
    }

    folderImages.forEach(image => {
        let img = document.createElement("img");
        img.src = "images/" + folder + "/" + image;
        gallery.appendChild(img);
    });
}

loadImages("Ken", "Ken-Gallery");
loadImages("Michael-Scott", "Michael-Scott-Gallery");
loadImages("Cat", "Cat-Gallery");
loadImages("Genuine-Memes", "Genuine-Memes-Gallery");

function showCatagory(folder) {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

    gallery.innerHTML = "";

    const folderImages = reactions[folder];
    if (!folderImages) return;

    folderImages.forEach(image => {
        let img = document.createElement("img");
        img.src = "images/" + folder + "/" + image;
        gallery.appendChild(img);
    });
}
