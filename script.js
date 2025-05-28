document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll(".openDialog");
  const closeButtons = document.querySelectorAll(".closeDialog");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dialogId = btn.getAttribute("data-dialog");
      const dialog = document.getElementById(dialogId);
      if (dialog) dialog.showModal();
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dialog = btn.closest("dialog");
      if (dialog) dialog.close();
    });
  });
});
