/**
 * Created by user on 14.06.16.
 */

function eventTable(){
    var hTable = document.getElementById('tableHead');
    hTable.onclick = function(e){
        if(e.target.tagName != 'TH') return;
        sortTable(e.target.cellIndex, e.target.getAttribute('data-type')) ;
    }
}
eventTable();

function sortTable(indexCell, type){
    var tBody = document.getElementById('bodyTable');

    var compare;
    var rowsArray = [].slice.call(tBody.rows);
    if (type == 'number') {

    compare = function(rowA, rowB){
        return rowA.cells[indexCell].innerHTML - rowB.cells[indexCell].innerHTML;

    }
    }
    else {
        compare = function(rowA, rowB){
           if (rowA.cells[indexCell].innerHTML > rowB.cells[indexCell].innerHTML)
           {return 1}
           else if (rowA.cells[indexCell].innerHTML < rowB.cells[indexCell].innerHTML)
           {return -1}

    }}
rowsArray.sort(compare);

    for (var i = 0; i < rowsArray.length; i++) {
        tBody.appendChild(rowsArray[i]);
    }


}
