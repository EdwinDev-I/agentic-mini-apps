

function renderSideBar() {
function hamburgerMenu () {
 let newText = `
<div class="cancel-text js-cancel-text">x</div>
<div class="new-side-bar-middle js-side-bar-middle">
  <div class="top-section">
    <p>More</p>
    <div class="icons-flex">
      <img src="icons/Announcment.icon.png" class="top-section-icon">
      <div>Announcments</div>
    </div>

    <div class="icons-flex">
      <img src="icons/reward.icon.png" class="top-section-icon">
      <div>Rewards</div>
        
    </div>
  
    <div class="icons-flex">
      <img src="icons/referre.icon.png" class="top-section-icon">
      <div>Referrals</div>
    </div>
 
    <div class="icons-flex">
      <img src="icons/help-icon.png" class="top-section-icon">
      <div>Help</div>
    </div>
   
  </div>
  <div class="middle-section">
    <p>Acconts</p>
    <div class="icons-flex">
      <img src="icons/spot-icon.png" class="middle-section-icon">
      <div>Spot trading</div>
    </div>
    
    <div class="icons-flex">
      <img src="icons/wallet.svg" class="middle-section-icon">
      <div>Wallet</div>
    </div>
   
    <div class="icons-flex">
      <img src="icons/pngtree-bank-line-icon-png-image_9118712.png" class="down-section-icon">
      <div>Transaction</div>
    </div>
   
    <div class="icons-flex">
      <img src="icons/defend.icon.png" class="middle-section-icon">
      <div>Protected deposit</div>
    </div>
   
  </div>
  <div class="down-section">
    <p>User Info</p>
    <div class="icons-flex">
      <img src="icons/news-bold.svg" class="down-section-icon">
     <div>Trending news</div>
    </div>
    
    <div class="icons-flex">
      <img src="icons/trending-up.svg" class="down-section-icon">
      <div>Stack trading</div>
    </div>
    
    <div class="icons-flex">
      <img src="icons/calendar.svg" class="down-section-icon">
      <div>Calendar</div>
    </div>
    
    <div class="icons-flex">
      <img src="icons/admin.svg" class="down-section-icon">
      <div>Contact us</div>
    </div>
  
  </div>
</div>
 `;


 let changeSideBar =  document.querySelector('.js-side-bar');

 if (changeSideBar.innerHTML === changeSideBar.innerHTML) {
  changeSideBar.classList.add('new-side-bar');
  changeSideBar.innerHTML = newText;
 } 

 let initialText = `
 <div class="side-bar-div js-side-bar">
   <div class="js-hamburger-menu">
     <img src="icons/menu-icon.svg" class="hamburger-menu">
   </div>
   
   <div class="side-bar-middle js-side-bar-middle">
     <div class="top-section">
       <p>More</p>
       <img src="icons/Announcment.icon.png" class="top-section-icon">
       <img src="icons/reward.icon.png" class="top-section-icon">
       <img src="icons/referre.icon.png" class="top-section-icon">
      <img src="icons/help-icon.png" class="top-section-icon">
     </div>
     <div class="middle-section">
       <p>Acconts</p>
       <img src="icons/spot-icon.png" class="middle-section-icon">
       <img src="icons/wallet.svg" class="middle-section-icon">
       <img src="icons/pngtree-bank-line-icon-png-image_9118712.png" class="down-section-icon">
       <img src="icons/defend.icon.png" class="middle-section-icon">
     </div>
     <div class="down-section">
       <p>User Info</p>
       <img src="icons/news-bold.svg" class="down-section-icon">
       <img src="icons/trending-up.svg" class="down-section-icon">
       <img src="icons/calendar.svg" class="down-section-icon">
       <img src="icons/admin.svg" class="down-section-icon">
     </div>
   </div>
 </div>
`;

 
document.querySelectorAll('.js-cancel-text')
.forEach((link) => {
 link.addEventListener('click', () => {
  changeSideBar.classList.remove('new-side-bar')
  changeSideBar.innerHTML = initialText;
   renderSideBar();
 });
});

}

document.querySelectorAll('.js-hamburger-menu')
.forEach((link) => {
 link.addEventListener('click', () => {
  hamburgerMenu();
 });
});
}

renderSideBar();


