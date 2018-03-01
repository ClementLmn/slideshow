const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export const check = () => {
    const param = getParameterByName('i');
    if(param) app.innerHTML = param;
}

export const go = (i) => {
    const separator = (window.location.href.indexOf("?")===-1)?"?":"&";
    window.location.href = window.location.href + separator + "i=" + i;
}
