var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// triggers
var btns = [document.getElementById('location1'),
  document.getElementById('location2'),
  document.getElementById('location3'),
  document.getElementById('location4'),
  document.getElementById('location5'),
  document.getElementById('location6'),
  document.getElementById('location7'),
  document.getElementById('location8'),
  document.getElementById('location9'),
  document.getElementById('location10')];

// modals
var modals = [document.getElementById('map-modal1'),
  document.getElementById('map-modal2'),
  document.getElementById('map-modal3'),
  document.getElementById('map-modal4'),
  document.getElementById('map-modal5'),
  document.getElementById('map-modal6'),
  document.getElementById('map-modal7'),
  document.getElementById('map-modal8'),
  document.getElementById('map-modal9'),
  document.getElementById('map-modal10')];

// <span> element that closes the modal
var span = document.getElementsByClassName('close');

index.forEach(function(i) {
  // trigger click opens corresponding modal
  btns[i].onclick = function() {
    modals[i].style.display = "block";
  }

  // close button click closes corresponding modal
  span[i].onclick = function() {
    modals[i].style.display = "none";
  }

  // also click anywhere outside modal to close
  window.onclick = function(event) {
      if (modals.includes(event.target)) {
        event.target.style.display = "none";
      }
  }
})
