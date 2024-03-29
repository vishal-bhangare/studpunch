var li_elements = document.querySelectorAll(".sidebar ul li");

var item_elements = document.querySelectorAll(".item");

item_elements.forEach(function (item) {
  if (item.classList[1] != "home") item.style.display = "none";
});

for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    li_elements.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");

    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function (item) {
      item.style.display = "none";
    });
    if (li_value == "home") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "faculty") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "students") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "academics") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "records") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}





const editBtns = document.querySelectorAll(".container table tr .editBtn"),
  cardBackground2 = document.querySelector(".container .card-background2");

const addBtn = document.querySelector(".container .header .addBtn");
addBtn.addEventListener("click", () => {

  cardBackground2.style.display = "block";
})


const toggleBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
window.onload = () => {
  if (window.matchMedia('(max-width:768px)').matches) {

    sidebar.style.visibility = "hidden";
    toggleBtn.style.left = "0";
    document.querySelector(".main").style.cssText = `
    width: 100%;
    left: 0;
    `;
    document.querySelector(".toggle-sidebar > i").style.transform = "rotate(0deg)";
    document.querySelector(".toggle-sidebar > i").style.translate = "0 0";

    toggleBtn.addEventListener("click", () => {
      const sidebarStatus = window.getComputedStyle(sidebar).visibility;
      if (sidebarStatus == "visible") {
        sidebar.style.visibility = "hidden";
        toggleBtn.style.left = "0";
        document.querySelector(".main").style.cssText = `
        width: 100%;
        left: 0;
        `;
        document.querySelector(".toggle-sidebar > i").style.transform = "rotate(0deg)";
        document.querySelector(".toggle-sidebar > i").style.translate = "0 0";

      }
      else {
        sidebar.style.visibility = "visible";

        document.querySelector(".toggle-sidebar > i").style.transform = "rotate(-180deg)";
        document.querySelector(".toggle-sidebar > i").style.translate = "-2px 0";
        toggleBtn.style.left = "260px";

      }

    })
  }
  else {
    toggleBtn.addEventListener("click", () => {
      const sidebarStatus = window.getComputedStyle(sidebar).visibility;
      if (sidebarStatus == "visible") {
        sidebar.style.visibility = "hidden";
        toggleBtn.style.left = "0";
        document.querySelector(".main").style.cssText = `
    width: 100%;
    left: 0;
    `;
        document.querySelector(".toggle-sidebar > i").style.transform = "rotate(0deg)";
        document.querySelector(".toggle-sidebar > i").style.translate = "0 0";

      } else {
        sidebar.style.visibility = "visible";
        document.querySelector(".main").style.cssText = `
    width: calc(100% - 260px);
    left: 260px;
    `;
        document.querySelector(".toggle-sidebar > i").style.transform = "rotate(-180deg)";
        document.querySelector(".toggle-sidebar > i").style.translate = "-2px 0";
        toggleBtn.style.left = "260px";

      }

    })
  }
}

// if (window.matchMedia('(max-width:768px)').matches) {
// sidebar.style.visibility = "hidden";
// toggleBtn.style.left = "0";
// document.querySelector(".main").style.cssText = `
// width: 100%;
// left: 0;
// `;
// document.querySelector(".toggle-sidebar > i").style.transform = "rotate(0deg)";
// document.querySelector(".toggle-sidebar > i").style.translate = "0 0";

// }
window.onresize = () => {
  if (window.matchMedia('(max-width:768px)').matches) {
    sidebar.style.visibility = "hidden";
    toggleBtn.style.left = "0";
    document.querySelector(".main").style.cssText = `
      width: 100%;
      left: 0;
      `;
    document.querySelector(".toggle-sidebar > i").style.transform = "rotate(0deg)";
    document.querySelector(".toggle-sidebar > i").style.translate = "0 0";
  }
  else {
    sidebar.style.visibility = "visible";
    document.querySelector(".main").style.cssText = `
    width: calc(100% - 260px);
    left: 260px;
    `;
    document.querySelector(".toggle-sidebar > i").style.transform = "rotate(-180deg)";
    document.querySelector(".toggle-sidebar > i").style.translate = "-2px 0";
    toggleBtn.style.left = "260px";
  }
}

$(document).on("click", ".container .card-background3 .card .cancelBtn", function () {
  document.querySelector(".container .card-background3").style.display = "none";
  document.querySelector(".container").style.overflow = "auto";
})


$(document).on("click", ".card-background4 .card .closeBtn", function () {
  document.querySelector(".container .card-background4").style.display = "none";
  document.querySelector(".container").style.overflow = "auto";
})

