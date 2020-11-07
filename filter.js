
$(document).ready(function () {
    $('#dep').on('keyup', function () {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("dep");
        filter = input.value.toUpperCase();
        table = document.getElementById("Datos");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }});
    });
