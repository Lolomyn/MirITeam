const Router = require('express')
const router = new Router()
const fileController = require('../controller/fileController')

router.post('', fileController.createDir)
router.post('/upload', fileController.uploadFile)
router.get('', fileController.getFiles)

module.exports = router
