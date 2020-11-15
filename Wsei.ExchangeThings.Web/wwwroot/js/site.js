<div id="success-alert" class="alert alert-success" style="display: none">Item added
successfully</div>
    <form method="POST">
        <div class="form-group">
            <label asp-for="Name">Item name</label>
            <input asp-for="Name" class="form-control" />
        </div>
        <div class="form-group">
            <label asp-for="Description">Description</label>
            <input asp-for="Description" class="form-control" />
        </div>
        <div class="form-check">
            <input asp-for="IsVisible" class="form-check-input" />
            <label asp-for="IsVisible" class="form-check-label">Item visible?</label>
        </div>
        <div class="form-group">
            <input type="submit" value="Add new item" />
        </div>
</form>

@section Scripts {
    <script src="~/js/addNewItem.js"></script>
}

(function () {
    const alertElement = document.getElementById("success-alert");
    const formElement = document.forms[0];
    const addNewItem = async () => {
        // 1. read data from the form
        // const requestData = ...
        // 2. call the application server using fetch method
        // const response = await fetch(...);
        const responseJson = await response.json();
        if (responseJson.success) {
            // 3. un-hide the alertElement when the request has been successful
            // alertElement.style...
        }
    };
    window.addEventListener("load", () => {
        formElement.addEventListener("submit", event => {
            event.preventDefault();
            addNewItem().then(() => console.log("added successfully"));
        });
    });
})();
