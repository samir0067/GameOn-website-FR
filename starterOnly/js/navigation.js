// handling of the navigation bar
function handleNav() {
  let topNav = document.getElementById("my-top-nav")
  if (topNav.className === "top-nav") {
    topNav.className += " responsive"
  } else {
    topNav.className = "top-nav"
  }
}
