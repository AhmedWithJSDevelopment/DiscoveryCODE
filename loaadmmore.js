  let loadMoreBtn = document.querySelector('#load-more');
  let currentItemL = 3;

  loadMoreBtn.onclick = () => {
      let boxes = [...document.querySelectorAll('.span6 .accordion .accordion-item')];
      for (var i = currentItemL; i < currentItemL + 3; i++) {
          boxes[i].style.display = 'inline-block';
      }
      currentItemL += 3;

      if (currentItemL >= boxes.length) {
          loadMoreBtn.style.display = 'none';


      }
  };