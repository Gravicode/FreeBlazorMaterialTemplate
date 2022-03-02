window.addEventListener('DOMContentLoaded', event => {
    
});

function LoadDataTable(DivId) {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById(DivId);
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
}