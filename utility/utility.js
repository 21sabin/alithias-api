let utilityService = (() => {
    function handleSuccess(result, response) {
        response.json({
            data: result
        })
    }

    function handleError(error, response){
        response.json({
            data: error
        })
    }

    return{
        handleSuccess:handleSuccess,
        handleError:handleError
    }
})();

module.exports=utilityService;