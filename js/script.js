const float = document.querySelectorAll(`.menu`)
for (let i = 0; i < float.length; i++) {
   float[i].addEventListener(`click`, () => {
      const wrapperFloat = document.querySelector(`.wrapper_floating_window`);
      wrapperFloat.classList.toggle(`display_n`);
      const wrapper = document.querySelector(`.wrapper`);
      wrapper.classList.toggle(`display_n`);
   })
}

