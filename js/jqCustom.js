$(document).ready(function(){
    alert('initial')
    $('li.navi a').click(function(){
        alert('test');
      if ($('.kita-tpl').length != 0) 
        {
            alert('hallo');
        }     
    });

  
});
