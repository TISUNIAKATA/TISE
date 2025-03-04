function showSurprise() {  
    let container = document.getElementById("balloons-container");

    
    if (container.innerHTML.trim() !== "") {
        container.innerHTML = "";  
        return;
    }

   
    let images = [
        "imgg/final.png", 
    ];
    images.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
    
        img.onload = function() {
            console.log('Image loaded successfully: ' + src);
        };
        img.onerror = function() {
            console.error('Failed to load image: ' + src);
        };

        img.classList.add("surprise-image");
        container.appendChild(img);
    });

    
    setTimeout(() => {
        let imgs = document.querySelectorAll(".surprise-image");
        imgs.forEach(img => {
            img.classList.add("show");
        });
        createBalloons(22); 
        createFireworks();
    }, 100);
}

function createBalloons(numBalloons) {
    for (let i = 0; i < numBalloons; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        document.body.appendChild(balloon);
        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.animationDelay = Math.random() * 2 + "s";
    }
}

