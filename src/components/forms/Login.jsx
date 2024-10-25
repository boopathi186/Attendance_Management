import React from 'react'

const Login = () => {
  return (
    <Row className='row-cols-lg-2 m-0'>
    <Col lg={6} className='p-0 d-lg-block d-none'>
        <img className='image-fluid vh-100 w-100' src={deck} alt='logo_img' />
    </Col>
    <Col lg={6} sm={12}>
        <div className='login row m-0 d-flex align-items-center vh-100'>
            <div className='container bg-light col-12 form-control w-75 border border-0 rounded-3'>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form className='border-white shadow-sm p-3 rounded-3 bg-white'>
                            <Col className='col-5 mb-5'>
                                <div className='row'>
                                    <img src={hotdeck} alt='logo_img' className='h-25 w-50' />
                                </div>
                            </Col>
                            {formFields.map((field, index) => (
                                <div key={index} className='mb-3 position-relative'>
                                    <label className='text-secondary mb-2 fw-semibold' htmlFor={field.name}>{field.label}:</label>
                                    <Field
                                        className=' input form-control fw-semibold bg-secondary bg-opacity-10 border border-0 shadow-sm p-3'
                                        type={field.type}
                                        id={field.name}
                                        name={field.name}
                                    />
                                    {field.name === 'password' && (
                                        <span className='eye'
                                            onClick={togglePasswordVisibility}  >
                                            {showPassword ? <i className="bi bi-eye-fill text-danger fs-5"></i> : 
                                           <i className="bi bi-eye-slash-fill text-danger fs-5"></i>}
                                        </span>
                                    )}
                                    <ErrorMessage name={field.name} component="div" style={{ color: 'red' }} />
                                </div>
                            ))}
                            {error && <div style={{ color: 'red' }}>{error}</div>}
                            <div>
                                <button className='loginbutton w-100 border rounded-3 border-none  text-white mb-3 mt-3 p-2'
                                    type='submit' disabled={isSubmitting}>
                                    Login
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </Col>
</Row>
  )
}

export default Login

