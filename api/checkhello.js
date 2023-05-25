module.exports = async (req, res) => {

    console.log('my function is running')
    const { token = 'none' } = req.query
    console.log(token)
    console.log('env PACKAGE_NAME is')
    console.log(process.env.PACKAGE_NAME)

    res.status(200).send('hello world by tawatchai')
}
