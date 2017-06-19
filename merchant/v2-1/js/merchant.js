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
function barWidth() {
  var dw = $(window).width(),
      slw = $('#sidebarLeft aside').outerWidth(),
      srw = $('#sidebarRight aside').outerWidth();
  $('.barWidth').width(dw-slw-srw);
}
function smartSearchOverlay() {
  var dh = $(window).height(),
      hh = $('#header').outerHeight();
  $('.smartSearchOverlay').height(dh-hh);
}

$(document).ready(function(){

  sidebarLeft();
  sidebarRight();
  barWidth();
  smartSearchOverlay();

  $('select').select2({
    minimumResultsForSearch: -1,
    placeholder: function(){
        $(this).data('placeholder');
    }
  });

  $('#sidebarRightClose').click(function() {
    $('body').removeClass('sidebarRightVisible');
    barWidth();
  });

  $('.companySwitcherActive').click(function() {
    $(this).parent().toggleClass('expanded');
    $('#sidebarLeft').toggleClass('companySwitcherExpanded');
  });

  $('.expandable .expandableHeader').click(function() {
    $(this).parent().toggleClass('expanded');
    $(this).next('.expandableFooter').slideToggle(200);
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

  function popoverFloat() {
    var targetId = $(this).data('popover'),
        target = document.getElementById(targetId),
        offsetX = $(this).data('popover-offset-x'),
        offsetY = $(this).data('popover-offset-y'),
        position = $(this).data('popover-position'),
        popover = $('.popoverFloat.visible');

    if (position === undefined) {
      position = 'center';
    }

    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 15;
    }

    $(target).prependTo('body');
    $(target).position({
      my: position + "+" + offsetX + " top+" + offsetY,
      at: position + " bottom",
      of: $(this),
      collision: "flip",
      using: function(obj, info){
        var item_top = (info.vertical!== "top"? "bottom" : "top");
        $(this).addClass("s-popover-" + item_top + "-" + position);
        $(this).removeClass("s-popover-" + (item_top === "top"? "bottom" : "top") + "-" + position);
        $(this).css({
          left: obj.left + 'px',
          top: obj.top + 'px'
        });
      }
    });

    if ($(popover).length && $(popover).attr('id') === targetId && $(this).hasClass('active')) {
      $(target).removeClass('visible');
      $(this).removeClass('active');
    } else if ($(popover).length && $(popover).attr('id') === targetId && $(this).hasClass('active') === false) {
      // This case exists because timeline actions' popover is not unique.
      $('[data-popover].active').removeClass('active');
      $(this).addClass('active');
    } else if ($(popover).length && $(popover).attr('id') !== targetId) {
      $(popover).removeClass('visible');
      $('[data-popover].active').removeClass('active');
      $(target).addClass('visible');
      $(this).addClass('active');
    } else {
      $(target).addClass('visible');
      $(this).addClass('active');
    }

  }
  $('[data-popover]').each(function() {
    var eventType = $(this).data('popover-event');
    if (eventType === 'click' || eventType === undefined) {
      $(this).click(popoverFloat);
    } else if (eventType === 'hover') {
      $(this).hover(popoverFloat);
    }
  });


  // Timeline Range Picker

  $('#timelineRangeCalendar').datepicker({
    range: 'period',
    numberOfMonths: 2,
    onSelect: function(dateText, inst, extensionRange) {
      $('[data-popover=timelineRange').val(extensionRange.startDateText + ' – ' + extensionRange.endDateText);
    }
  });

  $('#timelineRangeCustom').click(function() {
    $('#timelineRangeCalendar').toggleClass('s-hide');
    $('#timelineRange').position({
      my: "right+10 top-1",
      at: "right bottom",
      of: $('[data-popover=timelineRange]')
    });
    $(this).toggleClass('active');
    $(this).parents('#timelineRange').toggleClass('customActive');
  });


  // Smart Search

  var ssParent = $('.smartSearch'),
      ssIcon = $(ssParent).find('.icon-search'),
      ssInput = $(ssParent).find('input');
  function smartSearchOn() {
    $(ssParent).addClass('active');
    $(ssInput).focus();
  }
  function smartSearchOff() {
    $(ssParent).removeClass('active');
  }
  function smartSearchResultsOn() {
    $('body').addClass('smartSearchVisible');
    $(ssParent).addClass('filled');
    var resultsLoad = function(){
      $('.smartSearchContent').addClass('loaded');
    };
    setTimeout(resultsLoad, 1000);
  }
  function smartSearchResultsOff() {
    $('body').removeClass('smartSearchVisible');
    $(ssParent).removeClass('filled');
    $('.smartSearchContent').removeClass('loaded');
  }
  $(ssInput).on('focus', smartSearchOn).on('blur', function() {
    smartSearchOff();
  }).on('input', function() {
    if (this.value.length > 0) {
      smartSearchResultsOn();
    } else {
      smartSearchResultsOff();
    }
  });
  $(ssIcon).on('click', function(){
    if ($(ssParent).hasClass('filled')) {
      smartSearchOff();
      smartSearchResultsOff();
      $(ssInput).val('');
    } else {
      smartSearchOn();
    }
  });


  // Tooltips

  $(document).tooltip({
    items: "[data-tooltip]",
    hide: { duration: 300 },
    show: {
      delay: 500,
      duration: 300,
    },
    position: {
      my: "center top+10",
      at: "center bottom"
    },
    content: function () {
        return $(this).data('tooltip');
    },
  });

});

$(window).resize(function(){

  sidebarLeft();
  sidebarRight();
  barWidth();
  smartSearchOverlay();

});


// popoverFloat Disabler

function ClickOutsideCheck(e) {
  var el = e.target,
      popup = $('.popoverFloat.visible')[0];
  if (popup === undefined) {
    return true;
  }
  while (true) {
    if (el === popup || $(el).attr('data-popover') !== undefined) {
      return true;
    } else if (el === document) {
      $('.popoverFloat.visible').removeClass('visible');
      $('.active[data-popover]').removeClass('active');
      return false;
    } else {
      el = $(el).parent()[0];
    }
  }
}
function CompanyClickOutsideCheck(e) {
  var el = e.target,
      switcher = $('.companySwitcher.expanded')[0];
  if (switcher === undefined) {
    return true;
  }
  while (true) {
    if (el === switcher) {
      return true;
    } else if (el === document || $(el).hasClass('companySwitcherOverlay')) {
      $(switcher).removeClass('expanded');
      $('#sidebarLeft.companySwitcherExpanded').removeClass('companySwitcherExpanded');
      return false;
    } else {
      el = $(el).parent()[0];
    }
  }
}

$(document).bind('mousedown.popup', ClickOutsideCheck);
$(document).bind('mousedown.popup', CompanyClickOutsideCheck);