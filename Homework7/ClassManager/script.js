function addCourse() {
  let courseCode = document.getElementById('courseCode').value;
  let courseName = document.getElementById('courseName').value;
  let score = document.getElementById('score').value;

  if (!courseCode || !courseName || !score) {
    alert('请填写所有信息');
    return;
  }

  let table = document.getElementById('courseTable').getElementsByTagName('tbody')[0];
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  cell1.innerHTML = rowCount + 1;
  cell2.innerHTML = courseCode;
  cell3.innerHTML = courseName;
  cell4.innerHTML = score;
  cell5.innerHTML = '<button onclick="editCourse(this)">编辑</button><button onclick="deleteCourse(this)">删除</button>';

  document.getElementById('courseCode').value = '';
  document.getElementById('courseName').value = '';
  document.getElementById('score').value = '';
}

function deleteCourse(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById('courseTable').deleteRow(i);
  updateRowNumbers();
}

function updateRowNumbers() {
  let table = document.getElementById('courseTable').getElementsByTagName('tbody')[0];
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = i + 1;
  }
}

function editCourse(r) {
  let row = r.parentNode.parentNode;
  let courseCode = row.cells[1].innerHTML;
  let courseName = row.cells[2].innerHTML;
  let score = row.cells[3].innerHTML;

  document.getElementById('courseCode').value = courseCode;
  document.getElementById('courseName').value = courseName;
  document.getElementById('score').value = score;

  deleteCourse(r);
}
