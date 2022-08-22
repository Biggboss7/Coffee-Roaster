//Dropdown Animation
$(".btn-group").click(function (event) {
    let btnTarget = event.currentTarget.id;
    $(`#${btnTarget} + .guide__card-container`).slideToggle();
    $(`#${btnTarget} .guide__dropdown-arrow`).toggleClass("down");
});
