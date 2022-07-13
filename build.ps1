$ZipPath = "./dist.zip"

if (Test-Path $ZipPath) {
  Remove-Item $ZipPath
}

$7ZipPath = "C:/Program Files/7-Zip/7z.exe"

if (-not (Test-Path -Path $7zipPath -PathType Leaf)) {
  throw "7 zip file '$7zipPath' not found"
}

Set-Alias 7zip $7zipPath
7zip a -tzip $ZipPath "./icons", "entry.html", "main.js", "manifest.json", "popup.js", "styles.css" 
