module.exports = async (req, res) => {

    console.log('my function is running')
    const { token = 'none' } = req.query
    console.log(token)

    res.status(200).send('hello world by tawatchai')
}
