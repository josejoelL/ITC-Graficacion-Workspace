let table;

function preload() {
//my table is comma separated value "csv"
//and has a header specifying the columns labels
table = loadTable('assets/mammals.csv', 'csv', 'header');
}

function setup() {
//add a row
let newRow = table.addRow();
newRow.setString('id', table.getRowCount() - 1);
newRow.setString('species', 'Canis Lupus');
newRow.setString('name', 'Wolf');

//print the results
for (let r = 0; r < table.getRowCount(); r++)
  for (let c = 0; c < table.getColumnCount(); c++)
    print(table.getString(r, c));
}
//vv