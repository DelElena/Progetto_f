document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('button').addEventListener('click', function () {
        MicroModal.init({
            onClose: openClass()
        });
    })
});