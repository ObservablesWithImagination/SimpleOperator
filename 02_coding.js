let observable = (observer) => {
    observer.next("Hello world");
}

let operator = (observable) => {
    return (observer) => {
        return observable({
            next: (x) => {observer.next(x + '!!');} 
        })
    }
}

operator(observable)({
    next: (value) => { console.log (value); }
});