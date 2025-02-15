onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);
};

document.addEventListener("DOMContentLoaded", function () {
    const guide = document.getElementById("guide");
    const letter = document.querySelector(".letter");

    function checkAndHideGuide() {
        if (!document.querySelector('.blob')) {
            guide.style.animation = "none"; 
            guide.style.opacity = "0"; 
            letter.style.opacity = "1";
        }
    }

    document.querySelectorAll('.blob').forEach(blob => {
        blob.addEventListener('click', function () {
            this.remove();
            checkAndHideGuide();
        });
    });

    guide.addEventListener("click", function () {
        if (document.getElementById("messageBox")) return;

        let messageBox = document.createElement("div");
        messageBox.id = "messageBox";
        messageBox.innerHTML = `
            <div id="messageContent">
                <p>I LOVE YOU, MAHAL KO <br><br>Click the petals to remove.</p>
                <button id="closeMessage">X</button>
            </div>
        `;
        document.body.appendChild(messageBox);

        document.getElementById("closeMessage").addEventListener("click", function () {
            messageBox.remove();
        });
    });

    // Handle Card Animation (Click Effect)
    const card = document.getElementById("card");
    let isMoved = false; // Track state

    card.addEventListener("click", function () {
        this.style.transition = "transform 0.3s ease-in-out"; // Ensure smooth transition
        const textDisplay = document.getElementById('textDisplay');
        if (!isMoved) {
            const heart = document.getElementById("heart");
            heart.style.position = "fixed";
            heart.style.bottom = "20px";
            heart.style.right = "40px";
            this.style.transform = "translateY(-10px) scale(2, 3.5)"; 
            this.style.zIndex = "999"; // Bring forward
            textDisplay.style.position = "relative"; 
            textDisplay.style.left = "-5px";
            textDisplay.style.top = "8px";
            textDisplay.style.textAlign = "justify";
            textDisplay.style.lineHeight = "1";
            textDisplay.style.fontSize = "7px";
            textDisplay.style.fontFamily = "Century, serif";

            const mess = "Mahal ko,<br><br>" + 
            "Mahal na mahal kita. Hindi ko ito binigay sa eksaktong <br>" + 
            "Valentine's para maging sorpresa.<br>" + 
            "Baka naiinis ka na, mahal ko—pasensya na.<br>" + 
            "Pero gusto kong ipaalala sa’yo na walang kahit anong <br>" +  
            "makakapagpabago sa pagmamahal ko sa’yo.<br>" + 
            "Hinding-hindi kita ipagpapalit o iiwan.<br><br>" + 
        
            "Napakasaya ko na ikaw ang naging girlfriend ko at magiging <br>" + 
            "asawa ko balang araw.<br>" + 
            "Anuman ang dumating na pagsubok, kakayanin natin <br>" + 
            "basta may tiwala tayo kay God at sa isa’t isa.<br><br><br><br>" + 
        
            "Mahal na mahal kita.<br><br>" + 
        
            "Your husband,<br>" + 
            "Ian<br>";
        
            textDisplay.innerHTML = mess;                         
        } else {
            this.style.transform = "translateY(0) scale(1)";
            setTimeout(() => {
                this.style.zIndex = "500"; // Reset after animation
            }, 300); // Delay to prevent immediate z-index change
        }

        isMoved = !isMoved; // Toggle state
    });
    // Fix Hover Animation Conflict
    $(".valentines").off("mouseenter mouseleave").hover(
        function () {
            $(this).css("animation", "none");
            $(".card").stop().animate({ top: "-90px" }, "fast");
        },
        function () {
            $(".card").stop().animate({ top: "5px" }, "fast");
            $(this).css("animation", "up 3s linear infinite");
        }
    );
});
