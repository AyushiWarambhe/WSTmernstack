let data = [
    { name: "person 1", city: "nagpur" },
    { name: "person 2", city: "pune" },
    { name: "person 3", city: "mumbai" },
    { name: "person 4", city: "nashik" },
    { name: "person 5", city: "latur" },
]

let home1 = (req, res) => {
   
    res.status(200).json({ message: "hello user", context: "this is a response object send to a json response with a status code of 200", data })
}

let anotherHome = (req, res) => {
    res.status(200).send("hello user again !")
}

export { home1, anotherHome }