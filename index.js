let computerCnt = parseInt(localStorage.getItem('computerCnt')) || 0;
let userCnt = parseInt(localStorage.getItem('userCnt')) || 0;

document.getElementById("c-score").textContent = `${computerCnt}`;
document.getElementById("user-score").textContent =`${userCnt}`;


function resetGame() {
    document.getElementsByClassName("header-2")[0].innerHTML = createInitialHeader2Content();
    document.getElementById('result').innerHTML = '';
    ['icon-1', 'icon-2', 'icon-3'].forEach(iconClass => {
        document.querySelectorAll(`.${iconClass}`).forEach(element => {
            element.addEventListener('click', display);
        });
    });
    document.getElementById('next').style.display = `none`;
}



function display() {
    const header2 = document.getElementsByClassName("header-2")[0];
    const val = document.getElementsByClassName("triangle")[0];
    val.innerHTML = ``;


    

    // // Remove the class from other elements to reset the animation
    // const icons = document.querySelectorAll('.icon');
    // icons.forEach(icon => {
    //     if (icon !== this) {
    //         icon.classList.remove('selected');
    //     }
    // });

    function computerPicking(userChoiceOuterHTML) {
        const icons = ['icon-1', 'icon-2', 'icon-3'];
        const random = Math.floor(Math.random() * 3);
        const randomIconHTML = document.getElementsByClassName(icons[random])[0].outerHTML;
        
        
        header2.innerHTML = userChoiceOuterHTML + randomIconHTML;

        // console.log(userChoiceOuterHTML);

      
        
        
        
        switch (icons[random]) {
            case 'icon-1':
                const icon_1 = document.getElementsByClassName('icon-1')[0];
                document.getElementsByClassName('header2').innerHTML = icon_1;
                break;
            case 'icon-2':
                const icon_2 = document.getElementsByClassName('icon-2')[0];
                document.getElementsByClassName('header2').innerHTML = icon_2;
                break;
            case 'icon-3':
                const icon_3 = document.getElementsByClassName('icon-3')[0];
                document.getElementsByClassName('header2').innerHTML = icon_3;
                break;
        }

        header2.innerHTML = `
        <h5 class ='user-pick'>YOU PICKED</h5>
        ${userChoiceOuterHTML}
        <h5 class = 'computer-pick'>PC PICKED</h5>
        ${randomIconHTML}
    `;

        return icons[random];


    }

    const randomIconHTML = computerPicking(this.outerHTML); 
    
    header2.style.marginRight = '140px'
    header2.style.marginTop = '60px'
    header2.style.display = 'flex';
    header2.style.flexDirection = 'row'
    header2.style.justifyContent = 'space-evenly';
    header2.style.alignItems = 'center';
    header2.style.flexWrap = 'wrap'; 

    //  console.log(this.className);
    //  console.log(randomIconHTML)
     winner(this.className, randomIconHTML);
    
}


function winner(userChoiceOuterHTML, randomIconHTML) {
    let winner;
    
    // console.log(userChoiceOuterHTML, randomIconHTML)
        if (userChoiceOuterHTML === 'icon-1' && randomIconHTML === 'icon-2' ||
            userChoiceOuterHTML === 'icon-2' && randomIconHTML === 'icon-3' ||
            userChoiceOuterHTML === 'icon-3' && randomIconHTML === 'icon-1') {
            winner = "User";
            document.querySelector(`.${userChoiceOuterHTML}`).classList.add('selected');
            userCnt += 1;
        } else if (userChoiceOuterHTML === 'icon-2' && randomIconHTML === 'icon-1' ||
                   userChoiceOuterHTML === 'icon-3' && randomIconHTML === 'icon-2' ||
                   userChoiceOuterHTML === 'icon-1' && randomIconHTML === 'icon-3') {
            
            winner = "Computer";
            document.querySelector(`.${randomIconHTML}`).classList.add('selected');
            computerCnt += 1;
        } else {
            winner = "Tie";

        }

        // console.log(winner)
        // console.log("Computer: ", computerCnt, " User: ", userCnt);
        
        // Display the winner and show the Play Again button
        
        
    if(winner === 'User'){

        document.getElementById('result').innerHTML = `<div class = 'winners' style = 'margin-left: 330px;'>
                                                        <h1 style='margin-bottom: 0'> YOU WIN </h1>
                                                        <h4> AGAINST PC </h4> 
                                                        <button onclick = 'resetGame()' class = 'btn'> PLAY AGAIN </button>
                                                        </div>`;
                                                        
                                                        document.getElementById('next').style.display = '';
                                                        document.getElementById('next').addEventListener('click', redirectToSuccessPage)
                                                       
                                     
                
    }
 
    else if(winner === 'Computer') {
        document.getElementById('result').innerHTML = `<div class = 'winners'  style = 'margin-left: 200px;' >
                                                        <h1 style='margin-bottom: 0'> YOU LOST </h1>
                                                        <h4> AGAINST PC </h4> 
                                                        <button onclick = 'resetGame()' class = 'btn'> PlAY AGAIN </button>
                                                        </div>`;

                                                  
    }

    else {
        document.getElementById('result').innerHTML = `<div class = 'winners' style = 'margin-left: 200px;' >
                                                        <h1 style='margin-bottom: 10px'> TIE UP </h1> 
                                                        <button onclick = 'resetGame()' class = 'btn'> REPLAY </button>
                                                        </div>`;
    }
    function redirectToSuccessPage() {
        window.location.href = 'success.html';
    }

    
    

   


    function displayScores() {
        // Update the UI with the scores
        document.getElementById('c-score').textContent = computerCnt;
        document.getElementById('user-score').textContent = userCnt;
    }

    localStorage.setItem('computerCnt', computerCnt.toString());
    localStorage.setItem('userCnt', userCnt.toString());

    // Display the scores in the UI
    displayScores();
}

function createInitialHeader2Content() {
    const header2 = document.getElementsByClassName('header-2')[0];
    header2.style.marginRight = '20px'
    header2.style.marginTop = '0px'
    return `

<div class="header-2" >
      
<div class="triangle">
        <img width="340" height="340" src="https://img.icons8.com/ios-filled/100/000000/triangle-stroked.png" alt="triangle-stroked" style = 'opacity: 0.6;'/>
    </div>

    <div class="first">

      <div style="background-color: #0074B6; " class="icon-1">

          <div class="rock">
            <img src="images/rock.png" >
        </div>
      </div>
         
       <div style="background-color: #BD00FF;" class="icon-2">

           <div class="scissor">
            <img src="images/scissor.png" >
        </div>
       </div>

    </div>
      
    <div class="second">
        <div style="background-color: #FFA943;" class="icon-3">
          <div class="paper">
               <img src="images/paper.png" >
          </div>
        </div>

    </div>
</div>
    `;
}




['icon-1', 'icon-2', 'icon-3'].forEach(iconClass => {
    document.querySelectorAll(`.${iconClass}`).forEach(element => {
        element.addEventListener('click', display);
    });
});
