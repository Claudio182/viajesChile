
$(document).ready(function () {
  // Enable Tooltip ---------
    const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');// Select elements with data-bs-toggle="tooltip" attribute
    tooltipTriggerList.each(function() { // Initialize tooltips on each element
      $(this).tooltip();
    });

  // Smooth Scroll ----------
  $('.smooth-scroll').on("click", function (event) {  //By clicking on an element with the Smooth-Scroll class
    event.preventDefault(); //Prevents the default waterfall of the event
    var hash = this.hash; // I assign the value of the href attribute that comes in This.hash to the varied hash
    $("html, body").animate( // Animate start
      {
        scrollTop: $(hash).offset().top, // This determines the final displacement position.
      },
      300, //Specifies the duration of animation
      function () { 
        window.location.hash = hash; //Update the URL hash to match the section to which it has moved
      }
    );
  });
});