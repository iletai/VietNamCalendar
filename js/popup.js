document.getElementById('homeTab').addEventListener('click', function () {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        i == 0 ? tablinks[i].style.backgroundColor = "red" : tablinks[i].style.backgroundColor = "";
    }
    $(function() {
        $('#amlich-calendar').amLich({
          type: 'calendar',
          tableWidth: '400px'
        });
      });
    document.getElementById('Home').style.display = "block";

});

document.getElementById('aboutTab').addEventListener('click', function () {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "none";
        i == 3 ? tablinks[i].style.backgroundColor = "orange" : tablinks[i].style.backgroundColor = "";
    }
    document.getElementById('About').style.display = "block";
});

document.getElementById('contactTab').addEventListener('click', function () {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        i == 2 ? tablinks[i].style.backgroundColor = "blue" : tablinks[i].style.backgroundColor = "";
    }
    document.getElementById('Contact').style.display = "block";
});

document.getElementById('newTab').addEventListener('click', function () {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        i == 1 ? tablinks[i].style.backgroundColor = "green" : tablinks[i].style.backgroundColor = "";
    }
    document.getElementById('News').style.display = "block";
});