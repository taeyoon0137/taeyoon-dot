function includeJS(jsFilePath) {
  var js = document.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;

  document.body.appendChild(js);
}

includeJS("https://taeyoon0137.github.io/alphaplus_blog/src/components/header/header.js");