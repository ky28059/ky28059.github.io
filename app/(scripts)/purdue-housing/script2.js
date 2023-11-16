const rawUrl = await (await fetch(window.location.href, {
    method: 'POST',
    body: JSON.stringify({PageWidgetData: []})
})).text()

window.location = rawUrl.slice(1, -1).replaceAll('\\u0026', '&');
