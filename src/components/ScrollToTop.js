import React from 'react'

const ScrollToTop = () => { 

    var toTopButton = document.getElementById("to-top-button");

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
      } else {
        toTopButton.classList.add("hidden");
        }
      }
  
      const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

return (
    <div>
        <button id="to-top-button" onClick={goToTop} title="Go To Top" class="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold">
            Top
        </button>
    </div>
  )
}

export default ScrollToTop