/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

          function myFunction1() {
            document.getElementById("myDropdown1").classList.toggle("show");
          }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn1')) {
              var dropdowns = document.getElementsByClassName("dropdown-content1");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }


          $(document).ready(function() {

            $(window).scroll(function() {
        
                var height = $('.first-container').height();
                var scrollTop = $(window).scrollTop();
        
                if (scrollTop >= height - 40) {
                    $('.nav-container').addClass('solid-nav');
                } else {
                    $('.nav-container').removeClass('solid-nav');
                }
        
            });
        });