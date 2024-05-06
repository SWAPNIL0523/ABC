$(document).ready(function () {
    $('#btnAddStudent').click(function () {

        function getStudentData () {
            let studnet = {
                firstname : $('#firstname').val(),
                lastname : $('#lastname').val(),
                gender : $("input[name='gender']:checked").val()
            };
            return studnet;
        }

        function storeDataToLocalStorage () {
            if (!localStorage.getItem("student")) {
                localStorage.setItem("stdent" , JSON.stringify(getStudentData()));
            }
            else
            {
                localStorage.removeItem("student")
                localStorage.setItem("student" , JSON.stringify(getStudentData()));
            }
        }
        storeDataToLocalStorage();
        window.location.href="display.html"
    });
});