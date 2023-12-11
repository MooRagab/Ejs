const dataMethod = ['body', 'params', 'query']


export const validation = (schema, redirectPath = '/auth/signin') => {
    return (req, res, next) => {
        const validationErr = []
        for (const key of dataMethod) {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false })
                if (validationResult.error) {
                    for (const detail of validationResult.error.details) {
                        validationErr.push(detail.context.label)
                    }

                }
            }
        }

        if (validationErr.length) {
            console.log(validationErr);
            req.flash("validationErr", validationErr)
            req.flash('oldInputs', req.body)
            res.redirect(redirectPath)
        } else {
            next()
        }
    }
}