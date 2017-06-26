////////////////// DEFAULT WIKI JS ////////////////////////

// This is the jquery part of your template.
// Try not modify any of this code too much since it makes your menu work.

$(document).ready(function() {

  $("#HQ_page").attr('id','');

  // call the functions that control the menu
  menu_functionality();
  hide_show_menu();



  //this function controls the expand and collapse buttons of the menu and changes the +/- symbols
  function menu_functionality() {

    //when clicking on a "menu_button", it will change the "+/-" accordingly and it will show/hide the corresponding submenu
    $(".menu_button").click(function(){

      // add or remove the class "open" , this class holds the "-"
      $(this).children().toggleClass("open");
      // show or hide the submenu
      $(this).next('.submenu_wrapper').fadeToggle(400);
    });

    // when the screen size is smaller than 800px, the display_menu_control button appears and will show/hide the whole menu
    $("#display_menu_control").click(function(){
      $('#menu_content').fadeToggle(400);
    });

    // call the current page highlight function
    highlight_current_page();
  }


  // call the highlight current page function to show it on the menu with a different background color
  function highlight_current_page() {

    // select a page from the menu based on the id assigned to it and the current page name and add the class "current page" to make it change background color
    $("#"+  wgPageName.substring(wgPageName.lastIndexOf("/")+1, wgPageName.length ) + "_page").addClass("current_page");

    // now that the current_page class has been added to a menu item, make the submenu fade in
    $(".current_page").parents(".submenu_wrapper").fadeIn(400);
    // change the +/- symbol of the corresponding menu button
    $(".current_page").parents(".submenu_wrapper").prev().children().toggleClass("open");

  }



  // allow button on the black menu bar to show/hide the side menu
  function hide_show_menu() {

    // in case you preview mode is selected, the menu is hidden for better visibility
    if (window.location.href.indexOf("submit") >= 0) {
      $(".igem_2017_menu_wrapper").hide();
    }

    // if the black menu bar has been loaded
      if (document.getElementById('bars_item')) {

      // when the "bars_item" has been clicked
      $("#bars_item").click(function() {
        $("#sideMenu").hide();

        // show/hide the menu wrapper
        $(".igem_2017_menu_wrapper").fadeToggle("100");
      });
      }

    // because the black menu bars loads at a different time than the rest of the page, this function is set on a time out so it can run again in case it has not been loaded yet
    else {
          setTimeout(hide_show_menu, 15);
    }
  }


});

//////////////////////////////////////////////////////

$(document).ready(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
});
