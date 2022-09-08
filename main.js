
    $("document").ready(function () {
        $("#sub").submit(function (event) {
          event.preventDefault();
  
          var data = $(this).serialize();
          $.ajax({
            type: "POST",
            dataType: "json",
            url: "/index.php",
            data: data,
            success: function (r) {
              console.log(r);
            }
          });
          return false;
        });
      });
  