$(document).on("click", ".card-background2 .card .closeBtn", function () {
  document.querySelector(".container .card-background2").style.display = "none";
  document.querySelector(".container").style.overflow = "auto";
})


let optionMenu_faculty = document.querySelector(".faculty .select-menu"),
  selectBtn_faculty = optionMenu_faculty.querySelector(".faculty .select-btn"),
  options_faculty = optionMenu_faculty.querySelectorAll(".faculty .option"),
  sBtn_text_faculty = optionMenu_faculty.querySelector(".faculty .sBtn-text");

$(".faculty .select-btn").on("click", () => {
  optionMenu_faculty.classList.toggle("active2")
})

options_faculty.forEach((option) => {
  option.addEventListener("click", () => {
    options_faculty.forEach((option) => {
      option.classList.remove("selected");
    });
    let selectedOption_faculty = option.querySelector(".faculty .option-text").innerText;
    sBtn_text_faculty.innerText = selectedOption_faculty;
    option.classList.add("selected");
    optionMenu_faculty.classList.remove("active2");
  });
});
optionMenu_students = document.querySelector(".students .select-menu"),
  selectBtn_students = optionMenu_students.querySelector(".students .select-btn"),
  options_students = optionMenu_students.querySelectorAll(".students .option"),
  sBtn_text_students = optionMenu_students.querySelector(".students .sBtn-text");

$(".students .select-btn").on("click", () => {
  optionMenu_students.classList.toggle("active2")
})

options_students.forEach((option) => {
  option.addEventListener("click", () => {
    options_faculty.forEach((option) => {
      option.classList.remove("selected");
    });
    let selectedOption_students = option.querySelector(".students .option-text").innerText;
    sBtn_text_students.innerText = selectedOption_students;
    option.classList.add("selected");
    optionMenu_students.classList.remove("active2");
  });
});

$.fn.gparent = function( recursion ){
  //console.log( 'recursion: ' + recursion );
  if( recursion > 1 ) return $(this).parent().gparent( recursion - 1 );
  return $(this).parent();
};

