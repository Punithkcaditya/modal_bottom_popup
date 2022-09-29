$('#FooterLink').click(function() {
    $('#Popup').animate({
      top: -$("#Popup").height()
    });
  });
  $('#close').click(function() {
    $('#Popup').animate({
      top: 0
    });
  });
 