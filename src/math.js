function del(items) {
    for (var i = 0; i < items.length; i++) {
        items.splice(i, 1);
    }
}

var names = ["rachel", '', 'meghana', "", "", "tim"]

del(names)