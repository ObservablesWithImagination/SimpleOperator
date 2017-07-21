let observable = (observer) => {
    observer.next("Hello world");
}

let operator = (observable, map) => {
    return (observer) => {
        return observable({
            next: (x) => {observer.next(map(x));} 
        })
    }
}

operator(observable, (x) => x + '!!')({
    next: (value) => { console.log (value); }
});