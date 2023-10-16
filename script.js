(() => {
  const init = () => {
    const excelInput = document.getElementById("excel-input");
    const spreadsheetViewer = document.getElementById("spreadsheet-viewer");

    function withSheetJS(event) {
      const reader = new FileReader();

      reader.onload = function () {
        // Convert the binary string to JSON using SheetJS.
        const workbook = XLSX.read(reader.result, { type: "binary" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const tableHTML = XLSX.utils.sheet_to_html(worksheet, {
          id: "table",
          tableClass: "table table-bordered",
        });

        spreadsheetViewer.innerHTML = tableHTML;
      };

      reader.readAsBinaryString(event.target.files[0]);
    }

    function withHandsonTable(event) {
      const reader = new FileReader();

      reader.onload = function () {
        // Convert the binary string to JSON using SheetJS.
        const workbook = XLSX.read(reader.result, { type: "binary" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const tableHTML = XLSX.utils.sheet_to_html(worksheet, {
          id: "table",
          class: "table table-bordered",
        });

        spreadsheetViewer.innerHTML = tableHTML;
      };

      reader.readAsBinaryString(event.target.files[0]);
    }

    excelInput.addEventListener("change", withSheetJS);
  };

  document.addEventListener("DOMContentLoaded", init);
})();
