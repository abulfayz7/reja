console.log("FrontEnd JS started!");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
              <span class="item-next">${item.reja}</span>
              <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
              </div>
            </li>`
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault(); // STOP: Traditional API => GOAL is to change it to Rest API
    axios.post("/create-item", {reja: createField.value}).then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    }).catch((err) => {
        console.log("Please try again!");
    });
});

// ALL OF ABOVE CODE CAN JUST BE DONE WITH 1 METHOD => res.redirect('/');

document.addEventListener("click", function(e) {
    // delete button operation
    if (e.target.classList.contains("delete-me")) {
        if(confirm("Are you sure you want to Delete?")) { 
            // confirm() function is browser abstract func. It gives a window with OK or CANCEL buttons
            axios.post("/delete-item", {id: e.target.getAttribute("data-id")}).then((res) => {
                console.log(res.data);
                e.target.parentElement.parentElement.remove();
            }).catch((err) => {
                console.log("Please try again!");
            });
    }
}
    // edit button operation
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Edit your item", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput) {
            axios.post("/edit-item", {id: e.target.getAttribute("data-id"), new_input: userInput}).then(response => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            }).catch(err => {
                console.log("Please try again!");
            });
        //alert("You clicked Edit");
        }
    }
});

    // Delete ALL button
document.getElementById("clean-all").addEventListener("click", () => {
    axios.post("/delete-all", {delete_all: true}).then(response => {
        alert(response.data.state);
        document.location.reload();
    }).catch(err => {
        console.log("Please try again!");
    });
});

                                        // ***** Why after creating an item the EDIT button does NOT work on this item? *****