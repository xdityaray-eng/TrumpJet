const generateBtn = document.getElementById("generateCard");

generateBtn.addEventListener("click", () => {

    const name =
        document.getElementById("memberName").value;

    const tier =
        document.getElementById("memberTier").value;

    document.getElementById("cardName").textContent =
        name || "MEMBER NAME";

    document.getElementById("cardTier").textContent =
        tier;
});