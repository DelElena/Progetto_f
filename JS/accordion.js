document.getElementsByClassName(collap).style.visibility = "hidden";
document.getElementsByClassName(spanMeno).style.visibility = "hidden";

function espandi() {
    let acc = document.getElementById(unBott);
    let acc1 = document.getElementById(duBott);
    let acc2 = document.getElementById(trBott);

    acc.addEventListener('click', function () {
        document.getElementId(collapseOne).style.visibility = "visible";
        document.getElementsByClassName(menoUno).style.visibility = "visible";
        document.getElementId(collapseTwo).style.visibility = "hidden";
        document.getElementId(collapseThree).style.visibility = "hidden";
    });

    acc1.addEventListener('click', function () {
        document.getElementId(collapseTwo).style.visibility = "visible";
        document.getElementId(collapseThree).style.visibility = "hidden";
        document.getElementId(collapseOne).style.visibility = "hidden";
    });

    acc2.addEventListener('click', function () {
        document.getElementId(collapseThree).style.visibility = "visible";
        document.getElementId(collapseTwo).style.visibility = "hidden";
        document.getElementId(collapseOne).style.visibility = "hidden";
    });
}

