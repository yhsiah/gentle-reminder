// let scrolling_block;
// let wpadminbar = document.getElementById("wpadminbar");

let textContent = "You're on PRODUCTION, be careful!"
// let blockHeight = 50;
 
// scrolling_block = document.createElement( 'div' );
// scrolling_block.innerHTML = textContent;
// scrolling_block.id = "gr-scrolling-block";
// scrolling_block.className = "grStyles fixedElement";

// document.body.classList.add('moveDown')
// document.documentElement.appendChild( scrolling_block );
// document.documentElement.insertAdjacentElement( 'afterbegin', scrolling_block );

// commented out below is a WIP attempt to get this to work with WP-admin pages.

// if (wpadminbar != null) {
//     wpadminbar.classList.add('wpadminbarMoveDown');
//     wpadminbar.style.top="50px";
//     document.getElementById('gr-scrolling-block').appendChild(
//         wpadminbar
//       );
// }

let overlay

overlay = document.createElement('div');
overlay.id = "gr-overlay";
overlay.className = "overlay";
overlay.innerHTML = textContent;

document.body.appendChild( overlay );

// document.body.classList.add( 'overlay' );

// document.documentElement.insertAdjacentElement( 'afterbegin', overlay );