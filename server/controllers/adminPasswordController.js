module.exports = adminPassword = (req, res) => {
    res.send(req.body.password === process.env.adminPass)
}