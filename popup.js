const preferredInput = document.getElementById("preferred-sellers-input")
const undesiredInput = document.getElementById("undesired-sellers-input")

document.getElementById("save-button").addEventListener("click", () => {
    browser.storage.local.set({ "preferred": preferredInput.value })
    browser.storage.local.set({ "undesired": undesiredInput.value })
    window.close()
})

window.onload = function () {
    browser.storage.local.get(["preferred"], (result) => {
        const preferred = result.preferred
        if (preferred) {
            preferredInput.value = preferred
        }
    })
    browser.storage.local.get(["undesired"], (result) => {
        const undesired = result.undesired
        if (undesired) {
            undesiredInput.value = undesired
        }
    })
}