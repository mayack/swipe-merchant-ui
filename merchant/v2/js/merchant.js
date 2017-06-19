function sidebarLeft() {
  var dh = $(window).height(),
      slhh = $('#sidebarLeft header').outerHeight(),
      slfh = $('#sidebarLeft footer').outerHeight();

  $('#sidebarLeftNav').outerHeight(dh - slhh - slfh);
}
function sidebarRight() {
  var dh = $(window).height(),
      srfh = $('#sidebarRight footer').outerHeight();

  $('#sidebarRight #sidebarRightContent, #sidebarRight #sidebarRightContent>.s-cells').outerHeight(dh - srfh);
}

$(function(){

  sidebarLeft();
  sidebarRight();

  $('select').select2({
    minimumResultsForSearch: -1
  });

  $('#sidebarRightClose').click(function() {
    $('body').removeClass('sidebarRightVisible');
  });

  $('.actionsTrigger').click(function(e) {
      e.stopPropagation();

      var trigger = $(this);
      var dropdown = $('#timelineActions');

      $(this).addClass('active');

      $(dropdown).removeClass('s-hide').position({
        my: "right-1 top+12",
        at: "right bottom",
        of: trigger,
        collision: "flip",
        using: function(obj, info){
          var item_top = (info.vertical!== "top"? "bottom" : "top");
          $(this).addClass("s-popover-" + item_top + "-right");
          $(this).removeClass("s-popover-" + (item_top === "top"? "bottom" : "top") + "-right");
          $(this).css({
            left: obj.left + 'px',
            top: obj.top + 'px'
          });
        }
      });
  });

  $('.companySwitcherActive').click(function() {
    $(this).parent().toggleClass('expanded');
    $('#sidebarLeft').toggleClass('companySwitcherExpanded');
  });

  $('.boxExpandable .boxExpandableHeader').click(function() {
    $(this).parent().toggleClass('expanded');
    $(this).next('.boxExpandableFooter').slideToggle(200);
  });

  $('#feedbackMsgTrigger').click(function() {
    $('#feedbackMsg').dialog({
      modal: true,
      width: 600,
      dialogClass: 'dialog-minimal'
    });
  });

  $('#feedbackCallTrigger').click(function() {
    $('#feedbackCall').dialog({
      modal: true,
      width: 600,
      dialogClass: 'dialog-minimal'
    });
  });

  $('#feedbackSocialsTrigger').click(function() {
    $('#feedbackSocials').dialog({
      dialogClass: 'dialog-minimal',
      modal: true,
      width: 600
    });
  });

  $('.feedbackBubblesMain').click(function() {
    
    // Specifically for Merchant UI
    if ( $(this).parent().hasClass('active')) {
      $('#feedbackMsg').dialog('close');
    }

    $(this).parent().toggleClass('active');
  });

  $('.fieldSearch input').on('input', function() {
    if (this.value.length > 0) {
      $(this).parents('.fieldSearch').addClass('loadMe');
      // $(this).parents('.fieldSearch').delay(5000).removeClass('loadMe');
    } else {
      $(this).parents('.fieldSearch').removeClass('loadMe');
    }
  }).focus(function() {
    $(this).parent().addClass('expanded');
    $(this).next('.icon-search').click(function() {
      $(this).parents('.fieldSearch').removeClass('expanded');
    });
  });

  function format(icon) {
      var originalOption = icon.element;
      return '+' + $(originalOption).data('code');
  }

  $('.fieldPhone select').each(function(){
      $(this).select2({
          dropdownCssClass: "fieldPhoneDropdown",
          dropdownParent: $(this).parents('.fieldPhone'),
          templateSelection: format,
          minimumResultsForSearch: -1
      }).on('select2:open', function () {
          $(this).parents('.fieldPhone').addClass("active");
          var fieldPhoneWidth = $('.fieldPhone').outerWidth();
          $('.fieldPhoneDropdown').parent().width(fieldPhoneWidth);
      }).on('select2:close', function () {
          $(this).parents('.fieldPhone').removeClass("active");
      });
  });


  // Show Password

  $('.show-password').show().addClass('icon-eye-open');
  $('.show-password').click(function(){
    if( $(this).hasClass('icon-eye-open') ) {
      $(this).siblings('input').attr('type','text');
      $(this).removeClass('icon-eye-open').addClass('icon-eye-closed');
    } else {
      $(this).siblings('input').attr('type','password');
      $(this).addClass('icon-eye-open').removeClass('icon-eye-closed');
    }
  });
  
  $('.page-signup button').on('click', function(){
    $('.show-password').addClass('icon-eye-open').removeClass('icon-eye-closed');
    $('.show-password').siblings('input').attr('type','password');
  });


  // Popovers

  function popoverFloat(id) {
    var popover = '#'+id,
        trigger = '#'+id+'Trigger';
    $(popover).appendTo('body');
    $(trigger).click(function(){
      var prevPopover = $('.popoverFloat.active').attr('id');
          prevPopover = '#'+prevPopover;
      if ( popover !== prevPopover ) {
        $(prevPopover).removeClass('active');
        $(prevPopover+'Trigger').removeClass('active');
      }
      $(this).toggleClass('active');
      $(popover).position({
        my: "center top+5",
        at: "center bottom",
        of: trigger
      }).toggleClass('active');
    });
  }

  popoverFloat('timelineFilter');
  popoverFloat('timelineExport');

});

$(window).resize(function(){

  sidebarLeft();
  sidebarRight();
  
});

$(document).click(function(event) { 
    if(!$(event.target).closest('.popoverActions').length &&
       !$(event.target).is('.popoverActions')) {
        if($('.popoverActions').is(':visible')) {
            $('.popoverActions').addClass('s-hide');
            $('.actionsTrigger.active').removeClass('active');
        }
    }        
});