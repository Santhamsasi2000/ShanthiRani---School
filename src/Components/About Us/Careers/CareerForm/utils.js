import Swal from "sweetalert2";

/**
 * Displays a SweetAlert pop-up.
 * @param {string} title - The title of the alert.
 * @param {string} text - The message to display.
 * @param {"success" | "error" | "warning" | "info"} icon - The type of alert.
 */
export const showAlert = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};
