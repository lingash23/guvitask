const main_div = document.createElement("div")
main_div.classList.add("container", "mt-5", "text-center")

const row = document.createElement("div")
row.classList.add("row")

const counter = document.createElement("div")
counter.classList.add("col-md-4", "offset-md-4", "text-center", "rounded", "border", "align-middle")
counter.style.color = "yellow" 

const message = document.createElement("h2")
message.classList.add("heading")
message.innerHTML = "5"
message.style.fontSize = "8rem"
    setTimeout(() => {
        message.innerHTML = "5"
            setTimeout(() => {
                message.innerHTML = "4"
                    setTimeout(() => {
                        message.innerHTML = "3"
                            setTimeout(() => {
                                message.innerHTML = "2"
                                    setTimeout(() => {
                                        message.innerHTML = "1"
                                            setTimeout(() => {
                                                message.innerHTML = "0"
                                                    setTimeout(() => {
                                                    message.innerHTML = "Happy Independence Day to Everyone"
                                                    message.style.fontSize = "8rem"
                                                    counter.classList.add("col-md-12")
                                                    counter.classList.remove("offset-md-4")
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);    
                                }, 1000
                                );
                            }, 1000);
                        }, 1000);
                    }, 1000);

counter.appendChild(message)
row.appendChild(counter)
main_div.appendChild(row)
document.body.append(main_div)