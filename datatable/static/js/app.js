$(document).ready(function () {
  
  $('#countries').DataTable({
    "ajax": {
      "url": "https://restcountries.com/v3.1/all",
      "dataSrc": function ( json ) {
        return json;
      }
    }, columns: [
      { data: 'name.common' },
      { data: 'capital[0]' },
      { data: 'region' },
      { data: 'population' },
  ],
  dom: 'lfBrtip',
  buttons: [
      'excel', 'pdf', 'print'
  ]
  });



});