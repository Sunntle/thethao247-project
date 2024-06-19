export default function ChoseFileModule() {
  const chose = document.querySelector(".chooseFile input");
  if (chose) {
    chose.addEventListener("change", (e) => {
      const files = e.target.files;
      for (const file of files) {
        console.log(file.name);
        $(".chooseFile .txt-in").text(file.name);
      }
    });
  }
}
