const orginalTitle = document.title;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "Come back 👋"
    } else {
        document.title = orginalTitle;
    }
});