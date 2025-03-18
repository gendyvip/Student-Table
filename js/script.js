var student = document.getElementById("studentName")
var age = document.getElementById("studentAge")
var nameField = document.getElementById("nameField")
var checkNameField = document.getElementById("checkNameField")
var ageField = document.getElementById("ageField")
var checkAgeField = document.getElementById("checkAgeField")
var addStudent = document.getElementById("addStudent")
var table = document.getElementById("table")
var studentToAdd, ageToAdd, trNode, idNode, nameNode, ageNode, actionNode
var id = 0
student.addEventListener("input", function () {
    if (student.value.length <= 3) {
        checkNameField.style.display = "block"
        student.style.border = "1px red solid"
        nameField.style.display = "none"
    }
    else {
        checkNameField.style.display = "none"
        student.style.border = "1px green solid"
        nameField.style.display = "none"
        studentToAdd = student.value
    }
})

age.addEventListener("input", function () {
    if (age.value <= 18) {
        checkAgeField.style.display = "block"
        age.style.border = "1px red solid"
        ageField.style.display = "none"
    }
    else {
        checkAgeField.style.display = "none"
        age.style.border = "1px green solid"
        ageField.style.display = "none"
        ageToAdd = age.value
    }
})

addStudent.addEventListener("click", function () {
    if (student.value === "" && age.value === "") {
        nameField.style.display = "block"
        student.style.border = "1px red solid"
        ageField.style.display = "block"
        age.style.border = "1px red solid"
    }
    else if (student.value === "") {
        nameField.style.display = "block"
        student.style.border = "1px red solid"
    }
    else if (age.value === "") {
        ageField.style.display = "block"
        age.style.border = "1px red solid"
    }
    else {
        alert(`Student ${studentToAdd} has been added`)
        id++
        trNode = document.createElement("tr")
        trNode.setAttribute("id", `studentKey${id}`)
        idNode = document.createElement("td")
        idNode.setAttribute("id", "stdId")
        nameNode = document.createElement("td")
        nameNode.setAttribute("id", "stdName")
        ageNode = document.createElement("td")
        ageNode.setAttribute("id", "stdAge")
        actionNode = document.createElement("td")
        table.appendChild(trNode)
        trNode.append(idNode, nameNode, ageNode, actionNode)
        idNode.innerHTML = id
        nameNode.innerHTML = studentToAdd
        ageNode.innerHTML = ageToAdd
        actionNode.innerHTML = '<a href="#"' + `onclick=deleteStudent(${id})` + '>Delete Student</a>'
    }
})
function deleteStudent(key) {
    var del = document.getElementById(`studentKey${key}`);
    console.log(del)
    del.remove()
    alert(`Student ${studentToAdd} has been deleted`)
    id--
}