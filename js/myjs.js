function bar() {



    var x = document.forms["enter__task"]["text"].value;
    if (x == "") {
        document.getElementById("task-now").value = "Введите текст";}

    else {
        var y = document.forms["enter__task"]["text"].value.length;
        if (y >= 30) {
            document.getElementById("task-now").value = "Слишком много текста";
        } else {


            var Stroka = document.createElement("div");
            Stroka.className = "stroka";
            document.getElementById("container").appendChild(Stroka);

            var Search = document.getElementById("search");
            Search.style.display = "flex";
            Search.style.flexDirection = "row";
            Search.style.justifyContent = "flex-start";

            var Data = document.createElement("div");
            Data.className = "data";
            Stroka.appendChild(Data);
            var d = new Date();
            Data.innerHTML = d.toUTCString();

            var Number = document.createElement("div");
            Number.className = "number";
            Number.innerHTML = "1";
            Stroka.appendChild(Number);

            var Strelki = document.createElement("div");
            Strelki.className = "strelki";
            let DivV = document.createElement("div");
            let DivN = document.createElement("div");
            var Up = document.createElement("input");
            Up.className = "up";
            Up.type = "image";
            Up.alt = "";
            Up.src = "img/up.png";
            var Bottom = document.createElement("input");
            Bottom.className = "bottom";
            Bottom.type = "image";
            Bottom.alt = "";
            Bottom.src = "img/bottom.png";
            DivV.appendChild(Up);
            DivN.appendChild(Bottom);
            Strelki.appendChild(DivV);
            Strelki.appendChild(DivN);  //стрелку добавляет только верхнюю
            Stroka.appendChild(Strelki);


            var Task = document.createElement("div");
            Task.className = "anytask";
            Task.innerHTML = x;
            Stroka.appendChild(Task);

            var Edit = document.createElement("div");
            Edit.className = "edit";
            let EditElem = document.createElement("div");
            EditElem.className = "edit-elem";
            var EditButton = document.createElement("input");
            EditButton.className = "edit__button";
            EditButton.type = "image";
            EditButton.alt = "";
            EditButton.src = "img/red.png";
            EditElem.appendChild(EditButton);
            Edit.appendChild(EditElem);
            Stroka.appendChild(Edit);

            var Yet = document.createElement("div");
            Yet.className = "yet";
            var YetElem = document.createElement("div");
            YetElem.className = "yet-elem";
            var YetButton = document.createElement("input");
            YetButton.className = "yet__button";
            YetButton.type = "image";
            YetButton.alt = "";
            YetButton.src = "img/gal.png";
            YetElem.appendChild(YetButton);
            Yet.appendChild(YetElem);
            Stroka.appendChild(Yet);


            var Delete = document.createElement("div");
            Delete.className = "delete";
            var DelElem = document.createElement("div");
            DelElem.className = "del-elem";
            var DeleteButton = document.createElement("input");
            DeleteButton.className = "delete__button";
            DeleteButton.type = "image";
            DeleteButton.alt = "";
            DeleteButton.src = "img/kor1.png";
            DelElem.appendChild(DeleteButton);
            Delete.appendChild(DelElem);
            Stroka.appendChild(Delete);

            document.getElementById("task-now").value = "";


        }}



    YetButton.onclick = function () {

        YetElem.style.backgroundColor = "#bef4f0";
        Task.style.backgroundColor= "#bef4f0";
    }


    var ModalEditText = document.getElementById("edit-text");

    EditButton.onclick = function () {
        ModalEditText.style.display = "block";
    }
    var Cancel = document.getElementById("cancel");
    var Save = document.getElementById("save");
    Cancel.onclick = function () {
        ModalEditText.style.display = "none";
    }
    Save.onclick = function () {
        ModalEditText.style.display = "none";
    }



    var I=1;

    Up.onclick = function () { I++;
        Number.innerHTML = I;}

    Bottom.onclick = function () {
        if (I > 1) { I--;
            Number.innerHTML = I;}}

    var ModalDeleteItem = document.getElementById("delete-item");

    DeleteButton.onclick = function () {
        ModalDeleteItem.style.display = "block";

        var Yes = document.getElementById("yes");
        var No = document.getElementById("no");
        No.onclick = function () {
            ModalDeleteItem.style.display = "none";
        }

        Yes.onclick = function () {

            DeleteButton.parentNode;
            DelElem.parentNode;
            Delete.parentNode;

            Stroka.remove();

            ModalDeleteItem.style.display = "none";
        }}

    //  не работает
    var todoList = [];
    function  save () {

        for ( var z=0; z<=todoList.length; z++) {
            todoList[z] = Stroka;
            todoList.push(Stroka);
        }

        localStorage.setItem("todoList", JSON.stringify(todoList));  }
    function load () {
        if (localStorage.getItem("todo") != undefined) {
            return JSON.parse(localStorage.setItem("todo"));}
    }



}