$(document).ready(function () {
  var user = sessionStorage.getItem("username");
  $("#username").text(user);
  $(".card-background2 .addBtn").on("click", function(btn) {
``
    btn.preventDefault();
    console.log("yes");
    var name = $(".card-background2 #name");
    var dob = $(".card-background2 #dob");
    var email = $(".card-background2 #email");
    var contact = $(".card-background2 #contact");
    var address = $(".card-background2 #address");
    var department = $(".card-background2 #department");
    var designation = $(".card-background2 #designation");

    if (name.val() == "" || dob.val() == "" || email.val() == "" || contact.val() == "" || address.val() == "" || department.val() == "" || designation.val() == "") {
      $("#error-msg").html("All field are required").slideDown().delay(2000).slideUp();
    }
    else {
      $.ajax({
        url: "/php/admin.php",
        type: "POST",
        data: {
          action: "addFaculty",
          name: name.val(),
          dob: dob.val(),
          email: email.val(),
          contact: contact.val(),
          address: address.val(),
          department: department.val(),
          designation: designation.val(),
        },
        success: function (data) {
          if (data == 1) {
            name.val("");
            dob.val("");
            email.val("");
            contact.val("");
            address.val("");
            department.val("");
            designation.val("");
            $("#success-msg").html("Faculty Added").slideDown().delay(2000).slideUp();
            limit = $(".faculty .select-menu .sBtn-text").text();
            loadTable(limit,1,"faculty");
            
          }
          else if (data == 0) {
            name.val("");
            dob.val("");
            email.val("");
            contact.val("");
            address.val("");
            department.val("");
            designation.val("");
            $("#error-msg").html("Error occured !!!").slideDown().delay(2000).slideUp();
          }
        }
      })
    }
  })

  let start, end, total, nop, limit;
  let cur = 1;

  $(".next").on("click", function() {
    tableName = $(this).gparent(5)[0].classList[1];
    limit = $("."+tableName+ " .select-menu .sBtn-text").text();
    cur = nop;
    loadTable(limit, cur,tableName);
  });

  $(".right").on("click", function() {
    tableName = $(this).gparent(5)[0].classList[1];
    limit = $("."+tableName+ " .select-menu .sBtn-text").text();
    cur += 1;
    loadTable(limit, cur,tableName);
  });

  $(".previous").on("click", function() {
    tableName = $(this).gparent(5)[0].classList[1];
    limit = $("."+tableName+ " .select-menu .sBtn-text").text();
    cur = 1;
    loadTable(limit, cur,tableName);
  });
  
  $(".left").on("click", function() {
    tableName = $(this).gparent(5)[0].classList[1];
    limit = $("."+tableName+ " .select-menu .sBtn-text").text();
    cur -= 1;
    loadTable(limit, cur,tableName);
  });

  $(".data .options .option").on("click", function() {
    tableName = $(this).gparent(6)[0].classList[1];
    limit = $("."+ tableName+" .select-menu .sBtn-text").text();
    loadTable(limit, 1,tableName);
  })

  function loadTable(pageLimit, curPage,tableName) {
    $.ajax({
      url: "/php/admin.php",
      type: "POST",
      dataType: "json",
      data: { action: "loadTable", pageLimit: pageLimit, curPage: curPage, tableName : tableName},
      success: (data) => {
        console.log(data);
        if (data) {
          $.each(data, (key, value) => {
            if (tableName == "faculty"){
              table = $(".faculty #table-data");
            }
            else if(tableName == "students"){
              table = $(".students #table-data")
            }
            table.empty();
            table.append(value.table);
            start = value.start;
            end = value.end;
            total = value.total;
            nop = value.nop;
            $(".pages #info").text(start + " - " + end + " of " + total);

            if (nop == 1) {
              $(".previous").css("color", "grey").css("pointer-events", "none");
              $(".left").css("color", "grey").css("pointer-events", "none");
              $(".next").css("color", "grey").css("pointer-events", "none");
              $(".right").css("color", "grey").css("pointer-events", "none");

            }
            else if (curPage == 1 && nop > 1) {
              $(".previous").css("color", "grey").css("pointer-events", "none");
              $(".left").css("color", "grey").css("pointer-events", "none");

              $(".next").css("color", "#111").css("pointer-events", "auto");
              $(".right").css("color", "#111").css("pointer-events", "auto");
            }
            else if ((curPage > 1 && curPage < nop) && (nop > 1)) {
              $(".previous").css("color", "#111").css("pointer-events", "auto");
              $(".left").css("color", "#111").css("pointer-events", "auto");
              $(".next").css("color", "#111").css("pointer-events", "auto");
              $(".right").css("color", "#111").css("pointer-events", "auto");
            }
            else if (curPage == nop && nop > 1) {
              $(".next").css("color", "grey").css("pointer-events", "none");
              $(".right").css("color", "grey").css("pointer-events", "none");
              $(".previous").css("color", "#111").css("pointer-events", "auto");
              $(".left").css("color", "#111").css("pointer-events", "auto");
            }
          });
        }

      }
    })
  }

  $("#facultyBtn").on("click", (btn) => {
    loadTable(10, 1,"faculty");
  })
  $("#studentsBtn").on("click", (btn) => {
    loadTable(10, 1,"students");
  })

  $(document).on("click", ".faculty .container .data table tr .removeBtn", function () {

    document.querySelector(".faculty .container .card-background3").style.display = "block";
    document.querySelector(".faculty .container").style.overflow = "hidden";

    var element = this;
    var facultyId = $(this).data('id');

    $(document).on("click", ".faculty .card-background3 .removeBtn", function () {
      $.ajax({
        url: "/php/admin.php",
        type: "POST",
        data: { action: "removeFaculty", facultyId: facultyId },
        success: function (data) {
          if (data == 1) {
            document.querySelector(".faculty .container .card-background3").style.display = "none";
            $("#success-msg").html("Record removed").slideDown().delay(2000).slideUp();
            $(element).closest("tr").fadeOut();
          }
          else if (data == 0) {
            $("#error-msg").html("Error occured !!!").slideDown().delay(2000).slideUp();
          }
        }
      })
    })
  })

  $(document).on("click", ".faculty .container .data table tr .editBtn", function () {
    var element = this;
    var facultyId = $(this).data('id');

    $.ajax({
      url: "/php/admin.php",
      type: "POST",
      dataType: "JSON",
      data: { action: "facultyData", id: facultyId },
      success: function (data) {
        // console.log(data);
        if (data) {
          $.each(data, (key, value) => {
            $(".faculty .card-background4 #id").val(value.id);
            $(".faculty .card-background4 #name").val(value.name);
            $(".faculty .card-background4 #dob").val(value.dob);
            $(".faculty .card-background4 #email").val(value.email);
            $(".faculty .card-background4 #contact").val(value.contact);
            $(".faculty .card-background4 #address").val(value.address);
            $(".faculty .card-background4 #department").val(value.department);
            $(".faculty .card-background4 #designation").val(value.designation);

          })
          $(document).on("click", ".container table tr .editBtn", function () {
            document.querySelector(".container .card-background4").style.display = "block";
            document.querySelector(".container").style.overflow = "hidden";
          })
        }
        else {
          $("#error-msg").html("Error occured !!!").slideDown().delay(2000).slideUp();
        }
      }
    })
  })

  $(".card-background4 .saveBtn").on("click", (btn) => {

    btn.preventDefault();
    var id = $(".faculty .card-background4 #id");
    var name = $(".faculty .card-background4 #name");
    var dob = $(".faculty .card-background4 #dob");
    var email = $(".faculty .card-background4 #email");
    var contact = $(".faculty .card-background4 #contact");
    var address = $(".faculty .card-background4 #address");
    var department = $(".faculty .card-background4 #department");
    var designation = $(".faculty .card-background4 #designation");
    console.log(id.val());
    if (
      id.val() == "" || name.val() == "" || dob.val() == "" ||
      email.val() == "" || contact.val() == "" ||
      address.val() == "" || department.val() == "" || designation.val() == ""
    ) {
      $("#error-msg").html("All field are required").slideDown().delay(2000).slideUp();
    }
    else {
      $.ajax({
        url: "/php/admin.php",
        type: "POST",
        data: {
          action: "updateFaculty",
          id: id.val(),
          name: name.val(),
          dob: dob.val(),
          email: email.val(),
          contact: contact.val(),
          address: address.val(),
          department: department.val(),
          designation: designation.val(),
        },
        success: function (data) {
          console.log(data);
          if (data == 1) {
            $("#success-msg").html("Faculty Added").slideDown().delay(2000).slideUp();
            limit = $(".select-menu .sBtn-text").text();
            loadTable(limit,1);
            document.querySelector(".faculty .container .card-background4").style.display = "none";
          }
          else if (data == 0) {
            $("#error-msg").html("Error occured !!!").slideDown().delay(2000).slideUp();
          }
        }
      })
    }
  })
  $(document).on("click", ".faculty .data table td:nth-child(2)", function () {
    document.querySelector(".faculty .container .card-background").style.display = "block"
    var facultyId = $(this).data('id');

    $.ajax({
      url: "/php/admin.php",
      type: "POST",
      dataType: "JSON",
      data: { action: "facultyData", id: facultyId },
      success: function (data) {
        // console.log(data);
        if (data) {
          $.each(data, (key, value) => {
            $(".faculty .card-background #id").val(value.id);
            $(".faculty .card-background #name").val(value.name);
            $(".faculty .card-background #dob").val(value.dob);
            $(".faculty .card-background #email").val(value.email);
            $(".faculty .card-background #contact").val(value.contact);
            $(".faculty .card-background #address").val(value.address);
            $(".faculty .card-background #department").val(value.department);
            $(".faculty .card-background #designation").val(value.designation);

          })
        }
        else {
          $("#error-msg").html("Error occured !!!").slideDown().delay(2000).slideUp();
        }
      }
    })
  })
  $(document).on("click", ".students .data table td:nth-child(2)", function () {
    document.querySelector(".students .container .card-background").style.display = "block"
    var studentId = $(this).data('id');

    $.ajax({
      url: "/php/admin.php",
      type: "POST",
      dataType: "JSON",
      data: { action: "studentData", id: studentId },
      success: function (data) {
        if (data) {
          $.each(data, (key, value) => {
              console.log(value.division);
            $(".students .card-background #id").val(value.id);
            $(".students .card-background #name").val(value.name);
            $(".students .card-background #class").val(value.class);
            $(".students .card-background #div").val(value.division);
            $(".students .card-background #rollno").val(value.rollno);
            $(".students .card-background #contact").val(value.contact);
            $(".students .card-background #dob").val(value.dob);
            $(".students .card-background #email").val(value.email);
            $(".students .card-background #address").val(value.address);

          })
        }
        else {
          $("#error-msg").html("Error occured !!!").slideDown().delay(2000).slideUp();
        }
      }
    })
  })
  $(".card-background .card .close-card").on("click",function () {
    document.querySelector(".faculty .card-background").style.display = "none";
    document.querySelector(".students .card-background").style.display = "none"
  })

  $(".search-bar #search").on("keyup", function() {
    tableName = $(this).gparent(4)[0].classList[1];
    var search_value = $("."+tableName+" .search-bar #search").val();
    $.ajax({
      url: "/php/admin.php",
      type: "POST",
      data: { action: "searchFaculty", value: search_value, tableName : tableName},
      success: function (data) {
        console.log(data);
        $("."+tableName+" #table-data").html(data);
      }
    })
  })
  $("#logout").on("click",function(){
    window.location.href="/adminLogin.html";
    sessionStorage.clear();
  })

});
